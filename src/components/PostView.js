import icons from "../images/icon.svg";
import camera from "../images/camera.png";
import "./postView.css";
import Posts from "./Posts";
import axios from "axios";
import React, { useState, useEffect } from "react";

const PostView = () => {
  const [flag, setFlag] = useState(false);
  const [author, setAuthor] = useState("");
  const [imageLink, setImageLink] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [allData, setAllData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://insta-backend-j35f.onrender.com/posts"
      );
      setAllData(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  const takeImgLink = (e) => {
    setImageLink(e.target.value);
  };
  const takeAuthorName = (e) => {
    setAuthor(e.target.value);
  };
  const takeLocation = (e) => {
    setLocation(e.target.value);
  };
  const takeDescription = (e) => {
    setDescription(e.target.value);
  };
  const togglePopup = () => {
    setFlag(!flag);
  };
  const upload = async () => {
    window.location.reload(); // Reload the page
    setFlag(!flag);
    try {
      await axios.post("https://insta-backend-j35f.onrender.com/post", {
        imageLink: imageLink,
        authorName: author,
        locationName: location,
        descriptionName: description,
      });
      alert("Success");
      fetchData(); // Update the data after successful upload
    } catch (error) {
      alert("Failed");
      console.log(error);
    }
  };

  return (
    <div>
      <div className="navbar">
        <img alt="icon" className="icon" src={icons}></img>
        <span className="text">Instaclone</span>
        <span>
          <img
            alt="camera"
            onClick={togglePopup}
            className="camera"
            src={camera}
          ></img>
        </span>
      </div>
      <center>
        <Posts data={allData} />
      </center>
      {flag && (
        <div className="popup">
          <div className="popup-content">
            <input
              type="text"
              onChange={takeImgLink}
              placeholder="drop image link"
            />
            <input type="text" onChange={takeAuthorName} placeholder="author" />
            <input type="text" onChange={takeLocation} placeholder="location" />
            <input
              type="text"
              onChange={takeDescription}
              placeholder="description"
            />
            <button onClick={upload}>post</button>
            <button onClick={togglePopup}>cancel</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PostView;
