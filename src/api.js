import axios from 'axios'

const getTravelAdvisoryDetails = (countryCode) => {
    return axios.get(`${process.env.REACT_APP_BASE_URL}&countrycode=${countryCode}`);
}

export {getTravelAdvisoryDetails};