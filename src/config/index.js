export const config = {
    addressMode: process.env.REACT_APP_ADDRESS_MODE,
    api: process.env.REACT_APP_FE_API_GATEWAY,
    ssoAPI: process.env.REACT_APP_SSO_FE_API_GATEWAY,
    firebaseConfig: JSON.parse(process.env.REACT_APP_FIREBASE_CONFIG),
    googleMapAPI: process.env.REACT_APP_GOOGLE_MAP_API,
    project: process.env.REACT_APP_PROJECT_MODE,
    timer: 1 * 60 * 100, // millisecond
    version: process.env.REACT_APP_PROJECT_VERSION,
    wsReconnectInterval: 3 * 1000, // millisecond
    wsURL: process.env.REACT_APP_FE_WS_GATEWAY,
    v1URL: process.env.REACT_APP_V1_WEB
};
