import React from "react";
import Section from "components/Section";
import Container from "react-bootstrap/Container";
import SectionHeader from "components/SectionHeader";
import VideoEmbed from "components/VideoEmbed";
import FaqSection from "components/FaqSection";
import CtaSection from "components/CtaSection";
import { useRouter } from "next/router";
import Image from "react-bootstrap/Image";

function Tips(props) {
  const router = useRouter();

  return (
    <Section
      bg={props.bg}
      textColor={props.textColor}
      size={props.size}
      bgImage={props.bgImage}
      bgImageOpacity={props.bgImageOpacity}
    >
      <Container
        style={{
          maxWidth: "768px",
        }}
      >
        <SectionHeader
          title={props.title}
          subtitle={props.subtitle}
          size={2}
          spaced={true}
          className="text-center"
        />
      {/*
        <VideoEmbed url={props.embedUrl} />
      */}
        <figure className="HeroSection__image-container mx-auto">
         <Image src='moon.png' fluid={true} />
          </figure>
        <FaqSection
        bg="white"
        textColor="dark"
        size="md"
        bgImage=""
        bgImageOpacity={1}
        title=""
        subtitle=""
      />
      
        <CtaSection
          bg="white"
          textColor="dark"
          size="md"
          bgImage=""
          bgImageOpacity={1}
          title="Ready to get started?"
          subtitle="Or please get started now even if you don't feel ready. We're just really going to need you to get started. Click it. Click the button."
          buttonText="Get Started"
          buttonColor="primary"
          buttonOnClick={() => {
            // Navigate to pricing page
            router.push("/pricing");
          }}
        />
      </Container>
    </Section>
  );
}

export default Tips;
