import React, {useEffect} from 'react'
import headerImage from "./assets/headerImage.svg";
import "./App.css";
import AOS from 'aos'
import 'aos/dist/aos.css'

function App() {
  useEffect(()=>{
    AOS.init({duration: 2000});
  }, [])
  return (
    <div>
      <header>
        <section className="header-section">
          <h1>Master the markets with Dropouts' College</h1>
          <p className="p-heading">
            Get top-notch, comprehensive training in forex and crypto market
            analysis. Whether you're a beginner or an advanced trader, our free
            courses are designed to help you succeed
          </p>
          <a href="https://t.me/etcentre" target="blank">
            Register Now
          </a>
          <a href="https://dropouts-newsletter.beehiiv.com/subscribe" target="blank" style={{borderRadius: "10px", marginTop: "20px", fontFamily: "arial", backgroundColor: "#8360c3", border: '3px solid #8360c3'}}>
            Subscribe to our newsletter
          </a>
          <img
            src={headerImage}
            width="400px"
            height="400px"
            alt="header image"
          />
        </section>
      </header>

      <main>
        <section>
          <section className="inner-section" data-aos="zoom-in">
            <h3>Master Market Analysis for Forex and Crypto Trading</h3>
            <p>
              With Dropouts' College, you can elevate your trading game
              regardless of your current skill level. We offer comprehensive,
              free courses that cover everything from the basics to advanced
              trading strategies in both forex and crypto markets. Propel your
              trading journey today with our expert guidance
            </p>
          </section>
          <section className="img-section">
            <img src="section-image.jpg" alt="" />
          </section>
        </section>

        <section>
          <section className="img-section">
            <img src="section-image3.jpg" alt="" />
          </section>
          <section className="inner-section" data-aos="zoom-in">
            <h3>Master Market Analysis, For Free</h3>
            <p>
              Grow your trading prowess with our comprehensive course. Receive
              free, lesson-by-lesson PDFs direct to your inbox, providing you
              with a solid foundation in market analysis for both Forex and
              Crypto trading. Advance your skills at no cost today with
              Dropouts’ College.
            </p>
          </section>
        </section>

        <section>
          <section className="inner-section" data-aos="zoom-in">
            <h3>Master the Market, Manage the Risk</h3>
            <p>
              Trading is not just about buying and selling—it's a game of
              psychology and risk management. At Dropouts' College, gain an edge
              with mentorship on market analysis, risk management, and trading
              psychology. Learn to navigate both forex and crypto markets
              confidently, from basic to advanced levels.
            </p>
          </section>
          <section className="img-section">
            <img src="section-image2.jpg" alt="" />
          </section>
        </section>

        <section>
          <section className="img-section">
            <img src="section-image5.svg" alt="" />
          </section>
          <section className="inner-section" data-aos="zoom-in">
            <h3>Join a thriving community of eager learners.</h3>
            <p>
              Step into a dynamic and supportive learning environment where
              you're not alone. Join over 100 students who are already gaining
              valuable insights on market analysis for forex and crypto trading,
              from basic to advanced levels, for free.
            </p>
          </section>
        </section>
        <section className="section-bottom">
          <h2 data-aos="zoom-in">Ready to get started?</h2>
          <p>Get access to all our free content</p>
          <a href="https://forms.gle/1oSLo3ge9obFQ1cR9" target="blank">
            Register for Free
          </a>
          <a href="https://dropouts-newsletter.beehiiv.com/subscribe" target="blank" style={{borderRadius: "10px", marginTop: "20px", fontFamily: "arial", backgroundColor: "#8360c3", border: '3px solid #8360c3'}}>
            Subscribe to our newsletter
          </a>
        </section>
      </main>
      <footer>
        <article>
          <p><b>Other services:</b></p>
          <ul>
            <li>A.I bot trading</li>
            <li>Consultation</li>
            <li>Fund Management</li>
          </ul>
          <b>
            <i>Please contact for more Information</i>
          </b>{" "}
          {"\n"}Thetradingpostfx@gmail.com
        </article>
        <article>
          <b>Social:</b>
          <ul className="social">
            <li>
              <a href="https://t.me/etcentre">
                <img
                  src="telegram.png"
                  alt="telegram-icon"
                  width="40px"
                  height="40px"
                />
              </a>
            </li>
            <li>
              <a href="https://twitter.com/eielhart_?s=21">
                <img
                  src="twitter1.png"
                  alt="twitter"
                  width="40px"
                  height="40px"
                />
              </a>
            </li>
          </ul>
        </article>
        <article>
          <b>Legal</b>
          <ul>
            <li>
              <a href="#">Terms of Service</a>
            </li>
            <li>
              <a href="#">Privacy</a>
            </li>
          </ul>
        </article>
      </footer>
      </div>
  );
}

export default App;