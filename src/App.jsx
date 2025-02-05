import "./App.css";
import Sidebar from "./layout/Sidebar/Sidebar";
import Content from "./layout/Content/Content";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import ContentMain from "./components/ContentMain/ContentMain";

import Login from "./components/Login/Login";
import ProtectedRoute from "./components/ProtectedRoute";

import Leaves from "./components/Pages/Leaves";

import { SidebarContext } from "./context/sidebarContext";
import EmployeeView from "./components/Pages/EmployeeView";
import AddAtendence from "./components/Pages/Attendence/AddAtendence";
import LeaveType from "./components/Pages/Leaves/LeaveType";
import Addblogs from "./components/blogs/Addblogs";
import BlogList from "./components/blogs/BlogList";
import PropertyListing from "./components/property/PropertyListing";
import Leads from "./components/Leads";
import Categories from "./components/Category/Categories";
import CategoryEdit from "./components/Pages/CategoryEdit";
import CategoryType from "./components/Pages/CategoryType";
import axios from "axios";
import { useContext, useEffect } from "react";
import { url } from "./components/URL/Url";
import NewProject from "./components/NewProject/NewProject";
import BlogEdit from "./components/blogs/BlogEdit";
import PropertyUpdate from "./components/property/PropertyUpdate";

function App() {
  const {
    SetCategory,
    SetCategoryType,
    blogs,
    setBlogs,
    loading,
    setLoading,
    setProjects,
  } = useContext(SidebarContext);

  const GetCategories = async () => {
    const response = await axios.get(`${url}/getAllCategory`);
    SetCategory(response.data.resultdata);
  };
  const GetCategoriesType = async () => {
    const response = await axios.get(`${url}/api/getAlltype`);
    // SetCategory(response.data.result)
    SetCategoryType(response.data.result);
  };

  const getAllBlogs = async () => {
    try {
      const response = await axios.get(`${url}/api/getblogs`);

      if (response.data && response.data.length > 0) {
        setBlogs(response.data);
      } else {
        setBlogs([]); // No blogs available
      }
    } catch (error) {
      console.error("Error fetching blogs:", error);
      setBlogs([]); // Handle error by setting blogs to empty
    } finally {
      setLoading(false);
    }
  };

  const getAllProjects = async () => {
    try {
      const response = await axios.get(`${url}/api/project/get/all`);
      if (response.data && response.data.length > 0) {
        setProjects(response.data);
      } else {
        setProjects([]);
      }
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    GetCategories();
    GetCategoriesType();
    getAllBlogs();
    getAllProjects();
  }, []);

  const token = sessionStorage.getItem("token"); // Check if token exists

  return (
    <div className="app">
      {/* Show Sidebar only if the user is logged in */}
      {token && <Sidebar />}

      <div className="content">
        <Routes>
          <Route path="/Login" element={<Login />} />

          {/* Protected Routes */}
          <Route element={<ProtectedRoute />}>
            <Route path="/" element={<Content />}>
              <Route index element={<ContentMain />} />
              {/* <Route path="Product" element={<Page1 />} /> */}
              <Route path="/employee/Dashboard" element={<ContentMain />} />
              {/* <Route path="/websetting/vendor-Document" element={<VendorDocument />} /> */}
              {/* <Route path="/department" element={<DepartMent />} />
              }
              <Route path="/Role" element={<Role />} />
              <Route path="/editrole/:id" element={<EditRole />} /> */}
              <Route path="/leaves" element={<Leaves />} />
              <Route path="/Addblogs" element={<Addblogs />} />

              <Route path="/BlogEdit/:id" element={<BlogEdit />} />

              <Route path="/Property" element={<PropertyListing />} />
              <Route path="/Leads" element={<Leads />} />
              <Route path="/BlogList" element={<BlogList />} />
              <Route path="/Category" element={<Categories />} />
              <Route path="/Category/:id" element={<CategoryEdit />} />
              <Route path="/CategoryType" element={<CategoryType />} />
              <Route path="/LeaveType" element={<LeaveType />} />
              <Route path="/admin/newproject" element={<NewProject />} />
              {/* <Route path="/Employee" element={<Employee />} /> */}
              <Route path="/employeeview/:id" element={<EmployeeView />} />
              <Route path="/addAtendence" element={<AddAtendence />} />
              <Route path="/update/property/:id" element={<PropertyUpdate />} />
            </Route>
          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}

// import './App.css';
// import Sidebar from './layout/Sidebar/Sidebar';
// import Content from './layout/Content/Content';
// import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import ContentMain from './components/ContentMain/ContentMain';
// import Page1 from './components/Pages/Page1';
// import VendorDocument from './components/Pages/VendorDocument';
// import DepartMent from './components/Pages/DepartMent';
// import Login from './components/Login/Login';
// import ProtectedRoute from './components/ProtectedRoute';
// import Role from './components/Pages/Role';
// import Employee from './components/Pages/Employee';
// import EditRole from './components/Pages/EditRole';
// import DepartmentEdit from './components/Pages/DepartmentEdit';
// import Leaves from './components/Pages/Leaves';
// import { useContext, useEffect } from 'react';
// import { GetAlldepartment, GetAllEmployee, GetAllRole } from './components/Config/GetApi';
// import { SidebarContext } from './context/sidebarContext';
// import EmployeeView from './components/Pages/EmployeeView';
// import AddAtendence from './components/Pages/Attendence/AddAtendence';

// function App() {
//   const { SetDepartment, SetRole, user, UserData } = useContext(SidebarContext);
//   const AllServerFunc = async () => {
//     try {
//       const departmentData = await GetAlldepartment()
//       SetDepartment(departmentData)
//       const RoleData = await GetAllRole()
//       SetRole(RoleData)
//       const Users = await GetAllEmployee()
//       UserData(Users)
//       console.log("Users", Users);

//     } catch (error) {
//       console.log(error)
//     }

//   }
//   useEffect(() => {
//     AllServerFunc()
//   }, [])

//   return (
//     <div className='app'>

//       <Sidebar />

//       <div className='content'>
//         <Routes>

//           <Route path="/" element={<Content />}>
//             <Route index element={<ContentMain />} />
//             <Route path="Product" element={<Page1 />} />
//             <Route path="/Dashboard" element={<ContentMain />} />
//             <Route path="/websetting/vendor-Document" element={<VendorDocument />} />
//             <Route path="/department" element={<DepartMent />} />
//             <Route path="/departmentedit/:id" element={<DepartmentEdit />} />
//             <Route path="/Role" element={<Role />} />
//             <Route path="/editrole/:id" element={<EditRole />} />
//             <Route path="/leaves" element={<Leaves />} />
//             <Route path="/Employee" element={<Employee />} />
//             <Route path="/admin/employeeview/:id" element={<EmployeeView />} />
//             <Route path="/addAtendence" element={<AddAtendence />} />

//           </Route>
//         </Routes>
//       </div>
//     </div>
//   );
// }

// export default function AppWrapper() {
//   return (
//     <Router>
//       <App />
//     </Router>
//   );
// }
