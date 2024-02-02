export type ReduxStoreState = {
    log?: {
      logs: Log[];
      splitLogs: Log[];
    };
    timer?: {
      currentTime: number;
      timerState: boolean;
    };
  };
  
  export type Log = {
    action: string;
    time: number;
  };
  