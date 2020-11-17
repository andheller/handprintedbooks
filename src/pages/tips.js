import React from "react";
import ImageRight from "components/ImageRight";
import { useRouter } from "next/router";
import Head from 'next/head';
import FaqSection from "components/FaqSection";
import Section from "components/Section";
import SectionHeader from "components/SectionHeader";


function IndexPage(props) {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Tips</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Section>
            <SectionHeader
              title={'Tips'}
              size={1}
              spaced={false}
              className="text-center"
            />

      </Section>

      <FaqSection
        bg="white"
        textColor="dark"
        size="md"
        bgImage=""
        bgImageOpacity={1}
        title=""
        subtitle=""
      />
      <ImageRight
        bg="white"
        textColor="dark"
        size="sm"
        bgImage=""
        bgImageOpacity={1}
        title="Stamps"
        subtitle="We recommend "
        buttonText="Buy on Amazon"
        buttonColor="link"
        image=""
        buttonOnClick={() => {
          // Navigate to pricing page
          //router.push("/i-love-you-always-everywhere");
          window.open('https://amzn.to/383Fr0p')
        }}
      />

    </>
  );
}

export default IndexPage;
