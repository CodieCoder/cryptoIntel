import { CiWarning } from "react-icons/ci";
import "./index.scss";

const ServerError = () => {
  return (
    <div className="error-serverError">
      <div className="serverError">
        <div className="serverError-icon">
          <CiWarning />
        </div>
        <div className="serverError-text">Server Error</div>
        <div className="serverError-summary">
          Opps! Seems there was a bad response from the server. Reload the page
          to try again.
        </div>
      </div>
    </div>
  );
};

export default ServerError;
