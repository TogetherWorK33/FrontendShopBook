import { Link } from 'react-router-dom';
import './authPage.css';

const AuthPage = () => {
  return (
    <div className="wrapper-content-auth">
      <div className="content-window">
        <div className="content-name">
          <h2>Авторизоватся</h2>
        </div>
        <div className="content-logIn">
          <input type="text" className="content-input-one" placeholder="Логин" />
          <input type="text" className="content-input-two" placeholder="Пароль" />
          <button className="content-btn">Войти</button>
          <Link to="/" className="content-link">
            Вернутся на страницу
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
