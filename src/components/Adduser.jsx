import axios from "axios";
import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import User from "./User";

const Adduser = () => {
  const [users, setUsers] = useState([]);

  const fetchUser = async () => {
    try {
      const response = await axios.get(
        `https://swapi.dev/api/people/${Math.floor(Math.random() * 10) + 1}`
      );
      let user = {
        id: uuidv4(),
        ...response.data,
      };
      setUsers([...users, user]);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteUser = async (id) => {
    const newUserList = await users.filter((user) => {
      return user.id !== id;
    });
    setUsers(newUserList);
  };

  return (
    <div className="addUser">
      <h1>Add a User</h1>
      <button onClick={fetchUser}>Add User</button>
      {users.map((user) => {
        return <User key={user.id} user={user} deleteUser={deleteUser} />;
      })}
    </div>
  );
};

export default Adduser;
