import img from './error.gif';
import "./ErrorMessage.scss";

const ErrorMessage = () => {
  return (
    <img className="error-img" src={img} alt="error404"/>
  )
}

export default ErrorMessage;
