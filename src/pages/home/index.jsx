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
                <li className={styles.slideIn }>Home</li>
                <li className={styles.slideIn }>About</li>
                <li className={styles.slideIn }>Blog</li>
                <li className={styles.slideIn }>Pages</li>
                <li className={styles.slideIn }>Contact</li>
              </ul>
              <div className={styles.signin}>
                <h1 className={styles.slideIn }>Sign In to Space Direct</h1>
                <p className={styles.slideIn }>if you don’t have an account you can </p>
                <h2 className={styles.slideIn }>Register here!</h2>
              </div>
            </div>
            <div className={styles.images}>
          
              <img className={styles.moveUpDown} src={Vector} alt="" />
            </div>
          </div>
          <div className={styles.rightside}>
            <div className={styles.headers1}>
              <ul>
                <li className={styles.slideIn}>Dark Mode</li>
                <li className={styles.rightsignin}>Sign in</li>
                <li className={styles.rightsignin}>Register</li>
              </ul>
            </div>
            <div className={styles.inputs}>
              <form action="/">
                <input type="email" placeholder="Enter Email" />
                <input type="password" placeholder="••••••••"  />
                <h2>Forgot Password ?</h2>
                <button type="submit">
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
