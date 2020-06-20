import axios from 'axios';

export default function callApi(URL, endPoint, method, headers, body) {
  return axios({
    method,
    url: `${URL}/${endPoint}`,
    headers,
    data: body,
  });
}
