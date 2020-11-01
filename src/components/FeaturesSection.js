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
                    "Purchase your book (and stamps if you don't already have some) on Amazon.",
                  iconClass: "fas fa-book",
                  iconColor: "dark",
                },
                {
                  title: "Illustrate Your Book",
                  description:
                    "Use your handprints, fingerprints and/or footprints to illustrate your book. Use Doodles and drawings to add even more personality!",
                  iconClass: "far fa-hand-paper",
                  iconColor: "dark",
                },
                {
                  title: "Share With Someone you Love",
                  description:
                    "Keep your book as a special momento, or turn your book into a special gift by giving it to someone you care about.",
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
