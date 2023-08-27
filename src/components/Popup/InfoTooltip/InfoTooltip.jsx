import { ReactComponent as IconPositive } from '../../../images/icon-positive.svg';
import { ReactComponent as IconNegative } from '../../../images/icon-negative.svg';
import Popup from '../Popup';

const InfoTooltip = ({ onClose, isOpen, errorMessage, message, name }) => {
  return (
    <Popup isOpen={isOpen} onClose={onClose} name={name}>
      {!errorMessage ? <IconPositive /> : <IconNegative />}
      <h2 className={`popup__heading popup__heading_type_${name}`}>
        {!errorMessage ? message : `${errorMessage}`}
      </h2>
    </Popup>
  );
};

export default InfoTooltip;
