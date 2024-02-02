import React from "react";
import cleanTime from "../services/utils/cleanTime";
import { ReduxStoreState } from "../services/types";
import { connect } from "react-redux";

type StoreProps = { splitLogs: any };

type Props = StoreProps;

const SplitTimer = (props: Props) => {
  const { splitLogs } = props;

  return splitLogs.map((item: { time: number }) => (
    <div className="split-formater">
      <td>{cleanTime(item.time)}</td>
    </div>
  ));
};

const mapStateToProps = ({
  log: { splitLogs },
}: ReduxStoreState): StoreProps => ({
  splitLogs,
});

export default connect<StoreProps, ReduxStoreState>(mapStateToProps)(SplitTimer);
