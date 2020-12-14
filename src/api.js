import axios from 'axios'


//GET request using city ID to get restaurant list
const getTravelAdvisoryDetails = (countryCode) => {

    return axios.get(`${process.env.REACT_APP_BASE_URL}&countrycode=${countryCode}`);
}



export {getTravelAdvisoryDetails};