import React from "react";
import LandingHero from "components/LandingHero";
import FeaturesSection from "components/FeaturesSection";
import TestimonialsSection from "components/TestimonialsSection";
import { useRouter } from "next/router";
import Head from 'next/head';
import SectionHeader from "components/SectionHeader";
import Section from "components/Section";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function IndexPage(props) {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Handprinted Books</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Section
      bg={props.bg}
      textColor={props.textColor}
      size={props.size}
      bgImage={props.bgImage}
      bgImageOpacity={props.bgImageOpacity}
      
    >
      <Container>
        <Row className="align-items-center">
          <Col lg={5} className="text-center text-lg-left"></Col>
      <SectionHeader
              title="Make a personal gift in a socially distanced time."
              subtitle=""
              size={1}
              spaced={true}
              className="text-align-center"
            />
            </Row>
      </Container>
            </Section>
      <LandingHero
        bg="white"
        textColor="dark"
        size="md"
        bgImage="/moon.png"
        bgImageOpacity={1}
        title="I Love You Always, Everywhere"
        subtitle="Illustrated by you!"
        buttonText="Buy On Amazon"
        image="/cover.jpg"
        buttonOnClick={() => {
          // Navigate to pricing page
          router.push("https://amzn.to/3pMqGFI");
        }}
      />
      <FeaturesSection
        bg="white"
        textColor="dark"
        size="md"
        bgImage=""
        bgImageOpacity={1}
        image="manyDifferent.png"
      />
      {/*
      <TestimonialsSection
        bg="white"
        textColor="dark"
        size="md"
        bgImage=""
        bgImageOpacity={1}
        title="Here's what people are saying"
        subtitle=""
      />
      */}
    </>
  );
}

export default IndexPage;
