import './contact.css';
import img from '@assets/images/hero-img1.png';
import Modall from '@components/modal-contact/Modall';


const Contact = () => {
  return (
    <div className="contact">
      <div className="container">
        <div className="contact-wrapper">
          <div className="contact-left">
            <img className="contact-left-img" src={img} alt="contact img" />
          </div>
          <div className="contact-modal">
              <Modall/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
