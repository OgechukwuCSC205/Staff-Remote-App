import axios from "axios";

export function getTasks () {
    try {
        const url = new URL(`${process.env.REACT_APP_BASE_URL}/tasks`)
        return axios.get(url).then(response => response.data)
        // return response = await response.json();
    } catch (error) {
        console.error(error);
    }
}