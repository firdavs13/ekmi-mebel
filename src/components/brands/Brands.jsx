import './brands.css';
import topImg1 from '@assets/images/brands-element1.svg';
import topImg2 from '@assets/images/brands-element2.svg';
import topImg3 from '@assets/images/brands-element3.svg';
import topImg4 from '@assets/images/brands-element4.svg';
import botImg1 from '@assets/images/brands-product1.png';
import botImg2 from '@assets/images/brands-product2.png';
import botImg3 from '@assets/images/brands-product3.png';
import botImg4 from '@assets/images/brands-product4.png';
import bottomElement from '@assets/images/brands-bottom-elemnt.svg'

const Brands = () => {
  return (
    <div className="brands">
      <div className="container">
        <div className="brands-wrapper">
          <div className="brands-top">
            <img className="brands-top-img" src={topImg1} alt="brands top img" />
            <img className="brands-top-img" src={topImg2} alt="brands top img" />
            <img className="brands-top-img" src={topImg3} alt="brands top img" />
            <img className="brands-top-img" src={topImg4} alt="brands top img" />
          </div>
          <div className="brands-bot">
            <img className="brands-bot-img" src={botImg1} alt="brands bot img" />
            <img className="brands-bot-img" src={botImg2} alt="brands bot img" />
            <img className="brands-bot-img" src={botImg3} alt="brands bot img" />
            <img className="brands-bot-img" src={botImg4} alt="brands bot img" />
          </div>
          <img className='brand-bottom-element' src={bottomElement} alt="brands bottom element" />
        </div>
      </div>
    </div>
  );
};

export default Brands;
