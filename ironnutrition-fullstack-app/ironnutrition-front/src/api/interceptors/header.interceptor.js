export default async (config) => {
  const token = localStorage.getItem('loggedUser')

  if (token) {
    const tokenJson = JSON.parse(token);
    // eslint-disable-next-line no-param-reassign
    config.headers.Authorization = `Bearer ${tokenJson.token}`;
  }

  return config;
};
