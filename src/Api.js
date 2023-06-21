import React from "react";
import useFetch from "./useFetch";
const URL = "https://fakestoreapi.com/products";
const Api = () => {
  const [userData, loading, isError] = useFetch(URL);
  if (isError) {
    return <h4>something was happend</h4>;
  }
  if (loading) {
    return <h5>loading...</h5>;
  }

  return (
    <div>
      <h1>Products</h1>
      <ul>
        {" "}
        {userData.map((eachuser, index) => {
          return <li key={index}>{eachuser.title}</li>;
        })}
      </ul>
    </div>
  );
};
export default Api;
