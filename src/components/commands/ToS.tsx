import { Highlight, Link } from "../styles/Text.styled";
import { Wrapper } from "../styles/Output.styled";

const ToS: React.FC = () => {
  return (
    <Wrapper>
      <Highlight>Intoduction</Highlight>
      <p>
        Welcome to hackerman14's Terms of Service. This document is a legal
        agreement between Discord Templates ("hackerman14.tk",
        "hackerman14.github.io", “us,” “our,” or "we") and you ("you" or
        “your”). By accessing our services, Discord "Bot" and Website,
        accessible from Discord servers and{" "}
        <Link href="https://h14.pages.dev">https://h14.pages.dev</Link>, you are
        agreeing to be bound by our Terms of Service and agree that you are
        responsible for the agreement with any applicable local laws. You agree
        that you are 13 years of age and the minimum age of digital consent in
        your country. If you are between 13 (or the minimum age of digital
        consent, as applicable) and the age of majority in your jurisdiction,
        you agree that your legal guardian has reviewed and agrees to these
        terms. If you disagree with any of these terms, you are prohibited from
        accessing to our services.
      </p>
      <br />
      <Highlight>Services</Highlight>
      <p>
        All our services do not store user data, the "Bot" only fetches data
        from APIs such as Discord, Unsplash, GIPHY, etc.
      </p>
      <br />
      <Highlight>Disclaimer</Highlight>
      <p>
        All the materials on hackerman14's Website are provided "as is".
        hackerman14 makes no warranties, may it be expressed or implied,
        therefore negates all other warranties.
      </p>
    </Wrapper>
  );
};

export default ToS;
