import React, {useState} from "react";
import Navbar from "../Navbar/Navbar";
import AddOffer from "./AddOffer"

const OfferSection = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <AddOffer show={show} onHide={()=>setShow(false)} />
      <Navbar />
      <div className="pc1">
        <div className="pc2">
          <h3>Offer Section</h3>
          <button onClick={()=>setShow(true)}>New Section</button>
        </div>
        <div className="pc3">
          <div className="pc4">
            <div className="pc5">
              <h6>Show</h6>
              <select>
                <option value="10">10</option>
                <option value="10">25</option>
                <option value="10">50</option>
              </select>
              <h6>entries</h6>
            </div>
            <div className="pc6">
              <h6>Search : </h6>
              <input type="text" placeholder="Search here...." />
            </div>
          </div>
          <div className="pc7">
            <table>
              <thead>
                <tr>
                  <th className="th1">#</th>
                  <th className="th3">P Category</th>
                  <th className="th6">Services</th>
                  <th className="th6">Section</th>
                  <th className="th6">Status</th>
                  <th className="th7">Action</th>
                </tr>
              </thead>
              <tbody>
              </tbody>
            </table>
            {/* <div className="pc8">
              <h6>Showing 1 to 9 of 9 entries</h6>
              <ul className="pc9">
                <li>Previous</li>
                <li className="pagiBtn">1</li>
                <li className="pagiBtn">2</li>
                <li className="pagiBtn">3</li>
                <li className="pagiBtn">4</li>
                <li>Next</li>
              </ul>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default OfferSection;
