import React, { useState, useContext, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Pagination from 'react-bootstrap/Pagination';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';
import Swal from 'sweetalert2';
import { SidebarContext } from '../../context/sidebarContext';
import { url } from '../URL/Url';
import {Link} from 'react-router-dom';


const itemsPerPage = 6; // Pagination items per page
const initialData = { name: "" }; // Only 'name' field

const Categories = () => {
  const [show, setShow] = useState(false); // Modal visibility
  const [currentPage, setCurrentPage] = useState(1); // Current pagination page
  const {getCategory, SetCategory } = useContext(SidebarContext); 
  // const [getCategory, SetCategory]=useState([])
  const [formData, setFormData] = useState(initialData); // Form data state

  // Modal Handlers
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // Calculate total pages for pagination
  const totalPages = Math.ceil(getCategory.length / itemsPerPage);

  // Paginate data
  const currentData = getCategory.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Handle form input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${url}/category`, formData); // Only 'name' is sent
      if (res.status === 200) {
        Swal.fire({
          title: 'Success',
          icon: 'success',
          confirmButtonText: 'OK'
        }).then(() => {
          window.location.reload();
        });
      }
      setFormData(initialData); // Reset form
      handleClose(); // Close modal
    } catch (error) {
      console.error(error);
    }
  };

  // Handle delete category
  const handleDelete = async (e, id) => {
    e.preventDefault();
    try {
      const res = await axios.delete(`${url}/categorydelete/${id}`);
      if (res.status === 200) {
        Swal.fire({
          text: 'Category Deleted',
          icon: 'success',
          confirmButtonText: 'OK'
        }).then(() => {
          window.location.reload();
        });
      }
    } catch (error) {
      console.error(error);
    }
  };




  return (
    <>
      <div className="d-flex justify-content-between flex-wrap box-shadow-common-strip p-3 mb-3">
        <h5>Category</h5>
        <Button
          style={{ backgroundColor: 'rgb(202 77 77)', border: 'none' }}
          className="text-white"
          onClick={handleShow}
        >
          <i className="fas fa-layer-group"></i> Add Category
        </Button>
      </div>
      <div className=" table-responsive Category-table-wrapper">
        <table className='table table-striped table-bordered shadow-sm'>
          <thead className="text-center">
            <tr>
              <th>#</th>
              <th>Category Name</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody className="text-center">
            {getCategory && getCategory.length > 0 ? (
              currentData.map((val, i) => (
                <tr key={val._id}>
                  <td>{(currentPage - 1) * itemsPerPage + i + 1}</td>
                  <td>{val.name}</td>
                  <td>
                    <Link to={`/Category/${val._id}`}>
                      <i className="fa-regular fa-pen-to-square"></i>
                    </Link>
                    
                  </td>
                  <td>
                    <Link onClick={(e) => handleDelete(e, val._id)}>
                      <i className="fa-solid fa-trash-can"></i>
                    </Link>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="text-center">
                  No Data Available
                </td>
              </tr>
            )}
          </tbody>
        </table>

        {/* Pagination */}
      
      </div>
      {/* <div className="d-flex justify-content-center"> center    */}
      <div className=" mb-3 pagination-category-container">
          <Pagination className="pagination-category">
            <Pagination.First
              onClick={() => setCurrentPage(1)}
              disabled={currentPage === 1}
            />
            <Pagination.Prev
              onClick={() => setCurrentPage((page) => Math.max(page - 1, 1))}
              disabled={currentPage === 1}
            />
            {Array.from({ length: totalPages }).map((_, index) => (
              <Pagination.Item
                key={index + 1}
                active={index + 1 === currentPage}
                onClick={() => setCurrentPage(index + 1)}
              >
                {index + 1}
              </Pagination.Item>
            ))}
            <Pagination.Next
              onClick={() =>
                setCurrentPage((page) => Math.min(page + 1, totalPages))
              }
              disabled={currentPage === totalPages}
            />
            <Pagination.Last
              onClick={() => setCurrentPage(totalPages)}
              disabled={currentPage === totalPages}
            />
          </Pagination>
        </div>
      {/* Add Category Modal */}
      <Modal size="md" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formCategoryName">
              <Form.Label>Category Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                autoFocus
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleSubmit}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Categories;
