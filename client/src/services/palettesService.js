import $ from "jquery";

const API_URL = process.env.REACT_APP_API_ENDPOINT + "/palettes";

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
  console.log(API_URL + "?format=json&hex=" + hex);
  return $.ajax({
    url: API_URL + "?format=json&hex=" + hex,
    jsonp: "jsonCallback",
    dataType: "jsonp"
  });
};

export { getTopPalettes, getNewPalettes, getPalettesByHex };
