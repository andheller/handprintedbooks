import React from "react";
import Section from "components/Section";
import Container from "react-bootstrap/Container";
import SectionHeader from "components/SectionHeader";
import Faq from "components/Faq";
import Image from 'next/image'

function FaqSection(props) {
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
        <Image
        src="/moon.png"
        alt="Book Illustration of child and father looking at the moon."
        width={500}
        height={500}
      />
        <Faq
          items={[
            {
              question: "Don’t rush it.",
              answer:
                "Opt for a time where your child is interested. Take a break if needed. You don’t have to get through all the pages at one time.",
            },
            {
              question: "Practice on scratch paper",
              answer:
                "You don't have to practice much, but a little bit can help.",
            },
            {
              question: "It doesn’t have to be perfect!",
              answer:
                "Enjoy the process. If you’re giving this book as a gift, your loved one will think it’s special because of your time, effort, and sweet handprints",
            },
            {
              question: "Our selections are not a definitive guide.",
              answer:
                "We may recommend certain colors/inks, but be creative and use what you have!",
            },
            {
            question: "You and your child are the artists!",
              answer:
                "Use your artistic eye to determine where you want your handprint on the page, what colors you use, and how you illustrate your handprint.",
            },
            {
            question: "If you’re using a stamp, play with the amount of ink you need on your child’s hand.",
              answer:
                "We found that using more ink made for cuter prints, but do what you think looks best!",
            },
            {
              question: "Play with where you want your picture on the page.",
                answer:
                  "It’s okay if things overlap.",
              },
            
          ]}
        />
      </Container>
    </Section>
  );
}

export default FaqSection;
