import React, { useState } from "react";
import "./AdminPanel.css";

import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import InputDropdown from "../../components/dropdown/InputDropdown";

import { useVideoUpload } from "../../redux/hooks/useVideoUpload";

import Success from "../../assets/svgs/success.svg";
import Error from "../../assets/svgs/error.svg";
import Cross from "../../assets/svgs/cross.svg";

import { AlertMessage } from "../../components/common/Common";

const AdminPanel = React.memo(() => {
  const initialFormState = {
    description: "",
    source: "",
    subtitle: "",
    thumb: "",
    title: "",
    category: "",
  };
  const [formData, setFormData] = useState(initialFormState);

  const [showSuccess, setShowSuccess] = useState(false);

  const [message, setMessage] = useState("");

  const { uploadVideo, isLoading, error } = useVideoUpload();

  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const setSelectedOption = (category) => {
    setFormData({ ...formData, category: category.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const result = await uploadVideo(formData);
    if (result) {
      setShowSuccess(true);
      setMessage(result.data.message);
      setTimeout(() => {
        setShowSuccess(false);
        // setFormData(initialFormState);
      }, 2000);
    }
  };

  const store = useSelector((state) => state);
  const videoList = store.videosStore.videos;
  //console.log("ADMIN -> ", videoList);

  const categories = [
    { title: "TOP VIDEOS", slug: "top" },
    { title: "FEATURED", slug: "featured" },
    { title: "LATEST HITS", slug: "latest" },
    { title: "OTHERS", slug: "others" },
  ];

  // const filteredVideos = videoList.filter((video) =>
  //   video.category.toLowerCase().includes('top'.toLowerCase())
  // );

  const handleClose = () => {
    navigate("/");
  };

  return (
    <div className="admin-panel-container">
      <div>
        {categories.map((category, index) => (
          <section key={index}>
            <h1>{category.title}</h1>
            <div className="video-grid">
              {videoList
                .filter((video) =>
                  video.category
                    .toLowerCase()
                    .includes(category.slug.toLowerCase())
                )
                .map((video) => (
                  <div className="video-card">
                    <img src={video.thumb} alt={video.title} />
                  </div>
                ))}
            </div>
          </section>
        ))}
      </div>
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
              message={message}
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
