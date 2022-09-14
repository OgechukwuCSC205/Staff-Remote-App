import Card from "react-bootstrap/Card";
export const Home = () => {
  return (
    // document.cookie ="user= oge";

    <>
      <div className="date">
        <p className="date-text">{new Date().toDateString()}</p>
      </div>
    </>
  );
};
