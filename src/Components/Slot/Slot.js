import React from "react";
import Navbar from "../Navbar/Navbar";
import { Container } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import {useNavigate} from "react-router-dom";

const Slot = () => {
  const navigate = useNavigate();
  return (
    <>
      <Navbar />
      <div className="pc1">
        <div className="pc2">
          <h3>Slots</h3>
          <button onClick={()=>navigate("/add-slot")}>New Slot</button>
        </div>
        <div className="pc3">
          <div className="slot1">
            <select>
              <option value="">Salon at Home</option>
              <option value="">Hair Care</option>
              <option value="">Female Spa and Massage</option>
              <option value="">Makeup</option>
              <option value="">Birthday Decoration</option>
              <option value="">Home Cleaning</option>
            </select>
            <input type="date" />
          </div>
          <hr />
          <div className="slot2">
            <div className="slot9">
            <div className="slot3">
              <div className="slot4">
                <h4>10:00 - 10:30</h4>
                <button className="editBtn">
                  <i class="fa fa-edit"></i>
                </button>
              </div>
              <hr />
              <div className="slot5">
                <p>Job Acceptance</p>
                <h6>5</h6>
              </div>
              <hr />
              <div className="slot7">
                <div className="slot6">
                  <p>Job Booked</p>
                  <h6>1</h6>
                </div>
                <div className="slot8">
                  <Container >
                    <Form>
                      <Form.Check
                        type="switch"
                        id="custom-switch"
                        label="ON/OFF"
                      />
                      {/* <Form.Check
                        disabled
                        type="switch"
                        label="disabled switch"
                        id="disabled-custom-switch"
                      /> */}
                    </Form>
                  </Container>
                </div>
              </div>
            </div>
            <div className="slot3">
              <div className="slot4">
                <h4>10:00 - 10:30</h4>
                <button className="editBtn">
                  <i class="fa fa-edit"></i>
                </button>
              </div>
              <hr />
              <div className="slot5">
                <p>Job Acceptance</p>
                <h6>5</h6>
              </div>
              <hr />
              <div className="slot7">
                <div className="slot6">
                  <p>Job Booked</p>
                  <h6>1</h6>
                </div>
                <div className="slot8">
                  <Container >
                    <Form>
                      <Form.Check
                        type="switch"
                        id="custom-switch"
                        label="ON/OFF"
                      />
                      {/* <Form.Check
                        disabled
                        type="switch"
                        label="disabled switch"
                        id="disabled-custom-switch"
                      /> */}
                    </Form>
                  </Container>
                </div>
              </div>
            </div>
            <div className="slot3">
              <div className="slot4">
                <h4>10:00 - 10:30</h4>
                <button className="editBtn">
                  <i class="fa fa-edit"></i>
                </button>
              </div>
              <hr />
              <div className="slot5">
                <p>Job Acceptance</p>
                <h6>5</h6>
              </div>
              <hr />
              <div className="slot7">
                <div className="slot6">
                  <p>Job Booked</p>
                  <h6>1</h6>
                </div>
                <div className="slot8">
                  <Container >
                    <Form>
                      <Form.Check
                        type="switch"
                        id="custom-switch"
                        label="ON/OFF"
                      />
                      {/* <Form.Check
                        disabled
                        type="switch"
                        label="disabled switch"
                        id="disabled-custom-switch"
                      /> */}
                    </Form>
                  </Container>
                </div>
              </div>
            </div>
            <div className="slot3">
              <div className="slot4">
                <h4>10:00 - 10:30</h4>
                <button className="editBtn">
                  <i class="fa fa-edit"></i>
                </button>
              </div>
              <hr />
              <div className="slot5">
                <p>Job Acceptance</p>
                <h6>5</h6>
              </div>
              <hr />
              <div className="slot7">
                <div className="slot6">
                  <p>Job Booked</p>
                  <h6>1</h6>
                </div>
                <div className="slot8">
                  <Container >
                    <Form>
                      <Form.Check
                        type="switch"
                        id="custom-switch"
                        label="ON/OFF"
                      />
                      {/* <Form.Check
                        disabled
                        type="switch"
                        label="disabled switch"
                        id="disabled-custom-switch"
                      /> */}
                    </Form>
                  </Container>
                </div>
              </div>
            </div>
            <div className="slot3">
              <div className="slot4">
                <h4>10:00 - 10:30</h4>
                <button className="editBtn">
                  <i class="fa fa-edit"></i>
                </button>
              </div>
              <hr />
              <div className="slot5">
                <p>Job Acceptance</p>
                <h6>5</h6>
              </div>
              <hr />
              <div className="slot7">
                <div className="slot6">
                  <p>Job Booked</p>
                  <h6>1</h6>
                </div>
                <div className="slot8">
                  <Container >
                    <Form>
                      <Form.Check
                        type="switch"
                        id="custom-switch"
                        label="ON/OFF"
                      />
                      {/* <Form.Check
                        disabled
                        type="switch"
                        label="disabled switch"
                        id="disabled-custom-switch"
                      /> */}
                    </Form>
                  </Container>
                </div>
              </div>
            </div>
            <div className="slot3">
              <div className="slot4">
                <h4>10:00 - 10:30</h4>
                <button className="editBtn">
                  <i class="fa fa-edit"></i>
                </button>
              </div>
              <hr />
              <div className="slot5">
                <p>Job Acceptance</p>
                <h6>5</h6>
              </div>
              <hr />
              <div className="slot7">
                <div className="slot6">
                  <p>Job Booked</p>
                  <h6>1</h6>
                </div>
                <div className="slot8">
                  <Container >
                    <Form>
                      <Form.Check
                        type="switch"
                        id="custom-switch"
                        label="ON/OFF"
                      />
                      {/* <Form.Check
                        disabled
                        type="switch"
                        label="disabled switch"
                        id="disabled-custom-switch"
                      /> */}
                    </Form>
                  </Container>
                </div>
              </div>
            </div>
            <div className="slot3">
              <div className="slot4">
                <h4>10:00 - 10:30</h4>
                <button className="editBtn">
                  <i class="fa fa-edit"></i>
                </button>
              </div>
              <hr />
              <div className="slot5">
                <p>Job Acceptance</p>
                <h6>5</h6>
              </div>
              <hr />
              <div className="slot7">
                <div className="slot6">
                  <p>Job Booked</p>
                  <h6>1</h6>
                </div>
                <div className="slot8">
                  <Container >
                    <Form>
                      <Form.Check
                        type="switch"
                        id="custom-switch"
                        label="ON/OFF"
                      />
                      {/* <Form.Check
                        disabled
                        type="switch"
                        label="disabled switch"
                        id="disabled-custom-switch"
                      /> */}
                    </Form>
                  </Container>
                </div>
              </div>
            </div>
            <div className="slot3">
              <div className="slot4">
                <h4>10:00 - 10:30</h4>
                <button className="editBtn">
                  <i class="fa fa-edit"></i>
                </button>
              </div>
              <hr />
              <div className="slot5">
                <p>Job Acceptance</p>
                <h6>5</h6>
              </div>
              <hr />
              <div className="slot7">
                <div className="slot6">
                  <p>Job Booked</p>
                  <h6>1</h6>
                </div>
                <div className="slot8">
                  <Container >
                    <Form>
                      <Form.Check
                        type="switch"
                        id="custom-switch"
                        label="ON/OFF"
                      />
                      {/* <Form.Check
                        disabled
                        type="switch"
                        label="disabled switch"
                        id="disabled-custom-switch"
                      /> */}
                    </Form>
                  </Container>
                </div>
              </div>
            </div>
            <div className="slot3">
              <div className="slot4">
                <h4>10:00 - 10:30</h4>
                <button className="editBtn">
                  <i class="fa fa-edit"></i>
                </button>
              </div>
              <hr />
              <div className="slot5">
                <p>Job Acceptance</p>
                <h6>5</h6>
              </div>
              <hr />
              <div className="slot7">
                <div className="slot6">
                  <p>Job Booked</p>
                  <h6>1</h6>
                </div>
                <div className="slot8">
                  <Container >
                    <Form>
                      <Form.Check
                        type="switch"
                        id="custom-switch"
                        label="ON/OFF"
                      />
                      {/* <Form.Check
                        disabled
                        type="switch"
                        label="disabled switch"
                        id="disabled-custom-switch"
                      /> */}
                    </Form>
                  </Container>
                </div>
              </div>
            </div>
            <div className="slot3">
              <div className="slot4">
                <h4>10:00 - 10:30</h4>
                <button className="editBtn">
                  <i class="fa fa-edit"></i>
                </button>
              </div>
              <hr />
              <div className="slot5">
                <p>Job Acceptance</p>
                <h6>5</h6>
              </div>
              <hr />
              <div className="slot7">
                <div className="slot6">
                  <p>Job Booked</p>
                  <h6>1</h6>
                </div>
                <div className="slot8">
                  <Container >
                    <Form>
                      <Form.Check
                        type="switch"
                        id="custom-switch"
                        label="ON/OFF"
                      />
                      {/* <Form.Check
                        disabled
                        type="switch"
                        label="disabled switch"
                        id="disabled-custom-switch"
                      /> */}
                    </Form>
                  </Container>
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Slot;
