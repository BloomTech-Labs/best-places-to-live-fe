import ReactGA from "react-ga";

export const initializeAnalytics = () => {
  console.log("Runnning Analytics!!");
  ReactGA.initialize("UA-152958759-1", { debug: true });
};
