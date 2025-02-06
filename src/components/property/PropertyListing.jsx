// import React, { useState } from 'react';
// import Table from 'react-bootstrap/Table';

// import Nav from 'react-bootstrap/Nav';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Form from 'react-bootstrap/Form';
// import Button from 'react-bootstrap/Button';
// import Pagination from 'react-bootstrap/Pagination';

// const itemsPerPage = 4;

// const vendorData = [
//     { id: 1, active: 'Yes', Name: 'saud', Role: 'Administrator', startdate:"10-11-2024",enddate:"20-12-2024",totaldays:"40 Days", EmailId: 'saud.khan@gmail.com', Phone: '7011004598' },
//     { id: 2, active: 'No', Name: 'Anjali', Role: 'QAC Department',startdate:"10-11-2024",enddate:"20-12-2024",totaldays:"40 Days", EmailId: 'anjali@example.com', Phone: '7011004599' },
//     { id: 3, active: 'Yes', Name: 'Ravi', Role: 'Moderator',startdate:"10-11-2024",enddate:"20-12-2024",totaldays:"40 Days", EmailId: 'ravi@example.com', Phone: '7011004600' },
//     { id: 4, active: 'Yes', Name: 'Sita', Role: 'Administrator', startdate:"10-11-2024",enddate:"20-12-2024",totaldays:"40 Days", EmailId: 'sita@example.com', Phone: '7011004601' },
//     { id: 5, active: 'No', Name: 'Rahul', Role: 'Account Department',  startdate:"10-11-2024",enddate:"20-12-2024",totaldays:"40 Days", EmailId: 'rahul@example.com', Phone: '7011004602' },
//     { id: 6, active: 'Yes', Name: 'Priya', Role: 'Marketing Department',startdate:"10-11-2024",enddate:"20-12-2024",totaldays:"40 Days",  EmailId: 'priya@example.com', Phone: '7011004603' },
//     { id: 7, active: 'Yes', Name: 'Vikram', Role: 'QAC Department', startdate:"10-11-2024",enddate:"20-12-2024",totaldays:"40 Days", EmailId: 'vikram@example.com', Phone: '7011004604' },
//     { id: 8, active: 'No', Name: 'Geeta', Role: 'Account Department',startdate:"10-11-2024",enddate:"20-12-2024",totaldays:"40 Days",  EmailId: 'geeta@example.com', Phone: '7011004605' },
//   ];
// const PropertyListing = () => {
//     // State to track the active tab
//     const [activeTab, setActiveTab] = useState("/home");
//     const [show, setShow] = useState(false);
//     const [currentPage, setCurrentPage] = useState(1);

//     const handleClose = () => setShow(false);
//     const handleShow = () => setShow(true);

//     // Calculate the number of pages
//     const totalPages = Math.ceil(vendorData.length / itemsPerPage);

//     // Get the current data for the page
//     const currentData = vendorData.slice(
//       (currentPage - 1) * itemsPerPage,
//       currentPage * itemsPerPage
//     );

//     // Function to export to Excel
//     const exportToExcel = () => {
//       const ws = XLSX.utils.json_to_sheet(vendorData);
//       const wb = XLSX.utils.book_new();
//       XLSX.utils.book_append_sheet(wb, ws, 'VendorData');
//       XLSX.writeFile(wb, 'VendorData.xlsx');
//     };

//     // Function to export to CSV
//     const exportToCSV = () => {
//       const csv = Papa.unparse(vendorData);
//       const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
//       const url = URL.createObjectURL(blob);
//       const link = document.createElement('a');
//       link.setAttribute('href', url);
//       link.setAttribute('download', 'VendorData.csv');
//       document.body.appendChild(link);
//       link.click();
//       document.body.removeChild(link);
//     };
//     return (
//         <>
//             <div className=" container Main-leaves-wrapper p-5">
//                 {/* Navigation Tabs */}
//                 <Nav
//                     // justify
//                     variant="tabs"
//                     activeKey={activeTab}
//                     onSelect={(selectedKey) => setActiveTab(selectedKey)} // Update active tab

//                 >
//                     <Nav.Item>
//                         <Nav.Link eventKey="/home">Property</Nav.Link>
//                     </Nav.Item>
//                     <Nav.Item>
//                         <Nav.Link eventKey="link-1">Pending Property <i className="fa-solid fa-hourglass-half"></i></Nav.Link>
//                     </Nav.Item>
//                     <Nav.Item>
//                         <Nav.Link eventKey="link-2">Approved Property <i className="fa-solid fa-check"></i></Nav.Link>
//                     </Nav.Item>
//                 </Nav>

//                 {/* Tab Content */}
//                 <div className="tab-content">
//                     {activeTab === "/home" && (
//                         <div>
//                             <div className="container mt-2">
//                                 <div className="row">
//                                     <div className="col-lg-3">
//                                     <div className="mb-3">
//                                     <div className="input-group mb-3">
//   <input
//     type="text"
//     className="form-control"
//     placeholder="Search"
//     aria-label="Recipient's username"
//     aria-describedby="basic-addon2"
//   />
//   <span className="input-group-text" id="basic-addon2">
//   <i className="fa-solid fa-magnifying-glass"></i>
//   </span>
// </div>

// </div>
//                                     </div>
//                                 </div>
//                             </div>

//                            <Table responsive striped bordered hover>

//           <thead className='text-center'>
//             <tr>
//               <th>Emp Id</th>

//               <th>Name</th>
//               <th>Role</th>
//               <th>start Date</th>
//               <th>End Date</th>
//               <th>Total Days</th>
//               <th>Email ID</th>
//               <th>Phone</th>
//               <th>Active</th>
//               <th>#</th>

//             </tr>
//           </thead>
//           <tbody className='text-center'>
//             {currentData.map((vendor) => (
//               <tr key={vendor.id}>
//                 <td>{vendor.id}</td>

//                 <td>{vendor.Name}</td>
//                 <td>{vendor.Role}</td>
//                 <td>{vendor.startdate}</td>
//                 <td>{vendor.enddate}</td>
//                 <td>{vendor.totaldays}</td>
//                 <td>{vendor.EmailId}</td>
//                 <td>{vendor.Phone}</td>

//                 <td>
//                   <Form>
//                     <Form.Check
//                       type="switch"
//                       id={`custom-switch-${vendor.id}`}
//                       checked={vendor.active === 'Yes'}
//                       readOnly
//                       className={vendor.active === 'Yes' ? 'switch-active' : 'switch-inactive'}
//                     />
//                   </Form>
//                 </td>
//                 <td>
//                   <i className="fa-regular fa-pen-to-square"></i>&nbsp;&nbsp;
//                   {/* <i className="fa-solid fa-trash-can-arrow-up"></i> */}
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </Table>
//                         </div>
//                     )}
//                     {activeTab === "link-1" && (
//                         <div>
//                             <h3>Loooonger NavLink Content</h3>
//                             <p>This is the content for the Loooonger NavLink tab.</p>
//                         </div>
//                     )}
//                     {activeTab === "link-2" && (
//                         <div>
//                             <h3>Link Tab Content</h3>
//                             <p>This is the content for the Link tab.</p>
//                         </div>
//                     )}
//                 </div>
//             </div>
//         </>
//     );
// };

// export default PropertyListing;

import React, { useState, useContext, useEffect } from "react";
import Table from "react-bootstrap/Table";
import Nav from "react-bootstrap/Nav";
import Pagination from "react-bootstrap/Pagination";
import { SidebarContext } from "../../context/sidebarContext";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { url } from "../URL/Url";
import Swal from "sweetalert2";

const itemsPerPage = 3;

const initialPropertyData = [
  {
    id: 1,
    name: "Luxury Villa",
    seller: "John Doe",
    location: "Los Angeles",
    price: "$2,000,000",
    status: "Available",
    description: "5 Bed, 4 Bath, Pool",
  },
  {
    id: 2,
    name: "Modern Apartment",
    seller: "Jane Smith",
    location: "New York",
    price: "$850,000",
    status: "Pending",
    description: "3 Bed, 2 Bath, City View",
  },
  {
    id: 3,
    name: "Beachfront Condo",
    seller: "Mike Johnson",
    location: "Miami",
    price: "$1,500,000",
    status: "Available",
    description: "2 Bed, 2 Bath, Ocean View",
  },
  {
    id: 4,
    name: "Suburban House",
    seller: "Emily Davis",
    location: "Austin",
    price: "$450,000",
    status: "Available",
    description: "4 Bed, 3 Bath, Backyard",
  },
  {
    id: 5,
    name: "Penthouse Suite",
    seller: "Chris Brown",
    location: "Chicago",
    price: "$1,200,000",
    status: "Sold",
    description: "3 Bed, 3 Bath, Skyline View",
  },
  {
    id: 6,
    name: "Countryside Cottage",
    seller: "Sarah Lee",
    location: "Nashville",
    price: "$300,000",
    status: "Pending",
    description: "3 Bed, 2 Bath, Garden",
  },
];

const PropertyListing = () => {
  const [activeTab, setActiveTab] = useState("/all");
  const [currentPage, setCurrentPage] = useState(1);
  const [deleteLoading, setDeleteLoading] = useState("");

  const { setProjects, projects } = useContext(SidebarContext);

  // Filter projects based on activeTab
  const filteredProjects = projects.filter((project) => {
    if (activeTab === "/all") return true;
    if (activeTab === "/pending") return project.status === "Pending";
    if (activeTab === "/approved") return project.status === "Approved";
    return false;
  });

  const totalPages = Math.ceil(filteredProjects.length / itemsPerPage);
  // const currentData = filteredData.slice(
  //   (currentPage - 1) * itemsPerPage,
  //   currentPage * itemsPerPage
  // );

  const handlePageChange = (pageNumber) => setCurrentPage(pageNumber);

  const handleApprove = (id) => {
    setPropertyData((prevData) =>
      prevData.map((property) =>
        property.id === id ? { ...property, status: "Available" } : property
      )
    );
  };

  const handleReject = (id) => {
    setPropertyData((prevData) =>
      prevData.map((property) =>
        property.id === id ? { ...property, status: "Rejected" } : property
      )
    );
  };

  const paginationItems = [];
  for (let i = 1; i <= totalPages; i++) {
    paginationItems.push(
      <Pagination.Item
        key={i}
        active={i === currentPage}
        onClick={() => handlePageChange(i)}
      >
        {i}
      </Pagination.Item>
    );
  }

  const deleteProject = async (id) => {
    try {
      setDeleteLoading(id);
      const res = await axios.delete(`${url}/api/project/delete/${id}`);
      if (res.status === 200) {
        setDeleteLoading("");
        await axios.get(`${url}/api/project/get/all`).then((res) => {
          setProjects(res.data);
        });
        Swal.fire({
          icon: "success",
          title: res.data.message || "Project Deleted Successfully",
          timer: 1500,
        });
      }
    } catch (error) {
      console.log(error);
      setDeleteLoading("");
      Swal.fire({
        icon: "error",
        title:
          error.response.data.message ||
          "Something went wrong while deleting the project",
        timer: 1500,
      });
    } finally {
      setDeleteLoading("");
    }
  };

  const handleDelete = (e, id) => {
    e.preventDefault();
    deleteProject(id);
  };

  return (
    <div className="container box-shadow-common p-3 Main-leaves-wrapper mt-4">
      {/* Navigation Tabs */}
      <Nav
        variant="tabs"
        activeKey={activeTab}
        onSelect={(selectedKey) => {
          setActiveTab(selectedKey);
          setCurrentPage(1);
        }}
      >
        <Nav.Item>
          <Nav.Link eventKey="/all">
            <i className="fas fa-list me-2"></i>All Properties
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="/pending">
            <i className="fas fa-clock me-2"></i>Pending Properties
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="/approved">
            <i className="fas fa-check-circle me-2"></i>Approved Properties
          </Nav.Link>
        </Nav.Item>
      </Nav>

      {/* Tab Content */}
      <div className="mt-3">
        <Table striped bordered hover responsive>
          <thead className="text-center">
            <tr>
              <th>Seller Name</th>
              <th>City</th>
              <th>Project Name</th>
              <th>Property Image</th>
              <th>Description Image</th>
              <th>Category</th>
              <th>Type</th>
              <th>Status</th>
              <th>Price</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody className="text-center">
            {filteredProjects.map((project) => (
              <tr key={project._id}>
                <td>{project.sellerName}</td>
                <td>{project.city}</td>
                <td>{project.projectName}</td>
                <td>
                  <img
                    src={project.thumbnail}
                    alt={project.projectName}
                    className="img-rounded"
                    style={{
                      width: "100px",
                      height: "100px",
                      objectFit: "cover",
                      borderRadius: "6px",
                    }}
                  />
                </td>
                <td>
                  <img
                    src={project.descriptionImage}
                    alt={project.projectName}
                    className="img-rounded"
                    style={{
                      width: "100px",
                      height: "100px",
                      objectFit: "cover",
                      borderRadius: "6px",
                    }}
                  />
                </td>
                <td>{project.category}</td>
                <td>{project.type}</td>
                <td>
                  <span
                    className={`badge ${
                      project.status === "Approved"
                        ? "bg-success"
                        : project.status === "Pending"
                        ? "bg-warning text-dark"
                        : "bg-danger"
                    }`}
                  >
                    {project.status}
                  </span>
                </td>
                <td>{project.price}</td>
                <td>
                  <Link to={`/update/property/${project._id}`}>
                    <i className="fa-regular fa-pen-to-square"></i>
                  </Link>
                </td>
                <td>
                  <Link onClick={(e) => handleDelete(e, project._id)}>
                    {deleteLoading  === project._id ? (
                      <span
                        className="ms-2 spinner-border spinner-border-sm"
                        role="status"
                        aria-hidden="true"
                      ></span>
                    ) : (
                      <i className="fa-solid fa-trash-can"></i>
                    )}
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>

        {/* Pagination */}
        <div className="d-flex justify-content-center">
          <Pagination>{paginationItems}</Pagination>
        </div>
      </div>
    </div>
  );
};

export default PropertyListing;
