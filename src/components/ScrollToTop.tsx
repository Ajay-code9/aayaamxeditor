import { useEffect, useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname } = useLocation();

  const resetScroll = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' as any });
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;

    const mainContent = document.getElementById('main-content');
    if (mainContent) mainContent.scrollTop = 0;
    const appRoot = document.getElementById('app-root');
    if (appRoot) appRoot.scrollTop = 0;
  };

  useLayoutEffect(() => {
    resetScroll();
  }, [pathname]);

  useEffect(() => {
    resetScroll();
    const timer = setTimeout(resetScroll, 0);
    const anim = requestAnimationFrame(resetScroll);
    return () => {
      clearTimeout(timer);
      cancelAnimationFrame(anim);
    };
  }, [pathname]);

  return null;
}
