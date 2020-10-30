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
      embedUrl="https://www.youtube.com/embed/z9Ul9ccDOqE"
    />
  );
}

export default TipsPage;
