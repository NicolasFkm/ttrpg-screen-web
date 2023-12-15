import configs from '../../configs';

const BASE_URL = configs.env.WS_BASE_URL;
export type wsCallback = (ev: MessageEvent<any>) => any;

export const getRealTimeData = (
  url: string,
  onMessage: wsCallback,
  onError?: wsCallback,
  onOpen?: wsCallback
) => {
  const ws = new WebSocket(`${BASE_URL}${url}`);

  ws.onmessage = onMessage;
};
