const get = async (URI) => {
  const response = await fetch(URI);
  return response.json();
};

export default get;
