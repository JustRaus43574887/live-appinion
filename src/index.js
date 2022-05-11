import { render } from "preact";

import Widget from "./widget/Widget";

export function init(token) {
  const widDiv = document.createElement("div");
  widDiv.id = "live-appinion-root";
  document.body.append(widDiv);

  render(
    <Widget token={token} />,
    document.getElementById("live-appinion-root")
  );
}

if (module.hot) init("60fd85cd9bd7c728dc2174e0");
