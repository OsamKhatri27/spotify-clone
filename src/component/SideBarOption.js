import React from "react";
import { Link } from "react-router-dom";


function SideBarOption({ option }) {
  return (
    <li className="nav-item mx-3 mt-1">
      <Link to={option.url} className="nav-link text-white align-middle px-0 ">
        <i className={option.icon}></i>
        <span className="fs-5 ms-1 d-none d-sm-inline">{option.name}</span>
      </Link>
    </li>
  );
}

export default SideBarOption;
