import React from "react";
import HeroSection from "components/HeroSection";
import FeaturesSection from "components/FeaturesSection";
import TestimonialsSection from "components/TestimonialsSection";
import { useRouter } from "next/router";
import Head from 'next/head';

function IndexPage(props) {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Handprinted Books</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      
      <HeroSection
        bg="white"
        textColor="dark"
        size="md"
        bgImage=""
        bgImageOpacity={1}
        title="I Love You Always, Everywhere"
        subtitle=""
        buttonText="See Instructions & Tips"
        buttonColor="primary"
        image="kite.png"
        buttonOnClick={() => {
          // Navigate to pricing page
          router.push("/i-love-you-always-everywhere");
        }}
      />
      <FeaturesSection
        bg="white"
        textColor="dark"
        size="md"
        bgImage=""
        bgImageOpacity={1}
        image="cat.png"
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
