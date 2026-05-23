import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <div className="container mt-5">
      <h1>SwiftTrack Dashboard</h1>

      <div className="row mt-4">
        <div className="col-md-4">
          <div className="card p-4 shadow">
            <h4>Create Shipment</h4>
            <Link to="/create" className="btn btn-primary mt-2">
              Open
            </Link>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card p-4 shadow">
            <h4>Track Shipment</h4>
            <Link to="/track" className="btn btn-success mt-2">
              Track
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;