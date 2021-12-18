import { PermIdentity } from "@material-ui/icons";
import "./user.css";

export default function User() {
  return (
    <div className="user">
      <div className="userTitleContainer">
        <h1 className="userTitle">Edit User</h1>
        <button className="userAddButton">Create</button>
      </div>
      <div className="userContainer">
        <div className="userShow">
          <div className="userShowTop">
            <img
              src="https://i.picsum.photos/id/64/300/300.jpg?hmac=tIqPMmxrlIvlgHwBqR7lzPQyHO-KElXvhXwtKuyPse4"
              alt="user image"
              className="userShowImg"
            />
            <div className="userShowTopTitle">
              <span className="userShowUsername">Anna Becker</span>
              <span className="userShowUserTitle">Software Engineer</span>
            </div>
          </div>
          <div className="userShowBottom">
            <span className="userShowTitle">Account Details</span>
            <div className="userShowInfo">
              <PermIdentity className="userShowIcon" />
              <span className="userShowInfoTitle">annabeck99</span>
            </div>
            <div className="userShowInfo">
              <PermIdentity className="userShowIcon" />
              <span className="userShowInfoTitle">10.12.1999</span>
            </div>
            <div className="userShowInfo">
              <PermIdentity className="userShowIcon" />
              <span className="userShowInfoTitle">+1 123 456 78</span>
            </div>
            <div className="userShowInfo">
              <PermIdentity className="userShowIcon" />
              <span className="userShowInfoTitle">annabeck99@gmail.com</span>
            </div>
            <div className="userShowInfo">
              <PermIdentity className="userShowIcon" />
              <span className="userShowInfoTitle">New York | USA</span>
            </div>
          </div>
        </div>
        <div className="userUpdate"></div>
      </div>
    </div>
  );
}
