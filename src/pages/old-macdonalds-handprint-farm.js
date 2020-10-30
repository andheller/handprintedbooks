import React from "react";
import Header from "components/Header";
import Instructions from "components/Instructions";
import ImageLeft from "components/ImageLeft";
import { useRouter } from "next/router";

function OldMacdonaldsHandprintFarmPage(props) {
  const router = useRouter();

  return (
    <>
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
      <ImageLeft
        bg="white"
        textColor="dark"
        size="md"
        bgImage=""
        bgImageOpacity={1}
        title="Your landing page title here"
        subtitle="This landing page is perfect for showing off your awesome product and driving people to sign up for a <b>paid plan."
        image="https://uploads.divjoy.com/undraw-beer_celebration_cefj.svg"
      />
      <ImageLeft
        bg="white"
        textColor="dark"
        size="md"
        bgImage=""
        bgImageOpacity={1}
        title="Your landing page title here"
        subtitle="This landing page is perfect for showing off your awesome product and driving people to sign up for a <b>paid plan."
        image="https://uploads.divjoy.com/undraw-beer_celebration_cefj.svg"
      />
    </>
  );
}

export default OldMacdonaldsHandprintFarmPage;
