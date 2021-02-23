import React from "react";
import ReactPlayer from "react-player";

export default function Video({ data }) {
  return (
    <div>
      <center>
        {data.map((data) => {
          return (
            <div>
              <ReactPlayer url={data.video} style={{ width: "100%" }} />
            </div>
          );
        })}
      </center>
    </div>
  );
}
