import React from "react";
import styles from "./index.module.css";
import Wrapper from "../../components/UI/wrapper";
import Container from "../../components/UI/container";
import Vector from "../../assets/images/vector1.png";
import Google from "../../assets/images/google.svg";
import Apple from "../../assets/images/apple.svg";
import Facebook from "../../assets/images/facebook.svg";
const Home = () => {
  return (
    <Wrapper>
      <Container>
        <div className={styles.background}>
          <div className={styles.leftside}>
            <div className={styles.headers}>
              <ul>
                <li>Home</li>
                <li>About</li>
                <li>Blog</li>
                <li>Pages</li>
                <li>Contact</li>
              </ul>
              <div className={styles.signin}>
                <h1>Sign In to Space Direct</h1>
                <p>if you don’t have an account you can </p>
                <h2>Register here!</h2>
              </div>
            </div>
            <div className={styles.images}>
              <div className={styles.shadow}></div>
              <img src={Vector} alt="" />
            </div>
          </div>
          <div className={styles.rightside}>
            <div className={styles.headers1}>
              <ul>
                <li>Dark Mode</li>
                <li className={styles.rightsignin}>Sign in</li>
                <li className={styles.rightsignin}>Register</li>
              </ul>
            </div>
            <div className={styles.inputs}>
              <form action="">
                <input type="email" placeholder="Enter Email" />
                <input type="password" placeholder="••••••••" />
                <h2>Forgot Password ?</h2>
                <button type="submit" value="submit">
                  Sign In
                </button>
              </form>
              <div className={styles.hr}>
                <hr />
                <h2>Or continue with</h2>
                <hr />
              </div>
              <div className={styles.icons}>
                <img src={Google} alt="" />
                <img src={Apple} alt="" />
                <img src={Facebook} alt="" />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Wrapper>
  );
};

export default Home;
