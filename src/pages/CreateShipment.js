import { useState } from "react";

import API from "../services/api";

function CreateShipment() {
  const [formData, setFormData] = useState({
    sender_name: "",
    sender_address: "",
    sender_phone: "",
    receiver_name: "",
    receiver_address: "",
    receiver_phone: "",
    parcel_type: "",
    weight: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await API.post("/parcels", formData);

      alert(`Tracking ID: ${res.data.trackingId}`);
    } catch (error) {
      alert("Shipment Creation Failed");
    }
  };

  return (
    <div className="container mt-5">
      <div className="card p-4 shadow">
        <h2>Create Shipment</h2>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="sender_name"
            placeholder="Sender Name"
            className="form-control mb-3"
            onChange={handleChange}
          />

          <input
            type="text"
            name="sender_address"
            placeholder="Sender Address"
            className="form-control mb-3"
            onChange={handleChange}
          />

          <input
            type="text"
            name="sender_phone"
            placeholder="Sender Phone"
            className="form-control mb-3"
            onChange={handleChange}
          />

          <input
            type="text"
            name="receiver_name"
            placeholder="Receiver Name"
            className="form-control mb-3"
            onChange={handleChange}
          />

          <input
            type="text"
            name="receiver_address"
            placeholder="Receiver Address"
            className="form-control mb-3"
            onChange={handleChange}
          />

          <input
            type="text"
            name="receiver_phone"
            placeholder="Receiver Phone"
            className="form-control mb-3"
            onChange={handleChange}
          />

          <input
            type="text"
            name="parcel_type"
            placeholder="Parcel Type"
            className="form-control mb-3"
            onChange={handleChange}
          />

          <input
            type="number"
            name="weight"
            placeholder="Weight"
            className="form-control mb-3"
            onChange={handleChange}
          />

          <button className="btn btn-primary">
            Create Shipment
          </button>
        </form>
      </div>
    </div>
  );
}

export default CreateShipment;