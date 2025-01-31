import { UsageDiv } from "./styles/Output.styled";

type Props = {
  cmd: "themes";
  marginY?: boolean;
};

const arg = {
  themes: { placeholder: "theme-name", example: "ubuntu" },
};

const Usage: React.FC<Props> = ({ cmd, marginY = false }) => {
  const action = cmd === "themes" ? "set" : "go";
  return (
    <UsageDiv data-testid={`${cmd}-invalid-arg`} marginY={marginY}>
      Usage: {cmd} {action} &#60;{arg[cmd].placeholder}&#62; <br />
      eg: {cmd} {action} {arg[cmd].example}
    </UsageDiv>
  );
};

export default Usage;
