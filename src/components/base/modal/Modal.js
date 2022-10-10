// import createPortal
import { useState } from "react";
import ReactDom from "react-dom";
import "./Modal.css";

export const Modal = ({ openMethod }, props) => {
  const [selectState, setSelectState] = useState("approved");
  const [comment, setComment] = useState("");
  const fileStatus = ["Approved", "Reject"];

  const handleStateChange = (e) => {
    setSelectState(e.target.value);
  };

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  // if (!open) return null;

  return ReactDom.createPortal(
    <>
      <div
        onClick={(e) => {
          e.stopPropagation();
          openMethod(false);
        }}
        className="over-lay"
      >
        <div
          onClick={(e) => {
            e.stopPropagation();
            openMethod(true);
          }}
          className="containers"
        >
          <form>
            <div className="approval">
              <div>
                <label htmlFor="status" className="approval-label">
                  Approval Status
                </label>
                <select
                  name="select status"
                  className="select-modal"
                  value={selectState}
                  onChange={handleStateChange}
                >
                  {fileStatus.map((value, index) => (
                    <option key={index} value={value}>
                      {value}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            {selectState === "Reject" && (
              <div className="rejection-Input">
                {/* <div className="rejection-label"> */}
                <label htmlFor="comment" className="comment-style">
                  Comment
                </label>
                {/* </div> */}
                <textarea
                  type="text"
                  row="4"
                  maxLength={50}
                  name="comment"
                  className="rj-input"
                  value={comment}
                  placeholder="Enter rejection reason"
                  onChange={handleCommentChange}
                />
              </div>
            )}
            <div className="submit-modal">
              <button
                type="submit"
                style={{
                  backgroundColor: "#843477",
                  width: "5rem",
                  borderRadius: "5px",
                  color: "white",
                  height: "2rem",
                  border: "none",
                }}
              >
                Ok
              </button>
              <button
                type="cancel"
                style={{
                  backgroundColor: "red",
                  width: "5rem",
                  borderRadius: "5px",
                  color: "white",
                  height: "2rem",
                  border: "none",
                }}
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  openMethod(false);
                }}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </>,
    document.getElementById("portal")
  );
};
