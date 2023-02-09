import React, { useEffect, useState } from "react";
import "./AdminPanel.css";

import { useDispatch, useSelector } from "react-redux";

import InputDropdown from "../../components/dropdown/InputDropdown";

function AdminPanel() {
  const [formData, setFormData] = useState({
    description: "",
    source: "",
    subtitle: "",
    thumb: "",
    title: "",
    catId: "",
  });

  const dispatch = useDispatch();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const setSelectedOption = (category) => {
    setFormData({ ...formData, catId: category._id });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    console.log(formData);
  };

  useEffect(() => {
    // dispatch({ type: "" });
  }, []);

  const store = useSelector((state) => state);

  const {
    dataStore: { data, dataError, dataLoading },
  } = store;

  return (
    <div>
      <div className="admin-panel-center-container">
        <form className="admin-panel-form" onSubmit={handleSubmit}>
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
          <br />
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
          <br />
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
          <br />
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
          <br />
          <label>Choose a category:</label>
          <div className="admin-panel-form-input-container">
            <InputDropdown
              setSelectedOption={setSelectedOption}
              options={data}
            />
          </div>

          <br />
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
        </form>
      </div>
    </div>
  );
}

export default AdminPanel;
