import { Highlight } from "../styles/Text.styled";
import { Wrapper } from "../styles/Output.styled";

const Privacy: React.FC = () => {
  return (
    <Wrapper>
      <p>
        I take privacy seriously, so I will explain about our services. (I don't
        know how to actually make a privacy policy, so I'mma just talk whatever
        that I know of)
      </p>
      <br />
      <Highlight>Website Related</Highlight>
      <p>
        I don't track users with Google Analytics or any types of trackers. The
        website is hosted on Cloudflare, subdomain provided by Cloudflare as
        well.
      </p>
      <br />
      <Highlight>Bot Related</Highlight>
      <p>
        I don't store any types of file such as user logs, or any kinds of
        files. (Or the fact I don't know how to store them?)
      </p>
    </Wrapper>
  );
};

export default Privacy;
