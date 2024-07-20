import './mainPage.css';
import Header from '../header/Header';
import Footer from '../footer/Footer';
const MainPage = () => {
  return (
    <div className="wrapper-content-mainPage">
      <Header />
      <div className="content-view"></div>
      <Footer />
    </div>
  );
};

export default MainPage;
