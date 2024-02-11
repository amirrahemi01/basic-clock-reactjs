import { connect } from "react-redux";
import cleanTime from "../../services/utils/cleanTime";
import { ReduxStoreState } from "../../services/types";

type StoreProps = {
  logs: any;
};

type Props = StoreProps;

const LogTable = (props: Props) => {
  const { logs } = props;

  const timerColors = (action: string) => {
    switch (action) {
      case "START":
        return "text-green-100";
      case "PAUSE":
        return "text-red-100";
      case "SPLIT":
        return "text-white";
      default:
        return "text-white";
    }
  };

  return logs.map((item: { action: string; time: number }, i: number) => (
    <>
      <div className="log-formatting gird grid-cols-2 text-1xl sm:text-2xl flex justify-between" key={i}>
        <td className={ timerColors(item.action) }>Lap {i + 1}</td>
        <td className={ timerColors(item.action) }>
          {cleanTime(item.time)}
        </td>
        {/* <td>{item.action}</td> */}
      </div>
    </>
  ));
};

const mapStateToProps = ({ log: { logs } }: ReduxStoreState): StoreProps => ({
  logs,
});

export default connect<StoreProps, ReduxStoreState>(mapStateToProps)(LogTable);
