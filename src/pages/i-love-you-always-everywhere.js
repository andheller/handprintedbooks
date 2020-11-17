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
          window.open("https://www.amazon.com/gp/product/B08M2G214P/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B08M2G214P&linkCode=as2&tag=handprinted-20&linkId=b4ab61cb94c1f66ec6c5b6281482dde2");
          //router.push('');
        }}
      />
      <Instructions
        bg="white"
        textColor="dark"
        size="md"
        bgImage=""
        bgImageOpacity={1}
        title="Illustration Ideas"
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
        subtitle=""
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
        subtitle=""
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
        subtitle=""
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
        subtitle=""
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
        subtitle=""
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
        subtitle=""
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
        subtitle=""
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
        subtitle=""
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
        subtitle=""
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
        subtitle=""
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
        subtitle=""
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
        subtitle=""
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
        subtitle=""
        image="crazyHair.png"
      />
    </>
  );
}

export default ILoveYouAlwaysEverywherePage;
