import ReactGA from "react-ga";

export const initializeAnalytics = () => {
  console.log("Runnning Analytics!!");
  ReactGA.initialize("UA-148058893-1", { debug: true });
};

export const Event = (category, action, label) => {
  ReactGA.event({
    category: category,
    action: action,
    label: label
  });
};
