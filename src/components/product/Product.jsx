import Button from '@components/button/Button';
import './product.css';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import img1 from '@assets/images/slide1.png';
import img2 from '@assets/images/slide2.png';
import img3 from '@assets/images/slide3.png';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const Product = () => {
  return (
    <div className="product">
      <div className="container">
        <div className="product-wrapper">
          <h2 className="product-heading">
            <span className="product-heading-head">Н</span>овинки
          </h2>
          <div className="slider">
            <Carousel
              className="slider-carusek"
              customTransition="transform 900ms ease-in-out"
              autoPlay={false}
              responsive={responsive}
              rewind={true}
              shouldResetAutoplay={false}
              additionalTransfrom={1}
              focusOnSelect={true}
              slidesToSlide={0.5}
            >
              <div className='slide-card'>
                <img className="slide-img" src={img3} alt="slide art" />
                <h4 className="slide-heading">Alba</h4>
                <p className="slide-text">10 000 uah</p>
              </div>
              <div className='slide-card'>
                <img className="slide-img" src={img2} alt="slide art" />
                <h4 className="slide-heading">Martin</h4>
                <p className="slide-text">15 000 uah</p>
              </div>
              <div className='slide-card'>
                <img className="slide-img" src={img1} alt="slide art" />
                <h4 className="slide-heading">Luara</h4>
                <p className="slide-text">19 000 uah</p>
              </div>
              <div className='slide-card'>
                <img className="slide-img" src={img3} alt="slide art" />
                <h4 className="slide-heading">Alba</h4>
                <p className="slide-text">10 000 uah</p>
              </div>
              <div className='slide-card'>
                <img className="slide-img" src={img2} alt="slide art" />
                <h4 className="slide-heading">Martin</h4>
                <p className="slide-text">15 000 uah</p>
              </div>
              <div className='slide-card'>
                <img className="slide-img" src={img1} alt="slide art" />
                <h4 className="slide-heading">Luara</h4>
                <p className="slide-text">19 000 uah</p>
              </div>
              <div className='slide-card'>
                <img className="slide-img" src={img3} alt="slide art" />
                <h4 className="slide-heading">Alba</h4>
                <p className="slide-text">10 000 uah</p>
              </div>
              <div className='slide-card'>
                <img className="slide-img" src={img2} alt="slide art" />
                <h4 className="slide-heading">Martin</h4>
                <p className="slide-text">15 000 uah</p>
              </div>
              <div className='slide-card'>
                <img className="slide-img" src={img1} alt="slide art" />
                <h4 className="slide-heading">Luara</h4>
                <p className="slide-text">19 000 uah</p>
              </div>
            </Carousel>
          </div>
          <div className="product-bot">
          <Button text="перейти в каталог" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
