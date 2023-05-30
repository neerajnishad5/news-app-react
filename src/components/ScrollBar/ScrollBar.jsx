import React from "react";
import "./ScrollBar.css";
function ScrollBar() {
  return (
    <div>
      <div class="wrapper">
        <div id="style-1" class="scroll-bar">
          <div class="force-overflow"></div>
        </div>

        <div id="scroll-1" class="scroll-bar">
          <div class="force-overflow"></div>
        </div>
      </div>
    </div>
  );
}

export default ScrollBar;
