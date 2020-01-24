const getTest = async () => {
  const response = await fetch("/api/test");

  const body = await response.json();

  if (response.status !== 200) {
    throw Error(body.message);
  }

  return body;
};

export { getTest };
