import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3001/api/v1';

export const api = {

  /**
 * Get the profile of the corresponding token
 * @returns
 */

  getProfile: () => {
    axios
      .post('/user/profile',
        {},
        /*{
          headers: { Authorization: 'Bearer ' + localStorage.getItem('token') },
        }*/
      )

      .then((response) => {
        response.data.body;
      });
      
  },


  /**
 * Get the connexion token
 * @param {string} email
 * @param {string} password
 * @returns
 */

  login: (email, password) => {
    return (
      axios
        //méthode post
        .post('/user/login', {
          email,
          password,
        })
        .then((response) => response.data )

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
      axios
        //méthode Put
        .put(
          '/user/profile',
          {
            firstName,
            lastName,
          },
          /*{
            headers: {
              Authorization: 'Bearer ' + localStorage.getItem('token'),
            },
          }*/
        )
        .then((response) => {
          response.data.body;
        })
    );
  },
};


