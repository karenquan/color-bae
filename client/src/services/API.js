const getTopPalettes = async () => {
  console.log("got into top palettes");
  const response = await fetch("/api/getTopPalettes");

  const body = await response.json();
  console.log("get top palettes", body);

  if (response.status !== 200) {
    throw Error(body.message);
  }

  return body;
};

export { getTopPalettes };
