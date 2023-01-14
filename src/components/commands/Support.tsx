import { Highlight, Link } from "../styles/Text.styled";
// import { useContext } from "react";
// import _ from "lodash";
import { Wrapper } from "../styles/Output.styled";
// import { termContext } from "../Terminal";

const Support: React.FC = () => {
  // const { history, rerender } = useContext(termContext);

  /* ===== get current command ===== */
  // const currentCommand = _.split(history[0], " ");

  // if (rerender && currentCommand[0] === "support" && currentCommand.length <= 1) {
  //   window.open("mailto:" + "contact@satnaing.dev", "_self");
  // }
  return (
    <Wrapper>
      <p>
        For faster response, please contact me via{" "}
        <Link href="https://discord.gg/sZmg77n5EC">Discord support server</Link>
      </p>
      <p>
        If you want to contact me via email, please send an email to{" "}
        <Highlight>raymondhsu [at] duck.com</Highlight>
      </p>
    </Wrapper>
  );
};

export default Support;
