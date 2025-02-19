import React from "react";
import { useNavigate } from "react-router-dom";

const Nav: React.FC = () => {
  const navigate = useNavigate();

  const goToAbout = () => {
    navigate("/about");
  };

  return (
    <div style={{ display: "flex" }}>
      <img
        src={"images/kettle.jpg"}
        style={{ width: "100px", borderRadius: "20px" }}
      />
      <div>Ben Capp</div>
      <button onClick={() => navigate("/gallery")}>Gallery</button>
      <button onClick={() => navigate("/about")}>About</button>
      <button onClick={() => navigate("/shop")}>Shop</button>
    </div>
  );
};

export default Nav;
