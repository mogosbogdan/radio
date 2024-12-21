import { useState, useEffect } from "react";

const useAppState = () => {
  const initialState = {
    activeTab: 0,
    counter: 0,
    open: false,
  };

  const [state, setState] = useState(initialState);

  const setCounter = () => {
    setState((prevState) => ({ ...prevState, counter: prevState.counter + 1 }));
  };

  const handleTabChange = (event, newValue) => {
    setState((prevState) => ({ ...prevState, activeTab: newValue }));
    setState((prevState) => ({ ...prevState, counter: 0 }));
  };

  const handleClick = () => {
    setState((prevState) => ({ ...prevState, open: true }));
  };

  const handleCloseDrawer = () => {
    setState(initialState);
  };

  useEffect(() => {
    console.log("🚀 useEffect");
  }, []);

  return {
    state,
    setCounter,
    handleTabChange,
    handleClick,
    handleCloseDrawer,
  };
};

export default useAppState;
