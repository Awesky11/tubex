import React, { useState } from "react";
import Select from "react-select";
import "./AdminPanel.css";
import axios from "axios";

import { useDispatch } from "react-redux";
//import { uploadVideoData } from "../../redux/auth/AuthSlice";

import InputDropdown from "../../components/dropdown/InputDropdown";

function AdminPanel() {
  const options = [
    { value: "hollywood", label: "Hollywood" },
    { value: "bollywood", label: "Bollywood" },
    { value: "other", label: "Other" },
  ];

  const [formData, setFormData] = useState({
    description: "",
    source: "",
    subtitle: "",
    thumb: "",
    title: "",
    category: "",
  });

  const dispatch = useDispatch();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const setSelectedOption = (category) => {
    setFormData({ ...formData, [category]: category });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Code to send formData to server
    try {
      // make a POST request to the server to upload the data
      const response = await axios.post("/api/signup", formData);
      console.log(response.data);
      // Dispatch the signup action to reset the state
     // dispatch(uploadVideoData(formData));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="admin-panel-container">
      <div className="admin-panel-center-container">
        <form className="admin-panel-form" onSubmit={handleSubmit}>
          <label>
            Video Title:
            <div className="admin-panel-input-container">
              <input
                type="text"
                name="title"
                placeholder="e.g. Batman"
                value={formData.title}
                onChange={handleChange}
                required
              />
            </div>
          </label>
          <br />
          <label>
            Video Subtitle:
            <div className="admin-panel-input-container">
              <input
                type="text"
                name="subtitle"
                placeholder="e.g.Batman: The Dark Knight"
                value={formData.subtitle}
                onChange={handleChange}
                required
              />
            </div>
          </label>
          <br />
          <label>
            Video Thumbnail:
            <div className="admin-panel-input-container">
              <input
                type="text"
                name="thumb"
                placeholder="e.g. https://myport.com/batman.jpg"
                value={formData.thumb}
                onChange={handleChange}
                required
              />
            </div>
          </label>
          <br />
          <label>
            Video Source's Url:
            <div className="admin-panel-input-container">
              <input
                type="text"
                name="source"
                placeholder="e.g. https://myport.com/full_movie_batman.mp4"
                value={formData.source}
                onChange={handleChange}
                required
              />
            </div>
          </label>
          <br />
          <label>Choose a category: ${formData.category}</label>
          <div className="admin-panel-input-container">
            <InputDropdown
              selectedOption={formData.category}
              onChange={setSelectedOption}
              options={options}
            />
          </div>

          <br />
          <label>
            Video Description:
            <div className="admin-panel-input-container">
              <textarea
                name="description"
                placeholder="e.g. Batman comes out of retirement and gets help from a teenage sidekick. He faces off against the Joker and Two-Face before a battle to the death begins against Superman."
                value={formData.description}
                onChange={handleChange}
                required
              />
            </div>
          </label>
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default AdminPanel;
