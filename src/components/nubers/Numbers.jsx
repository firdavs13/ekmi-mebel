import './numbers.css';

const Numbers = () => {
  return (
    <div className="numbers">
      <div className="container">
        <div className="numbers-wrapper">
          <div className="card-wrapper">
            <div className="numbers-one numbers-card">
              <p className="numbers-text">
                Осуществляемые компанией «Экми-Мебель» постоянные инвестиции в сертификацию своей продукции, убедительно
                подтверждают лидерство компании на украинском рынке высококачественной мягкой мебели.
              </p>
            </div>
            <div className="numbers-two numbers-card">
              <p className="numbers-text">
                Фабрика «Экми-мебель» сертифицирована по системе менеджмента качества ISO 9001:2000 на соответствие
                международным стандартам, представительством «Бюро Веритас» в Украине.
              </p>
            </div>
            <div className="numbers-three numbers-card">
              <p className="numbers-text">
                Компания «Экми-Мебель» первой из украинских производителей мягкой мебели обеспечила свою мебель
                полноценной гарантией и первой обоснованно заявила о лучшем качестве производимой мебели.
              </p>
            </div>
          </div>
          <div className="number-bot">
            <h2 className="partners-heading">
              {' '}
              <span className="partners-heading-head">Н</span>аши партнеры
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Numbers;
