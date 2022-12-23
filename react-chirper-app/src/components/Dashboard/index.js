import { connect } from "react-redux";

const DashboardComponent = ({ tweetIds }) => {
  return (
    <div>
      <h3 className="center"> Your Timeline</h3>
      <ul className="dashboard-list">
        {tweetIds.map((id) => (
          <li key={id}>
            <div>Tweet Id: {id}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => ({
  tweetIds: Object.keys(state.tweets).sort(
    (a, b) => state.tweets[b].timestamp - state.tweets[a].timestamp
  ),
});

export const Dashboard = connect(mapStateToProps)(DashboardComponent);
