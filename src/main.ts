import Alpine from 'alpinejs';
import { icons } from './icons';


declare global {
  interface Window {
    Alpine: typeof Alpine;
    iconComponent: (
      iconName?: string,
      tailwindClasses?: string
    ) => {
      iconName: string;
      tailwindClasses: string;
      readonly icon: string;
    };
  }
}

if (typeof window !== 'undefined') {
  window.Alpine = Alpine;

  window.iconComponent = (
    iconName = 'logo',
    tailwindClasses = ''
  ) => ({
    iconName,
    tailwindClasses,


    get icon() {
      const iconFn = icons[this.iconName];
      if (!iconFn) return '';
      return iconFn(this.tailwindClasses);
    }
  });

  Alpine.start();
}


// mobile nav

const trigger = document.querySelector(".menu_trigger") as HTMLElement | null;
const mobileMenu = document.querySelector(".mobile_menu") as HTMLElement | null;

function closeMenu(): void {
  mobileMenu?.classList.remove("open_menu");
}

trigger?.addEventListener("click", (e: MouseEvent) => {
  e.stopPropagation();
  mobileMenu?.classList.toggle("open_menu");
});

window.addEventListener("click", (e: MouseEvent) => {
  const target = e.target as Node;

  if (
    mobileMenu?.classList.contains("open_menu") &&
    !mobileMenu.contains(target) &&
    !trigger?.contains(target)
  ) {
    closeMenu();
  }
});

// Close on menu link click
if (mobileMenu) {
  const links = mobileMenu.querySelectorAll("a");
  links.forEach((link) => {
    link.addEventListener("click", closeMenu);
  });
}














// ! sliders

new Swiper(".swiper-home-top", {
  loop: true,
  effect: "fade",
  fadeEffect: {
    crossFade: true,
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  speed: 800,
});


new Swiper(".swiper-home-middle", {
  loop: true,
  effect: "fade",
  fadeEffect: {
    crossFade: true,
  },
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  speed: 800,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
});

new Swiper(".swiper-home-reviews", {
  loop: true,
  spaceBetween: 30,
  freeMode: true,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  speed: 800,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    1024: {
      slidesPerView: 2,
    },
  },
});


new Swiper(".swiper-about-top", {
  loop: true,
  effect: "fade",
  fadeEffect: {
    crossFade: true,
  },
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  speed: 800,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
});


new Swiper(".swiper-services-top", {
  loop: true,
  effect: "fade",
  fadeEffect: {
    crossFade: true,
  },
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  speed: 800,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
});



// ! Popups
const appointmentTriggerBtn = document.querySelector<HTMLButtonElement>(
  ".appointment-trigger-btn"
);
const appointmentPopup = document.querySelector<HTMLDivElement>(
  ".appointment-popup"
);

if (appointmentTriggerBtn && appointmentPopup) {
  appointmentTriggerBtn.addEventListener("click", () => {
    appointmentPopup.classList.add("appointment_popup_show");
  });

  document.addEventListener("click", (e: MouseEvent) => {
    const target = e.target as Node; // Ensure type safety for contains()
    const appointmentPopupForm = document.getElementById(
      "appointment_popup_form"
    );

    if (
      appointmentPopupForm &&
      !appointmentPopupForm.contains(target) &&
      !appointmentTriggerBtn.contains(target)
    ) {
      appointmentPopup.classList.remove("appointment_popup_show");
    }
  });
}
