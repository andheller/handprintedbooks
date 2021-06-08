import React from "react";
import "styles/global.scss";
import NavbarCustom from "components/NavbarCustom";
import Footer from "components/Footer";


function MyApp({ Component, pageProps }) {
  return (
    <>
      <NavbarCustom
        bg="white"
        variant="light"
        expand="md"
        logo="handprintedlogo.svg"
      />

      <Component {...pageProps} />

      <Footer
        bg="light"
        textColor="dark"
        size="sm"
        bgImage=""
        bgImageOpacity={1}
        description="A short description of what you do here"
        copyright="© 2021 Handprinted Books"
        logo="handprintedlogo.svg"
      />
    </>
  );
}

export default MyApp;
