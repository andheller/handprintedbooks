import React from "react";
import Section from "components/Section";
import Container from "react-bootstrap/Container";
import SectionHeader from "components/SectionHeader";
import Features from "components/Features";

function Books(props) {
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
        <Features
          items={[
            {
              title: "I Love You Always, Everywhere",
              description:
                "",
              image: "crazyHair.png",
              buttonText: "View our books",
            },
            {
              title: "Old MacDonald's Handprint Farm",
              description:
                "",
              image:
                "rooster.png",
            },
          ]}
        />
      </Container>
    </Section>
  );
}

export default Books;
