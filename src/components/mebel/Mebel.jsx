import './mebel.css';
import img from '@assets/images/hero-img2.png';
import Button from '@components/button/Button';

const Mebel = () => {
  return (
    <div className="mebel">
      <div className="container">
        <div className="mebel-wrapper">
          <div className="menbel-left">
            <img className="mebel-img" src={img} alt="" />
          </div>
          <div className="mebel-right-word">
            <h2 className="mebel-right-heading">
              <span className="mebel-right-head">И</span>ндивидуальная мебель
            </h2>
            <p className="mebel-right-text-one">Полный цикл производства.</p>
            <p className="mebel-right-text-two">Качество мягкой мебели начинается задолго до начала ее производства.</p>
            <Button text="Индивидуальная мебель" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mebel;
