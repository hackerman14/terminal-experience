import { User, WebsiteName, Wrapper } from "./styles/TerminalInfo.styled";

const TermInfo = () => {
  return (
    <Wrapper>
      <User>guest</User>@<WebsiteName>hackerman14-terminal</WebsiteName>:~$
    </Wrapper>
  );
};

export default TermInfo;
