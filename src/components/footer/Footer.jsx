import { Link } from 'react-router-dom';
import './footer.css';
import logo from '@assets/images/footer-logo.svg';
import { SiInstagram } from 'react-icons/si';
import { RiFacebookCircleLine } from 'react-icons/ri';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';
import { Box, Fade, Modal } from '@mui/material';
import Modall from '@components/modal-contact/Modall';
import Backdrop from '@mui/material/Backdrop';
import { useState } from 'react';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  boxShadow: 24,
};

const Footer = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <footer className="footer">
      <div className="container">
        <div className="foote-wrapper">
          <div className="foorter-top">
            <Link className="footer-logo" to="/">
              <img className="footer-logo" src={logo} alt="footer logo" />
            </Link>
            <ul className="footer-list">
              <li className="footer-list-item">
                <Link className="footer-list-link" to="/catalog">
                  Каталог
                </Link>
              </li>
              <li className="footer-list-item">
                <Link className="footer-list-link" to="/compania">
                  о компании
                </Link>
              </li>
              <li className="footer-list-item">
                <Link className="footer-list-link" to="/mebel">
                  Индивидуальная мебель
                </Link>
              </li>
              <li className="footer-list-item">
                <Link className="footer-list-link" to="/catalog">
                  Партнерам дизайнерам
                </Link>
              </li>
            </ul>
            <ul className="footer-list">
              <li className="footer-list-item">
                <Link className="footer-list-link" to="/catalog">
                  2D, 3D модели
                </Link>
              </li>
              <li className="footer-list-item">
                <Link className="footer-list-link" to="/compania">
                  Шоу-румы
                </Link>
              </li>
              <li className="footer-list-item">
                <Link className="footer-list-link" to="/mebel">
                  Дилерам
                </Link>
              </li>
              <li className="footer-list-item">
                <Link className="footer-list-link" to="/catalog">
                  Контакты
                </Link>
              </li>
              <li className="footer-list-item">
                <Link className="footer-list-link" to="/catalog">
                  Конфигуратор
                </Link>
              </li>
            </ul>
            <div className="footer-right">
              <div className="footer-right-top">
                <a href="#" target="_blank" className="footer-right-icon">
                  <SiInstagram />
                </a>
                <a href="#" target="_blank" className="footer-right-icon footer-right-facebook">
                  <RiFacebookCircleLine />
                </a>
              </div>
              <a href="#" className="footer-right-tel footer-list-link">
                +38 (099)-638-45-37
              </a>
              <div>
                <button className="footer-botton" onClick={handleOpen}>
                  ерсональная консультация <HiOutlineArrowNarrowRight size="1.5em" />{' '}
                </button>
                <Modal
                  aria-labelledby="transition-modal-title"
                  aria-describedby="transition-modal-description"
                  open={open}
                  onClose={handleClose}
                  closeAfterTransition
                  BackdropComponent={Backdrop}
                  BackdropProps={{
                    timeout: 500,
                  }}
                >
                  <Fade in={open}>
                    <Box sx={style}>
                      <Modall />
                    </Box>
                  </Fade>
                </Modal>
              </div>
            </div>
          </div>
          <p className="footer-bot-text">© 1993–2022 Интернет-магазин «EKMI™» — меблі</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
