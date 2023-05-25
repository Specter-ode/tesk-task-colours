
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Meta from '../Meta/Meta';

const Layout = ({ children, ...rest }) => {
  return (
    <>
      <Meta {...rest} />
      <div style={{minHeight: '100vh', display:'flex', flexDirection:'column'}}>
      <Header />
      {children}
      <Footer />
      </div>
    </>
  );
};

export default Layout;
