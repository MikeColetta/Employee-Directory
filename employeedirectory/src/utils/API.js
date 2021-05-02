import axios from "axios";

const randomEmployeeAmount = Math.floor(Math.random() * 40 + 1)
const URL = `https://randomuser.me/api/?results=${randomEmployeeAmount}`

export default {
        getEmps: function () {
                return axios.get(URL);
        }
}