import { useLocation } from 'react-router-dom';
import './Form.css';
import { MOVIES_PATH, SAVED_MOVIES_PATH } from '../../utils/constants';
import Preloader from '../Preloader/Preloader';

export default function Form({
  children,
  name,
  onSubmit,
  disabledDafault,
  isFormValid,
  buttonText,
  isFormActivated,
  isSendRequest,
  noValidate,
}) {
  const { pathname } = useLocation();
  return (
    <form
      className={`form form_type_${name}`}
      name={name}
      noValidate
      onSubmit={onSubmit}
    >
      {children}
      {isSendRequest ? (
        <Preloader className={`preloader_${name}`} />
      ) : (
        <>
          {(isFormActivated ||
            pathname === MOVIES_PATH ||
            pathname === SAVED_MOVIES_PATH) && (
            <button
              className={`form__button-save form__button-save_type_${name}`}
              type='submit'
              disabled={disabledDafault ? disabledDafault : !isFormValid}
            >
              {buttonText}
            </button>
          )}
        </>
      )}
    </form>
  );
}
