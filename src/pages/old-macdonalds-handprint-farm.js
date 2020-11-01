import React from "react";
import Header from "components/Header";
import Instructions from "components/Instructions";
import Example from "components/Example";
import { useRouter } from "next/router";
import Head from 'next/head';

function OldMacdonaldsHandprintFarmPage(props) {
  const router = useRouter();

  return (
    <>
    <Head>
        <title>Old MacDonald's Handprint Farm</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header
        bg="white"
        textColor="dark"
        size="sm"
        bgImage=""
        bgImageOpacity={1}
        title="Old MacDonald's Handprint Farm"
        subtitle=""
        buttonText="Buy on Amazon"
        buttonColor="light"
        buttonOnClick={() => {
          window.open("https://www.amazon.com/Old-MacDonalds-Handprint-Farm-Goodday/dp/B08LGB4G94");
          //router.push('');
        }}
      />
      <Instructions
        bg="white"
        textColor="dark"
        size="md"
        bgImage=""
        bgImageOpacity={1}
        title="Instructions"
        subtitle="Here are some ideas for illustrating your book. Feel free to use these ideas or come up with your own!"
      />
      <Example
        bg="white"
        textColor="dark"
        size="md"
        bgImage=""
        bgImageOpacity={1}
        title="Old MacDonald Had a Cow"
        subtitle="E-I-E-I-O"
        image="cow.png"
      />
      <Example
        bg="white"
        textColor="dark"
        size="md"
        bgImage=""
        bgImageOpacity={1}
        title="Old MacDonald Had a Duck"
        subtitle="E-I-E-I-O"
        image="duck.png"
      />
      <Example
        bg="white"
        textColor="dark"
        size="md"
        bgImage=""
        bgImageOpacity={1}
        title="Old MacDonald Had a Horse"
        subtitle="E-I-E-I-O"
        image="horse.png"
      />
      <Example
        bg="white"
        textColor="dark"
        size="md"
        bgImage=""
        bgImageOpacity={1}
        title="Old MacDonald Had a Rooster"
        subtitle="E-I-E-I-O"
        image="rooster.png"
      />
      <Example
        bg="white"
        textColor="dark"
        size="md"
        bgImage=""
        bgImageOpacity={1}
        title="Old MacDonald Had a Cat"
        subtitle="E-I-E-I-O"
        image="cat.png"
      />
      <Example
        bg="white"
        textColor="dark"
        size="md"
        bgImage=""
        bgImageOpacity={1}
        title="Old MacDonald Had a Pig"
        subtitle="E-I-E-I-O"
        image="cow.png"
      />
      <Example
        bg="white"
        textColor="dark"
        size="md"
        bgImage=""
        bgImageOpacity={1}
        title="Old MacDonald Had a Dog"
        subtitle="E-I-E-I-O"
        image="cow.png"
      />
      <Example
        bg="white"
        textColor="dark"
        size="md"
        bgImage=""
        bgImageOpacity={1}
        title="Old MacDonald Had a Sheep"
        subtitle="E-I-E-I-O"
        image="cow.png"
      />
      <Example
        bg="white"
        textColor="dark"
        size="md"
        bgImage=""
        bgImageOpacity={1}
        title="Old MacDonald Had a Chicken"
        subtitle="E-I-E-I-O"
        image="chicken.png"
      />
      <Example
        bg="white"
        textColor="dark"
        size="md"
        bgImage=""
        bgImageOpacity={1}
        title="Old MacDonald Had a Farm"
        subtitle="E-I-E-I-O"
        image="cow.png"
      />
    </>
  );
}

export default OldMacdonaldsHandprintFarmPage;
