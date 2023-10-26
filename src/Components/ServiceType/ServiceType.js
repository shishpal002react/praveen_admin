import React, {useState} from "react";
import Navbar from "../Navbar/Navbar";
import AddServiceType from "./AddServiceType";
import 'bootstrap/dist/css/bootstrap.min.css';


const ServiceType = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <AddServiceType show={show} onHide={()=>setShow(false)} />
      <Navbar />
      <div className="pc1">
        <div className="pc2">
          <h3>Service Types</h3>
          <button onClick={()=>setShow(true)}>New Type</button>
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
                  <th className="th3">Type</th>
                  <th className="th6">Status</th>
                  <th className="th7">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr className="odd">
                  <td>1</td>
                  <td>mask</td>
                  <td>
                    <span className="badge badge-primary">Publish</span>
                  </td>
                  <td>
                    <button className="editBtn">
                      <i class="fa fa-edit"></i>
                    </button>
                    <button className="deleteBtn">
                      <i class="fa-solid fa-trash"></i>
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>AC </td>
                  <td>
                    <span className="badge badge-primary">Publish</span>
                  </td>
                  <td>
                    <button className="editBtn">
                      <i class="fa fa-edit"></i>
                    </button>
                    <button className="deleteBtn">
                      <i class="fa-solid fa-trash"></i>
                    </button>
                  </td>
                </tr>
                <tr className="odd">
                  <td>3</td>
                  <td> Mani-Pedi Combo</td>
                  <td>
                    <span className="badge badge-primary">Publish</span>
                  </td>
                  <td>
                    <button className="editBtn">
                      <i class="fa fa-edit"></i>
                    </button>
                    <button className="deleteBtn">
                      <i class="fa-solid fa-trash"></i>
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>Cheryls</td>
                  <td>
                    <span className="badge badge-primary">Publish</span>
                  </td>
                  <td>
                    <button className="editBtn">
                      <i class="fa fa-edit"></i>
                    </button>
                    <button className="deleteBtn">
                      <i class="fa-solid fa-trash"></i>
                    </button>
                  </td>
                </tr>
                <tr className="odd">
                  <td>5</td>
                  <td>Oxy</td>
                  <td>
                    <span className="badge badge-primary">Publish</span>
                  </td>
                  <td>
                    <button className="editBtn">
                      <i class="fa fa-edit"></i>
                    </button>
                    <button className="deleteBtn">
                      <i class="fa-solid fa-trash"></i>
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>6</td>
                  <td>Cheryls</td>
                  <td>
                    <span className="badge badge-primary">Publish</span>
                  </td>
                  <td>
                    <button className="editBtn">
                      <i class="fa fa-edit"></i>
                    </button>
                    <button className="deleteBtn">
                      <i class="fa-solid fa-trash"></i>
                    </button>
                  </td>
                </tr>
                <tr className="odd">
                  <td>7</td>
                  <td>Oxy</td>
                  <td>
                    <span className="badge badge-primary">Publish</span>
                  </td>
                  <td>
                    <button className="editBtn">
                      <i class="fa fa-edit"></i>
                    </button>
                    <button className="deleteBtn">
                      <i class="fa-solid fa-trash"></i>
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="pc8">
              <h6>Showing 1 to 9 of 9 entries</h6>
              <ul className="pc9">
                <li>Previous</li>
                <li className="pagiBtn">1</li>
                <li className="pagiBtn">2</li>
                <li className="pagiBtn">3</li>
                <li className="pagiBtn">4</li>
                <li>Next</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceType;
