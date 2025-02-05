// import React from "react";
// import "./ContentMain.css";
// import Card from "react-bootstrap/Card";
// import { Link } from "react-router-dom";

// const ContentMain = () => {
//   return (
//     <>
//       {/* Dashboard Cards */}
//       <div className="container Home-total-card-box">
//         <div className="row box-shadow-common p-5">
//           {/* Total Property */}
//           <div className="col-lg-4 mb-4">
//             <Card className="box-downshadow dashboard-card">
//               <Card.Body className="d-flex flex-column align-items-center">
//                 <Card.Title>
//                   <i className="fas fa-building fs-2 mb-3"></i>
//                 </Card.Title>
//                 <Card.Title className="fs-5">Total Properties (10)</Card.Title>
//               </Card.Body>
//             </Card>
//           </div>

//           {/* Pending Property */}
//           <div className="col-lg-4 mb-4">
//             <Card className="box-downshadow dashboard-card text-warning">
//               <Card.Body className="d-flex flex-column align-items-center">
//                 <Card.Title>
//                   <i className="fas fa-clock fs-2 mb-3"></i>
//                 </Card.Title>
//                 <Card.Title className="fs-5">Pending Properties (5)</Card.Title>
//               </Card.Body>
//             </Card>
//           </div>

//           {/* Approved Property */}
//           <div className="col-lg-4 mb-4">
//             <Card className="box-downshadow dashboard-card text-success">
//               <Card.Body className="d-flex flex-column align-items-center">
//                 <Card.Title>
//                   <i className="fas fa-check-circle fs-2 mb-3"></i>
//                 </Card.Title>
//                 <Card.Title className="fs-5">Approved Properties (10)</Card.Title>
//               </Card.Body>
//             </Card>
//           </div>

//           {/* Total Leads */}
//           <div className="col-lg-4 mb-4">
//             <Card className="box-downshadow dashboard-card text-info">
//               <Card.Body className="d-flex flex-column align-items-center">
//                 <Card.Title>
//                   <i className="fas fa-users fs-2 mb-3"></i>
//                 </Card.Title>
//                 <Card.Title className="fs-5">Total Leads (10)</Card.Title>
//               </Card.Body>
//             </Card>
//           </div>

//           {/* Total Blogs */}
//           <div className="col-lg-4 mb-4">
//             <Card className="box-downshadow dashboard-card text-danger">
//               <Card.Body className="d-flex flex-column align-items-center">
//                 <Card.Title>
//                   <i className="fas fa-newspaper fs-2 mb-3"></i>
//                 </Card.Title>
//                 <Card.Title className="fs-5">Total Blogs (20)</Card.Title>
//               </Card.Body>
//             </Card>
//           </div>

//           {/* Property Seller */}
//           <div className="col-lg-4 mb-4">
//             <Card className="box-downshadow dashboard-card text-primary">
//               <Card.Body className="d-flex flex-column align-items-center">
//                 <Card.Title>
//                   <div className="comman-icon-circle">
//                     <i className="fas fa-user-tag fs-2"></i>
//                   </div>
//                 </Card.Title>
//                 <Card.Title className="fs-5">Property Sellers (10)</Card.Title>
//               </Card.Body>
//             </Card>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default ContentMain;


// import React from "react";
// import "./ContentMain.css";
// import Card from "react-bootstrap/Card";

// const ContentMain = () => {
//   return (
//     <>
//       {/* Dashboard Cards */}
//       <div className="container Home-total-card-box">
//         <div className="row box-shadow-common p-5">
//           {/* Total Property */}
//           <div className="col-lg-4 mb-4">
//             <Card className="dashboard-card card-light">
//               <Card.Body className="d-flex flex-column align-items-center">
//                 <Card.Title>
//                   <i className="fas fa-building fs-3 mb-3"></i>
//                 </Card.Title>
//                 <Card.Title className="fs-6">Total Properties (10)</Card.Title>
//               </Card.Body>
//             </Card>
//           </div>

//           {/* Pending Property */}
//           <div className="col-lg-4 mb-4">
//             <Card className="dashboard-card card-warning">
//               <Card.Body className="d-flex flex-column align-items-center">
//                 <Card.Title>
//                   <i className="fas fa-clock fs-3 mb-3"></i>
//                 </Card.Title>
//                 <Card.Title className="fs-6">Pending Properties (5)</Card.Title>
//               </Card.Body>
//             </Card>
//           </div>

//           {/* Approved Property */}
//           <div className="col-lg-4 mb-4">
//             <Card className="dashboard-card card-success">
//               <Card.Body className="d-flex flex-column align-items-center">
//                 <Card.Title>
//                   <i className="fas fa-check-circle fs-3 mb-3"></i>
//                 </Card.Title>
//                 <Card.Title className="fs-6">Approved Properties (10)</Card.Title>
//               </Card.Body>
//             </Card>
//           </div>

//           {/* Total Leads */}
//           <div className="col-lg-4 mb-4">
//             <Card className="dashboard-card card-info">
//               <Card.Body className="d-flex flex-column align-items-center">
//                 <Card.Title>
//                   <i className="fas fa-users fs-3 mb-3"></i>
//                 </Card.Title>
//                 <Card.Title className="fs-6">Total Leads (10)</Card.Title>
//               </Card.Body>
//             </Card>
//           </div>

//           {/* Total Blogs */}
//           <div className="col-lg-4 mb-4">
//             <Card className="dashboard-card card-danger">
//               <Card.Body className="d-flex flex-column align-items-center">
//                 <Card.Title>
//                   <i className="fas fa-newspaper fs-3 mb-3"></i>
//                 </Card.Title>
//                 <Card.Title className="fs-6">Total Blogs (20)</Card.Title>
//               </Card.Body>
//             </Card>
//           </div>

//           {/* Property Seller */}
//           <div className="col-lg-4 mb-4">
//             <Card className="dashboard-card card-primary">
//               <Card.Body className="d-flex flex-column align-items-center">
//                 <Card.Title>
//                   <div className="comman-icon-circle">
//                     <i className="fas fa-user-tag fs-3"></i>
//                   </div>
//                 </Card.Title>
//                 <Card.Title className="fs-6">Property Sellers (10)</Card.Title>
//               </Card.Body>
//             </Card>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default ContentMain;



// import React from "react";
// import { Card } from "react-bootstrap";

// const ContentMain = () => {
//   return (
//     <>
//       {/* Dashboard Cards */}
//       <div className="container Home-total-card-box" style={{ paddingTop: "30px" }}>
//         <div className="row box-shadow-common p-5">
//           {/* Total Property */}
//           <div className="col-lg-4 mb-4">
//             <Card style={cardStyle("light")}>
//               <Card.Body className="d-flex flex-column align-items-center">
//                 <Card.Title>
//                   <i className="fas fa-building fs-3 mb-3" style={iconStyle}></i>
//                 </Card.Title>
//                 <Card.Title className="fs-6" style={cardTitleStyle}>Total Properties (10)</Card.Title>
//               </Card.Body>
//             </Card>
//           </div>

//           {/* Pending Property */}
//           <div className="col-lg-4 mb-4">
//             <Card style={cardStyle("warning")}>
//               <Card.Body className="d-flex flex-column align-items-center">
//                 <Card.Title>
//                   <i className="fas fa-clock fs-3 mb-3" style={iconStyle}></i>
//                 </Card.Title>
//                 <Card.Title className="fs-6" style={cardTitleStyle}>Pending Properties (5)</Card.Title>
//               </Card.Body>
//             </Card>
//           </div>

//           {/* Approved Property */}
//           <div className="col-lg-4 mb-4">
//             <Card style={cardStyle("success")}>
//               <Card.Body className="d-flex flex-column align-items-center">
//                 <Card.Title>
//                   <i className="fas fa-check-circle fs-3 mb-3" style={iconStyle}></i>
//                 </Card.Title>
//                 <Card.Title className="fs-6" style={cardTitleStyle}>Approved Properties (10)</Card.Title>
//               </Card.Body>
//             </Card>
//           </div>

//           {/* Total Leads */}
//           <div className="col-lg-4 mb-4">
//             <Card style={cardStyle("info")}>
//               <Card.Body className="d-flex flex-column align-items-center">
//                 <Card.Title>
//                   <i className="fas fa-users fs-3 mb-3" style={iconStyle}></i>
//                 </Card.Title>
//                 <Card.Title className="fs-6" style={cardTitleStyle}>Total Leads (10)</Card.Title>
//               </Card.Body>
//             </Card>
//           </div>

//           {/* Total Blogs */}
//           <div className="col-lg-4 mb-4">
//             <Card style={cardStyle("danger")}>
//               <Card.Body className="d-flex flex-column align-items-center">
//                 <Card.Title>
//                   <i className="fas fa-newspaper fs-3 mb-3" style={iconStyle}></i>
//                 </Card.Title>
//                 <Card.Title className="fs-6" style={cardTitleStyle}>Total Blogs (20)</Card.Title>
//               </Card.Body>
//             </Card>
//           </div>

//           {/* Property Seller */}
//           <div className="col-lg-4 mb-4">
//             <Card style={cardStyle("primary")}>
//               <Card.Body className="d-flex flex-column align-items-center">
//                 <Card.Title>
//                   <div style={commanIconCircle}>
//                     <i className="fas fa-user-tag fs-3" style={iconStyle}></i>
//                   </div>
//                 </Card.Title>
//                 <Card.Title className="fs-6" style={cardTitleStyle}>Property Sellers (10)</Card.Title>
//               </Card.Body>
//             </Card>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// // Common Styles
// const cardStyle = (type) => ({
//   borderRadius: "12px",
//   boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
//   transition: "all 0.3s ease",
//   padding: "20px",
//   backgroundColor: getCardBackgroundColor(type),
//   color: getCardTextColor(type),
//   cursor: "pointer"
// });

// const cardTitleStyle = {
//   fontWeight: "500",
//   fontSize: "1rem",
//   textAlign: "center",
//   color: "#333"
// };

// const iconStyle = {
//   fontSize: "2rem",
//   color: "#333"
// };

// const commanIconCircle = {
//   width: "60px",
//   height: "60px",
//   backgroundColor: "#f8f9fa",
//   borderRadius: "50%",
//   display: "flex",
//   alignItems: "center",
//   justifyContent: "center",
//   boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
//   marginBottom: "15px"
// };

// // Helper function for background color
// const getCardBackgroundColor = (type) => {
//   switch (type) {
//     case "light":
//       return "#e0f7fa";
//     case "warning":
//       return "#fff8e1";
//     case "success":
//       return "#dcedc8";
//     case "info":
//       return "#bbdefb";
//     case "danger":
//       return "#ffcdd2";
//     case "primary":
//       return "#c8e6c9";
//     default:
//       return "#ffffff";
//   }
// };

// // Helper function for text color
// const getCardTextColor = (type) => {
//   switch (type) {
//     case "light":
//       return "#00796b";
//     case "warning":
//       return "#f57f17";
//     case "success":
//       return "#388e3c";
//     case "info":
//       return "#1976d2";
//     case "danger":
//       return "#d32f2f";
//     case "primary":
//       return "#388e3c";
//     default:
//       return "#333";
//   }
// };

// export default ContentMain;





import React, { useContext } from "react";
import { Card } from "react-bootstrap";
import { SidebarContext } from "../../context/sidebarContext";

const ContentMain = () => {
        const {blogs, setBlogs} = useContext(SidebarContext); 

        console.log("header",blogs);
        
  
  return (
    <>
      {/* Dashboard Cards */}
      <div className="container Home-total-card-box" style={{ paddingTop: "30px" }}>
        <div className="row box-shadow-common p-5">
          {/* Total Property */}
          <div className="col-lg-4 mb-4">
            <Card style={cardStyle("light")}>
              <Card.Body className="d-flex flex-column align-items-center">
                <Card.Title>
                  <div style={circleIconStyle}>
                    <i className="fas fa-building fs-3" style={iconStyle}></i>
                  </div>
                </Card.Title>
                <Card.Title className="fs-6" style={cardTitleStyle}>Total Properties (10)</Card.Title>
              </Card.Body>
            </Card>
          </div>

          {/* Pending Property */}
          <div className="col-lg-4 mb-4">
            <Card style={cardStyle("warning")}>
              <Card.Body className="d-flex flex-column align-items-center">
                <Card.Title>
                  <div style={circleIconStyle}>
                    <i className="fas fa-clock fs-3" style={iconStyle}></i>
                  </div>
                </Card.Title>
                <Card.Title className="fs-6" style={cardTitleStyle}>Categories (5)</Card.Title>
              </Card.Body>
            </Card>
          </div>

          {/* Approved Property */}
          <div className="col-lg-4 mb-4">
            <Card style={cardStyle("success")}>
              <Card.Body className="d-flex flex-column align-items-center">
                <Card.Title>
                  <div style={circleIconStyle}>
                    <i className="fas fa-check-circle fs-3" style={iconStyle}></i>
                  </div>
                </Card.Title>
                <Card.Title className="fs-6" style={cardTitleStyle}>Total Type (10)</Card.Title>
              </Card.Body>
            </Card>
          </div>

          {/* Total Leads */}
          <div className="col-lg-4 mb-4">
            <Card style={cardStyle("info")}>
              <Card.Body className="d-flex flex-column align-items-center">
                <Card.Title>
                  <div style={circleIconStyle}>
                    <i className="fas fa-users fs-3" style={iconStyle}></i>
                  </div>
                </Card.Title>
                <Card.Title className="fs-6" style={cardTitleStyle}>Total Leads (10)</Card.Title>
              </Card.Body>
            </Card>
          </div>

          {/* Total Blogs */}
          <div className="col-lg-4 mb-4">
            <Card style={cardStyle("danger")}>
              <Card.Body className="d-flex flex-column align-items-center">
                <Card.Title>
                  <div style={circleIconStyle}>
                    <i className="fas fa-newspaper fs-3" style={iconStyle}></i>
                  </div>
                </Card.Title>
                {/* <Card.Title className="fs-6" style={cardTitleStyle}>Total Blogs {blogs.length}</Card.Title> */}
                <Card.Title className="fs-6" style={cardTitleStyle}>
  Total Blogs {blogs && blogs.length > 0 ? blogs.length : "Oops"}
</Card.Title>
              </Card.Body>
            </Card>
          </div>

          {/* Property Seller */}
          <div className="col-lg-4 mb-4">
            <Card style={cardStyle("primary")}>
              <Card.Body className="d-flex flex-column align-items-center">
                <Card.Title>
                  <div style={circleIconStyle}>
                    <i className="fas fa-user-tag fs-3" style={iconStyle}></i>
                  </div>
                </Card.Title>
                <Card.Title className="fs-6" style={cardTitleStyle}>Property Sellers (10)</Card.Title>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};

// Common Styles
const cardStyle = (type) => ({
  borderRadius: "12px",
  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
  transition: "all 0.3s ease",
  padding: "20px",
  backgroundColor: getCardBackgroundColor(type),
  color: getCardTextColor(type),
  cursor: "pointer"
});

const cardTitleStyle = {
  fontWeight: "500",
  fontSize: "1rem",
  textAlign: "center",
  color: "#333"
};

const iconStyle = {
  fontSize: "2rem",
  color: "#00796b", // Custom color for icons
};

const circleIconStyle = {
  width: "60px",
  height: "60px",
  backgroundColor: "#fff", // White background for circle
  borderRadius: "50%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
  marginBottom: "15px",
};

// Helper function for background color
const getCardBackgroundColor = (type) => {
  switch (type) {
    case "light":
      return "#e0f7fa";
    case "warning":
      return "#fff8e1";
    case "success":
      return "#dcedc8";
    case "info":
      return "#bbdefb";
    case "danger":
      return "#ffcdd2";
    case "primary":
      return "#c8e6c9";
    default:
      return "#ffffff";
  }
};

// Helper function for text color
const getCardTextColor = (type) => {
  switch (type) {
    case "light":
      return "#00796b";
    case "warning":
      return "#f57f17";
    case "success":
      return "#388e3c";
    case "info":
      return "#1976d2";
    case "danger":
      return "#d32f2f";
    case "primary":
      return "#388e3c";
    default:
      return "#333";
  }
};

export default ContentMain;
