(() => {
  'use strict';

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // =============================
  // EDITABLE GALLERY DATA
  // Replace thumbnails, fullImage, and sourceUrl with real project assets later.
  // Supported sourceType examples: YouTube, Instagram, Google Drive, GitHub, External, Vimeo
  // =============================
  const portfolioItems = [
    // IT PORTFOLIO ITEMS
    {
      id: 'it-1',
      section: 'it',
      category: 'Networking',
      title: 'Enterprise Network Monitoring Dashboard',
      thumbnail: 'https://via.placeholder.com/800x500?text=Enterprise+Monitoring',
      fullImage: 'https://via.placeholder.com/1400x800?text=Enterprise+Monitoring+Dashboard',
      sourceUrl: 'https://github.com/yourusername/network-monitoring-project',
      sourceType: 'GitHub'
    },
    {
      id: 'it-2',
      section: 'it',
      category: 'Networking',
      title: 'Routing & Switching Lab Topology',
      thumbnail: 'https://via.placeholder.com/800x500?text=Routing+%26+Switching+Lab',
      fullImage: 'https://via.placeholder.com/1400x800?text=Routing+%26+Switching+Lab+Topology',
      sourceUrl: 'https://drive.google.com/',
      sourceType: 'Google Drive'
    },
    {
      id: 'it-3',
      section: 'it',
      category: 'IoT & AI',
      title: 'Recycle and Utilize Smart Disposal Integration',
      thumbnail: 'img/IT/Poster Sisnam Kelompok 3.webp',
      fullImage: 'img/IT/Poster Sisnam Kelompok 3.webp',
      
    },
    {
      id: 'it-4',
      section: 'it',
      category: 'IoT & AI',
      title: 'Simon Says Game',
      thumbnail: 'img/IT/Poster IoT Kelompok 3.webp',
      fullImage: 'img/IT/Poster IoT Kelompok 3.webp',
      
    },
    {
      id: 'it-5',
      section: 'it',
      category: 'Networking',
      title: 'Network Documentation & Diagram Showcase',
      thumbnail: 'https://via.placeholder.com/800x500?text=Network+Documentation',
      fullImage: 'https://via.placeholder.com/1400x800?text=Network+Documentation+Showcase',
      
    },
    {
      id: 'it-6',
      section: 'it',
      category: 'IoT & AI',
      title: 'Stock Prediction',
      thumbnail: 'img/IT/StockPred1.webp',
      fullImage: 'img/IT/StockPred2.webp',
      sourceUrl: 'https://github.com/dihannahdi/finalproject_ai',
      sourceType: 'GitHub'
    },

    // VIDEO PORTFOLIO ITEMS
    {
      id: 'video-1',
      section: 'video',
      category: ['Documentary', 'Visual Effects'],
      title: 'After Movie Gelex 2025',
      thumbnail: 'img/Video Editing/video/Afmov Gelex.webp',
      fullImage: 'https://youtu.be/k367OiTVrsI',
      sourceUrl: 'https://youtu.be/k367OiTVrsI',
      sourceType: 'YouTube'
    },
    {
      id: 'video-2',
      section: 'video',
      category: '3D Animation',
      title: 'Teaser Gelex 2025',
      thumbnail: 'img/Video Editing/3D/Teaser Gelex.webp',
      fullImage: 'https://youtu.be/dcJriMbbrfc',
      sourceUrl: 'https://youtu.be/dcJriMbbrfc',
      sourceType: 'YouTube'
    },
    {
      id: 'video-3',
      section: 'video',
      category: 'Motion Graphics',
      title: 'Crew Release Netcomp 3.0',
      thumbnail: 'img/Video Editing/motion/Crew Netcomp.webp',
      fullImage: 'https://www.instagram.com/reel/DAkzebWyGf6/embed',
      sourceUrl: 'https://www.instagram.com/reel/DAkzebWyGf6/',
      sourceType: 'Instagram'
    },
    {
      id: 'video-4',
      section: 'video',
      category: ['Documentary', 'Visual Effects'],
      title: 'After Movie Permadani 2024',
      thumbnail: 'img/Video Editing/video/Afmov Permad.webp',
      fullImage: 'https://www.youtube.com/watch?v=zQzFZHTlJn8&t=1s&pp=ygUQcGlvbmlyIHBlcm1hZGFuaQ%3D%3D',
      sourceUrl: 'https://www.youtube.com/watch?v=zQzFZHTlJn8&t=1s&pp=ygUQcGlvbmlyIHBlcm1hZGFuaQ%3D%3D',
      sourceType: 'YouTube'
    },
    {
      id: 'video-5',
      section: 'video',
      category: '2D Animation',
      title: 'Bumper Porsenigama 2025',
      thumbnail: 'img/Video Editing/2D/Bumper Psg.webp',
      fullImage: 'https://drive.google.com/file/d/1G842SVrFP0b0_4Dt2NOfA_IFj8Ab2u4e/view?usp=drive_link',
      sourceUrl: 'https://drive.google.com/file/d/1G842SVrFP0b0_4Dt2NOfA_IFj8Ab2u4e/view?usp=drive_link',
      sourceType: 'Google Drive'
    },
    {
      id: 'video-6',
      section: 'video',
      category: '3D Animation',
      title: 'Stinger Gelex 2025',
      thumbnail: 'img/Video Editing/3D/Stinger Gelex.webp',
      fullImage: 'https://drive.google.com/file/d/1RtM9raSxjTtEp2deocdQaw4LfCKTf0Hd/view?usp=drive_link',
      sourceUrl: 'https://drive.google.com/file/d/1RtM9raSxjTtEp2deocdQaw4LfCKTf0Hd/view?usp=drive_link',
      sourceType: 'Google Drive'
    },
    {
      id: 'video-7',
      section: 'video',
      category: '3D Animation',
      title: 'Remon for UGM Channel',
      thumbnail: 'img/Video Editing/3D/UGM Channel.webp',
      fullImage: 'https://drive.google.com/file/d/1MoaidAIeHpG8VTSnFmzzW9pNzZDcYAl1/view?usp=drive_link',
      sourceUrl: 'https://drive.google.com/file/d/1MoaidAIeHpG8VTSnFmzzW9pNzZDcYAl1/view?usp=drive_link',
      sourceType: 'Google Drive'
    },
    {
      id: 'video-8',
      section: 'video',
      category: 'Motion Graphics',
      title: 'Crew Release GBC 2025',
      thumbnail: 'img/Video Editing/motion/Crew GBC.webp',
      fullImage: 'https://www.instagram.com/p/DH_EoARTyBy/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
      sourceUrl: 'https://www.instagram.com/p/DH_EoARTyBy/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
      sourceType: 'Instagram'
    },
    {
      id: 'video-9',
      section: 'video',
      category: 'Documentary',
      title: 'After Movie GBC 2025',
      thumbnail: 'img/Video Editing/video/Afmov GBC.webp',
      fullImage: 'https://www.instagram.com/reel/DKvp21bgGjU/',
      sourceUrl: 'https://www.instagram.com/reel/DKvp21bgGjU/',
      sourceType: 'Instagram'
    },
    {
      id: 'video-10',
      section: 'video',
      category: 'Documentary',
      title: 'After Movie Misa Syukur 2024',
      thumbnail: 'img/Video Editing/video/Afmov Misyu.webp',
      fullImage: 'https://www.instagram.com/p/DDO5TxNskxI/',
      sourceUrl: 'https://www.instagram.com/p/DDO5TxNskxI/',
      sourceType: 'Instagram'
    },
    {
      id: 'video-11',
      section: 'video',
      category: ['Motion Graphics', 'Visual Effects'],
      title: 'MV Porsenigama 2025',
      thumbnail: 'img/Video Editing/motion/MV Psg.webp',
      fullImage: 'https://youtu.be/828oCcfrPfU',
      sourceUrl: 'https://youtu.be/828oCcfrPfU',
      sourceType: 'YouTube'
    },
    {
      id: 'video-12',
      section: 'video',
      category: ['Motion Graphics', '2D Animation'],
      title: 'Individual Development Program PLN',
      thumbnail: 'img/Video Editing/2D/PLN.webp',
      fullImage: 'https://drive.google.com/file/d/1HkQinKFqTVQORMfXh2rr6KxMlf3v0rPR/view',
      sourceUrl: 'https://drive.google.com/file/d/1HkQinKFqTVQORMfXh2rr6KxMlf3v0rPR/view',
      sourceType: 'Google Drive'
    }
  ];

  const filterConfig = {
    it: ['All', 'Networking', 'IoT & AI'],
    video: ['All', 'Documentary', 'Motion Graphics', 'Visual Effects', '2D Animation', '3D Animation']
  };

  const state = {
    filters: {
      it: 'All',
      video: 'All'
    },
    modalOpen: false,
    lastFocusedElement: null
  };

  // DOM references
  const body = document.body;
  const navMenu = document.getElementById('navMenu');
  const hamburger = document.getElementById('hamburger');
  const themeToggle = document.getElementById('themeToggle');
  const scrollProgress = document.getElementById('scrollProgress');
  const backToTop = document.getElementById('backToTop');
  const navLinks = [...document.querySelectorAll('.nav-link')];
  const sections = [...document.querySelectorAll('main section[id]')];

  const accordions = [
    {
      item: document.getElementById('accordion-it'),
      trigger: document.getElementById('it-trigger'),
      panel: document.getElementById('it-panel')
    },
    {
      item: document.getElementById('accordion-video'),
      trigger: document.getElementById('video-trigger'),
      panel: document.getElementById('video-panel')
    }
  ];

  const modal = document.getElementById('galleryModal');
  const modalDialog = modal.querySelector('.modal-dialog');
  const modalClose = document.getElementById('modalClose');
  const modalImage = document.getElementById('modalImage');
  const modalTitle = document.getElementById('modalTitle');
  const modalDescription = document.getElementById('modalDescription');
  const modalCategory = document.getElementById('modalCategory');
  const modalSourceType = document.getElementById('modalSourceType');
  const modalSourceLink = document.getElementById('modalSourceLink');
  const modalSectionPill = document.getElementById('modalSectionPill');
  const modalImageWrap = modal.querySelector('.modal-image-wrap');

  const removeExistingEmbed = () => {
    const existing = modalImageWrap.querySelector('.modal-media-embed');
    if (existing) existing.remove();
  };

  const getYouTubeEmbedUrl = (url) => {
    const match = url.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|shorts\/))([a-zA-Z0-9_-]{6,})/i);
    if (!match) return null;
    return `https://www.youtube.com/embed/${match[1]}?autoplay=1&rel=0`;
  };

  const getInstagramEmbedUrl = (url) => {
    if (url.includes('/embed')) return url;
    const match = url.match(/instagram\.com\/(reel|p|tv)\/([^/?#]+)/i);
    if (!match) return null;
    return `https://www.instagram.com/${match[1]}/${match[2]}/embed`;
  };

  const getDriveEmbedUrl = (url) => {
    const match = url.match(/drive\.google\.com\/file\/d\/([^/]+)/i);
    if (!match) return null;
    return `https://drive.google.com/file/d/${match[1]}/preview`;
  };

  const getVimeoEmbedUrl = (url) => {
    const match = url.match(/vimeo\.com\/(\d+)/i);
    if (!match) return null;
    return `https://player.vimeo.com/video/${match[1]}?autoplay=1`;
  };

  const renderModalPreview = (item) => {
    removeExistingEmbed();
    modalImage.style.display = 'block';

    const previewSource = item.sourceUrl || item.fullImage || '';
    const sourceType = (item.sourceType || '').toLowerCase();
    let embedUrl = null;

    if (sourceType.includes('youtube')) {
      embedUrl = getYouTubeEmbedUrl(previewSource) || getYouTubeEmbedUrl(item.fullImage || '');
    } else if (sourceType.includes('instagram')) {
      embedUrl = getInstagramEmbedUrl(previewSource) || getInstagramEmbedUrl(item.fullImage || '');
    } else if (sourceType.includes('google drive')) {
      embedUrl = getDriveEmbedUrl(previewSource) || getDriveEmbedUrl(item.fullImage || '');
    } else if (sourceType.includes('vimeo')) {
      embedUrl = getVimeoEmbedUrl(previewSource) || getVimeoEmbedUrl(item.fullImage || '');
    }

    if (embedUrl) {
      const iframe = document.createElement('iframe');
      iframe.className = 'modal-media-embed';
      iframe.src = embedUrl;
      iframe.title = `${item.title} preview`;
      iframe.loading = 'lazy';
      iframe.allow = 'autoplay; encrypted-media; picture-in-picture; clipboard-write';
      iframe.allowFullscreen = true;
      iframe.referrerPolicy = 'strict-origin-when-cross-origin';
      modalImageWrap.appendChild(iframe);
      modalImage.style.display = 'none';
      return;
    }

    modalImage.src = item.fullImage;
    modalImage.alt = item.title + ' preview';
  };

  // =============================
  // Helpers
  // =============================
  const setAccordionHeight = (panel) => {
    if (!panel) return;
    panel.style.maxHeight = panel.scrollHeight + 'px';
  };

  const closeAccordion = ({ item, trigger, panel }) => {
    item.classList.remove('open');
    trigger.setAttribute('aria-expanded', 'false');
    panel.style.maxHeight = '0px';
  };

  const openAccordion = ({ item, trigger, panel }) => {
    item.classList.add('open');
    trigger.setAttribute('aria-expanded', 'true');
    setAccordionHeight(panel);
  };

  const toggleAccordion = (targetIndex) => {
    accordions.forEach((accordion, index) => {
      if (index === targetIndex) {
        const isOpen = accordion.item.classList.contains('open');
        if (isOpen) {
          closeAccordion(accordion);
        } else {
          openAccordion(accordion);
        }
      }
    });
  };

  // =============================
  // Theme toggle with persistence
  // =============================
  const syncThemeToggleState = () => {
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    themeToggle.setAttribute('aria-pressed', String(isDark));
    themeToggle.title = isDark ? 'Switch to light mode' : 'Switch to dark mode';
  };

  const savedTheme = localStorage.getItem('vania-theme');
  if (savedTheme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
  }
  syncThemeToggleState();

  themeToggle.addEventListener('click', () => {
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    if (isDark) {
      document.documentElement.removeAttribute('data-theme');
      localStorage.setItem('vania-theme', 'light');
    } else {
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('vania-theme', 'dark');
    }
    syncThemeToggleState();
  });

  // =============================
  // Mobile nav
  // =============================
  hamburger.addEventListener('click', () => {
    const isOpen = navMenu.classList.toggle('open');
    hamburger.setAttribute('aria-expanded', String(isOpen));
    hamburger.innerHTML = isOpen
      ? '<i class="fa-solid fa-xmark"></i>'
      : '<i class="fa-solid fa-bars"></i>';
  });

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
      hamburger.innerHTML = '<i class="fa-solid fa-bars"></i>';
    });
  });

  // =============================
  // Accordion behavior
  // =============================
  accordions.forEach((accordion, index) => {
    accordion.trigger.addEventListener('click', () => toggleAccordion(index));
    accordion.trigger.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        toggleAccordion(index);
      }
    });
  });

  // Initial state: keep both accordions closed
  closeAccordion(accordions[0]);
  closeAccordion(accordions[1]);

  window.addEventListener('resize', () => {
    accordions.forEach(acc => {
      if (acc.item.classList.contains('open')) setAccordionHeight(acc.panel);
    });
  });

  // =============================
  // Gallery rendering system
  // =============================
  const createFilterButtons = (sectionKey, containerId) => {
    const container = document.getElementById(containerId);
    container.innerHTML = '';

    filterConfig[sectionKey].forEach((filter, index) => {
      const btn = document.createElement('button');
      btn.className = 'filter-btn' + (index === 0 ? ' active' : '');
      btn.type = 'button';
      btn.setAttribute('role', 'tab');
      btn.setAttribute('aria-selected', index === 0 ? 'true' : 'false');
      btn.textContent = filter;
      btn.addEventListener('click', () => {
        state.filters[sectionKey] = filter;
        [...container.querySelectorAll('.filter-btn')].forEach(b => {
          b.classList.remove('active');
          b.setAttribute('aria-selected', 'false');
        });
        btn.classList.add('active');
        btn.setAttribute('aria-selected', 'true');
        renderGallery(sectionKey);
      });
      container.appendChild(btn);
    });
  };

  const getFilteredItems = (sectionKey) => {
    const selected = state.filters[sectionKey];
    return portfolioItems.filter(item => {
      if (item.section !== sectionKey) return false;
      if (selected === 'All') return true;
      if (Array.isArray(item.category)) return item.category.includes(selected);
      return item.category === selected;
    });
  };

  const renderGallery = (sectionKey) => {
    const target = document.getElementById(sectionKey === 'it' ? 'itGallery' : 'videoGallery');
    const items = getFilteredItems(sectionKey);

    target.innerHTML = items.map(item => `
      <button class="project-card" type="button" data-project-id="${item.id}" aria-label="Open ${item.title} project details">
        <div class="project-thumb-wrap">
          <img class="project-thumb" src="${item.thumbnail}" alt="${item.title} thumbnail" loading="lazy" />
          <div class="project-overlay">
            <span style="font-weight:700;">View Project</span>
            <i class="fa-solid fa-arrow-up-right-from-square"></i>
          </div>
        </div>
        <div class="project-body">
          <span class="project-badge">${Array.isArray(item.category) ? item.category.join(' • ') : item.category}</span>
          <h5 class="project-title">${item.title}</h5>
        </div>
      </button>
    `).join('');

    target.querySelectorAll('.project-card').forEach(card => {
      card.addEventListener('click', () => {
        const id = card.getAttribute('data-project-id');
        const item = portfolioItems.find(p => p.id === id);
        if (item) openModal(item, card);
      });
    });

    // Recalculate accordion height after dynamic content changes
    accordions.forEach(acc => {
      if (acc.item.classList.contains('open')) setAccordionHeight(acc.panel);
    });
  };

  createFilterButtons('it', 'itFilters');
  createFilterButtons('video', 'videoFilters');
  renderGallery('it');
  renderGallery('video');

  // =============================
  // Modal system
  // =============================
  const focusableSelector = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';

  const openModal = (item, triggerEl) => {
    state.lastFocusedElement = triggerEl || document.activeElement;
    state.modalOpen = true;

    renderModalPreview(item);
    modalTitle.textContent = item.title;
    modalCategory.textContent = Array.isArray(item.category) ? item.category.join(' • ') : item.category;
    modalSourceType.innerHTML = `<i class="fa-solid fa-link"></i> ${item.sourceType}`;
    modalSourceLink.href = item.sourceUrl;
    modalSectionPill.innerHTML = item.section === 'it'
      ? '<i class="fa-solid fa-network-wired"></i> IT Portfolio'
      : '<i class="fa-solid fa-clapperboard"></i> Video Editing Portfolio';

    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    body.style.overflow = 'hidden';

    setTimeout(() => {
      modalDialog.focus();
    }, 20);
  };

  const closeModal = () => {
    state.modalOpen = false;
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
    body.style.overflow = '';
    removeExistingEmbed();
    modalImage.style.display = 'block';
    modalImage.src = '';
    modalImage.alt = '';
    if (state.lastFocusedElement) state.lastFocusedElement.focus();
  };

  modalClose.addEventListener('click', closeModal);
  modal.addEventListener('click', (e) => {
    if (e.target.hasAttribute('data-close-modal')) closeModal();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && state.modalOpen) closeModal();

    if (e.key === 'Tab' && state.modalOpen) {
      const focusable = [...modalDialog.querySelectorAll(focusableSelector)].filter(el => !el.disabled);
      if (!focusable.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }
  });

  // =============================
  // Scroll progress + active nav + back to top
  // =============================
  const updateScrollUI = () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    scrollProgress.style.width = progress + '%';

    if (scrollTop > 420) backToTop.classList.add('show');
    else backToTop.classList.remove('show');

    let currentId = 'home';
    sections.forEach(section => {
      const offset = section.offsetTop - 140;
      if (scrollTop >= offset) currentId = section.id;
    });

    navLinks.forEach(link => {
      const isActive = link.getAttribute('href') === `#${currentId}`;
      link.classList.toggle('active', isActive);
    });
  };

  window.addEventListener('scroll', updateScrollUI, { passive: true });
  updateScrollUI();

  backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: prefersReducedMotion ? 'auto' : 'smooth' });
  });

  // =============================
  // Reveal on scroll
  // =============================
  const revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && !prefersReducedMotion) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    revealEls.forEach(el => observer.observe(el));
  } else {
    revealEls.forEach(el => el.classList.add('visible'));
  }

  // =============================
  // Lightweight hero parallax
  // =============================
  if (!prefersReducedMotion) {
    const parallaxCard = document.querySelector('[data-parallax]');
    if (parallaxCard) {
      window.addEventListener('mousemove', (e) => {
        const x = (e.clientX / window.innerWidth - 0.5) * 10;
        const y = (e.clientY / window.innerHeight - 0.5) * 10;
        parallaxCard.style.transform = `translate3d(${x * 0.6}px, ${y * 0.6}px, 0)`;
      }, { passive: true });
    }
  }
})();
