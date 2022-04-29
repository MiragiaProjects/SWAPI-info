// Star Wars API

import axios from 'axios'


const BASE_URL = 'https://swapi.dev/api/'


// get a film
const getFilm = async (id) => {
    const res = await axios.get(`${BASE_URL}/films/${id}`)
    return res.data
}
// get all films
const getFilms = async (page) => {
    const res = await axios.get(`${BASE_URL}/films/?page=${page}`)
    return res.data
}
// get a person
const getPeople = async (id) => {
    const res = await axios.get(`${BASE_URL}/people/${id}`)
    return res.data
}
// get all people
const getPeoples = async (page) => {
    const res = await axios.get(`${BASE_URL}/people/?page=${page}`)
    return res.data
}

export default {
    getFilm,
    getFilms,
    getPeople,
    getPeoples
}