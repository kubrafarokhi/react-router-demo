import React from "react";
import { Link, Outlet, useSearchParams } from "react-router-dom";

const Users = () => {
  const [searchParams, setSearchParams] = useSearchParams();  // query params
  const showActiveFilter = searchParams.get("filter") === "active";
  return (
    <div>
      <Link to={"/users/1"}>User 1</Link>
      <Link to={"/users/2"}>User 2</Link>
      <Link to={"/users/3"}>User 3</Link>
      <Outlet />
      <div>
        <button onClick={() => setSearchParams({ filter: "active" })}>
          Active
        </button>
        <button onClick={() => setSearchParams({})}>Reset</button>
      </div>
      {showActiveFilter ? (
        <h2>Showing active users</h2>
      ) : (
        <h2>Showing all users</h2>
      )}
    </div>
  );
};

export default Users;
