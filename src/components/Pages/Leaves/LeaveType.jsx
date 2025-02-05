import React, { useState } from 'react';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const initialData = {
  LeaveName: '',
  startDate: '',
  endDate: '',
  Days: '',
};

const LeaveType = () => {
  const [show, setShow] = useState(false);
  const [formdata, setFormData] = useState(initialData);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // Update the form data state on input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formdata, [name]: value });
  };

  // Handle form submission
  const handleSubmit = () => {
    console.log('Form Data:', formdata);
    // You can send this `formdata` to your API or perform further actions
    setShow(false); // Close the modal after submission
  };

  return (
    <>
      <div className="d-flex justify-content-between flex-wrap mb-3 box-shadow-common-strip p-3">
        <h5>Leave Type</h5>
        <Button
          style={{ backgroundColor: '#e3273A', border: 'none' }}
          className="text-white"
          onClick={handleShow}
        >
          <i className="fa-solid fa-plus"></i> Add Leave Type
        </Button>
      </div>
      <Modal size="lg" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Attendance</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <div className="row">
              <div className="col-md-6 mb-3">
                <Form.Group controlId="formLeaveName">
                  <Form.Label>Leave Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="LeaveName"
                    value={formdata.LeaveName}
                    onChange={handleChange}
                    autoFocus
                  />
                </Form.Group>
              </div>
              <div className="col-md-6 mb-3">
                <Form.Group controlId="formStartDate">
                  <Form.Label>Start Date</Form.Label>
                  <Form.Control
                    type="date"
                    name="startDate"
                    value={formdata.startDate}
                    onChange={handleChange}
                  />
                </Form.Group>
              </div>
              <div className="col-md-6 mb-3">
                <Form.Group controlId="formEndDate">
                  <Form.Label>End Date</Form.Label>
                  <Form.Control
                    type="date"
                    name="endDate"
                    value={formdata.endDate}
                    onChange={handleChange}
                  />
                </Form.Group>
              </div>
              <div className="col-md-6 mb-3">
                <Form.Group controlId="formDays">
                  <Form.Label>Days</Form.Label>
                  <Form.Control
                    type="text"
                    name="Days"
                    value={formdata.Days}
                    onChange={handleChange}
                  />
                </Form.Group>
              </div>
            </div>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" className="button-red" onClick={handleSubmit}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default LeaveType;
