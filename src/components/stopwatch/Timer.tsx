import React from 'react'
import cleanTime from '../../services/utils/cleanTime';
import { ReduxStoreState } from '../../services/types'
import { connect } from 'react-redux';

type StoreProps = {
  currentTime: number;
};

type Props = StoreProps;

const Timer = (props: Props) => {
  const { currentTime } = props;

  return (
    <div>
      <h1>{cleanTime(currentTime)}</h1>
    </div>
  );
};

const mapStateToProps = ({
  timer: { currentTime }
}: ReduxStoreState): StoreProps => ({
  currentTime
});

export default connect<StoreProps, ReduxStoreState>(mapStateToProps)(Timer);