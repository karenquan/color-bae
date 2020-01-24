import $ from "jquery";

const API_URL = process.env.REACT_APP_API_ENDPOINT + "/colors";

const getNewColors = () => {
  return $.ajax({
    url: API_URL + "/new?format=json",
    jsonp: "jsonCallback",
    dataType: "jsonp"
  });
};

const getTopColors = () => {
  return $.ajax({
    url: API_URL + "/top?format=json",
    jsonp: "jsonCallback",
    dataType: "jsonp"
  });
};

export { getNewColors, getTopColors };
