import $ from "jquery";

const API_URL = "http://www.colourlovers.com/api/palettes";

const getTopPalettes = () => {
  return $.ajax({
    url: API_URL + "/top?format=json",
    jsonp: "jsonCallback",
    dataType: "jsonp"
  });
};

const getNewPalettes = () => {
  return $.ajax({
    url: API_URL + "/new?format=json",
    jsonp: "jsonCallback",
    dataType: "jsonp"
  });
};

const getPalettesByHex = hex => {
  return $.ajax({
    url: API_URL + "?format=json&hex=" + hex,
    jsonp: "jsonCallback",
    dataType: "jsonp"
  });
};

export { getTopPalettes, getNewPalettes, getPalettesByHex };
