import React, { useRef } from 'react'
import Timer from './Timer';
import SplitTimer from './SplitTimer';
import Actions from './Actions';
import LogTable from './LogTable';
import { ReduxStoreState } from '../../services/types';
import { bindActionCreators } from 'redux';
import { updateTimer, resetTimer } from "../../services/redux/actions/timerActions";
import { resetLogs } from "../../services/redux/actions/logAction";
import { connect } from 'react-redux';

type StoreProps = {
  currentTime: number;
};

type DispathProps = {
  updateTimer: (newTime: number) => void;
  resetTimer: () => void;
  resetLogs: () => void;
};

type Props = StoreProps & DispathProps;

let timer!: ReturnType<typeof setTimeout>;

const MainStopWatch = (props: Props) => {

  const timerStartRef = useRef(0);

  const startTimer = () => {
    const { currentTime } = props;
    timerStartRef.current = Date.now() - currentTime;

    timer = setInterval(() => {
      const { updateTimer } = props;
      updateTimer(Date.now() - timerStartRef.current);
    }, 1);
  };

  const stopTimer = () => {
    clearInterval(timer);
  };

  const resetTheTimer = () => {
    const { resetTimer, resetLogs } = props;
    resetTimer();
    resetLogs();
  };

  return (
    <div className="app-container">
    <div className="stopwatch-box">
      <Timer />
      <SplitTimer />
      <Actions
        handleStart={startTimer}
        handleStop={stopTimer}
        handleReset={resetTheTimer}
      />
      <LogTable />
    </div>
  </div>
  )
}

const mapStateToProps = ({
  timer: { currentTime },
}: ReduxStoreState): StoreProps => ({
  currentTime,
});

const mapDispatchToProps = (dispatch: any): DispathProps => {
  return bindActionCreators(
    {
      updateTimer,
      resetTimer,
      resetLogs,
    },
    dispatch
  );
};

export default connect<StoreProps, DispathProps, ReduxStoreState>(
  mapStateToProps,
  mapDispatchToProps
)(MainStopWatch);