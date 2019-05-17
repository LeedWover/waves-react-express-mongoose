import React from "react";

import MyButton from '../utils/Button';

export default () => {
  return (
    <div className="page_wrapper">
      <div className="container">
        <div className="register_login_container">
          <div className="left">
            <h1>New Customers</h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde,
              temporibus consequuntur? Cum iure dolorum magni! Quis, dicta
              similique harum voluptate consequatur possimus maxime ullam
              voluptas.
            </p>
            <MyButton 
              type="default"
              linkTo="/register"
              addStyles={{
                margin: '10px 0 0 0'
              }}
            >Create an account</MyButton>
          </div>
          <div className="right">
            <h2>Registered customers</h2>
            <p>If you have an account, please log in.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
