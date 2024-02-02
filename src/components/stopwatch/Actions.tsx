import React from 'react'
import { updateTimerState } from '../../services/redux/actions/timerActions';
import { updateSplitLog, updateLog } from '../../services/redux/actions/logAction';
import { EVENTS } from '../../services/constants';
import { ReduxStoreState } from '../../services/types';
import { bindActionCreators } from 'redux';
import { connect } from "react-redux";

type StoreProps = {
  timerState: boolean,
  currentTime: number
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
    handleReset
  } = props;

  return (
    <div className="action-btns">
      {timerState === false ? (
        <button
          className="bg-green-600"
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
          className="bg-red-600"
          onClick={() => {
            updateTimerState(false);
            handleStop();
            updateLog(EVENTS.PAUSE, currentTime);
          }}
        >
          PAUSE
        </button>
      )}

      <button
        className="action-split" 
        onClick={() => {
          updateLog(EVENTS.SPLIT, currentTime);
          updateSplitLog(EVENTS.SPLIT, currentTime);
        }}
        disabled = {timerState === false}
      >
        SPLIT
      </button>

      <button
        className="action-reset" 
        onClick={() => {
          handleReset();
        }}
        disabled = {timerState === true}
      >
        RESET
      </button>

    </div>
  );
};

const mapStateToProps = ({
  timer: { timerState, currentTime },
}: ReduxStoreState): StoreProps => ({
  timerState,
  currentTime
});

const mapDispatchToProps = (dispatch: any): DispathProps => {
  return bindActionCreators(
    {
      updateTimerState,
      updateLog,
      updateSplitLog
    },
    dispatch
  );
};

export default connect<StoreProps, DispathProps, OwnProps, ReduxStoreState>(
  mapStateToProps,
  mapDispatchToProps
)(Action);