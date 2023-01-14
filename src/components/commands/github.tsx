import { useContext } from "react";
import _ from "lodash";
import { termContext } from "../Terminal";

const GitHub: React.FC = () => {
  const { history, rerender } = useContext(termContext);

  /* ===== get current command ===== */
  const currentCommand = _.split(history[0], " ");

  /* ===== check current command makes redirect ===== */
  if (rerender && currentCommand[0] === "invite") {
    window.open("https://github.com/hackerman14/bot-codes");
  }

  return <span>Opened a window to the open source of the bot.</span>;
};

export default GitHub;
