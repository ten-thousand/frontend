declare global {
  interface Window {
    dataLayer: any[];
  }
}

const pageView = (url: string) => {
  interface PageEventProps {
    event: string;
    page: string;
  }

  const pageEvent: PageEventProps = {
    event: 'pageview',
    page: url,
  };
  window && window.dataLayer && window.dataLayer.push(pageEvent);
  return pageEvent;
};

export default {
  id: 'GTM-K333VRK',
  pageView,
};
