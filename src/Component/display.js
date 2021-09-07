import React, { useState } from "react";
import "./display.css";
import axios from "axios";
import Button from "./button";
import Form from "./form";
import { BrowserRouter as Router, Route } from "react-router-dom";

function Display() {
  return (
    <Router>
      <div className="bg-img">
        <div className="row">
          <div>
            <Route path="/" exact component={Button} />
            <Route path="/add" exact component={Form} />
          </div>
        </div>
      </div>
    </Router>
  );
}

export default Display;
