import { ReactComponent as WelcomeIcon } from "@assets/images/greeting.svg";
import { Button, Result } from "antd";
import React from "react";
const Greeting = () => {
  return (
    <article>
      <Result
        icon={<WelcomeIcon />}
        title="Great, we have done all the operations!"
        extra={<Button type="primary">Next</Button>}
      />
      ,
    </article>
  );
};
export default Greeting;
