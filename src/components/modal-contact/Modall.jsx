import './modal.css';
import { Checkbox, FormControlLabel, TextField } from '@mui/material';
import Button from '@components/button/Button';

const Modall = () => {
  return (
    <div className="contact-form">
      <p className="contact-form-text">Заполните форму</p>
      <h3 className="contact-form-heading">остались вопросы?</h3>
      <form className="form">
        <TextField id="standard-basic" className="form-input" label="Ваше имя*" variant="standard" />
        <TextField id="standard-basic" className="form-input" label="Ваш номер телефона*" variant="standard" />
        <TextField id="standard-basic" className="form-input" label="Страна" variant="standard" />
        <TextField id="standard-basic" className="form-input" label="Комментарий" variant="standard" />
        <div className="form-checkbox">
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            className="checkbox"
            sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }}
          />
          <p className="checkbox-text">Подтверждая заказ, я принимаю условия пользовательского соглашения</p>
        </div>
        <div className="form-button">
          <Button text="запросить звонок" />
        </div>
      </form>
    </div>
  );
};

export default Modall;
