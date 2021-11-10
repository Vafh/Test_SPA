import React, { useEffect, useState } from "react";
import { fetchUser, fetchUserById } from "../service/Api";

const RequestPage = () => {
  const [state, setState] = useState([]);
  const [userById, setUserById] = useState("");
  const [valueInput, setValueInput] = useState("");
  useEffect(() => {
    fetchUser()
      .then(setState)
      .catch((err) => console.log(err.message));
  }, []);
  useEffect(() => {
    window.addEventListener("keydown", handleEnter);
    return () => {
      window.removeEventListener("keydown", handleEnter);
    };
  });

  const handleEnter = (e) => {
    if (e.code === "Enter") {
      fetchUserById(valueInput)
        .then(setUserById)
        .catch((err) => console.log(err.message));
    }
  };
  const handleClick = (e) => {
    setValueInput(e.currentTarget.value);
  };
  return (
    <div>
      <p>Request</p>
      <input type="number" placeholder="Example 1,3,7" onChange={handleClick} />
      <ul>
        {!userById || userById.length
          ? state.map(
              (user) =>
                user.id < 11 && (
                  <li key={user.id}>
                    <p>{user.id}</p>
                    <h3>{user.title}</h3>
                    <p>{user.body}</p>
                  </li>
                )
            )
          : state.map(
              (user) =>
                user.userId === userById.userId && (
                  <li key={user.id}>
                    <p>{user.userId}</p>
                    <p>{user.id}</p>
                    <h3>{user.title}</h3>
                    <p>{user.body}</p>
                  </li>
                )
            )}
      </ul>
    </div>
  );
};

export default RequestPage;
