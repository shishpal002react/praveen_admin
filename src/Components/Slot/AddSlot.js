import React from "react";
import Navbar from "../Navbar/Navbar";
import { useNavigate } from "react-router-dom";

const AddSlot = () => {
  const navigate = useNavigate();
  return (
    <>
      <Navbar />
      <div className="pc1">
        <div className="pc2">
          <h3>Slot New</h3>
          <button onClick={() => navigate("/slots")}>All Slots</button>
        </div>
        <div className="pc3">
          <div className="addServiceform">
            <form>
              <div className="addSlot1">
                <div className="addService2">
                  <label>Date From</label>
                  <input type="date" alt="" placeholder="" />
                </div>
                <div className="addService2">
                  <label>Date To</label>
                  <input type="date" alt="" placeholder="" />
                </div>
                <div className="addService2">
                  <label>Time From</label>
                  <input type="time" alt="" placeholder="" />
                </div>
                <div className="addService2">
                  <label>Time To</label>
                  <input type="time" alt="" placeholder="" />
                </div>
                <div className="addService2">
                  <label> Select Duration</label>
                  <select>
                    <option value="">Select Duration</option>
                    <option value="">Parent C</option>
                    <option value="">Parent Cat</option>
                    <option value="">P Category</option>
                  </select>
                </div>
                <div className="addService2">
                  <label>Job Acceptance</label>
                  <input type="text" alt="" placeholder="Rating" />
                </div>
                <div className="addService2">
                  <label>Select Category</label>
                  <select>
                    <option value="">Select Category</option>
                    <option value="">Parent C</option>
                    <option value="">Parent Cat</option>
                    <option value="">P Category</option>
                  </select>
                </div>

              </div>
              <button className="addServiceButton">Create Slot</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddSlot;
