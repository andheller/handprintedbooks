import React from "react";
import HeroSection from "components/HeroSection";
import FeaturesSection from "components/FeaturesSection";
import TestimonialsSection from "components/TestimonialsSection";
import { useRouter } from "next/router";

function IndexPage(props) {
  const router = useRouter();

  return (
    <>
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
        image="cat.png"
        buttonOnClick={() => {
          // Navigate to pricing page
          router.push("/books");
        }}
      />
      <FeaturesSection
        bg="white"
        textColor="dark"
        size="md"
        bgImage=""
        bgImageOpacity={1}
        image="cow.png"
      />
      <TestimonialsSection
        bg="white"
        textColor="dark"
        size="md"
        bgImage=""
        bgImageOpacity={1}
        title="Here's what people are saying"
        subtitle=""
      />
    </>
  );
}

export default IndexPage;
