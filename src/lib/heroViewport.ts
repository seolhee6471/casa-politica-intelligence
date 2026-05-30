/** Matches mobile header `h-16` (4rem). */
const MOBILE_HEADER_PX = 64;

/** Extra space below centered hero content on mobile (2.5rem). */
const MOBILE_HERO_PEEK_PX = 40;

const CONTENT_VAR = "--hero-mobile-content-min";
const SECTION_VAR = "--hero-mobile-section-min";

function isDesktopLayout() {
  return window.matchMedia("(min-width: 1024px)").matches;
}

/** Lock hero min-heights in px so iOS URL bar hide does not resize the section. */
export function lockMobileHeroViewport() {
  const root = document.documentElement;

  if (isDesktopLayout()) {
    root.style.removeProperty(CONTENT_VAR);
    root.style.removeProperty(SECTION_VAR);
    return;
  }

  const contentHeight = window.innerHeight - MOBILE_HEADER_PX;
  const sectionHeight = contentHeight + MOBILE_HERO_PEEK_PX;

  root.style.setProperty(CONTENT_VAR, `${contentHeight}px`);
  root.style.setProperty(SECTION_VAR, `${sectionHeight}px`);
}

export function clearMobileHeroViewport() {
  const root = document.documentElement;
  root.style.removeProperty(CONTENT_VAR);
  root.style.removeProperty(SECTION_VAR);
}
