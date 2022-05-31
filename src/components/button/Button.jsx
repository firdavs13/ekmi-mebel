import './button.css'

// eslint-disable-next-line react/prop-types
const Button = ({ text }) => {
    return (
        <div className='button-container'>
            <button className='button'>{text}</button>
        </div> 
    );
}

export default Button;
