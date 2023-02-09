import React from "react";
import "./UserModal.css";

const UserModal = ({ open, user, handleLogout }) => {
  return (
    <div>
      {open && user && (
        <div className="modal">
          <ul className="user-info-list">
            <li>
              <p className="name">{"John Sins"}</p>
            </li>
            <li>
              <p className="email">{"johnsins@outlook.com"}</p>
            </li>
            <li>
              <button onClick={handleLogout} className="btn-logout">
                Logout
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default UserModal;
