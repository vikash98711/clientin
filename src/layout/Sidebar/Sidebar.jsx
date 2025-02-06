import { useEffect, useState, useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { SidebarContext } from '../../context/sidebarContext';
import './Sidebar.css'; // Ensure this CSS file includes the necessary styles
import { iconsImgs } from '../../utils/images'; // Update the path according to your project structure

const Sidebar = () => {
  const { toggleSidebar } = useContext(SidebarContext);
  const [isWebSettingSubmenuOpen, setIsWebSettingSubmenuOpen] = useState(false);
  const [isUsersSubmenuOpen, setIsUsersSubmenuOpen] = useState(false);
  const [isLeavessubmenuOpen, setIsLeavesSubmenuOpen]=useState(false)
  const [sidebarClass, setSidebarClass] = useState("");
  const { isSidebarOpen } = useContext(SidebarContext);
  const location = useLocation();

  useEffect(() => {
    setSidebarClass(isSidebarOpen ? 'sidebar-change' : '');
  }, [isSidebarOpen]);

  const toggleWebSettingSubmenu = () => {
    setIsWebSettingSubmenuOpen(!isWebSettingSubmenuOpen);
  };

  const toggleUsersSubmenu = () => {
    setIsUsersSubmenuOpen(!isUsersSubmenuOpen);
  };
  const toggleAttendence = () => {
    setIsLeavesSubmenuOpen(!isLeavessubmenuOpen);
  };

  return (
    <div className={`sidebar ${sidebarClass}`}>
      <div className='text-end sidebarClose-Wrapper'>
        <i className="fa-solid fa-arrow-left text-white" onClick={toggleSidebar}></i>
      </div>
      <div className="user-info">
        <div className="info-img img-fit-cover">
          <img src='/WHITEInfra.png'/>
        </div>
      </div>

      <nav className="navigation">
        <ul className="nav-list">
          <li className="nav-item">
            <Link to="/employee/Dashboard" className={`Customnav-link ${location.pathname === "/employee/Dashboard" ? 'active' : ''}`}>
            <i className="fa-solid fa-house-chimney"></i>
              <span className="Customnav-link-text">Dashboard</span>
            </Link>
          </li>

          {/* WebSetting menu with submenu */}
          {/* <li className="nav-item">
            <div className="Customnav-link" onClick={toggleWebSettingSubmenu}>
            <i className="fas fa-newspaper"></i>


              <span className="Customnav-link-text">Blogs</span>
              <span className="submenu-indicator">
                {isWebSettingSubmenuOpen ? <i className="fa-solid fa-angle-up"></i> : <i className="fa-solid fa-angle-down"></i>}
              </span>
            </div>
            <ul className={`submenu ${isWebSettingSubmenuOpen ? 'open' : ''}`}>
              <li className="nav-item">
                <Link to="/leaves" className={`Customnav-link common-submenu-text ${location.pathname === "/leaves" ? 'active' : ''}`}>
                <i className="fas fa-file-alt"></i> 
                  <span className="Customnav-link-text">Blog List</span>
                </Link>
                <Link to="/Addblogs" className={`Customnav-link common-submenu-text ${location.pathname === "/Addblogs" ? 'active' : ''}`}>
                <i className="fas fa-file-alt"></i> 
                  <span className="Customnav-link-text">Add Blog</span>
                </Link>
             
              </li>
            </ul>
          </li> */}

          {/* Users menu with submenu */}
       

          {/* Other nav items... */}
     
     
          {/* <li className="nav-item">
            <Link to="/leaves" className={`Customnav-link ${location.pathname === "/leaves" ? 'active' : ''}`}>
            <i className="fas fa-check-circle"></i>

              <span className="Customnav-link-text">Attendence</span>
            </Link>
          </li> */}
        
       
        {/* <li className="nav-item">
            <div className="Customnav-link" onClick={toggleAttendence}>
            <i className="fas fa-check-circle"></i>


              <span className="Customnav-link-text">Properties</span>
              <span className="submenu-indicator">
                {isLeavessubmenuOpen ? <i className="fa-solid fa-angle-up"></i> : <i className="fa-solid fa-angle-down"></i>}
              </span>
            </div>
            <ul className={`submenu ${isLeavessubmenuOpen ? 'open' : ''}`}>
              <li className="nav-item submenu-sidebar">
               
                <Link to="/addAtendenc" className={`Customnav-link common-submenu-text  submenu-link ${location.pathname === "/addAendence" ? 'active' : ''}`}>
                  <i className="fa-solid fa-clipboard-list"></i>
                  <span className="Customnav-link-text downarrow-sublist">Property List</span>

                </Link>
                <Link to="/addAtendenc" className={`Customnav-link common-submenu-text  submenu-link ${location.pathname === "/addAendence" ? 'active' : ''}`}>
                  <i className="fa-solid fa-clipboard-list"></i>
                  <span className="Customnav-link-text downarrow-sublist">Atendence Report</span>

                </Link>
              </li>
   
            </ul>
          </li> */}

          <li className="nav-item">
            <Link to="/Property" className={`Customnav-link ${location.pathname === "/Property" ? 'active' : ''}`}>
            <i className="fas fa-building"></i>
              <span className="Customnav-link-text ms-1">Property</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/Leads" className={`Customnav-link ${location.pathname === "/Leads" ? 'active' : ''}`}>
            <i className="fas fa-users"></i>
              <span className="Customnav-link-text">Leads</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/Addblogs" className={`Customnav-link ${location.pathname === "/Addblogs" ? 'active' : ''}`}>
            <i className="fas fa-newspaper"></i>
              <span className="Customnav-link-text"> Add Blogs</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/BlogList" className={`Customnav-link ${location.pathname === "/BlogList" ? 'active' : ''}`}>
            <i className="fas fa-list "></i> 
              <span className="Customnav-link-text">Blogs List</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/Category" className={`Customnav-link ${location.pathname === "/Category" ? 'active' : ''}`}>
            <i className="fas fa-layer-group"></i>

              <span className="Customnav-link-text">Categories</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/CategoryType" className={`Customnav-link ${location.pathname === "/CategoryType" ? 'active' : ''}`}>
            <i className="fas fa-tag ms-1"></i>
          
              <span className="Customnav-link-text">Type</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/admin/newproject" className={`Customnav-link ${location.pathname === "/admin/newproject" ? 'active' : ''}`}>
            <i className="fas fa-project-diagram"></i>

              <span className="Customnav-link-text">New Project</span>
            </Link>
          </li>
          {/* <li className="nav-item">
            <Link to="/Static-Page" className={`Customnav-link ${location.pathname === "/Static-Page" ? 'active' : ''}`}>
            <i className="fas fa-check-circle"></i>

              <span className="Customnav-link-text">Static Page</span>
            </Link>
          </li> */}
         
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;
