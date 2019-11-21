import ReactGA from "react-ga";

export const initializeAnalytics = () => {
  ReactGA.initialize("UA-152958759-2", { debug: true });
};
