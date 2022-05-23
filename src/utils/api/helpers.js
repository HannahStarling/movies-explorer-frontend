export const prepareData = (res) => {
  return res.ok
    ? res.json()
    : Promise.reject({
        status: res.status,
      });
};

export const request = (BASE_URL, { url = '', method = 'POST', body }, credentials = true) => {
  const config = {
    ...(!!credentials && { credentials: 'include' }),
    method,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    ...(!!body && { body: JSON.stringify(body) }),
  };
  return fetch(`${BASE_URL}${url}`.trim(), config).then(prepareData);
};
