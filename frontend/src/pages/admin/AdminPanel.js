import React, { useEffect, useState } from "react";
import "./AdminPanel.css";

import { useSelector } from "react-redux";

import InputDropdown from "../../components/dropdown/InputDropdown";

import { useVideoUpload } from "../../redux/hooks/useVideoUpload";

import Success from "../../assets/svgs/success.svg";
import Error from "../../assets/svgs/error.svg";
import Cross from "../../assets/svgs/cross.svg";

import { AlertMessage } from "../../components/common/Common";

import { createBrowserHistory } from "history";
const history = createBrowserHistory();

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

  const categories = [
    { label: "TOP VIDEOS", value: "top" },
    { label: "FEATURED", value: "featured" },
    { label: "LATEST HITS", value: "latest" },
    { label: "OTHERS", value: "other" },
  ];

  const handleClose = () => {
    history.push("/");
    history.go();
  };

  return (
    <div className="admin-panel-container">
      <div className="admin-panel-center-container">
        <span className="span-img">
          <img src={Cross} className="icon" onClick={handleClose} />
        </span>
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
              options={categories}
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
            <AlertMessage message={error} variant={"danger"} source={Error} />
          )}
          {!isLoading && !error && showSuccess && (
            <AlertMessage
              message="Successfully Uploaded!"
              variant={"success"}
              source={Success}
            />
          )}
        </form>
      </div>
    </div>
  );
});

export default AdminPanel;
