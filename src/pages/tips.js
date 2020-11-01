import React from "react";
import Tips from "components/Tips";

function TipsPage(props) {
  return (
   
    <Tips
      bg="white"
      textColor="dark"
      size="md"
      bgImage=""
      bgImageOpacity={1}
      title="Tips"
      subtitle=""
      embedUrl="https://player.vimeo.com/video/253407838"
    />
  );
}


export default TipsPage;
