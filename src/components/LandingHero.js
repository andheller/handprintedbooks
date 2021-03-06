import React from "react";
import Section from "components/Section";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SectionHeader from "components/SectionHeader";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import "components/LandingHero.scss";

function LandingHero(props) {
  return (
    <Section
      bg={props.bg}
      textColor={props.textColor}
      size={props.size}
      bgImage={props.bgImage}
      bgImageOpacity={props.bgImageOpacity} 
    >
      <Container>
        <Row className="align-items-center">
          <Col lg={5} className="text-center text-lg-left">
            <SectionHeader
              title={props.title}
              subtitle={props.subtitle}
              size={3}
              spaced={true}
            />
            <Button
              variant={props.buttonColor}
              size="md"
              onClick={props.buttonOnClick}
            >
              {props.buttonText}
            </Button>
          </Col>
          <Col className="offset-lg-1 mt-5 mt-lg-0 ">
            <figure className="HeroSection__image-container mx-auto">
              <Image src={props.image} fluid={true} />
            </figure>
          </Col>
        </Row>
      </Container>
    </Section>
  );
}

export default LandingHero;
