import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
      Home
      <button onClick={() => navigate("order-summary")}>Done</button>
      {/* <button onClick={() => navigate("order-summary", { replace: true })}>
        Done
      </button> */}
    </div>
  );
};

export default Home;
