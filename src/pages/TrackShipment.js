import { useState } from "react";

import API from "../services/api";

function TrackShipment() {
  const [trackingId, setTrackingId] = useState("");
  const [data, setData] = useState(null);

  const handleTrack = async () => {
    try {
      const res = await API.get(`/track/${trackingId}`);

      setData(res.data);
    } catch (error) {
      alert("Tracking Failed");
    }
  };

  return (
    <div className="container mt-5">
      <div className="card p-4 shadow">
        <h2>Track Shipment</h2>

        <input
          type="text"
          placeholder="Enter Tracking ID"
          className="form-control mb-3"
          onChange={(e) => setTrackingId(e.target.value)}
        />

        <button
          className="btn btn-success"
          onClick={handleTrack}
        >
          Track
        </button>

        {data && (
          <div className="mt-4">
            <h4>Status: {data.shipment.status}</h4>

            <h5>Tracking Timeline</h5>

            {data.tracking.map((item) => (
              <div
                key={item.id}
                className="border p-3 mb-2"
              >
                <p>Status: {item.status}</p>
                <p>Location: {item.location}</p>
                <p>Remarks: {item.remarks}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default TrackShipment;