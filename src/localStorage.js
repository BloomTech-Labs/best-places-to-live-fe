export const loadState = () => {
  try {
    // Look into local storage by key, retrieve a string and try to parse it as JSON
    const serializedState = localStorage.getItem("state");
    // key does not exist
    if (serializedState === null) {
      return undefined;
    }
    // If there is a string, parse the item into JSON format
    return JSON.parse(serializedState);
  } catch (err) {
    // If something goes wrong in the JSON parsing process, return undefined to avoid crashing the app
    return undefined;
  }
};

export const saveState = state => {
  try {
    const serializedState = JSON.stringify(state);
    // set the items to localStorage after stringifying the state object
    localStorage.setItem("state", serializedState);
  } catch (err) {}
};
