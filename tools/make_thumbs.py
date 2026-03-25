import os
from pathlib import Path

from PIL import Image


ROOT = Path(__file__).resolve().parents[1]
SRC_DIRS = [ROOT / "image", ROOT / "images"]
OUT_ROOT = ROOT / "thumbs"

# 手机端缩略图建议宽度：600-900px。这里取 800px。
MAX_WIDTH = 800

# JPEG 质量：75-85 通常肉眼很清晰，体积明显下降。
JPEG_QUALITY = 82


def is_image_file(p: Path) -> bool:
    return p.suffix.lower() in {".jpg", ".jpeg", ".png"}


def ensure_parent(p: Path) -> None:
    p.parent.mkdir(parents=True, exist_ok=True)


def make_thumb(src: Path, dst: Path) -> None:
    ensure_parent(dst)

    with Image.open(src) as im:
        im.load()

        w, h = im.size
        if w <= MAX_WIDTH:
            # 不放大；直接复制为“缩略图”，避免重复压缩损失
            if dst.exists() and dst.stat().st_mtime >= src.stat().st_mtime:
                return
            dst.write_bytes(src.read_bytes())
            return

        new_h = int(h * (MAX_WIDTH / w))
        thumb = im.resize((MAX_WIDTH, new_h), resample=Image.Resampling.LANCZOS)

        if dst.suffix.lower() in {".jpg", ".jpeg"}:
            thumb.save(
                dst,
                format="JPEG",
                quality=JPEG_QUALITY,
                optimize=True,
                progressive=True,
            )
        elif dst.suffix.lower() == ".png":
            # PNG 如果很大，通常是内容型/带透明。这里保持 PNG，但压缩等级更高。
            thumb.save(dst, format="PNG", optimize=True, compress_level=9)
        else:
            thumb.save(dst)


def main() -> None:
    if not any(d.exists() for d in SRC_DIRS):
        raise SystemExit("No image/ or images/ directory found.")

    count = 0
    for base in SRC_DIRS:
        if not base.exists():
            continue

        for src in base.rglob("*"):
            if not src.is_file() or not is_image_file(src):
                continue

            rel = src.relative_to(ROOT)
            dst = OUT_ROOT / rel
            make_thumb(src, dst)
            count += 1

    print(f"Generated thumbs for {count} images into: {OUT_ROOT}")


if __name__ == "__main__":
    # 兼容 Windows 上的长路径
    os.environ.setdefault("PILLOW_BLOCK_SIZE", "1048576")
    main()

