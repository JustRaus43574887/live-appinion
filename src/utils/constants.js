export const socketEndpoint = "https://api.appinion.digital";
export const apiEndpoint = "https://api.appinion.digital/graphql";
export const peerConfig = {
  config: {
    iceServers: [
      {
        urls: "turn:www.turn.appinion.digital:3478",
        username: "turnuser",
        credential: "HIRM!aung3noow_blop",
      },
      { urls: "stun:www.stun.appinion.digital:3478" },
    ],
  },
  host: "api.appinion.digital",
  secure: true,
  path: "/peerjs/appinion",
};
export const query = `query videoWidget($id: String!) {
  videoWidget(id: $id) {
		location
		name
		position
		mainColor
		utmLabel
    host
    tariffType
    online
    avatar {
      path
    }
  }
}`;
