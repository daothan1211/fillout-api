const axios = require('axios');
require('dotenv').config();

/**
 * Create axios instance to request api
 */
const api = axios.create({
  baseURL: process.env.API_URL,
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${process.env.API_TOKEN}`
  },
  transformResponse: [
    (data) => {
      return JSON.parse(data);
    },
  ],
});

module.exports = api