import $ from "jquery";

const API_URL = process.env.REACT_APP_API_ENDPOINT + "/color";

const getColorById = id => {
  return $.ajax({
    url: API_URL + "/" + id + "?format=json",
    jsonp: "jsonCallback",
    dataType: "jsonp"
  });
};

export { getColorById };
