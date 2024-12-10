import React from "react";
import styles from "./Modal.module.css";
import success from "../../Assets/icon-success.svg";

const Modal = ({ onCloseModal, name }) => {
  const handleButtonClick = () => {
    onCloseModal();
  };

  return (
    <div className={styles.container}>
      <div className={styles.modal}>
        <div className={styles.modal_content}>
          <div>
            <img src={success} alt="Success" />
          </div>
          <div>
            <h1>Thanks for subsribing!</h1>
          </div>
          <div>
            <p>
              A confirmation email has been sent to <b>{name}</b>. Please open
              it and click the button inside to confirm your subscription.
            </p>
          </div>
          <div>
            <button onClick={handleButtonClick}>Dismiss Message</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;