import Button from '../button/Button';
import './hero.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import img1 from '@assets/images/hero-img1.png';
import img2 from '@assets/images/hero-img2.png';
import img3 from '@assets/images/hero-img3.png';

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-main-wrapper">
        <div className="container">
          <div className="hero-wrapper">
            <div className="hero-left">
              <h1 className="hero-heading">
                <span className="hero-heading-head">Л</span>УЧШАЯ ЖИЗНЬ, СОЗДАННАЯ ДЛЯ ВАС!
              </h1>
              <Button text="перейти в каталог" />
            </div>
            <div className="hero-right">
              <p className="hero-text">Основано в 1993 году</p>
            </div>
            <div className="hero-slider">
              <Carousel
                className="carusel"
                autoPlay={true}
                showThumbs={false}
                infiniteLoop={true}
                interval={5000}
                showArrows={false}
                showStatus={false}
                preventMovementUntilSwipeScrollTolerance={true}
              >
                <div>
                  <img src={img3} />
                </div>
                <div>
                  <img src={img2} />
                </div>
                <div>
                  <img src={img1} />
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
