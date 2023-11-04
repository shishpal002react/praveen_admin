import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import { useNavigate } from "react-router-dom";
import ParentCategory from "./../ParentCategory/ParentCategory";
import ChildCategory from "./../ChildCategory/ChildCategory";
import axios from "axios";
import { useEffect } from "react";

const AddService = () => {
  const navigate = useNavigate();

  //state data
  const [title, setTitle] = useState("");
  const [regularPrice, setRegularPrice] = useState("");
  const [salePrice, setSalePrice] = useState("");
  const [discount, setDiscount] = useState("");
  const [time, setTime] = useState("");
  // const [ParentCategory,setParentCategory]=useState("");
  const [parentCategoryId, setParentCategoryId] = useState("");
  // const [childCategory,setChildCategory]=useState("");
  const [childCategoryId, setChildCategoryId] = useState("");
  const [serviceGroupId, setServiceGroupId] = useState("");
  const [serviceTypeId, setServiceTypeId] = useState("");
  const [file, setFile] = useState();
  const [status, setStatus] = useState();

  //Data parent and child
  const [data1, setData1] = useState([]);
  const [data2, setData2] = useState([]);
  const [data3, setData3] = useState([]);
  const [data4, setData4] = useState([]);

  //parent category
  const Baseurl =
    "https://vg4op6mne2.execute-api.ap-south-1.amazonaws.com/dev/";

  const getData1 = async () => {
    try {
      const response = await axios.get(
        `${Baseurl}api/v1/admin/mainCategory/allCategory`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access")}`,
          },
        }
      );
      const data = response.data.data;
      setData1(data);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getData1();
  }, []);

  //child category
  const getData2 = async () => {
    try {
      const response = await axios.get(
        `${Baseurl}api/v1/admin/Category/allCategory/${parentCategoryId}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access")}`,
          },
        }
      );
      const data = response.data.data;
      console.log(data, "child data");
      setData2(data);
    } catch {}
  };

  useEffect(() => {
    getData2();
  }, [parentCategoryId]);

  //service group
  const getData3 = async () => {
    try {
      const response = await axios.get(
        //url is not right
        `${Baseurl}api/v1/admin/Category/allCategory/${parentCategoryId}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access")}`,
          },
        }
      );
      const data = response.data.data;
      console.log(data, "child data");
      setData3(data);
    } catch {}
  };

  useEffect(() => {
    getData3();
  }, [parentCategoryId]);

  //service type
  const getData4 = async () => {
    try {
      const response = await axios.get(
        `${Baseurl}/api/v1/admin/serviceTypes/${childCategoryId}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access")}`,
          },
        }
      );
      const data = response.data.data;
      console.log(data, "child data");
      setData4(data);
    } catch {}
  };

  useEffect(() => {
    getData4();
  }, [childCategoryId]);

  return (
    <>
      <Navbar />
      <div className="pc1">
        <div className="pc2">
          <h3>Service New</h3>
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
                  <input
                    type="text"
                    alt=""
                    placeholder="Service Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </div>
                <div className="addService2">
                  <label>Regular Price</label>
                  <input
                    type="text"
                    alt=""
                    placeholder="Regular Price"
                    value={regularPrice}
                    onChange={(e) => setRegularPrice(e.target.value)}
                  />
                </div>
                <div className="addService2">
                  <label>Sale Price</label>
                  <input
                    type="text"
                    alt=""
                    placeholder="Sale Price"
                    value={salePrice}
                    onChange={(e) => setSalePrice(e.target.value)}
                  />
                </div>
                <div className="addService2">
                  <label>Discount (%) </label>
                  <input
                    type="text"
                    alt=""
                    placeholder="Discount"
                    value={discount}
                    onChange={(e) => setDiscount(e.target.value)}
                  />
                </div>
                {/* <div className="addService2">
                        <label>Service Rating</label>
                        <input type="text" alt="" placeholder="Service Rating" />
                    </div> */}
                <div className="addService2">
                  <label>Service Timing</label>
                  <input
                    type="text"
                    alt=""
                    placeholder="Service Timing"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                  />
                </div>
                <div className="addService2">
                  <label>Parent Category</label>
                  <select onChange={(e) => setParentCategoryId(e.target.value)}>
                    {data1 &&
                      data1.map((item) => (
                        <option value={item._id}>{item.name}</option>
                      ))}
                  </select>
                </div>
                <div className="addService2">
                  <label>Child Category</label>
                  <select onChange={(e) => setChildCategoryId(e.target.value)}>
                    {/* <option value="">Child Category</option>
                    <option value="">Parent C</option>
                    <option value="">Parent Cat</option>
                    <option value="">P Category</option> */}
                    {data2 &&
                      data2.map((item) => (
                        <option value={item._id}>{item.name}</option>
                      ))}
                  </select>
                </div>
                <div className="addService2">
                  <label>Service Group</label>
                  <select onChange={(e) => setServiceGroupId(e.target.value)}>
                    {data3 &&
                      data3.map((item) => (
                        <option value={item._id}>{item.name}</option>
                      ))}
                  </select>
                </div>
                <div className="addService2">
                  <label>Service Type</label>
                  <select onChange={(e) => setServiceTypeId(e.target.value)}>
                    {/* <option value="">Service Type</option>
                    <option value="">Parent C</option>
                    <option value="">Parent Cat</option>
                    <option value="">P Category</option> */}
                    {data4 &&
                      data4.map((item) => (
                        <option value={item._id}>{item.name}</option>
                      ))}
                  </select>
                </div>
                <div className="addService2">
                  <label>Service Image</label>
                  <input
                    type="file"
                    placeholder="Choose file"
                    onChange={(e) => setFile(e.target.value)}
                  />
                </div>
                <div className="addService2">
                  <label>Status</label>
                  <select onChange={(e) => setStatus(e.target.value)}>
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

export default AddService;
