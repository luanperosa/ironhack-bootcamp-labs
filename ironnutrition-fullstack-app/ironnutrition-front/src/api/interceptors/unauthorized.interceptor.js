const isUnauthorized = ({ status }) => status === 401;

const isTokenExpired = ({ message }) => message === 'Token expirado';

const logout = () => {
  localStorage.removeItem('loggedUser');
  window.location = '/login';
};

// eslint-disable-next-line prettier/prettier
export default async (error) => {
  const { response } = error;

  if (isUnauthorized(response) && isTokenExpired(response.data)) {
    logout();
    return error;
  }

  return;
};
