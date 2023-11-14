import React from "react";
import { socialLinks } from "../data";
import PageLinks from "./PageLinks";

function Footer() {
  return (
    <div>
      <footer className="section footer">
        <PageLinks parentClass='footer-links' itemClass='footer-link'/>
        <ul className="footer-icons">
          {socialLinks.map((link) => {
            const { icon, id, href } = link;
            return (
              <li key={id}>
                <a
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="footer-icon"
                >
                  <i className={icon}></i>
                </a>
              </li>
            );
          })}
        </ul>
        <p className="copyright">
          copyright &copy; Backroads travel tours company
          <span id="date">{new Date().getFullYear()}</span> all rights reserved
        </p>
      </footer>
    </div>
  );
}

export default Footer;
