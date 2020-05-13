import React, { Component } from "react";
import BoardTab from "./boardDetail";

class BoardView extends Component {
  render() {
    return (
      <section id="main_contents">
        <div id="contents_wrap">
          <div class="top_contents">
            <div class="image_box_wrap"></div>

            <div class="contents_box"></div>
          </div>

          <div class="bottom_contents">
              <BoardTab></BoardTab>
          </div>
        </div>
      </section>
    );
  }
}
export default BoardView;
