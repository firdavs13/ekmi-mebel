import './partners.css';
import img from '@assets/images/part-element.png'

const Partners = () => {
  return (
    <div className="partners">
      <div className="container">
        <div className="partners-wrapper">
          <div className="partners-left">
            <h4 className="partners-left-heading">Компании сотрудничают с нами по всему миру</h4>
            <p className="partners-left-text left-text-top">
              На данный момент дилерская сеть фабрики «Экми-Мебель» насчитывает более 30 салонов по всей Украине. Сейчас
              мы заинтересованы в расширении сети и предлагаем выгодные условия для сотрудничества.
            </p>
            <p className="partners-left-text">
              Основным преимуществом фабрики является изготовление любого индивидуального изделия, мягкой мебели и
              аксессуаров из наших основных коллекций. Также присутствует линейка оригинальных интерьерных корпусных
              изделий.
            </p>
          </div>
          <div className="partners-right">
              <img className='partners-right-img' src={img} alt="partners right img" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partners;
