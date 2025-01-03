import React, { useState } from "react";
import TopSongs from "./TopSongs";
import { Button } from "@mui/material";
import TopArtists from "./TopArtists";

const App = () => {
  const [showTopSongs, setShowTopSongs] = useState(false);
  const [showTopArtists, setShowTopArtists] = useState(false);

  const handleTopSongs = () => {
    setShowTopSongs(!showTopSongs);
  };

  const handleTopArtists = () => {
    setShowTopArtists(!showTopArtists);
  };

  return (
    <div>
      <Button
        variant="contained"
        onClick={handleTopSongs}
        style={{ margin: "20px" }}
      >
        show top songs
      </Button>
      <Button
        variant="contained"
        onClick={handleTopArtists}
        style={{ margin: "20px" }}
      >
        show top artists
      </Button>
      {showTopSongs && <TopSongs />}
      {showTopArtists && <TopArtists />}
    </div>
  );
};

export default App;
