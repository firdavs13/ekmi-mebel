import './story.css';

const Story = () => {
  return (
    <div className="story">
      <div className="container">
        <div className="story-wrapper">
          <h2 className="story-heading">
            <span className="story-head">Н</span>аша история
          </h2>
          <div className="story-top">
              <div className="story-top-element"></div>
            <div className="story-top-left">
              <h4 className="story-top-left-heading">Наработки длинной в 25 лет</h4>
              <p className="story-top-left-text">
                Каждый производитель заявляет, что делает все для своих покупателей, но не каждый производитель способен
                подтвердить свои заявления многолетней историей
              </p>
            </div>
            <div className="story-top-right"></div>
          </div>
          <div className="story-bot">
              <p className='story-bot-text'>1993</p>
              <p className='story-bot-mid-text'>26 лет </p>
              <p className='story-bot-text'>2022</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Story;
