import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import AddCategory from "./AddCategory";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import Editchild from "./Editchild";

const ChildCategory = () => {
  const [show, setShow] = useState(false);
  const [editshow, setEditShow] = useState(false);
  const [product, setProduct] = useState([]);
  const [id, setId] = useState();
  const [name, setName] = useState();
  const [query, setQuery] = useState("");
  const Baseurl =
    "https://vg4op6mne2.execute-api.ap-south-1.amazonaws.com/dev/";

  const getdata = async () => {
    try {
      const response = await axios.get(
        `${Baseurl}api/v1/admin/Category/getAllCategory`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access")}`,
          },
        }
      );
      const data = response.data.data;
      console.log(data, "child data");
      setProduct(data);
    } catch {}
  };

  useEffect(() => {
    getdata();
  }, []);

  const handleeditclick = (item) => {
    setName(item.name);
    console.log(item.name);
    setEditShow(true);
    setId(item._id);
    console.log(item._id, "id");
  };

  // Pagination
  const [currentPage2, setCurrentPage2] = useState(1);
  const [postPerPage2] = useState(10);
  const lastPostIndex2 = currentPage2 * postPerPage2;
  const firstPostIndex2 = lastPostIndex2 - postPerPage2;

  let pages2 = [];

  const TotolData = query
    ? product?.filter(
        (i) =>
          i?.name?.toLowerCase().includes(query?.toLowerCase()) ||
          i?.notice?.toString()?.toLowerCase().includes(query?.toLowerCase())
      )
    : product;

  useEffect(() => {
    if (query) {
      setCurrentPage2(1);
    }
  }, [query]);

  const slicedData = TotolData?.slice(firstPostIndex2, lastPostIndex2);

  for (let i = 1; i <= Math.ceil(TotolData?.length / postPerPage2); i++) {
    pages2.push(i);
  }

  function Next() {
    setCurrentPage2(currentPage2 + 1);
  }

  function Prev() {
    if (currentPage2 !== 1) {
      setCurrentPage2(currentPage2 - 1);
    }
  }

  return (
    <>
      <AddCategory
        show={show}
        onHide={() => setShow(false)}
        getdata={getdata}
      />
      <Editchild
        show={editshow}
        onHide={() => setEditShow(false)}
        getdata={getdata}
        catid={id}
        name={name}
      />
      <Navbar />
      <div className="pc1">
        <div className="pc2">
          <h3> Category</h3>
          <button onClick={() => setShow(true)}>Add Category</button>
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
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search here...."
              />
            </div>
          </div>
          <div className="pc7">
            <table>
              <thead>
                <tr>
                  <th className="th1">#</th>
                  <th className="th2">
                    <i class="fa-solid fa-image"></i>
                  </th>
                  <th className="th3">P.Category</th>
                  <th className="th3">Category</th>
                  <th className="th4">Notice</th>
                  <th className="th6">Status</th>
                  <th className="th7">Action</th>
                </tr>
              </thead>
              <tbody>
                {slicedData &&
                  slicedData.map((item, index) => (
                    <tr className="odd">
                      <td>{index + 1}</td>
                      <td>
                        <img src={item.image} className="childImg" />
                      </td>
                      <td>{item.categoryId.name}</td>
                      <td>{item.name}</td>
                      <td></td>
                      <td>
                        <span className="badge ">
                          {item.status ? (
                            <p className="badge-danger">Publish</p>
                          ) : (
                            <p className="backColor">Unpublish</p>
                          )}
                        </span>
                      </td>
                      <td>
                        <button className="editBtn">
                          <i
                            class="fa fa-edit"
                            onClick={() => handleeditclick(item)}
                          ></i>
                        </button>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
            <div className="pc8">
              <h6>Showing 1 to 10 of {product.length} entries</h6>
              <ul className="pc9">
                <button onClick={() => Prev()} className="myButton ">
                  <li>Previous</li>
                </button>

                {pages2
                  ?.slice(currentPage2 - 1, currentPage2 + 3)
                  .map((i, index) =>
                    i === pages2?.length ? (
                      ""
                    ) : (
                      <button
                        key={index}
                        onClick={() => setCurrentPage2(i)}
                        className={currentPage2 === i ? "activePage" : ""}
                      >
                        {" "}
                        {i}{" "}
                      </button>
                    )
                  )}

                <button onClick={() => Next()} className="nextBtn myButton ">
                  {" "}
                  <li>Next</li>
                </button>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChildCategory;
