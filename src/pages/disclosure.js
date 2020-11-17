import React from "react";
import Header from "components/Header";
import Instructions from "components/Instructions";
import Example from "components/Example";
import { useRouter } from "next/router";
import Head from 'next/head';

function Disclosure(props) {
  const router = useRouter();

  return (
    <>
     <Head>
        <title>Affiliate Disclosure</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header
        bg="white"
        textColor="dark"
        size="sm"
        bgImage=""
        bgImageOpacity={1}
        title="Affiliate Disclosure"
        subtitle="Just so you know, we use Amazon affiliate links when we link to Amazon. There is no additional cost to you, but we earn a small commision if you make a purchase with those links. "
        buttonText=""
        buttonColor="light"
        buttonOnClick={() => {
         // window.open("https://www.amazon.com/gp/product/B08M2G214P/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B08M2G214P&linkCode=as2&tag=handprinted-20&linkId=b4ab61cb94c1f66ec6c5b6281482dde2");
          //router.push('');
        }}
      />
      
      
    </>
  );
}

export default Disclosure;
