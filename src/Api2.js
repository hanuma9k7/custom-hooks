// import React from "react";
import useFetch from "./useFetch";
const URL = "https://fakestoreapi.com/users";
const Api2 = () => {
  const [userData, loading, isError] = useFetch(URL);
  if (isError) {
    return <h4>something was happend</h4>;
  }
  if (loading) {
    return <h5>loading...</h5>;
  }

  return (
    <div>
      <p>hello</p>
      <h1>Users</h1>
      <ul>
        {" "}
        {userData.map((eachuser, index) => {
          return <li key={index}>{eachuser.address.city}</li>;
        })}
      </ul>
    </div>
  );
};
export default Api2;
