import React from "react";
import "./button.css";
function button() {
  return (
    <div>
      <br />
      <br />
      <br />
      <br />
      <div class="d-grid gap-2 col-3 mx-auto">
        <button class="btn btn-primary" type="button">
          Meet your doctor
        </button>
        <br />
        <br />
        <a href="/add">
          <button class="btn btn-primary" type="button">
            Covid vaccination
          </button>
        </a>
        <br />
        <br />
        <button class="btn btn-primary" type="button">
          eChanelling home care
        </button>
      </div>
    </div>
  );
}

export default button;
