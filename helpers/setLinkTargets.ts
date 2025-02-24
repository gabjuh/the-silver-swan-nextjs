export const setLinkTargets = (href: any) => {
  return new URL(href, window.location.origin).hostname === window.location.hostname ? '_self' : '_blank';
}

