import React from "react";
import "./Footer.css";
import { Button } from "./Button";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading">
          Subscribe to our newsletter to receive the best event deals{" "}
        </p>
        <p className="footer-subscription-text">
          You can unsubscribe at any time.
        </p>
        <div className="input-areas">
          <form>
            <input
              className="footer-input"
              name="email"
              type="email"
              placeholder="Your Email"
            />
            <Button buttonStyle="btn--outline">Subscribe</Button>
          </form>
        </div>
      </section>
      <div class="footer-links">
        <div className="footer-link-wrapper">
          <div class="footer-link-items">
            <h3>About Us</h3>
            <Link class="footer-text" to="/sign-up">
              How it works
            </Link>
            <Link class="footer-text" to="/">
              Testimonials
            </Link>
            <Link class="footer-text" to="/">
              Careers
            </Link>
            <Link class="footer-text" to="/">
              Terms of Service
            </Link>
          </div>
          <div class="footer-link-items">
            <h3>Contact Us</h3>
            <Link to="/">Contact</Link>
            <Link to="/">Support</Link>
            <Link to="/">Destinations</Link>
            <Link to="/">Sponsorships</Link>
          </div>
        </div>
      </div>
      <section class="social-media">
        <div class="social-media-wrap">
          <div class="footer-logo">
            <Link to="/" className="social-logo">
              FME
              <i class="fab fa-typo3" />
            </Link>
          </div>
          <small class="website-rights">FME © 2020</small>
          <div class="social-icons">
            <a
              class="social-icon-link facebook"
              href="https://www.facebook.com"
              target="_blank"
              aria-label="Facebook"
            >
              <i class="fab fa-facebook-f" />
            </a>
            <a
              class="social-icon-link instagram"
              href="https://www.instagram.com"
              target="_blank"
              aria-label="Instagram"
            >
              <i class="fab fa-instagram" />
            </a>
            <a
              class="social-icon-link youtube"
              href="https://www.youtube.com"
              target="_blank"
              aria-label="Youtube"
            >
              <i class="fab fa-youtube" />
            </a>
            <a
              class="social-icon-link twitter"
              href="https://twitter.com"
              target="_blank"
              aria-label="Twitter"
            >
              <i class="fab fa-twitter" />
            </a>
            
              <a
                href="https://www.linkedin.com"
                target="_blank"
                class="social-icon-link linkedin"
              >
                <i class="fab fa-linkedin" />
              </a>
            
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
