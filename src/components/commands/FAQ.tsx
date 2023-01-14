import { Highlight, Link } from "../styles/Text.styled";
import { Wrapper } from "../styles/Output.styled";

const FAQ: React.FC = () => {
  return (
    <Wrapper>
      <Highlight>What's the language of the bot? Library?</Highlight>
      <p>
        It's written in JavaScript, with the library named{" "}
        <Link href="https://discord.js.org">discord.js</Link>.
      </p>
      <br />
      <Highlight>Why the bot isn't working?</Highlight>
      <p>
        Make sure you gave the bot at least "View Channel", "Send Messages" and
        most importantly "Use Application Commands" permissions. If it still
        doesn't work try kicking the bot and re-inviting it back to your server.
        Application returns error? Contact the bot owner to fix it!
      </p>
      <br />
      <Highlight>Why did you code the bot?</Highlight>
      <p>
        In September 2019, in my Discord server had some custom response setup
        with Dyno bot, and someone asked that why does it respond with Dyno
        instead of my bot, so I coded one. At first I'd just want a server bot,
        but now I decided to make it for everyone.
      </p>
      <br />
      <Highlight>Why the bot's name is "hackerman14"?</Highlight>
      <p>
        It was a joke reffering to one of Skeppy's video, which he pretend to be
        a random user in his Discord server listening to people talking in voice
        chat, so he created a Discord user called "hackerman14". If you're
        interested about the video, please{" "}
        <Link href="https://www.youtube.com/watch?v=fNyPTsxakBo">
          click here
        </Link>
        . Fun fact the /skeppy command was a respect to Skeppy.
      </p>
      <br />
      <Highlight>Can I self-host the bot?</Highlight>
      <p>
        Yes, of course you can, but you are not allowed to promote the bot or
        brand the bot as yours, such as telling someone that you made it, then I
        will definitely sue you. I still recommend using the official bot
        instead of self hosting. I made it open source because I had issues
        coding the bot on certain commands and I thought it would be great if
        people needed solutions for the same features they wanted to implement
        from my bot, but not like copying the entire command from my bot.
      </p>
      <br />
      <Highlight>Can I contribute to the bot?</Highlight>
      <p>
        Yes, of course you can, simply open a pull request on the GitHub
        repository, I'll review the code and merge it.
      </p>
      <br />
      <Highlight>Does the bot hack users?</Highlight>
      <p>
        No, the bot doesn't hack Discord servers, nor does the /hack which is
        for fun. Even it is called "hackerman14", the name was just for fun.
        It's 100% safe.
      </p>
      <br />
      <Highlight>
        I have questions, but they aren't listed here. Where can I ask a
        question and get a response?
      </Highlight>
      <p>
        Simply contact me via the support server to request it and I will add
        your questions here!
      </p>
    </Wrapper>
  );
};

export default FAQ;
