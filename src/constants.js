const apiURL = 'https://tdah-rest-api.herokuapp.com/api';
const regex = {
  email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
  name: /^[a-zA-ZÑñáéíóúÁÉÍÓÚ\s]{2,50}$/,
  password: /^[\w\d*/.-_ñÑ]{6,50}$/
};

export {
  apiURL,
  regex
};
