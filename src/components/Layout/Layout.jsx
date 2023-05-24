
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Meta from '../Meta/Meta';

const Layout = ({ children, ...rest }) => {
  return (
    <>
      <Meta {...rest} />
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
