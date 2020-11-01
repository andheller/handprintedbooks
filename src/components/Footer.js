import React from "react";
import Section from "components/Section";
import Container from "react-bootstrap/Container";
import Link from "next/link";
import "components/Footer.scss";

function Footer(props) {
  return (
    <Section
      bg={props.bg}
      textColor={props.textColor}
      size={props.size}
      bgImage={props.bgImage}
      bgImageOpacity={props.bgImageOpacity}
      className="footer"
    >
      <Container>
        <div className="FooterComponent__inner">
          <div className="brand left">
            <Link href="/">
              <a>
                <img src={props.logo} alt="Logo" />
              </a>
            </Link>
          </div>
          <div className="social right">
            <a
              className="socialIcon"
              href="https://www.pinterest.com/handprintedbooks/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="icon">
                <i className="fab fa-pinterest" />
              </span>
            </a>
            <a
              className="socialIcon"
              href="https://www.instagram.com/handprintedbooks/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="icon">
                <i className="fab fa-instagram" />
              </span>
            </a>
          </div>
          <div className="copyright left">{props.copyright}</div>
        </div>
      </Container>
    </Section>
  );
}

export default Footer;
