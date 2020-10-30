import React from "react";
import Section from "components/Section";
import Container from "react-bootstrap/Container";
import SectionHeader from "components/SectionHeader";
import "components/Instructions.scss";

function Instructions(props) {
  return (
    <Section
      bg={props.bg}
      textColor={props.textColor}
      size={props.size}
      bgImage={props.bgImage}
      bgImageOpacity={props.bgImageOpacity}
    >
      <Container>
        <SectionHeader
          title={props.title}
          subtitle={props.subtitle}
          size={2}
          spaced={true}
          className="text-center"
        />
      </Container>
      <div className="Instructions__no-classname">
        <p className="Instructions__subtitle mb-0">
          For tips on illustrating your book, see{" "}
          <a href="https://handprintedbooks.com/tips">our tips page</a>.
        </p>
      </div>
    </Section>
  );
}

export default Instructions;
