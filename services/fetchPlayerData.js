const axios = require('axios');

async function fetchPlayerData(uid) {
  try {
    const response = await axios.get(`https://asyncban.vercel.app/info?uid=${uid}`);
    if (!response.data || !response.data.data || !response.data.data.player_info) {
      throw new Error('ID NOT FOUND');
    }
    const playerInfo = response.data.data.player_info;

    return {
      nickname: playerInfo.nikname || 'N/A',
      region: playerInfo.region || 'N/A'
    };
  } catch (error) {
    throw new Error(error.message || 'Failed to fetch player data');
  }
}

module.exports = { fetchPlayerData };
