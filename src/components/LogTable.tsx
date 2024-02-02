import { connect } from "react-redux";
import cleanTime from "../services/utils/cleanTime";
import { ReduxStoreState } from "../services/types";


type StoreProps = {
  logs: any;
};

type Props = StoreProps;

const LogTable = (props: Props) => {
  const { logs } = props;

  const timerColors = (action: string) => {
    switch (action) {
      case "START":
        return "#03DAC6";
      case "PAUSE":
        return "#FF7597";
      case "SPLIT":
        return "#F9AB25";
      default:
        return "#FFF";
    }
  };

  return logs.map((item: { action: string; time: number }, i: number) => (
    <div className="log-formatting" key={i} >
      <td>Lap{i + 1}</td>
      <td style={{ color: timerColors(item.action) }}>
        {cleanTime(item.time)}
      </td>
      <td>{item.action}</td>
    </div>
  ));
};

const mapStateToProps = ({ log: { logs } }: ReduxStoreState): StoreProps => ({logs})

export default connect<StoreProps, ReduxStoreState>(mapStateToProps)(LogTable)