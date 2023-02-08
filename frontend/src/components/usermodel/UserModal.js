import React, { useState } from "react";
import "./UserModal.css";

const UserModal = ({ user, handleUserModel }) => {
  return (
    <div>
      {user && user?.username && (
        <div className="modal">
          <ul className="user-info-list">
            <li>
              <p className="name">{user?.username}</p>
            </li>
            <li>
              <p className="email">{user?.token}</p>
            </li>
            <li>
              <button onClick={handleUserModel} className="btn-logout">
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
