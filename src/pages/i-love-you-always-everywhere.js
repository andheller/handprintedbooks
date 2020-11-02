import React from "react";
import Header from "components/Header";
import Instructions from "components/Instructions";
import Example from "components/Example";
import { useRouter } from "next/router";
import Head from 'next/head';

function ILoveYouAlwaysEverywherePage(props) {
  const router = useRouter();

  return (
    <>
     <Head>
        <title>I Love You Always, Everywhere</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header
        bg="white"
        textColor="dark"
        size="sm"
        bgImage=""
        bgImageOpacity={1}
        title="I Love You Always, Everywhere"
        subtitle=""
        buttonText="Buy on Amazon"
        buttonColor="light"
        buttonOnClick={() => {
          window.open("https://www.amazon.com/dp/B08M2G214P");
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
        subtitle="This is how we did ours, but it is not the definitive guide to illustrating your book. "
      />

      <Example
        bg="white"
        textColor="dark"
        size="md"
        bgImage=""
        bgImageOpacity={1}
        title="
        I love you each 
        and every day.
        
        I love you many
         different ways.
        "
        subtitle="I Love you"
        image="manyDifferent.png"
      />
      <Example
        bg="white"
        textColor="dark"
        size="md"
        bgImage=""
        bgImageOpacity={1}
        title=" 
        I love you in the 
        morning.

        I love you in the 
        night."
        subtitle="I Love you"
        image="morningNight.png"
      />
      <Example
        bg="white"
        textColor="dark"
        size="md"
        bgImage=""
        bgImageOpacity={1}
        title="
        I love you when your 
        pants are tight.

        I love you with all 
        my might.
        "
        subtitle="I Love you"
        image="tightPants.png"
      />
      <Example
        bg="white"
        textColor="dark"
        size="md"
        bgImage=""
        bgImageOpacity={1}
        title="
        I love you when you’re close.

        I love you when you’re far.
        "
        subtitle="I Love you"
        image="closeFar.png"
      />
      <Example
        bg="white"
        textColor="dark"
        size="md"
        bgImage=""
        bgImageOpacity={1}
        title="
        I love you even when we have to see you from the car."
        subtitle="I Love you"
        image="car.png"
      />
      <Example
        bg="white"
        textColor="dark"
        size="md"
        bgImage=""
        bgImageOpacity={1}
        title="
        I love you on the screen.
        "
        subtitle="I Love you"
        image="screen.jpg"
      />
      <Example
        bg="white"
        textColor="dark"
        size="md"
        bgImage=""
        bgImageOpacity={1}
        title="
        I love you on Halloween."
        subtitle="I Love you"
        image="halloween.png"
      />
      <Example
        bg="white"
        textColor="dark"
        size="md"
        bgImage=""
        bgImageOpacity={1}
        title="
        I love you when it’s noon.
        I love you to the moon!"
        subtitle="I Love you"
        image="moon.png"
      />
      <Example
        bg="white"
        textColor="dark"
        size="md"
        bgImage=""
        bgImageOpacity={1}
        title="
        I love you when you’re out of sight.
        I love you when we fly a kite."
        subtitle="I Love you"
        image="kite.png"
      />
       <Example
        bg="white"
        textColor="dark"
        size="md"
        bgImage=""
        bgImageOpacity={1}
        title="
        I love you when I lose my cool.
        I love you when we splash in the pool.
        "
        subtitle="I Love you"
        image="swim.png"
      />
      <Example
        bg="white"
        textColor="dark"
        size="md"
        bgImage=""
        bgImageOpacity={1}
        title="
        I love you when we’re having fun.
        "
        subtitle="I Love you"
        image="camp.png"
      />
      <Example
        bg="white"
        textColor="dark"
        size="md"
        bgImage=""
        bgImageOpacity={1}
        title="
        I love you when we’re having none.
        "
        subtitle="I Love you"
        image="campRain.png"
      />
      <Example
        bg="white"
        textColor="dark"
        size="md"
        bgImage=""
        bgImageOpacity={1}
        title="
        I love you when you have crazy hair.
        I love you always, everywhere.
        "
        subtitle="I Love you"
        image="crazyHair.png"
      />
    </>
  );
}

export default ILoveYouAlwaysEverywherePage;
