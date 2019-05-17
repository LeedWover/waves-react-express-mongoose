import React from 'react';
import { Link } from 'react-router-dom';

export default ({ type, linkTo, children, addStyles }) => {
  
  const buttons = () => {
    let template = null;

    switch(type)  {
      case "default":
        template = <Link
          className="link_default"
          to={linkTo}
          {...addStyles}
        >
          {children}
        </Link>
      break;
      default:
        template = null;
    }

    return template;
  }
  
  return (
    <div className="my_link">
      {buttons()}
    </div>
  )
}