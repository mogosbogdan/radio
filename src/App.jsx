import React from "react";
import { Tabs, Tab, Box, Typography, Button, Drawer } from "@mui/material";
import "./App.css";
import useAppState from "./useAppState";

function App() {
  const { state, setCounter, handleTabChange, handleClick, handleCloseDrawer } =
    useAppState();

  const { activeTab, counter, open } = state;

  return (
    <>
      <div className="m-3">
        <Button variant="contained" onClick={handleClick}>
          Click me
        </Button>
      </div>
      <Drawer open={open} onClose={handleCloseDrawer} anchor="right">
        <div className="width">
          <Tabs
            value={activeTab}
            onChange={handleTabChange}
            variant="fullWidth"
          >
            <Tab label="Tab 1" />
            <Tab label="Tab 2" />
          </Tabs>
          <Box sx={{ padding: 2 }}>
            {activeTab === 0 && (
              <TabContent
                counter={counter}
                onClick={setCounter}
                tabNumber={1}
                handleCloseDrawer={handleCloseDrawer}
              />
            )}
            {activeTab === 1 && (
              <TabContent
                counter={counter}
                onClick={setCounter}
                tabNumber={2}
                handleCloseDrawer={handleCloseDrawer}
              />
            )}
          </Box>
        </div>
      </Drawer>
    </>
  );
}
// mod 1
function TabContent({ tabNumber, counter, onClick, handleCloseDrawer }) {
  return (
    <Box>
      <Typography variant="h6">Tab {tabNumber} Content</Typography>
      <Typography>State: {counter}</Typography>
      <div className="mb-4">
        <Button fullWidth variant="contained" onClick={onClick}>
          Increment State
        </Button>
      </div>
      <Button variant="outlined" fullWidth onClick={handleCloseDrawer}>
        Close
      </Button>
    </Box>
  );
}

export default App;
