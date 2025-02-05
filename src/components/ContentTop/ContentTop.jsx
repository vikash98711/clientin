import { iconsImgs } from "../../utils/images";
import "./ContentTop.css";
import { useContext } from "react";
import { SidebarContext } from "../../context/sidebarContext";
import Dropdown from 'react-bootstrap/Dropdown';
import Swal from 'sweetalert2';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate

const ContentTop = () => {
  const { toggleSidebar } = useContext(SidebarContext);
  const navigate = useNavigate(); // Initialize useNavigate
  const profile = sessionStorage.getItem('profile');
  const name = sessionStorage.getItem('name');
  const userid = sessionStorage.getItem('id');

  const handleLogout = () => {
    // Clear session storage
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('name');
    sessionStorage.removeItem('email');

    // Show logout alert
    Swal.fire({
      title: 'Logged Out',
      text: 'You have been logged out successfully.',
      icon: 'success',
      confirmButtonText: 'Okay',
    }).then(() => {
      
      navigate('/Login');
      window.location.reload();
    });
  };

  return (
    <div className="main-content-top">
      <div className="content-top-left">
        <button type="button" className="sidebar-toggler" onClick={() => toggleSidebar()}>
          <i className="fa-solid fa-bars"></i>
        </button>
        <h3 className="content-top-title">Home</h3>
      </div>
      <div className="content-top-btns d-flex">
    

        <Dropdown>
          <Dropdown.Toggle id="dropdown-basic" style={{ backgroundColor: "white", border: 'none' }}>
            <img src="https://th.bing.com/th/id/OIP.CNIPJOPWQ1tiTLX1WxEx3QHaH_?w=179&h=193&c=7&r=0&o=5&dpr=1.1&pid=1.7" id="dropdown-basic" style={{ width: '44px', height: '44px', borderRadius: "50%" }} />
          </Dropdown.Toggle>
          <button type="button" className="btn btn-primary position-relative me-3">
          <i className="fa-solid fa-bell"></i>
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
  5+
  <span className="visually-hidden">unread messages</span>
</span>

</button>
          <Dropdown.Menu>
          <Dropdown.Item as="div">
  <Link to={`/employeeview/${userid}`} className="text-decoration-none text-dark">
    <i className="fa-solid fa-circle-user"></i>&nbsp; {name ? name : "Profile"}
  </Link>
</Dropdown.Item>

            <Dropdown.Item onClick={handleLogout}><i className="fa-solid fa-power-off"></i>&nbsp;  Logout</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </div>
  );
}

export default ContentTop;
