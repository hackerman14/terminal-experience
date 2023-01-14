import { useContext } from "react";
import _ from "lodash";
import { termContext } from "../Terminal";

const Invite: React.FC = () => {
  const { history, rerender } = useContext(termContext);

  /* ===== get current command ===== */
  const currentCommand = _.split(history[0], " ");

  /* ===== check current command makes redirect ===== */
  if (rerender && currentCommand[0] === "invite") {
    window.open(
      "https://discord.com/api/oauth2/authorize?client_id=619613322903420929&permissions=274878024704&scope=bot%20applications.commands"
    );
  }

  return <span>Opened a window to invite the bot to your Discord server.</span>;
};

export default Invite;
