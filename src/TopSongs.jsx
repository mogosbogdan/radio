import React from "react";
import data from "./db/StreamingHistory_music_0.json";

const TopSongs = () => {
  const combinedData = data.reduce((acc, current) => {
    const existing = acc.find((item) => item.trackName === current.trackName);
    if (existing) {
      existing.msPlayed += current.msPlayed;
    } else {
      acc.push(current);
    }
    return acc;
  }, []);

  const sortedData = combinedData.sort((a, b) => b.msPlayed - a.msPlayed);
  const formatTime = (ms) => {
    const hours = Math.floor(ms / (1000 * 60 * 60));
    const minutes = Math.floor((ms % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((ms % (1000 * 60)) / 1000);
    return `${hours}h ${minutes}m ${seconds}s`;
  };
  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {sortedData.slice(0, 100).map((item, index) => {
        return (
          <div
            style={{
              flex: "1 0 15%", // Adjust the percentage to control the number of items per row
              margin: "10px",
              boxSizing: "border-box",
            }}
            key={index}
            className="top-songs"
          >
            <div
              style={{
                border: "1px solid black",
                padding: "10px",

                borderRadius: "6px",
              }}
            >
              <p
                style={{
                  border: "1px solid black",
                  width: "30px",
                  textAlign: "center",
                  borderRadius: "6px",
                }}
              >
                {index + 1}
              </p>
              <p>{item.artistName}</p>
              <p>{item.trackName}</p>
              <p>{formatTime(item.msPlayed)}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TopSongs;
