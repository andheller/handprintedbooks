import React from "react";
import Section from "components/Section";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import SectionHeader from "components/SectionHeader";
import "components/ImageLeft.scss";

function ImageLeft(props) {
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
          <Col>
            <figure className="ImageLeft__image-container mx-auto">
              <Image src={props.image} fluid={true} />
            </figure>
          </Col>
          <Col
            lg={5}
            className="offset-lg-1 mt-5 mt-lg-0 text-center text-lg-left"
          >
            <SectionHeader
              title={props.title}
              subtitle={props.subtitle}
              size={4}
              spaced={true}
            />
          </Col>
        </Row>
      </Container>
    </Section>
  );
}

export default ImageLeft;
