import { useContext } from "preact/hooks";
import "../css/expandFalse.css";

import Text from "../components/Text/Text";
import ArrowOpen from "../images/arrowOpen.svg";

import ControlContext from "../context/ControlContext";

const ExpandFalse = () => {
  const { setExpand } = useContext(ControlContext);
  const handleExpand = () => setExpand(true);

  return (
    <div className="expand-false" onClick={handleExpand}>
      <div className="live">
        <div className="live-indicator" />
        <Text weight={700} lineHeight={"22px"} letterSpacing="0.05em">
          LIVE
        </Text>
        <div className="live-open">
          <img src={ArrowOpen} alt="arrowOpen" />
        </div>
      </div>

      <Text marginTop={"10px"} weight={700}>
        Онлайн-консультация
      </Text>
      <Text marginTop={"10px"} size={"12px"} lineHeight={"15px"}>
        Доступно с 10:00 до 22:00 по МСК
      </Text>
    </div>
  );
};

export default ExpandFalse;
