import axios from "axios";
const BASE_URL = 'https://opentdb.com/api.php?';


export async function request(
    onResponse,
    type,
    featureURL,
) {
    const URL = BASE_URL;
    if (type == "GET") {
        try {
            const response = await axios.get(`${URL}${featureURL}`);
            onResponse.success(response.data);
        } catch (error) {
            onResponse.error(error);
            console.log('new error', error.response);
        }
    }
}
