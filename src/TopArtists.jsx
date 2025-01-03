import React from "react";
import data from "./db/StreamingHistory_music_0.json";
import { formatTime } from "./utils";

const TopArtists = () => {
  const artistPlayTime = {};

  data.forEach((entry) => {
    const artistName = entry.artistName;
    const msPlayed = entry.msPlayed;

    if (!artistPlayTime[artistName]) {
      artistPlayTime[artistName] = 0;
    }

    artistPlayTime[artistName] += msPlayed;
  });

  const topArtists = Object.entries(artistPlayTime)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 100)
    .map(([artist]) => artist);

  return (
    <div>
      <h1
        style={{
          margin: "10px",
        }}
      >
        Top 100 Artists
      </h1>
      <ul style={{ display: "flex", flexWrap: "wrap" }}>
        {topArtists.map((artist, index) => (
          <li
            style={{
              border: "1px solid black",
              padding: "10px",
              borderRadius: "6px",
              flex: "1 0 15%", // Adjust the percentage to control the number of items per row
              margin: "10px",
              boxSizing: "border-box",
            }}
            key={index}
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
            <p>{artist}</p>
            <p>{formatTime(artistPlayTime[artist])}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TopArtists;
