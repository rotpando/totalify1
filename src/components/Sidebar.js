import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="menu column is-one-quarter">
      <div className="is-flex is-justify-content-space-between"></div>

      <p className="menu-label">Focus Time</p>
      <ul className="menu-list">
        <li key={"f1"}>
          <Link to={`/single/artists/5he5w2lnU9x7JFhnwcekXX`}>Skrillex</Link>{" "}
        </li>
        <li key={"f2"}>
          <Link to={`/single/artists/1vCWHaC5f2uS3yhpwWbIA6`}>Avicii</Link>{" "}
        </li>
        <li key={"f3"}>
          <Link to={`/single/artists/0ycHhPwPvoaO4VGzmMnXGq`}>Zomboy</Link>{" "}
        </li>
        <li key={"f4"}>
          <Link to={`/single/artists/6VD4UEUPvtsemqD3mmTqCR`}>Deorro</Link>{" "}
        </li>
      </ul>

      <p className="menu-label">Hotfixes</p>
      <ul className="menu-list">
        <li key={"h1"}>
          <Link to={`/single/artists/1Yox196W7bzVNZI7RBaPnf`}>Megadeth</Link>{" "}
        </li>
        <li key={"h2"}>
          <Link to={`/single/artists/2ye2Wgw4gimLv2eAKyk1NB`}>Metallica</Link>{" "}
        </li>
        <li key={"h3"}>
          <Link to={`/single/artists/7jy3rLJdDQY21OgRLCZ9sD`}>
            Foo Fighters
          </Link>{" "}
        </li>
        <li key={"h4"}>
          <Link to={`/single/artists/6olE6TJLqED3rqDCT0FyPh`}>Nirvana</Link>{" "}
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
