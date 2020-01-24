const getTest = async () => {
  const response = await fetch("/api/test");

  const body = await response.json();
  console.log("RESPONSE", response);

  //   if (response.status !== 200) {
  //     throw Error(body.message);
  //   }

  return body;
};

export { getTest };
