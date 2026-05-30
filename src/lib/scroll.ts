function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function isCoarsePointer() {
  return window.matchMedia("(hover: none) and (pointer: coarse)").matches;
}

/** Native momentum on mobile; smooth scroll only on desktop pointer devices. */
export function shouldUseSmoothScroll() {
  return !prefersReducedMotion() && !isCoarsePointer();
}

export function scrollWindowTo(top: number) {
  window.scrollTo({
    top,
    behavior: shouldUseSmoothScroll() ? "smooth" : "auto",
  });
}

export function scrollElementIntoView(
  element: HTMLElement,
  options?: Omit<ScrollIntoViewOptions, "behavior">,
) {
  element.scrollIntoView({
    ...options,
    behavior: shouldUseSmoothScroll() ? "smooth" : "auto",
  });
}
