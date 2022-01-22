import React from "react";
import "./style.css";

const User = ({ user, deleteUser }) => {
  return (
    <div className="user">
      <h3>{user.name}</h3>
      <button onClick={() => deleteUser(user.id)}>Delete User</button>
    </div>
  );
};

export default User;
