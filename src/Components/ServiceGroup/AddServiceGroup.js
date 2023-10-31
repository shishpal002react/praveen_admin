import React, { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import { Form, Button } from "react-bootstrap";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function AddServiceGroup(props) {
  const [name, setName] = useState();
  const [status, setStatus] = useState();
  const [description, setDescription] = useState("");
  const [color, setColor] = useState("");
  const [image, setImage] = useState("");
  const [parentCategory, setParentCategory] = useState();
  const [childCategory, setChildCategory] = useState();
  const [data1, setData1] = useState([]);
  const [data2, setData2] = useState([]);

  //parent category
  const Baseurl =
    "https://vg4op6mne2.execute-api.ap-south-1.amazonaws.com/dev/";

  const getdata = async () => {
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
    getdata();
  }, []);

  //child category

  const getData = async () => {
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
      setData2(data);
    } catch {}
  };

  useEffect(() => {
    getData();
  }, []);

  const handleAddGroup = async (e) => {
    console.log("in golu", name);
    e.preventDefault();

    try {
      const formdata = new FormData();
      formdata.append("name", name);
      let val;
      if (status === "Publish") {
        val = true;
      } else {
        val = false;
      }

      formdata.append("status", val);
      formdata.append("image", image);
      formdata.append("mainCategoryId", parentCategory);
      formdata.append("categoryId", childCategory);
      formdata.append("description", description);
      formdata.append("colourPicker", color);

      console.log(formdata, "from data golu");

      const response = await axios.post(
        "https://vg4op6mne2.execute-api.ap-south-1.amazonaws.com/dev/api/v1/admin/SubCategory/createCategory",
        formdata,
        {
          headers: {
            Authorization: `Bearer ${JSON.parse(
              localStorage.getItem("access")
            )}`,
          },
        }
      );
      console.log(response, "success");
      toast.success("parent category add successful", {
        position: toast.POSITION.TOP_CENTER,
      });
      props.onHide();
      props.getdata();
      // props.setShow(false);
      // props.onHide();
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Service Group
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group style={{ marginTop: "20px" }}>
              <Form.Group className="popUpFrom" style={{ marginTop: "20px" }}>
                <Form.Label>Select P.Category</Form.Label>
                <Form.Control
                  as="select"
                  onChange={(e) => setParentCategory(e.target.value)}
                >
                  {data1 &&
                    data1.map((item) => (
                      <option value={item._id}>{item.name}</option>
                    ))}
                </Form.Control>
                <Form.Group className="popUpFrom" style={{ marginTop: "20px" }}>
                  <Form.Label>Select C.Category</Form.Label>
                  <Form.Control
                    as="select"
                    onChange={(e) => setChildCategory(e.target.value)}
                  >
                    {data2 &&
                      data2.map((item) => (
                        <option value={item._id}>{item.name}</option>
                      ))}
                  </Form.Control>
                </Form.Group>
              </Form.Group>
              <Form.Label>Group Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Group name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>
            <Form.Group style={{ marginTop: "20px" }}>
              <Form.Label>Category Image</Form.Label>
              <Form.Control
                type="file"
                placeholder="Category Image"
                onChange={(e) => setImage(e.target.files[0])}
              />
            </Form.Group>
            <Form.Group style={{ marginTop: "20px" }}>
              <Form.Label>Group</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </Form.Group>
            <Form.Group style={{ marginTop: "20px" }}>
              <Form.Label>Group</Form.Label>
              <Form.Control
                type="color"
                placeholder=""
                value={color}
                onChange={(e) => setColor(e.target.value)}
              />
            </Form.Group>

            <Form.Group
              controlId="exampleForm.ControlSelect1"
              style={{ marginTop: "20px" }}
            >
              <Form.Label>Status</Form.Label>
              <Form.Control
                as="select"
                onChange={(e) => setStatus(e.target.value)}
              >
                <option>Publish</option>
                <option>Unpublish</option>
              </Form.Control>
            </Form.Group>

            <Form.Group style={{ marginTop: "20px", width: "20%" }}>
              <Button variant="primary" type="submit" onClick={handleAddGroup}>
                Save Group
              </Button>
            </Form.Group>
          </Form>
        </Modal.Body>
      </Modal>
      <ToastContainer />
    </>
  );
}

export default AddServiceGroup;
