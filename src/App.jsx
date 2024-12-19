import React, { useState } from "react";
import { Tabs, Tab, Box, Typography, Button, Drawer } from "@mui/material";
import "./App.css";

function App() {
  const initialState = {
    activeTab: 0,
    counter: 0,
    open: false,
  };

  const [state, setState] = useState(initialState);
  const { activeTab, counter, open } = state;

  const setCounter = () => {
    setState((prevState) => ({ ...prevState, counter: counter + 1 }));
  };

  const handleTabChange = (event, newValue) => {
    setState((prevState) => ({ ...prevState, activeTab: newValue }));
    setState((prevState) => ({ ...prevState, counter: 0 }));
  };

  const handleClick = () => {
    setState((prevState) => ({ ...prevState, open: !open }));
  };

  const handleCloseDrawer = () => {
    setState(initialState);
  };

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
                setCounter={setCounter}
                tabNumber={1}
                handleCloseDrawer={handleCloseDrawer}
              />
            )}
            {activeTab === 1 && (
              <TabContent
                counter={counter}
                setCounter={setCounter}
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

function TabContent({ tabNumber, counter, setCounter, handleCloseDrawer }) {
  return (
    <Box>
      <Typography variant="h6">Tab {tabNumber} Content</Typography>
      <Typography>State: {counter}</Typography>
      <div className="mb-4">
        <Button
          fullWidth
          variant="contained"
          onClick={() => setCounter(counter + 1)}
        >
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
