import React from "react";
import Navbar from "../Navbar/Navbar";
import { useNavigate } from "react-router-dom";

const EditServices = () => {
  const navigate = useNavigate();
  return (
    <>
      <Navbar />
      <div className="pc1">
        <div className="pc2">
          <h3>Edit Service</h3>
          <button onClick={() => navigate("/services")}>New Service</button>
        </div>
        <div className="pc3">
          <h4 className="addServiceh4">Service Details </h4>
          <hr />
          <div className="addServiceform">
            <form>
              <div className="addService1">
                <div className="addService2">
                  <label>Service Title</label>
                  <input type="text" alt="" placeholder="Service Title" />
                </div>
                <div className="addService2">
                  <label>Regular Price</label>
                  <input type="text" alt="" placeholder="Regular Price" />
                </div>
                <div className="addService2">
                  <label>Sale Price</label>
                  <input type="text" alt="" placeholder="Sale Price" />
                </div>
                <div className="addService2">
                  <label>Discount (%) </label>
                  <input type="text" alt="" placeholder="Discount" />
                </div>
                {/* <div className="addService2">
                        <label>Service Rating</label>
                        <input type="text" alt="" placeholder="Service Rating" />
                    </div> */}
                <div className="addService2">
                  <label>Service Timing</label>
                  <input type="text" alt="" placeholder="Service Timing" />
                </div>
                <div className="addService2">
                  <label>Parent Category</label>
                  <select>
                    <option value="">Parent Category</option>
                    <option value="">Parent C</option>
                    <option value="">Parent Cat</option>
                    <option value="">P Category</option>
                  </select>
                </div>
                <div className="addService2">
                  <label>Child Category</label>
                  <select>
                    <option value="">Child Category</option>
                    <option value="">Parent C</option>
                    <option value="">Parent Cat</option>
                    <option value="">P Category</option>
                  </select>
                </div>
                <div className="addService2">
                  <label>Service Group</label>
                  <select>
                    <option value="">Service Group</option>
                    <option value="">Parent C</option>
                    <option value="">Parent Cat</option>
                    <option value="">P Category</option>
                  </select>
                </div>
                <div className="addService2">
                  <label>Service Type</label>
                  <select>
                    <option value="">Service Type</option>
                    <option value="">Parent C</option>
                    <option value="">Parent Cat</option>
                    <option value="">P Category</option>
                  </select>
                </div>
                <div className="addService2">
                  <label>Service Image</label>
                  <input type="file" placeholder="Choose file" />
                </div>
                <div className="addService2">
                  <label>Status</label>
                  <select>
                    <option value="">Publish</option>
                    <option value="">Unpublish</option>
                  </select>
                </div>
              </div>
              <button className="addServiceButton">Create Service</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditServices;
