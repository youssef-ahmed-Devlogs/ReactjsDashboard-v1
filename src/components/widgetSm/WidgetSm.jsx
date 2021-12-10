import "./widgetSm.css";

export default function WidgetSm() {
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Join Members</span>
      <ul className="widgetSmList">
        <li className="widgetSmListItem">
          <img
            src="https://i.picsum.photos/id/64/300/300.jpg?hmac=tIqPMmxrlIvlgHwBqR7lzPQyHO-KElXvhXwtKuyPse4"
            alt="User"
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername"></span>
          </div>
        </li>
      </ul>
    </div>
  );
}
