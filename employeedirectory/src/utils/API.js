import axios from "axios";

function getRandomEmployee() {
        return axios.get("https://randomuser.me/api/");
}

export default getRandomEmployee;