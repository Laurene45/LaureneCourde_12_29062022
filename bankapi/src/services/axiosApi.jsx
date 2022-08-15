import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3001/api/v1';

//instance remplace la valeur globale par défaut pour le token
export const instance = axios.create({
  headers: {
    common: {
      Authorization: 'AUTH_TOKEN_FROM_INSTANCE',
    },
  },
});

export const api = {
  /**
   * Get the profile of the corresponding token
   * @returns
   */

  getProfile: () => {
    return instance
      .post('/user/profile')

      .then((response) => response.data);
  },

  /**
   * Get the connexion token
   * @param {string} email
   * @param {string} password
   * @returns
   */

  login: (email, password) => {
    return (
      instance
        //méthode post
        .post('/user/login', {
          email,
          password,
        })
        .then((response) => response.data)

        .catch((error) => {
          error.response.data;
        })
    );
  },

  /**
   * Update the profile of the corresponding token
   * @param {string} firstName
   * @param {string} lastName
   * @returns
   */

  updateProfile: (firstName, lastName) => {
    return (
      instance
        //méthode Put
        .put('/user/profile', {
          firstName,
          lastName,
        })
        .then((response) => response.data)
    );
  },
};
