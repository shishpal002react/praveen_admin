import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import {useNavigate} from "react-router-dom";
import axios from "axios";

const Service = () => {
  const navigate = useNavigate();
  const [data,setData] = useState();

  const getdata = async () => {
    try {
        const response = await axios.get("https://vg4op6mne2.execute-api.ap-south-1.amazonaws.com/dev/api/v1/admin/Service/getAllService", {
            headers: {
                Authorization: `Bearer ${JSON.parse(localStorage.getItem("access"))}`,
            },
        });
        const data = response.data.data;
        console.log(data,"servid");
        setData(data);
    } catch { }
}

useEffect(() => {
    getdata();
}, [])

const handledelete =async(item)=>{
  console.log(item._id);
  try {
    const response = await axios.delete(`https://vg4op6mne2.execute-api.ap-south-1.amazonaws.com/dev/api/v1/admin/Service/delete/${item._id}`, {
        headers: {
            Authorization: `Bearer ${JSON.parse(localStorage.getItem("access"))}`,
        },
    });
    // const data = response.data.data;
    // console.log(data,"servid");
    // setData(data);
    getdata();
} catch { }
}

  return (
    <>
      <Navbar />
      <div className="pc1">
        <div className="pc2">
          <h3>New Services</h3>
          <button onClick={()=>navigate("/add-services")}>Add Service</button>
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
          <div className="pc7" style={{ width: "100%" }}>
            <table>
              <thead>
                <tr>
                  <th className="th1">#</th>
                  <th className="th2">
                    <i class="fa-solid fa-image"></i>
                  </th>
                  <th>Title</th>
                  <th className="th3">Category</th>
                  <th className="th3">C.Category</th>
                  <th className="th4">Price</th>
                  <th className="th4">Discount</th>
                  <th className="th4">Time</th>
                  <th className="th4">Rating</th>
                  <th className="th6">Status</th>
                  <th className="th7">Action</th>
                </tr>
              </thead>
              <tbody>
                {
                  data && data.map((item,index)=>(
                    <tr className="odd">
                    <td>{index}</td>
                    <td>
                      <img
                        src="https://www.experts4u.in/admin/uploads/1689835145.png"
                        className="serviceImg"
                      />
                    </td>
                    <td>{item.title}</td>
                    <td>Salon at Home</td>
                    <td>Face Mask</td>
                    <td> {item.originalPrice}</td>
                    <td>{item.discount}</td>
                    <td>{item.timeInMin}</td>
                    <td>{item.rating}</td>
                    <td>
                      <span className="badge badge-primary">Publish</span>
                    </td>
                    <td>
                      <button className="editBtn">
                        <i class="fa fa-edit"></i>
                      </button>
                      <button className="deleteBtn2">
                        <i class="fa-solid fa-trash" onClick={()=>handledelete(item)}></i>
                      </button>
                    </td>
                  </tr>
                  ))
                }
              
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

export default Service;
