import React, { useState ,useEffect} from "react";
import Modal from "react-bootstrap/Modal";
import { Form, Button } from "react-bootstrap";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function EditServiceGroup(props) {
  const namep = props.name;
  const statusp = props.status;
  const [name, setName] = useState("");
  const [status, setStatus] = useState("");
  const [id, setId] = useState("");

  useEffect(() => {
    setName(namep);
    setStatus(statusp);
    setId(props.id);
  }, [props]);

  // setName(props.name);
  // setStatus(props.status);
  console.log("is work", name, status, props);

  const handleEditServices = async (e) => {
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
      console.log(formdata, "from data");
      const response = await axios.put(
        `https://vg4op6mne2.execute-api.ap-south-1.amazonaws.com/dev/api/v1/admin/serviceTypes/${id}`,
        { name, status },
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
              <Form.Label>Group Name</Form.Label>
              <Form.Control type="text" placeholder="Group name" />
            </Form.Group>
            <Form.Group style={{ marginTop: "20px" }}>
              <Form.Label>Image</Form.Label>
              <Form.Control type="file" placeholder="select file" />
            </Form.Group>
            <Form.Group style={{ marginTop: "20px" }}>
              <Form.Label>Group</Form.Label>
              <Form.Control type="text" placeholder="description" />
            </Form.Group>
            <Form.Group style={{ marginTop: "20px" }}>
              <Form.Label>Group</Form.Label>
              <Form.Control type="color" placeholder="" />
            </Form.Group>

            <Form.Group
              controlId="exampleForm.ControlSelect1"
              style={{ marginTop: "20px" }}
            >
              <Form.Label>Status</Form.Label>
              <Form.Control as="select">
                <option>Publish</option>
                <option>Unpublish</option>
              </Form.Control>
            </Form.Group>
            <Form.Group style={{ marginTop: "20px", width: "20%" }}>
              <Button variant="primary" type="submit">
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

export default EditServiceGroup;
