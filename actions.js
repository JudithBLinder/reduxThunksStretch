const axios = require('axios');

//TYPES
const { GOT_DESSERTS_DATA, NEW_DESSERT_DATA } = require('./types');

const gotDesserts = (obj) => ({ type: GOT_DESSERTS_DATA, desserts: obj });
const addDessert = (obj) => ({ type: NEW_DESSERT_DATA, newDessert: obj });
const fetchDesserts = () => {
  const desserts = axios.get('/api/desserts');
  return function (dispatch) {
    dispatch(gotDesserts(desserts.data));
  };
};
const postDessert = () => {
  return function (dispatch) {
    dispatch(addDessert());
  };
};
module.exports = { gotDesserts, addDessert, fetchDesserts, postDessert };
