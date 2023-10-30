import React, { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import { Form, Button } from "react-bootstrap";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Editchild(props) {
  const pCate = props.pCate;
  const childCat = props.childcat;
  const noticess = props.notice;
  const catImage = props.catImage;

  const name = props.name;
  const ID = props.catid;
  console.log(ID, "inn");
  const [childcat, setChildcat] = useState(childCat);
  const [parentcat, setParentcat] = useState(pCate);
  const [image, setImage] = useState(catImage);
  const [notice, setNotice] = useState(noticess);
  const [status, setStatus] = useState("Publish");
  const [data, setData] = useState();
  const [categoryid, setCategoryid] = useState();

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
      setData(data);
    } catch {}
  };

  useEffect(() => {
    getdata();
  }, []);

  const handlenewcat = async (e) => {
    console.log("in");
    e.preventDefault();

    try {
      const formdata = new FormData();
      formdata.append("name", childcat);
      formdata.append("image", image);
      formdata.append("notice", notice);
      formdata.append("categoryId", parentcat);
      let val;
      if (status === "Publish") {
        val = true;
      } else {
        val = false;
      }

      formdata.append("status", val);
      console.log(formdata, "from");
      const response = await axios.put(
        `https://vg4op6mne2.execute-api.ap-south-1.amazonaws.com/dev/api/v1/admin/Category/update/${ID}`,
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
      props.getdata();
    } catch (e) {
      console.log(e);
    }
  };

  {
    console.log(parentcat);
  }

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
            Child Category
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="popUpFrom" style={{ marginTop: "20px" }}>
              <Form.Label>Select P.Category</Form.Label>
              <Form.Control
                as="select"
                onChange={(e) => setParentcat(e.target.value)}
              >
                {data &&
                  data.map((item) => (
                    <option value={item._id}>{item.name}</option>
                  ))}
              </Form.Control>
            </Form.Group>
            <Form.Group style={{ marginTop: "20px" }}>
              <Form.Label>Child Category</Form.Label>
              <Form.Control
                type="text"
                placeholder="Child Category"
                value={props.childCat}
                onChange={(e) => setChildcat(e.target.value)}
              />
            </Form.Group>

            <Form.Group style={{ marginTop: "20px" }}>
              <Form.Label>Notice</Form.Label>
              <Form.Control
                type="text"
                placeholder="Category Notice"
                value={props.notice}
                onChange={(e) => setNotice(e.target.value)}
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
              <Button
                variant="primary"
                type="submit"
                onClick={(e) => handlenewcat(e)}
              >
                Save Category
              </Button>
            </Form.Group>
          </Form>
        </Modal.Body>
      </Modal>
      <ToastContainer />
    </>
  );
}

export default Editchild;
