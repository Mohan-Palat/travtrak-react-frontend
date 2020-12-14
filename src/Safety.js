import React, { Component } from 'react';
import {getTravelAdvisoryDetails} from './api.js'
import SearchCountry from './SearchCountry'
import DropdownCountries from './DropdownCountries'

class Safety extends Component {

    constructor(props) {
        super(props);

        this.state = {
            country:'',
            score: '',
            status: '',
            covidCases:'',
            covidDeaths: '',
            link:''
        }
    }

    handleCountrySearch = async (countryCode) => {
        const results = await getTravelAdvisoryDetails(countryCode);

        console.log(results.data);

        this.setState({
            country:results.data.data[0].country_name,
            score:results.data.data[0].summary.score,
            status:results.data.data[0].summary.status,
            covidCases:results.data.data[0].corona[0].count_infected,
            covidDeaths:results.data.data[0].corona[0].count_deaths,
            link: results.data.data[0].source_link
        })
    }

    render() {
        return (
            <div>
                <SearchCountry handleCountrySearch={this.handleCountrySearch}/>
                 <div id="travel-info">
                    <h1 id='country-header'>{this.state.country}</h1>
                    {(this.state.country !== '') ? <h2>{this.state.score}/5</h2>: <h2></h2>}
                    <h1>{this.state.status}</h1>
                    {(this.state.country !== '') ? <h2>{this.state.covidCases} Covid Cases</h2>: <h2></h2>}
                    {(this.state.country !== '') ? <h2>{this.state.covidDeaths} Covid Deaths</h2>: <h2></h2>}
                    {(this.state.country !== '') ? <p>Additional information: <a href={this.state.link} target="_blank">{this.state.link}</a></p>: <p></p>}
                    
                </div>
            </div>
        );
    }
}

export default Safety;