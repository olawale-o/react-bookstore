export const get = async (URI) => {
  const response = await fetch(URI);
  return response;
};

export const post = async (URI, data = {}, method = 'POST') => {
  const response = await fetch(URI, {
    mode: 'cors',
    method,
    body: JSON.stringify(data),
    headers: {
      'Content-type': 'application/json; Charset=UTF-8',
    },
  });
  return response;
};
