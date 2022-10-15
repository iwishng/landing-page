import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context";
const NavLink = ({ url, title, closeNav, index }) => {
  const { ind, setInd } = useGlobalContext();
  const linkHandler = () => {
    closeNav();
    if (index > 1) {
      setInd(false);
    }
    console.log(index, ind);
  };

  if (url.startsWith("/")) {
    return (
      <Link to={url}>
        <h4 className='my-5 capitalize' onClick={linkHandler}>
          {title}
        </h4>
      </Link>
    );
  }
  return (
    <a href={url}>
      <h4
        className={`${ind ? "flex" : "hidden"}  my-5 capitalize`}
        onClick={closeNav}
      >
        {title}
      </h4>
    </a>
  );
};

export default NavLink;
