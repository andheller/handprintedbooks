import React from "react";
import Section from "components/Section";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Features2 from "components/Features2";
import "components/FeaturesSection.scss";

function FeaturesSection(props) {
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
          <Col lg={6} className="text-center text-lg-left">
            <figure className="FeaturesSection__image-container mx-auto">
              <Image src={props.image} fluid={true} />
            </figure>
          </Col>
          <Col className="offset-lg-1 mt-5 mt-lg-0 ">
            <Features2
              items={[
                {
                  title: "Choose Your Book",
                  description:
                    "Imagine a world where you can chat with your friends without having to see their dumb faces.",
                  iconClass: "fas fa-book",
                  iconColor: "dark",
                },
                {
                  title: "Illustrate Your Book",
                  description:
                    "We embedded a bunch free flash games inside our app. What we lack in quality we make up in quantity.",
                  iconClass: "far fa-hand-paper",
                  iconColor: "dark",
                },
                {
                  title: "Share With Someone you Love",
                  description:
                    "Our market research told us people like cats so we put some cat icons on our website.",
                  iconClass: "far fa-heart",
                  iconColor: "dark",
                },
              ]}
            />
          </Col>
        </Row>
      </Container>
    </Section>
  );
}

export default FeaturesSection;
