import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function usePageTitle() {
  const location = useLocation();

  useEffect(() => {
    // Extract the route name from the location object
    const routeName = location.pathname === '/' ? 'Forside' : location.pathname.replace('/', '');

    // Set the document title based on the route name
    document.title = `${routeName.charAt(0).toUpperCase() + routeName.slice(1)}`;
  }, [location.pathname]);
}

export default usePageTitle;
