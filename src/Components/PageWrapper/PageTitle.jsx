import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function usePageTitle() {

  //useLocation hooket
  const location = useLocation();

  useEffect(() => {
    //Hvis route er / bliver routeName consten til "Forside", ellers vil den pille route ud fra location objektet
    const routeName = location.pathname === '/' ? 'Forside' : location.pathname.replace('/', '');

    // Sætter document title til current route og gør det første bogstav stort
    document.title = `${routeName.charAt(0).toUpperCase() + routeName.slice(1)}`;
  }, [location.pathname]);
}

export default usePageTitle;
