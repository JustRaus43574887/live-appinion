import { useContext } from "preact/hooks";
import { Fragment } from "preact";

import ControlContext from "../../../context/ControlContext";

import DefaultMessage from "./DefaultMessage";
import PandingMessage from "./PandingMessage";
import OfferMessage from "./OfferMessage";
import StopMessage from "./StopMessage";

const Message = ({ message }) => {
  const { data } = useContext(ControlContext);

  switch (message.type) {
    case "default":
      return (
        <DefaultMessage
          message={message}
          color={data.mainColor}
          avatar={data.avatar}
        />
      );
    case "join":
      return <PandingMessage color={data.mainColor} />;
    case "live-start":
      return <OfferMessage color={data.mainColor} message={message} />;
    case "live-end":
      return <StopMessage />;
    default:
      return <Fragment />;
  }
};

export default Message;
