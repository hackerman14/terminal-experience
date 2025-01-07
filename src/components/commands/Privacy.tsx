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
        <strong>No Tracking</strong>: We do not use Google Analytics or any
        other tracking services to monitor user activity.
      </p>
      <p>
        <strong>Hosting and Security</strong>: Our website is hosted on GitHub,
        with connections secured through Cloudflare.
      </p>
      <br />
      <Highlight>Bot Related</Highlight>
      <p>
        <strong>API Usage</strong>: Our bot utilizes data from multiple APIs
        available on the internet. However, we do not collect or store any
        personal data from these interactions.
      </p>
      <p>
        <strong>Discord Data</strong>: All data related to Discord interactions
        are obtained through the Discord API and are handled in accordance with
        the Discord Developer Policy. We do not retain or store any personal
        data from these interactions.
      </p>
    </Wrapper>
  );
};

export default Privacy;
