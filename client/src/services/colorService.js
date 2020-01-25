import $ from "jquery";

const API_URL = "http://www.colourlovers.com/api/color";

const getColorById = id => {
  return $.ajax({
    url: API_URL + "/" + id + "?format=json",
    jsonp: "jsonCallback",
    dataType: "jsonp"
  });
};

export { getColorById };
