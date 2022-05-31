import { NavLink } from 'react-router-dom';
import './header.css';
import logo from '@assets/images/logo.svg';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header-wrapper">
          <FormControl sx={{ m: 1, minWidth: 100 }} size="small">
            <InputLabel id="demo-simple-select-label">Каталог</InputLabel>
            <Select  variant='standard' labelId="demo-simple-select-label" id="demo-simple-select" label="Age">
              <MenuItem>Диваны</MenuItem>
              <MenuItem>Кресла</MenuItem>
              <MenuItem>Кровати</MenuItem>
              <MenuItem>Матрацы</MenuItem>
              <MenuItem>Пуфы</MenuItem>
              <MenuItem>Мебель</MenuItem>
              <MenuItem>Модели</MenuItem>
            </Select>
          </FormControl>

          <nav className="nav">
            <ul className="nav-list">
              <li className="nav-item">
                <NavLink className="nav-link" to="/mebel">
                  Индивидуальная мебель
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">
                  Контакты
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/">
                  <img className="header-logo" src={logo} alt="logo" />
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/kompania">
                  О компании
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/tel">
                  +38 (099)-638-45-37
                </NavLink>
              </li>
            </ul>
          </nav>

          <div className="lang">
            <select className="select-lang">
              <option value="ru">RU</option>
              <option value="ua">UA</option>
              <option value="en">EN</option>
            </select>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
