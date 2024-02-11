import React from "react";
import { updateTimerState } from "../../services/redux/actions/timerActions";
import {
  updateSplitLog,
  updateLog,
} from "../../services/redux/actions/logAction";
import { EVENTS } from "../../services/constants";
import { ReduxStoreState } from "../../services/types";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

type StoreProps = {
  timerState: boolean;
  currentTime: number;
};

type DispathProps = {
  updateTimerState: (timerState: boolean) => void;
  updateLog: (timerAction: string, currentTime: number) => void;
  updateSplitLog: (timerAction: string, currentTime: number) => void;
};

type OwnProps = {
  handleStart: () => void;
  handleStop: () => void;
  handleReset: () => void;
};

type Props = StoreProps & DispathProps & OwnProps;

const Action = (props: Props) => {
  const {
    timerState,
    currentTime,
    updateTimerState,
    updateLog,
    updateSplitLog,
    handleStart,
    handleStop,
    handleReset,
  } = props;

  return (
    <div className="flex mb-5">
      <div className="p-1 mx-9 sm:mx-28">
        {timerState === false ? (
          <button
            className="w-16 h-16 sm:w-24 sm:h-24 rounded-full outline outline-4 outline-gray-500  border-2 border-gray-800 bg-gray-500 text-white"
            onClick={() => {
              handleReset();
            }}
          >
            RESET
          </button>
        ) : (
          <button
            className="w-16 h-16 sm:w-24 sm:h-24 rounded-full outline outline-4 outline-gray-500  border-2 border-gray-800 bg-gray-500 text-white"
            onClick={() => {
              updateLog(EVENTS.SPLIT, currentTime);
              updateSplitLog(EVENTS.SPLIT, currentTime);
            }}
          >
            SPLIT
          </button>
        )}
      </div>

      <div className="p-1 mx-9 sm:mx-28">
        {timerState === false ? (
          <button
            className="w-16 h-16 sm:w-24 sm:h-24 rounded-full outline outline-4 outline-green-700  border-2 border-gray-800 text-white bg-green-700"
            onClick={() => {
              updateTimerState(true);
              handleStart();
              updateLog(EVENTS.START, currentTime);
            }}
          >
            START
          </button>
        ) : (
          <button
            className="w-16 h-16 sm:w-24 sm:h-24 rounded-full outline outline-4 outline-red-600  border-2 border-gray-800 text-white bg-red-600"
            onClick={() => {
              updateTimerState(false);
              handleStop();
              updateLog(EVENTS.PAUSE, currentTime);
            }}
          >
            PAUSE
          </button>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = ({
  timer: { timerState, currentTime },
}: ReduxStoreState): StoreProps => ({
  timerState,
  currentTime,
});

const mapDispatchToProps = (dispatch: any): DispathProps => {
  return bindActionCreators(
    {
      updateTimerState,
      updateLog,
      updateSplitLog,
    },
    dispatch
  );
};

export default connect<StoreProps, DispathProps, OwnProps, ReduxStoreState>(
  mapStateToProps,
  mapDispatchToProps
)(Action);
