import axios from "axios";

const BASE_URL = "http://localhost:3001/persons"
const getAll = () => {
    return axios.get(BASE_URL).then(res => res.data);
}

const create = (newPerson) => {
    return axios.post(BASE_URL,newPerson).then(res => res.data);
}

const remove = (id) => {
    return axios.delete(`${BASE_URL}/${id}`).then(res => res.data);
}

const update = (id,updatedPerson) => {
    return axios.put(`${BASE_URL}/${id}`,updatedPerson).then(res => res.data);
}

export default {
    getAll,
    create,
    remove,
    update
}