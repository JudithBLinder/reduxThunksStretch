const axios = require('axios');

//TYPES
const { GOT_DESSERTS_DATA, NEW_DESSERT_DATA } = require('./types');

const gotDesserts = (obj) => ({ type: GOT_DESSERTS_DATA, desserts: obj });
const addDessert = (obj) => ({ type: NEW_DESSERT_DATA, newDessert: obj });
const fetchDesserts = () => {
  return (dispatch) => {
    return axios
      .get('/api/desserts')
      .then((res) => res.data)
      .then(({ desserts }) => dispatch(gotDesserts(desserts)));
  };
};
const postDessert = () => {
  return (dispatch) => {
    return axios
      .post('/api/desserts', { newDessert: ['cream puff'] })
      .then(() => dispatch(addDessert(['cream puff'])));
  };
};
module.exports = { gotDesserts, addDessert, fetchDesserts, postDessert };
