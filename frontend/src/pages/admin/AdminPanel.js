import React, { useEffect, useState } from "react";
import "./AdminPanel.css";

import { useSelector } from "react-redux";

import InputDropdown from "../../components/dropdown/InputDropdown";
import { updateCategoryData } from "../../redux/actions/Actions";

import { useVideoUpload } from "../../redux/hooks/useVideoUpload";

import Alert from "react-bootstrap/Alert";
import Success from "../../assets/svgs/success.svg";
import Error from "../../assets/svgs/error.svg";

const AdminPanel = React.memo(() => {
  const initialFormState = {
    description: "",
    source: "",
    subtitle: "",
    thumb: "",
    title: "",
  };
  const [formData, setFormData] = useState(initialFormState);

  const [catId, setCatId] = useState("");

  const [showSuccess, setShowSuccess] = useState(false);

  const { uploadVideo, isLoading, error } = useVideoUpload();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const setSelectedOption = (category) => {
    setCatId(category._id);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const result = await uploadVideo(formData, catId);
    if (result) {
      setShowSuccess(true);
      setTimeout(() => {
        setShowSuccess(false);
       // setFormData(initialFormState);
      }, 2000);
    }
  };

  const store = useSelector((state) => state);

  const {
    dataStore: { data, dataError, dataLoading },
  } = store;

  return (
    <div>
      <div className="admin-panel-center-container">
        <form inline className="admin-panel-form" onSubmit={handleSubmit}>
          <label>
            Video Title:
            <div className="admin-panel-form-input-container">
              <input
                type="text"
                name="title"
                placeholder="e.g. Batman"
                value={formData.title}
                onChange={handleChange}
              />
            </div>
          </label>

          <label>
            Video Subtitle:
            <div className="admin-panel-form-input-container">
              <input
                type="text"
                name="subtitle"
                placeholder="e.g.Batman: The Dark Knight"
                value={formData.subtitle}
                onChange={handleChange}
              />
            </div>
          </label>

          <label>
            Video Thumbnail:
            <div className="admin-panel-form-input-container">
              <input
                type="text"
                name="thumb"
                placeholder="e.g. https://myport.com/batman.jpg"
                value={formData.thumb}
                onChange={handleChange}
              />
            </div>
          </label>

          <label>
            Video Source's Url:
            <div className="admin-panel-form-input-container">
              <input
                type="text"
                name="source"
                placeholder="e.g. https://myport.com/full_movie_batman.mp4"
                value={formData.source}
                onChange={handleChange}
              />
            </div>
          </label>

          <label>Choose a category:</label>
          <div className="admin-panel-form-input-container">
            <InputDropdown
              setSelectedOption={setSelectedOption}
              options={data}
            />
          </div>

          <label />
          <label>
            Video Description:
            <div className="admin-panel-form-input-container">
              <textarea
                name="description"
                placeholder="e.g. Batman comes out of retirement and gets help from a teenage sidekick. He faces off against the Joker and Two-Face before a battle to the death begins against Superman."
                value={formData.description}
                onChange={handleChange}
              />
            </div>
          </label>
          <br />
          <button type="submit">Submit</button>
          {isLoading && <div className="loader"></div>}
          {!isLoading && error && (
            <Alert key={"danger"} variant={"danger"}>
              <span>
                <img src={Error} className="icon" />
              </span>
              {error}
            </Alert>
          )}
          {!isLoading && !error && showSuccess && (
            <>
              <Alert key={"success"} variant={"success"}>
                <span>
                  <img src={Success} className="icon" />
                </span>
                Successfully Uploaded!
              </Alert>
            </>
          )}
        </form>
      </div>
    </div>
  );
});

export default AdminPanel;
