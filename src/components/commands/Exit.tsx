import { Wrapper } from "../styles/Output.styled";
import { Highlight } from "../styles/Text.styled";

const Exit: React.FC = () => {
  return (
    <Wrapper>
      <p>Saving session...</p>
      <br />
      <p>...copying shared history...</p>
      <br />
      <p>...saving history...truncating history files...</p>
      <br />
      <p>...completed.</p>
      <br />
      <p>Deleting expired sessions... 69 completed.</p>
      <br />
      <br />
      <p>[Process completed]</p>
      <br />
      <br />
      <p>
        actually how about no cuz most browsers disabled{" "}
        <Highlight>window.close()</Highlight> feature due to security measures
        so you can't really just exit the window via javascript code
      </p>
    </Wrapper>
  );
};

export default Exit;
