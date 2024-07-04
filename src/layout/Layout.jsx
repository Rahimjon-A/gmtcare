import { Link, Outlet } from 'react-router-dom';
import Header from '../components/Header';
import MobileNav from '../components/MobileNav';
import ScrollTop from '../ui/UpToTop';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { clearWarning } from '../reducers/card';

const Layout = () => {
  const { warning } = useSelector((state) => state.card);
  const dispatch = useDispatch();
  useEffect(() => {
    if (warning) {
      const timer = setTimeout(() => {
        dispatch(clearWarning());
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [warning]);

  return (
    <div>
      {warning && (
        <div className=" z-50 w-[380px] fixed bg-[--pri] text-center rounded-lg font-semibold p-1 text-[16px] right-1/2 translate-x-1/2 duration-300 top-[5%] text-white transition-all ">
          <span className="block">Item has been added to your cart. Want more ?</span>
          <Link
            to={'/korzinka'}
            onClick={() => dispatch(handleActive(1))}
            className="text-[--second] underline "
          >
            Go to Shopping Cart
          </Link>
        </div>
      )}

      <Header />
      <Outlet />
      <ScrollTop />
      <div className=" md:hidden fixed bottom-[-2px] w-full z-30">
        <MobileNav />
      </div>
    </div>
  );
};

export default Layout;
