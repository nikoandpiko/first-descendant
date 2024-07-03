import axios from 'axios';

export async function fetchData(url: string, apiKey: string) {
  const response = await axios.get(url, {
    headers: {
      'x-nxopen-api-key': apiKey
    }
  });
  return response.data;
}
