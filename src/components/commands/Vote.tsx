import { useContext } from "react";
import _ from "lodash";
import { termContext } from "../Terminal";

const Vote: React.FC = () => {
  const { history, rerender } = useContext(termContext);

  /* ===== get current command ===== */
  const currentCommand = _.split(history[0], " ");

  /* ===== check current command makes redirect ===== */
  if (rerender && currentCommand[0] === "vote") {
    window.open("https://top.gg/bot/619613322903420929/vote");
  }

  return <span>Opened a window to vote for the bot.</span>;
};

export default Vote;
