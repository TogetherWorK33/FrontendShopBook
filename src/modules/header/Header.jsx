import './header.css';
import Logo from '../../assets/Logo.png';
const Header = () => {
  return (
    <div className="content-header">
      <div className="content-header-block">
        <div className="content-element-logo">
          <img src={Logo} alt="" className="element-image" />
          <h2>Магазин книг</h2>
        </div>

        <div className="content-element-btn">
          <h3>Главная</h3>
          <h3>Каталог</h3>
          <h3>Заказы</h3>
        </div>

        <div className="content-element-auth">
          <h3>Войти</h3>
        </div>
      </div>
    </div>
  );
};

export default Header;
