import $ from "jquery";

const API_URL = process.env.REACT_APP_API_ENDPOINT + "/palette";

const getPaletteById = id => {
  return $.ajax({
    url: API_URL + "/" + id + "?format=json",
    jsonp: "jsonCallback",
    dataType: "jsonp"
  });
};

export { getPaletteById };
