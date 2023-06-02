import React from "react";
import "./posts.css";
import heart from "../images/heart.png";
import share from "../images/share.png";

import threedots from "../images/more_icon.svg";
const Posts = (props) => {
  let instaData = [
    {
      name: "Siva",
      location: "Bengaluru",
      likes: 64,
      description: "Kick start your career",
      PostImage:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH6WLNAO_4lvHh2BjkVRuw7C38BeSL4l6JguBUip6iH8kXAlyWD8IpG4BtAxc0FbU162k&usqp=CAU",
      date: new Date(),
    },
    {
      name: "Neeraj",
      location: "Pune",
      likes: 30,
      description: "Sample Description",
      PostImage:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQfAjoJDAI-HWh9ztoFtLimWsygR-OeIkgG5wii5YGiQCC8lBUpAVgocMwbuTZtVOM31g&usqp=CAU",
      date: new Date(),
    },
    {
      name: "Rahul",
      location: "Hyderabad",
      likes: 30,
      description: "Sample Description for Post",
      PostImage:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH6WLNAO_4lvHh2BjkVRuw7C38BeSL4l6JguBUip6iH8kXAlyWD8IpG4BtAxc0FbU162k&usqp=CAU",
      date: new Date(),
    },
  ];
  let data = [...instaData, ...props.data];
  return (
    <div>
      {data.map((user) => (
        <div className="container">
          <div className="first">
            <div className="nameAndLocation">
              <div>{user.name} </div>
              <div> {user.location}</div>
            </div>
            <div className="threeDots">
              <img className="dots" src={threedots} alt="threedots" />
            </div>
          </div>
          <div className="second">
            <img
              src={user.PostImage}
              alt="img"
              height="100%"
              width="100%"
            ></img>
          </div>
          <div className="third">
            <div className="heartDateAndShare">
              <span className="heart">
                <img src={heart} alt="heart" />
              </span>
              <span className="share">
                <img src={share} alt="share" />
              </span>
              <span className="date">Date:</span>
            </div>
            <div className="likes">{user.likes} Likes</div>
            <div className="description">Description: {user.description}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Posts;
