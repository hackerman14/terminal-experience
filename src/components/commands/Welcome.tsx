import {
  Cmd,
  HeroContainer,
  Link,
  PreName,
  PreNameMobile,
  PreWrapper,
  Seperator,
} from "../styles/Welcome.styled";

const Welcome: React.FC = () => {
  return (
    <HeroContainer data-testid="welcome">
      <div className="info-section">
        <PreName>
          {`        
╔═╗──────────────╔═╗─────────────────────────────────╔═╦═╗─╔═╗
║ ║──────────────║ ║───────────────────────────────╔═╝ ║ ║─║ ║
║ ╚═══╦═════╦════╣ ║╔═╦════╦════╦═══════╦════╦════╗╚═╗ ║ ╚═╝ ║
║ ╔═╗ ║ ╔═╗ ║ ╔══╣ ╚╝═╣ ║══╣ ╔══╣ ╔╗ ╔╗ ║ ╔╗ ║ ╔═╗ ╗ ║ ╠═══╗ ║
║ ║ ║ ║ ╔═╗ ║ ╚══╣ ╔╗═╣ ║══╣ ║  ║ ║║ ║║ ║ ╔╗ ║ ║ ║ ╠═╝ ╚╗──║ ║
╚═╝ ╚═╩═╝ ╚═╩════╩═╝╚═╩════╩═╝  ╚═╝╚═╝╚═╩═╝╚═╩═╝ ╚═╩════╝──╚═╝
          `}
        </PreName>
        <PreWrapper>
          <PreNameMobile>
            {`
██╗░░░░░░░███╗░░░░██╗██╗
██║░░░░░░████║░░░██╔╝██║
███████╗██╔██║░░██╔╝░██║
██╔══██║╚═╝██║░░███████║
██║░░██║███████╗╚════██║
╚═╝░░╚═╝╚══════╝░░░░░╚═╝ 
          `}
          </PreNameMobile>
        </PreWrapper>
        <div>Welcome to hackerman14 Terminal Experience. (Version 1.3.1)</div>
        <Seperator>----</Seperator>
        <div>
          This project's was forked from Sat Naing's amazing work, click the
          link to check out the{" "}
          <Link href="https://github.com/satnaing/terminal-portfolio">
            GitHub repo
          </Link>
          .
        </div>
        <Seperator>----</Seperator>
        <div>
          For a list of available commands, type `<Cmd>help</Cmd>`.
        </div>
      </div>
    </HeroContainer>
  );
};

export default Welcome;
