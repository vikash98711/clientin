import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { url } from "../URL/Url";
import { SidebarContext } from "../../context/sidebarContext";
import { useContext } from "react";
import Swal from "sweetalert2";
import TextEditor from "../TextEditor";

function PropertyUpdate() {
  const { id } = useParams();
  const [sellerName, setSellerName] = useState("");
  const [city, setCity] = useState("");
  const [category, setCategory] = useState("");
  const [type, setType] = useState("");
  const [status, setStatus] = useState("Pending");
  const [price, setPrice] = useState("");
  const [propertyName, setPropertyName] = useState("");
  const [thumbnail, setThumbnail] = useState(null);
  const [descriptionImage, setDescriptionImage] = useState(null);
  const [propertyImageOne, setPropertyImageOne] = useState(null);
  const [propertyImageTwo, setPropertyImageTwo] = useState(null);
  const [propertyImageThree, setPropertyImageThree] = useState(null);
  const [propertyImageFour, setPropertyImageFour] = useState(null);

  const [description, setDescription] = useState("");

  const [editThumbnail, setEditThumbnail] = useState(false);
  const [editDescriptionImage, setEditDescriptionImage] = useState(false);
  const [editImage, setEditImage] = useState({
    one: false,
    two: false,
    three: false,
    four: false,
  });

  const [property, setProperty] = useState({});

  const [loading, setLoading] = useState(false);
  const [loadingButton, setLoadingButton] = useState(false);

  const { getCategory, CategoryType } = useContext(SidebarContext);

  const statusOptions = ["Approved", "Pending"];

  const getProject = async (id) => {
    await fetch(`${url}/api/project/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setSellerName(data.sellerName);
        setCity(data.city);
        setCategory(data.category);
        setType(data.type);
        setStatus(data.status);
        setPrice(data.price);
        setPropertyName(data.projectName);
        setDescription(data.description);
        setProperty(data);
      })
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    if (id) {
      setLoading(true);
      getProject(id);
    }
  }, [id]);

  const handleImageChange = (e, setImage) => {
    const file = e.target.files[0];
    if (file) setImage(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("sellerName", sellerName);
    formData.append("city", city);
    formData.append("category", category);
    formData.append("type", type);
    formData.append("status", status);
    formData.append("price", price);
    formData.append("projectName", propertyName);
    formData.append("description", description);
    if (thumbnail) {
      formData.append("thumbnail", thumbnail);
    }
    if (descriptionImage) {
      formData.append("descriptionImage", descriptionImage);
    }
    if (propertyImageOne) {
      formData.append("propertyImageOne", propertyImageOne);
    }
    if (propertyImageTwo) {
      formData.append("propertyImageTwo", propertyImageTwo);
    }
    if (propertyImageThree) {
      formData.append("propertyImageThree", propertyImageThree);
    }
    if (propertyImageFour) {
      formData.append("propertyImageFour", propertyImageFour);
    }

    setLoadingButton(true);

    fetch(`${url}/api/project/update/${id}`, {
      method: "PATCH",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.message === "Project updated successful") {
          getProject(data.projectId);
          setThumbnail(false);
          setEditDescriptionImage(false);
          setEditImage({
            one: false,
            two: false,
            three: false,
            four: false,
          });
          Swal.fire({
            title: "Success!",
            text: "Project updated successfully!",
            icon: "success",
            confirmButtonText: "OK",
          });
        } else if (data.message === "No fields to update") {
          Swal.fire({
            icon: "warning",
            title: "Oops...",
            text: "No fields to update",
            confirmButtonText: "OK",
          });
        } else {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!",
            confirmButtonText: "OK",
          });
        }
      })
      .catch((error) => {
        console.log(error);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
          confirmButtonText: "OK",
        });
      })
      .finally(() => setLoadingButton(false));
  };

  return (
    <div className="container mt-2 box-shadow-common p-5 add-blogwrapper overflow-x-hidden">
      {loading ? (
        <div>Loading...</div>
      ) : (
        <>
          <h4 className="text-center mb-4">Update Property</h4>
          <form onSubmit={handleSubmit}>
            <div className="row g-3">
              <div className="col-md-4">
                <label htmlFor="sellerName" className="form-label">
                  Seller Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="sellerName"
                  value={sellerName}
                  onChange={(e) => setSellerName(e.target.value)}
                />
              </div>

              <div className="col-md-4">
                <label htmlFor="city" className="form-label">
                  City
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="city"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                />
              </div>

              <div className="col-md-4">
                <label htmlFor="propertyName" className="form-label">
                  Project Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="propertyName"
                  value={propertyName}
                  onChange={(e) => setPropertyName(e.target.value)}
                />
              </div>

              <div className="col-md-4">
                <label htmlFor="thumbnail" className="form-label">
                  Thumbnail
                </label>
                {editThumbnail ? (
                  <div className="d-flex flex-column">
                    <input
                      type="file"
                      className="form-control mb-2"
                      id="thumbnail"
                      accept="image/*"
                      onChange={(e) => handleImageChange(e, setThumbnail)}
                    />
                    <button
                      className="btn btn-primary"
                      onClick={(e) => {
                        e.preventDefault();
                        setEditThumbnail(false);
                      }}
                    >
                      <i className="fa-solid fa-x"></i>
                    </button>
                  </div>
                ) : (
                  <div className="d-flex flex-column">
                    <img
                      src={property.thumbnail ? property.thumbnail : ""}
                      alt=""
                      className="d-inline-block rounded mb-2"
                      style={{
                        height: "150px",
                        objectFit: "cover",
                      }}
                    />
                    <button
                      className="btn btn-primary"
                      onClick={(e) => {
                        e.preventDefault();
                        setEditThumbnail(true);
                      }}
                    >
                      <i className="fa-solid fa-pencil"></i>
                    </button>
                  </div>
                )}
              </div>

              <div className="col-md-4">
                <label htmlFor="descriptionImage" className="form-label">
                  Description Image
                </label>

                {editDescriptionImage ? (
                  <div className="d-flex flex-column">
                    <input
                      type="file"
                      className="form-control"
                      id="descriptionImage"
                      accept="image/*"
                      onChange={(e) =>
                        handleImageChange(e, setDescriptionImage)
                      }
                    />
                    <button
                      className="btn btn-primary"
                      onClick={(e) => {
                        e.preventDefault();
                        setEditDescriptionImage(false);
                      }}
                    >
                      <i className="fa-solid fa-x"></i>
                    </button>
                  </div>
                ) : (
                  <div className="d-flex flex-column">
                    <img
                      src={
                        property.descriptionImage
                          ? property.descriptionImage
                          : ""
                      }
                      alt=""
                      className="d-inline-block rounded mb-2"
                      style={{
                        height: "150px",
                        objectFit: "cover",
                      }}
                    />
                    <button
                      className="btn btn-primary"
                      onClick={(e) => {
                        e.preventDefault();
                        setEditDescriptionImage(true);
                      }}
                    >
                      <i className="fa-solid fa-pencil"></i>
                    </button>
                  </div>
                )}
              </div>

              <div className="col-md-4">
                <label htmlFor="category" className="form-label">
                  Category
                </label>
                <select
                  className="form-select"
                  id="category"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                >
                  <option value="">Select Category</option>
                  {getCategory &&
                    getCategory.map((cat) => (
                      <option key={cat._id} value={cat.name}>
                        {cat.name}
                      </option>
                    ))}
                </select>
              </div>

              <div className="col-md-4">
                <label htmlFor="type" className="form-label">
                  Type
                </label>
                <select
                  className="form-select"
                  id="type"
                  value={type}
                  onChange={(e) => setType(e.target.value)}
                >
                  <option value="">Select Type</option>
                  {CategoryType &&
                    CategoryType.map((t, index) => (
                      <option key={index} value={t.name}>
                        {t.name}
                      </option>
                    ))}
                </select>
              </div>

              <div className="col-md-4">
                <label htmlFor="status" className="form-label">
                  Status
                </label>
                <select
                  className="form-select"
                  id="status"
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                >
                  {statusOptions.map((s, index) => (
                    <option key={index} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
              </div>

              <div className="col-md-4">
                <label htmlFor="price" className="form-label">
                  Price
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="price"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                />
              </div>
              <div className="col-md-3">
                <label htmlFor="propertyImageOne" className="form-label">
                  Property Image 1
                </label>
                {editImage.one ? (
                  <div className="d-flex flex-column">
                    <input
                      type="file"
                      className="form-control"
                      id="propertyImageOne"
                      accept="image/*"
                      onChange={(e) =>
                        handleImageChange(e, setPropertyImageOne)
                      }
                    />
                    <button
                      className="btn btn-primary"
                      onClick={(e) => {
                        e.preventDefault();
                        setEditImage({ ...editImage, one: false });
                      }}
                    >
                      <i className="fa-solid fa-x"></i>
                    </button>
                  </div>
                ) : (
                  <div className="d-flex flex-column">
                    <img
                      src={
                        property.propertyImageOne
                          ? property.propertyImageOne
                          : ""
                      }
                      alt=""
                      className="d-inline-block rounded mb-2"
                      style={{
                        height: "150px",
                        objectFit: "cover",
                      }}
                    />
                    <button
                      className="btn btn-primary"
                      onClick={(e) => {
                        e.preventDefault();
                        setEditImage({ ...editImage, one: true });
                      }}
                    >
                      <i className="fa-solid fa-pencil"></i>
                    </button>
                  </div>
                )}
              </div>
              <div className="col-md-3">
                <label htmlFor="propertyImageTwo" className="form-label">
                  Property Image 2
                </label>
                {editImage.two ? (
                  <div className="d-flex flex-column">
                    <input
                      type="file"
                      className="form-control"
                      id="propertyImageTwo"
                      accept="image/*"
                      onChange={(e) =>
                        handleImageChange(e, setPropertyImageTwo)
                      }
                    />
                    <button
                      className="btn btn-primary"
                      onClick={(e) => {
                        e.preventDefault();
                        setEditImage({ ...editImage, two: false });
                      }}
                    >
                      <i className="fa-solid fa-x"></i>
                    </button>
                  </div>
                ) : (
                  <div className="d-flex flex-column ">
                    <img
                      src={
                        property.propertyImageTwo
                          ? property.propertyImageTwo
                          : ""
                      }
                      alt=""
                      className="d-inline-block rounded mb-2"
                      style={{
                        height: "150px",
                        objectFit: "cover",
                      }}
                    />
                    <button
                      className="btn btn-primary"
                      onClick={(e) => {
                        e.preventDefault();
                        setEditImage({ ...editImage, two: true });
                      }}
                    >
                      <i className="fa-solid fa-pencil"></i>
                    </button>
                  </div>
                )}
              </div>
              <div className="col-md-3">
                <label htmlFor="propertyImageThree" className="form-label">
                  Property Image 3
                </label>
                {editImage.three ? (
                  <div className="d-flex flex-column ">
                    <input
                      type="file"
                      className="form-control"
                      id="propertyImageThree"
                      accept="image/*"
                      onChange={(e) =>
                        handleImageChange(e, setPropertyImageThree)
                      }
                    />
                    <button
                      className="btn btn-primary"
                      onClick={(e) => {
                        e.preventDefault();
                        setEditImage({ ...editImage, three: false });
                      }}
                    >
                      <i className="fa-solid fa-x"></i>
                    </button>
                  </div>
                ) : (
                  <div className="d-flex flex-column ">
                    <img
                      src={
                        property.propertyImageThree
                          ? property.propertyImageThree
                          : ""
                      }
                      alt=""
                      className="d-inline-block rounded mb-2"
                      style={{
                        height: "150px",
                        objectFit: "cover",
                      }}
                    />
                    <button
                      className="btn btn-primary"
                      onClick={(e) => {
                        e.preventDefault();
                        setEditImage({ ...editImage, three: true });
                      }}
                    >
                      <i className="fa-solid fa-pencil"></i>
                    </button>
                  </div>
                )}
              </div>
              <div className="col-md-3">
                <label htmlFor="propertyImageFour" className="form-label">
                  Property Image 4
                </label>
                {editImage.four ? (
                  <div className="d-flex flex-column gap-2">
                    <input
                      type="file"
                      className="form-control"
                      id="propertyImageFour"
                      accept="image/*"
                      onChange={(e) =>
                        handleImageChange(e, setPropertyImageFour)
                      }
                    />
                    <button
                      className="btn btn-primary"
                      onClick={(e) => {
                        e.preventDefault();
                        setEditImage({ ...editImage, four: false });
                      }}
                    >
                      <i className="fa-solid fa-x"></i>
                    </button>
                  </div>
                ) : (
                  <div className="d-flex flex-column">
                    <img
                      src={
                        property.propertyImageFour
                          ? property.propertyImageFour
                          : ""
                      }
                      alt=""
                      className="d-inline-block rounded mb-2"
                      style={{
                        height: "150px",
                        objectFit: "cover",
                      }}
                    />
                    <button
                      className="btn btn-primary"
                      onClick={(e) => {
                        e.preventDefault();
                        setEditImage({ ...editImage, one: true });
                      }}
                    >
                      <i className="fa-solid fa-pencil"></i>
                    </button>
                  </div>
                )}
              </div>

              <div className="col-md-12">
                <label htmlFor="description" className="form-label">
                  Description
                </label>
                <TextEditor value={description} onChange={setDescription} />
              </div>
            </div>

            <div className="text-end mt-4">
              <button
                type="submit"
                className="btn btn-primary"
                disabled={loadingButton}
              >
                {loadingButton ? "Uploading" : "Submit"}
                {loadingButton && (
                  <span
                    className="ms-2 spinner-border spinner-border-sm"
                    role="status"
                    aria-hidden="true"
                  ></span>
                )}
              </button>
            </div>
          </form>
        </>
      )}
    </div>
  );
}

export default PropertyUpdate;
