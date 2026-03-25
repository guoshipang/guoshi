// 简单工具：切换主页面区块
const sections = document.querySelectorAll(".page-section");
const navLinks = document.querySelectorAll(".nav-link");
const mobileLinks = document.querySelectorAll(".nav-mobile-item");

function setActiveSection(targetId) {
  sections.forEach((sec) => {
    sec.classList.toggle("is-active", sec.id === targetId);
  });

  [...navLinks, ...mobileLinks].forEach((btn) => {
    const target = btn.getAttribute("data-target");
    btn.classList.toggle("is-active", target === targetId);
  });

  const mobileMenu = document.getElementById("nav-mobile-menu");
  if (mobileMenu && mobileMenu.classList.contains("open")) {
    mobileMenu.classList.remove("open");
  }
}

[...navLinks, ...mobileLinks].forEach((btn) => {
  btn.addEventListener("click", () => {
    const target = btn.getAttribute("data-target");
    if (target) {
      setActiveSection(target);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  });
});

// 导航滚动背景
const nav = document.getElementById("top-nav");
window.addEventListener("scroll", () => {
  if (window.scrollY > 20) {
    nav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
  }
});

// 移动端汉堡菜单
const navMenuButton = document.getElementById("nav-menu-button");
const navMobileMenu = document.getElementById("nav-mobile-menu");

if (navMenuButton && navMobileMenu) {
  navMenuButton.addEventListener("click", () => {
    navMobileMenu.classList.toggle("open");
  });
}

// 活动详情数据（文字部分，图片轮播暂用占位说明）
function toThumbPath(src) {
  if (!src || typeof src !== "string") return src;
  if (src.startsWith("./thumbs/")) return src;
  if (src.startsWith("./image/")) return src.replace("./image/", "./thumbs/image/");
  if (src.startsWith("./images/")) return src.replace("./images/", "./thumbs/images/");
  return src;
}

const activityData = {
  jingchuan: {
    companyName: "北京鲸川文化传播有限公司",
    logoText: "新则",
    logoColor: "#d91124",
    role: "活动运营负责人",
    meta: "2024.04 — 至今 · 北京",
    desc:
      "新则是法律行业具有广泛影响力的头部媒体与咨询品牌，以媒体传播、行业活动和律所战略咨询为核心业务版块，围绕行业发展、律所管理与业务创新三大核心主题，受众主要为律所主任、管理合伙人及资深律师。",
    activities: [
      {
        title: "1. 媒体活动",
        detail:
          "20+场视频号直播-聊天对谈线下版；8场视频号律师发展主题线上论坛。",
        images: [
          "./images/jingchuan/media-1.png",
          "./images/jingchuan/media-2.png",
          "./images/jingchuan/media-4.png",
          "./images/jingchuan/media-3.png",
        ],
      },
      {
        title: "2. 品牌活动",
        detail: "2场年度大型行业观察主题演讲活动。",
        images: [
          "./images/jingchuan/brand-3.png",  // 原第3张 -> 第1张
          "./images/jingchuan/brand-4.png",
          "./images/jingchuan/brand-2.png",  // 原第2张 -> 第3张
          "./images/jingchuan/brand-5.png",
          "./images/jingchuan/brand-1.png",  // 原第1张 -> 第6张
          "./images/jingchuan/brand-6.png",
          "./images/jingchuan/brand-7.png",
          "./images/jingchuan/brand-8.png",
          "./images/jingchuan/brand-9.png",
          "./images/jingchuan/brand-10.png",
          "./images/jingchuan/brand-11.png",
        ],
      },
      {
        title: "3. 社群活动",
        detail:
          "平均每月一场闭门私董会，在不同城市举办，邀请行业内外大咖讲者分享、研习律所管理发展模式。",
        images: [
          "./images/jingchuan/social-1.jpg",
          "./images/jingchuan/social-2.jpg",
          "./images/jingchuan/social-3.jpg",
          "./images/jingchuan/social-4.jpg",
          "./images/jingchuan/social-5.jpg",
          "./images/jingchuan/social-6.jpg",
          "./images/jingchuan/social-7.jpg",
          "./images/jingchuan/social-8.jpg",
        ],
      },
      {
        title: "4. 榜单活动",
        detail:
          "2场行业独家榜单发布、颁奖典礼；2场相关主题衍生论坛。",
        images: [
          "./images/jingchuan/jingchuan-1.png",
          "./images/jingchuan/jingchuan-2.png",
          "./images/jingchuan/jingchuan-3.png",
          "./images/jingchuan/jingchuan-4.png",
          "./images/jingchuan/jingchuan-5.png",
          "./images/jingchuan/jingchuan-6.png",
          "./images/jingchuan/jingchuan-7.png",
          "./images/jingchuan/ranking-8.jpg",
          "./images/jingchuan/ranking-9.jpg",
          "./images/jingchuan/ranking-10.jpg",
          "./images/jingchuan/ranking-11.jpg",
          "./images/jingchuan/ranking-12.jpg",
        ],
      },
    ],
  },
  yesgo: {
    companyName: "北辰青年（广州）科技技术有限公司",
    logoText: "YESGO行动",
    logoColor: "#ff5900",
    role: "活动运营",
    meta: "2023.10 — 2024.01 · 北京",
    desc:
      "北辰青年：一个青年文化与社交平台，致力于促进青年人在对话与实践中成长。YES GO 行动每期邀请100人，为期3个月时间，一起解锁人生新体验、链接社交新圈层、共同寻找人生的可能性和意义感。",
    activities: [
      {
        title: "1. 开营仪式",
        detail: "用游戏化的环节破冰，开启为期3个月的深度链接营期。",
        images: [
          "./images/yesgo/opening-1.jpg",
          "./images/yesgo/opening-2.jpg",
          "./images/yesgo/opening-3.jpg",
          "./images/yesgo/opening-4.jpg",
          "./images/yesgo/opening-5.jpg",
          "./images/yesgo/opening-6.jpg",
          "./images/yesgo/opening-7.jpg",
          "./images/yesgo/opening-8.jpg",
        ],
      },
      {
        title: "2. 非洲之角",
        detail:
          "大型生存模拟游戏，在生存体验与复盘拷问中察觉个人价值观底色。",
        images: [
          "./images/yesgo/africa-1.jpg",
          "./images/yesgo/africa-2.jpg",
          "./images/yesgo/africa-3.jpg",
          "./images/yesgo/africa-4.jpg",
          "./images/yesgo/africa-5.jpg",
        ],
      },
      {
        title: "3. 艺术表达",
        detail:
          "素人艺术剧场——极限48小时内，在艺术导师带领下完成从学习、排练到演出的完整过程。",
        images: [
          "./images/yesgo/art-1.jpg",
          "./images/yesgo/art-2.jpg",
          "./images/yesgo/art-3.jpg",
          "./images/yesgo/art-4.jpg",
          "./images/yesgo/art-5.jpg",
          "./images/yesgo/art-6.jpg",
          "./images/yesgo/art-7.jpg",
          "./images/yesgo/art-8.jpg",
        ],
      },
      {
        title: "4. 街头实验",
        detail: "从0到1发起街头实验，完成设计、招募到现场执行。",
        images: [
          "./images/yesgo/street-1.jpg",
          "./images/yesgo/street-2.jpg",
          "./images/yesgo/street-3.jpg",
        ],
      },
      {
        title: "5. 公众演讲片",
        detail: "用户公开演说自己的人生故事。",
        images: [
          "./images/yesgo/speech-1.jpg",
          "./images/yesgo/speech-2.jpg",
          "./images/yesgo/speech-3.jpg",
          "./images/yesgo/speech-4.jpg",
          "./images/yesgo/speech-5.jpg",
          "./images/yesgo/speech-6.jpg",
          "./images/yesgo/speech-7.jpg",
          "./images/yesgo/speech-8.jpg",
        ],
      },
      {
        title: "6. 毕业典礼",
        detail: "回顾营期收获与成长。",
        images: [
          "./images/yesgo/graduation-1.jpg",
          "./images/yesgo/graduation-2.jpg",
          "./images/yesgo/graduation-3.jpg",
          "./images/yesgo/graduation-4.jpg",
          "./images/yesgo/graduation-5.jpg",
        ],
      },
    ],
  },
  tongli: {
    companyName: "北京市同理社会工作服务中心",
    logoText: "社工",
    logoColor: "#4fa9f7",
    role: "工读学校驻校社工",
    meta: "2023.03 — 2023.06 · 北京",
    desc:
      "同理社工致力于为有需要的家庭和个人特别是为弱势群体、困境群体等提供社会服务。",
    activities: [
      {
        title: "1. 影像发声小组活动",
        detail:
          "用影像发声小组活动引导学生用镜头表达自我，在小组互动中提升自我效能感。",
        images: [
          "./images/tongli/voice-1.jpg",
          "./images/tongli/voice-2.jpg",
          "./images/tongli/school-social-work-3.png",
          "./images/tongli/school-social-work-4.png",
        ],
      },
      {
        title: "2. 师生运动会",
        detail:
          "参与策划与执行师生运动会活动，促进师生关系与校园氛围建设。",
        images: ["./images/tongli/sports-1.jpg", "./images/tongli/sports-2.jpg"],
      },
    ],
  },
  yulehezi: {
    companyName: "上海乐侠文化传媒有限公司",
    logoText: "娱乐\n盒子",
    logoColor: "#e85a4f",
    role: "执行助理",
    meta: "2021.04 — 2021.06 · 上海",
    desc:
      "娱乐盒子专注艺人经纪、MCN、直播电商、娱乐整合营销人才培训。",
    activities: [
      {
        title: "1. 抖音直播",
        detail: "对接艺人直播行程安排、妆造需求，直播期间配合现场互动。",
        images: [
          "./images/yulehezi/douyin-1.jpg",
          "./images/yulehezi/douyin-2.jpg",
          "./images/yulehezi/douyin-3.jpg",
        ],
      },
      {
        title: "2. 抖音视频拍摄与签约仪式",
        detail:
          "对接艺人商务签约协议流程，对接物料拍摄相关需求以及签约仪式执行。",
        images: [
          "./images/yulehezi/douyin-4.jpg",
          "./images/yulehezi/sign-1.jpg",
          "./images/yulehezi/sign-2.png",
        ],
      },
    ],
  },
};

const modal = document.getElementById("activity-modal");
const modalTitle = document.getElementById("activity-modal-title");
const modalBody = document.getElementById("activity-modal-body");

function initActivityCarousels() {
  const carousels = modalBody.querySelectorAll(".carousel");
  carousels.forEach((carousel) => {
    const track = carousel.querySelector(".carousel-track");
    const images = track ? track.querySelectorAll("img") : [];
    if (!track || images.length === 0) return;

    let index = 0;

    function updateActive() {
      images.forEach((img, i) => {
        img.classList.toggle("is-active", i === index);
      });
    }

    const prevBtn = carousel.querySelector(".carousel-arrow-prev");
    const nextBtn = carousel.querySelector(".carousel-arrow-next");

    if (prevBtn) {
      prevBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        index = (index - 1 + images.length) % images.length;
        updateActive();
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        index = (index + 1) % images.length;
        updateActive();
      });
    }

    images.forEach((img, i) => {
      img.addEventListener("click", () => {
        // 统一走大图弹窗逻辑（支持左右切换/滑动）
        openPhotoLightboxFromElements(images, i);
      });
    });

    updateActive();
  });
}

function openActivityModal(key) {
  const data = activityData[key];
  if (!data) return;

  modalTitle.textContent = data.companyName;

  const companySection = `
    <section class="activity-company-header">
      <div class="activity-company-logo" style="background:${data.logoColor}">
        ${data.logoText}
      </div>
      <div class="activity-company-text">
        <h3>${data.role}</h3>
        <div class="activity-company-meta">${data.meta}</div>
        <p class="activity-company-desc">${data.desc}</p>
      </div>
    </section>
  `;

  const activitiesHtml = data.activities
    .map(
      (item) => {
        const hasImages = item.images && item.images.length > 0;
        const carouselHtml = hasImages
          ? `
          <div class="carousel" data-current-index="0">
            <button class="carousel-arrow carousel-arrow-prev" type="button" aria-label="上一张">‹</button>
            <div class="carousel-track">
              ${item.images
                .map(
                  (src, index) =>
                    `<img src="${toThumbPath(src)}" data-full="${src}" alt="${data.companyName} 活动照片 ${index + 1}" class="${
                      index === 0 ? "is-active" : ""
                    }" />`
                )
                .join("")}
            </div>
            <button class="carousel-arrow carousel-arrow-next" type="button" aria-label="下一张">›</button>
          </div>
        `
          : `
          <div class="carousel">
            活动照片占位（后续替换为真实图片）
          </div>
        `;

        return `
        <article class="activity-card">
          ${carouselHtml}
          <p class="activity-item-title">${item.title}</p>
          <p class="activity-item-desc">${item.detail}</p>
        </article>
      `;
      }
    )
    .join("");

  const activityBlock = `
    <section class="activity-block">
      <div class="activity-block-title">
        <div class="activity-block-title-bar"></div>
        <h4>活动现场</h4>
      </div>
      ${activitiesHtml}
    </section>
  `;

  modalBody.innerHTML = companySection + activityBlock;
  initActivityCarousels();
  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
}

function closeActivityModal() {
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
}

document
  .querySelectorAll(".experience-card")
  .forEach((card) =>
    card.addEventListener("click", () =>
      openActivityModal(card.getAttribute("data-activity"))
    )
  );

document
  .querySelectorAll("[data-modal-close]")
  .forEach((el) => el.addEventListener("click", closeActivityModal));

// 影像作品筛选
const filterButtons = document.querySelectorAll(".filter-btn");
const photoCards = document.querySelectorAll(".photo-card");

// 缩略图：列表用 thumbs 加速；点开大图使用 data-full 原图保证清晰
photoCards.forEach((card) => {
  const img = card.querySelector("img");
  if (!img) return;
  const rel = img.getAttribute("src");
  if (!rel) return;
  img.dataset.full = rel;
  img.decoding = "async";
  img.loading = "lazy";
  img.src = toThumbPath(rel);
});

filterButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const filter = btn.getAttribute("data-filter");
    filterButtons.forEach((b) => b.classList.remove("is-active"));
    btn.classList.add("is-active");

    photoCards.forEach((card) => {
      const category = card.getAttribute("data-category");
      if (filter === "all" || filter === category) {
        card.style.display = "";
      } else {
        card.style.display = "none";
      }
    });
  });
});

// 影像大图弹窗（活动轮播与影像作品通用）
const photoLightbox = document.getElementById("photo-lightbox");
const photoLightboxPlaceholder = document.getElementById(
  "photo-lightbox-placeholder"
);
const photoLightboxImg = document.getElementById("photo-lightbox-img");
const photoLightboxImageArea = document.querySelector(
  ".photo-lightbox-image"
);

let lightboxSources = [];
let lightboxIndex = 0;

function renderPhotoLightbox() {
  if (!photoLightbox) return;

  if (!lightboxSources.length) {
    if (photoLightboxPlaceholder) photoLightboxPlaceholder.style.display = "block";
    if (photoLightboxImg) {
      photoLightboxImg.style.display = "none";
      photoLightboxImg.removeAttribute("src");
      photoLightboxImg.removeAttribute("alt");
    }
    return;
  }

  const src = lightboxSources[lightboxIndex];
  if (photoLightboxPlaceholder) photoLightboxPlaceholder.style.display = "none";
  if (photoLightboxImg) {
    photoLightboxImg.src = src;
    photoLightboxImg.alt = "";
    photoLightboxImg.style.display = "block";
  }
}

function openPhotoLightboxBySrcs(srcs, index) {
  lightboxSources = Array.isArray(srcs) ? srcs.filter(Boolean) : [];
  lightboxIndex = 0;
  if (lightboxSources.length) {
    lightboxIndex = ((index ?? 0) % lightboxSources.length + lightboxSources.length) % lightboxSources.length;
  }

  photoLightbox.classList.add("open");
  photoLightbox.setAttribute("aria-hidden", "false");
  renderPhotoLightbox();
}

function openPhotoLightboxFromElements(imgEls, index) {
  const srcs = Array.from(imgEls || [])
    .map((el) => (el && (el.dataset && el.dataset.full)) || (el && el.src))
    .filter(Boolean);
  openPhotoLightboxBySrcs(srcs, index);
}

function closePhotoLightbox() {
  if (!photoLightbox) return;
  photoLightbox.classList.remove("open");
  photoLightbox.setAttribute("aria-hidden", "true");
  lightboxSources = [];
  lightboxIndex = 0;
  renderPhotoLightbox();
}

function showPrevPhotoLightbox() {
  if (!lightboxSources.length) return;
  lightboxIndex = (lightboxIndex - 1 + lightboxSources.length) % lightboxSources.length;
  renderPhotoLightbox();
}

function showNextPhotoLightbox() {
  if (!lightboxSources.length) return;
  lightboxIndex = (lightboxIndex + 1) % lightboxSources.length;
  renderPhotoLightbox();
}

// 仅在大图弹窗打开时支持左右切换/滑动切换
if (photoLightboxImageArea) {
  photoLightboxImageArea.addEventListener("click", (e) => {
    if (!photoLightbox.classList.contains("open")) return;
    const rect = photoLightboxImageArea.getBoundingClientRect();
    const x = e.clientX - rect.left;
    if (x < rect.width / 2) showPrevPhotoLightbox();
    else showNextPhotoLightbox();
  });

  let touchStartX = 0;
  let touchStartY = 0;
  photoLightboxImageArea.addEventListener("touchstart", (e) => {
    if (!photoLightbox.classList.contains("open")) return;
    if (!e.touches || e.touches.length !== 1) return;
    touchStartX = e.touches[0].clientX;
    touchStartY = e.touches[0].clientY;
  });

  photoLightboxImageArea.addEventListener("touchend", (e) => {
    if (!photoLightbox.classList.contains("open")) return;
    const t = e.changedTouches && e.changedTouches[0];
    if (!t) return;
    const dx = t.clientX - touchStartX;
    const dy = t.clientY - touchStartY;

    // 简单阈值：横向滑动明显且纵向不大时才切换
    if (Math.abs(dx) > 50 && Math.abs(dy) < 120) {
      if (dx > 0) showPrevPhotoLightbox();
      else showNextPhotoLightbox();
    }
  });
}

document.addEventListener("keydown", (e) => {
  if (!photoLightbox || !photoLightbox.classList.contains("open")) return;
  if (e.key === "ArrowLeft") showPrevPhotoLightbox();
  if (e.key === "ArrowRight") showNextPhotoLightbox();
  if (e.key === "Escape") closePhotoLightbox();
});

photoCards.forEach((card) => {
  card.addEventListener("click", () => {
    const clickedImg = card.querySelector("img");
    const clickedSrc = clickedImg
      ? clickedImg.dataset.full || clickedImg.src
      : card.getAttribute("data-photo-src");

    const allSrcs = Array.from(photoCards)
      .map((c) => {
        const img = c.querySelector("img");
        return img ? img.dataset.full || img.src : c.getAttribute("data-photo-src");
      })
      .filter(Boolean);

    if (!clickedSrc || !allSrcs.length) {
      openPhotoLightboxBySrcs([], 0);
      return;
    }

    const index = allSrcs.indexOf(clickedSrc);
    openPhotoLightboxBySrcs(allSrcs, index >= 0 ? index : 0);
  });
});

document
  .querySelectorAll("[data-photo-close]")
  .forEach((el) => el.addEventListener("click", closePhotoLightbox));

