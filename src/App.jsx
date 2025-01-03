import React from "react";
import TopSongs from "./TopSongs";
import { Button } from "@mui/material";

const App = () => {
  const [showTopSongs, setShowTopSongs] = React.useState(false);
  const handleTopSongs = () => {
    setShowTopSongs(!showTopSongs);
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
      {showTopSongs && <TopSongs />}{" "}
    </div>
  );
};

export default App;
