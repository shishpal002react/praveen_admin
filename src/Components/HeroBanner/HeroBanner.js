import React, {useState} from "react";
import Navbar from "../Navbar/Navbar";
import AddBanner from "./AddBanner";

const HeroBanner = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <AddBanner show={show} onHide={()=>setShow(false)} />
      <Navbar />
      <div className="pc1">
        <div className="pc2">
          <h3>Hero Banner</h3>
          <button onClick={()=>setShow(true)}>New Banner</button>
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
                  <th className="th6">Banner</th>
                  <th className="th7">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr className="odd">
                  <td><i class="fa fa-fw fa-arrows-alt ui-sortable-handle" data-toggle="tooltip" title="" data-original-title="Grag up or down"></i></td>
                  <td>Static 1</td>
                  <td>
                    <img
                      src="https://www.experts4u.in/admin/uploads/1665860568.webp"
                      className="childImg2"
                    />
                  </td>
                  <td>
                    <button className="deleteBtn">
                      <i class="fa-solid fa-trash"></i>
                    </button>
                  </td>
                </tr>
                <tr>
                  <td><i class="fa fa-fw fa-arrows-alt ui-sortable-handle" data-toggle="tooltip" title="" data-original-title="Grag up or down"></i></td>
                  <td>Static 1</td>
                  <td>
                    <img
                      src="https://www.experts4u.in/admin/uploads/1665860568.webp"
                      className="childImg2"
                    />
                  </td>
                  <td>
                    <button className="deleteBtn">
                      <i class="fa-solid fa-trash"></i>
                    </button>
                  </td>
                </tr>
                <tr className="odd">
                  <td><i class="fa fa-fw fa-arrows-alt ui-sortable-handle" data-toggle="tooltip" title="" data-original-title="Grag up or down"></i></td>
                  <td>Static 1</td>
                  <td>
                    <img
                      src="https://www.experts4u.in/admin/uploads/1665860568.webp"
                      className="childImg2"
                    />
                  </td>
                  <td>
                    <button className="deleteBtn">
                      <i class="fa-solid fa-trash"></i>
                    </button>
                  </td>
                </tr>
                <tr >
                  <td><i class="fa fa-fw fa-arrows-alt ui-sortable-handle" data-toggle="tooltip" title="" data-original-title="Grag up or down"></i></td>
                  <td>Static 1</td>
                  <td>
                    <img
                      src="https://www.experts4u.in/admin/uploads/1665860568.webp"
                      className="childImg2"
                    />
                  </td>
                  <td>
                    <button className="deleteBtn">
                      <i class="fa-solid fa-trash"></i>
                    </button>
                  </td>
                </tr>
                <tr className="odd">
                  <td><i class="fa fa-fw fa-arrows-alt ui-sortable-handle" data-toggle="tooltip" title="" data-original-title="Grag up or down"></i></td>
                  <td>Static 1</td>
                  <td>
                    <img
                      src="https://www.experts4u.in/admin/uploads/1665860568.webp"
                      className="childImg2"
                    />
                  </td>
                  <td>
                    <button className="deleteBtn">
                      <i class="fa-solid fa-trash"></i>
                    </button>
                  </td>
                </tr>
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

export default HeroBanner;
