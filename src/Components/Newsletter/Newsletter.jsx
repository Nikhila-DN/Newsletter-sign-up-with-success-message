import React, { useEffect, useState } from "react";
import styles from "./Newsletter.module.css";
import iconList from "../../Assets/icon-list.svg";
import desktopSignup from "../../Assets/illustration-sign-up-desktop.svg";
import mobileSignup from "../../Assets/illustration-sign-up-mobile.svg";
import Modal from "../Modal/Modal";

const Newsletter = () => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [view, setView] = useState(window.innerWidth);

  const handleEmailChange = (e) => {
    const inputEmail = e.target.value;
    setEmail(inputEmail);
    setValidEmail(emailRegex.test(inputEmail) || inputEmail === "");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validEmail) {
      console.log("Form Submitted Successfully!");
      setIsModalOpen(true);
    } else {
      console.log("Error");
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setEmail("");
  };

  useEffect(() => {
    const handleResize = () => {
      setView(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return isModalOpen ? (
    <Modal name={email || "Subscriber"} onCloseModal={handleCloseModal} />
  ) : (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.left}>
          <div className={styles.left_content}>
            <div>
              <h1>Stay Updated!</h1>
            </div>
            <div>
              <p>Join 60,000+ product managers receiving monthly updates on:</p>
            </div>
            <div className={styles.list}>
              <img src={iconList} alt="List" />
              <p>Product discovery and building what matters</p>
            </div>
            <div className={styles.list}>
              <img src={iconList} alt="List" />
              <p>Measuring to ensure updates are a success</p>
            </div>
            <div className={styles.list}>
              <img src={iconList} alt="List" />
              <p>And much more!</p>
            </div>
            <div className={styles.email_label}>
              <label htmlFor="email">Email address</label>
              {!validEmail && email !== "" && (
                <p className={styles.warning}>Valid email required</p>
              )}
            </div>
            <input
              type="email"
              name="email"
              placeholder="email@company.com"
              value={email}
              onChange={handleEmailChange}
              className={email !== "" && !validEmail ? styles.inputerror : ""}
            />
            <button
              type="button"
              onClick={handleSubmit}
              disabled={!validEmail || email === ""}
            >
              Subscribe to monthly newsletter
            </button>
          </div>
        </div>
        <div className={styles.right}>
          <img src={view >= 375 ? desktopSignup : mobileSignup} alt="Sign Up" />
          {console.log(window.innerWidth)}
        </div>
      </div>
    </div>
  );
};

export default Newsletter;