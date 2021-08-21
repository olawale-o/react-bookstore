export const get = async (URI) => {
  const response = await fetch(URI);
  return response.json();
};

export const post = async (URI, data = {}) => {
  const response = await fetch(URI, {
    mode: 'cors',
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-type': 'application/json; Charset=UTF-8',
    },
  });
  return response;
};
