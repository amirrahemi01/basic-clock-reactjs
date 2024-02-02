import { UPDATE_LOG, UPDATE_SPLIT_LOG, RESET_LOGS } from "../actions/logAction";
import { Log } from "../../types";

type State = {
  logs: Log[];
  splitLogs: Log[];
};

const initialState: State = {
  logs: [],
  splitLogs: [],
};

type ActionType = {
  payload: {
    actionType: string;
    time: number;
  };
  type: string;
};

const logReducer = (state: State = initialState, action: ActionType): State => {
  const { payload, type } = action;
  switch (type) {
    case UPDATE_LOG:
      return {
        ...state,
        logs: [
          ...state.logs,
          {
            action: payload.actionType,
            time: payload.time,
          },
        ],
      };

    case UPDATE_SPLIT_LOG:
      return {
        ...state,
        splitLogs: [
          {
            action: payload.actionType,
            time: payload.time,
          },
        ],
      };

    case RESET_LOGS:
      return {
        logs: [],
        splitLogs: [],
      };

    default:
      return state;
  }
};


export default logReducer;