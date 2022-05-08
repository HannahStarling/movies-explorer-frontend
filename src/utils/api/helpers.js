export const prepareData = (res) => {
  return res.ok
    ? res.json()
    : Promise.reject({
        name: `Произошла ошибка: ${
          res.status === 404
            ? `обратитесь в техническую поддержку нашего приложения`
            : res.status === 401
            ? `неверно введён пароль, попробуйте снова`
            : `сервер не отвечает на запросы, попробуйте позднее. Код ошибки: ${res.status}`
        }.`,
      });
};

export const request = (BASE_URL, { url = '', method = 'POST', body }) => {
  const config = {
    credentials: 'include',
    method,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    ...(!!body && { body: JSON.stringify(body) }),
  };
  return fetch(`${BASE_URL}${url}`.trim(), config).then(prepareData);
};
