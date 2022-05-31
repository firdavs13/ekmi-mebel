import './publications.css';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import img1 from '@assets/images/pro1.png';
import img2 from '@assets/images/pro2.png';
import img3 from '@assets/images/pro3.png';
import img4 from '@assets/images/pro4.png';


const Publications = () => {
  return (
    <div className="publications">
      <div className="container">
        <div className="publications-wrapper">
          <h2 className="publications-heaing">
            <span className="publications-head">П</span>оследние публикации
          </h2>
          <div className="publications-slider">
            <Carousel
              className="slider-carusel"
              additionalTransfrom={0}
              arrows
              autoPlaySpeed={3000}
              centerMode={false}
              containerClass="container-with-dots"
              dotListClass=""
              draggable
              focusOnSelect={false}
              infinite
              itemClass=""
              keyBoardControl
              minimumTouchDrag={80}
              renderButtonGroupOutside={false}
              renderDotsOutside={false}
              shouldResetAutoplay={false}
              responsive={{
                desktop: {
                  breakpoint: {
                    max: 3000,
                    min: 1024,
                  },
                  items: 4,
                  partialVisibilityGutter: 40,
                },
                mobile: {
                  breakpoint: {
                    max: 464,
                    min: 0,
                  },
                  items: 1,
                  partialVisibilityGutter: 30,
                },
                tablet: {
                  breakpoint: {
                    max: 1024,
                    min: 464,
                  },
                  items: 2,
                  partialVisibilityGutter: 30,
                },
              }}
              showDots={false}
              sliderClass=""
              slidesToSlide={1}
              swipeable
            >
              <div className="slide-card">
                <img className="slide-img" src={img1} alt="slide art" />
                <h4 className="slide-heading">Martin</h4>
              </div>
              <div className="slide-card">
                <img className="slide-img" src={img2} alt="slide art" />
                <h4 className="slide-heading">Alba</h4>
              </div>
              <div className="slide-card">
                <img className="slide-img" src={img3} alt="slide art" />
                <h4 className="slide-heading">Toscana</h4>
              </div>
              <div className="slide-card">
                <img className="slide-img" src={img4} alt="slide art" />
                <h4 className="slide-heading">Leonardo</h4>
              </div>
              <div className="slide-card">
                <img className="slide-img" src={img1} alt="slide art" />
                <h4 className="slide-heading">Martin</h4>
              </div>
              <div className="slide-card">
                <img className="slide-img" src={img2} alt="slide art" />
                <h4 className="slide-heading">Alba</h4>
              </div>
              <div className="slide-card">
                <img className="slide-img" src={img3} alt="slide art" />
                <h4 className="slide-heading">Toscana</h4>
              </div>
              <div className="slide-card">
                <img className="slide-img" src={img4} alt="slide art" />
                <h4 className="slide-heading">Leonardo</h4>
              </div>
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Publications;
