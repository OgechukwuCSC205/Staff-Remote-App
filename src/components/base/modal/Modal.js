// import createPortal
import { useState } from "react";
import "./Modal.css";


export const Modal = (props) => {
    const [selectState, setSelectState] = useState("approved");
    const [comment, setComment] = useState("");
    const fileStatus = ["approved","reject"];

    const handleStateChange = (e) => {
        setSelectState(e.target.value);
    };

    const handleCommentChange = (e) => {
        setComment(e.target.value);
    };


    return (
      <div className="containers">
        <form>
          <div className="approval">
          <div>
                <label htmlFor="status">Approval Status</label>
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
          {selectState === "reject" && (
            <div className="rejection-Input">
              {/* <div className="rejection-label"> */}
                <label htmlFor="comment">Comment</label>
              {/* </div> */}
              <textarea
                type="text"
                row="4"
                maxLength={50}
                name="comment"
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
                backgroundColor: "blue",
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
            >
              cancel
            </button>
          </div>
        </form>
      </div>
    );
    
}; 