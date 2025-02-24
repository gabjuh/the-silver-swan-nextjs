type Page = 'home' | 'artists' | 'concerts';

const getCurrentPage = (): Page => {
  const pathname = window.location.pathname;
  const parts = pathname.split('/').filter(part => part !== '');
  const page = parts[0] || 'home';

  // Ensure the page is one of the valid options
  if (page === 'home' || page === 'artists' || page === 'concerts') {
    return page;
  }

  // Default to "home" if the page is unknown
  return 'home';
};