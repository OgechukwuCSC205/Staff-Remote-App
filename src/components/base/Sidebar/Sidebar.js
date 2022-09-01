import "./Sidebar.css";

const Sidebar = () => {
  return (
    <>
      <div className="sidenav">
        <i className="fa fa-bars iconic icon3" aria-hidden="true"></i>
        <a href="/">Home</a>
        <a href="/">Tasks</a>
        <a href="/">Settings</a>
        <a href="/">Logout</a>
      </div>
    </>
  );
};

export default Sidebar;
