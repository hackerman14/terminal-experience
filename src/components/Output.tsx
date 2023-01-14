import Clear from "./commands/Clear";
import Echo from "./commands/Echo";
import Exit from "./commands/Exit";
import FAQ from "./commands/FAQ";
import GeneralOutput from "./commands/GeneralOutput";
import Help from "./commands/Help";
import History from "./commands/History";
import Invite from "./commands/Invite";
import Privacy from "./commands/Privacy";
import Support from "./commands/Support";
import Themes from "./commands/Themes";
import ToS from "./commands/ToS";
import Vote from "./commands/Vote";
import Welcome from "./commands/Welcome";
import { OutputContainer, UsageDiv } from "./styles/Output.styled";
import { termContext } from "./Terminal";
import { useContext } from "react";

type Props = {
  index: number;
  cmd: string;
};

const Output: React.FC<Props> = ({ index, cmd }) => {
  const { arg } = useContext(termContext);

  const specialCmds = ["themes", "echo"];

  // return 'Usage: <cmd>' if command arg is not valid
  // eg: about tt
  if (!specialCmds.includes(cmd) && arg.length > 0)
    return <UsageDiv data-testid="usage-output">Usage: {cmd}</UsageDiv>;

  return (
    <OutputContainer data-testid={index === 0 ? "latest-output" : null}>
      {
        {
          clear: <Clear />,
          echo: <Echo />,
          exit: <Exit />,
          faq: <FAQ />,
          help: <Help />,
          history: <History />,
          invite: <Invite />,
          privacy: <Privacy />,
          pwd: <GeneralOutput>/home/hackerman14</GeneralOutput>,
          support: <Support />,
          themes: <Themes />,
          tos: <ToS />,
          vote: <Vote />,
          welcome: <Welcome />,
          whoami: <GeneralOutput>i don't know lol</GeneralOutput>,
        }[cmd]
      }
    </OutputContainer>
  );
};

export default Output;
