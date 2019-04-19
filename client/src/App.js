import React, { useState, useEffect } from "react";
import axios from "axios";

export default () => {
  useEffect(() => {
    axios.get("/product/articles").then(doc => {
      console.log(doc);
    });
  }, []);

  return <div>App</div>;
};
