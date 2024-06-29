import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import MobileNav from '../components/MobileNav';

const Layout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <div className=" md:hidden fixed bottom-[-2px] w-full z-30">
        <MobileNav />
      </div>
    </div>
  );
};

export default Layout;
