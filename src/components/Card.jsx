import React from "react";
import Header from "./Header";
import Emoji from "./Emoji";
import Detail from "./Detail";

function Card(props) {
  return (
    <div>
      <dl className="dictionary">
        <div className="term">
          <dt>
            <Emoji emoji={props.emoji} />
            <span>{props.name}</span>
          </dt>
          <Detail meaning={props.meaning} />
        </div>
      </dl>
    </div>
  );
}

export default Card;
