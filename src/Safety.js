import React, { Component } from 'react';
import {getTravelAdvisoryDetails} from './api.js'
import SearchCountry from './SearchCountry'
import exclamation from './picture-components/exclamation-mark.jpg';
import covid from './picture-components/covid.jpg';

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
//search api with 2-digit country code
    handleCountrySearch = async (countryCode) => {
        const results = await getTravelAdvisoryDetails(countryCode);
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
                <h2 id="safety-info">Use the dropdown below to search a country and the travel advisory <br></br>
                associated to it. You will find additional information on the rating and warning at the bottom of <br></br>
                the response. Note that the COVID-19 pandemic has caused many travel advisories. No matter where <br></br>
                travel with caution and practice social disrancing guidelines.</h2>
                <br></br>
                <img id='exclamation' src={exclamation} alt="beach" />
                <SearchCountry handleCountrySearch={this.handleCountrySearch}/>
                 <div id="travel-info">
                    <h1 id='country-header'>{this.state.country}</h1>
                    {(this.state.country !== '') ? <h2>Rating: {this.state.score}/5</h2>: <h2></h2>}
                    {(this.state.status !== '') ? <h1>{this.state.status}</h1>: <h2></h2>}
                    <br></br><br></br><br></br><br></br><br></br>
                    <div id="flex-covid-container">
                    {(this.state.country !== '') ? <div class='covid-cases'><h2>{this.state.covidCases} Covid Cases</h2></div>: <h2></h2>}
                    {(this.state.country !== '') ? <img id='covid-image' src={covid} alt="beach" />: <h2></h2>}
                    {(this.state.country !== '') ? <div class='covid-cases'><h2>{this.state.covidDeaths} Covid Deaths</h2></div>: <h2></h2>}
                    </div>
                    <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
                    {(this.state.country !== '') ? <p>Additional information: <a href={this.state.link} target="_blank">{this.state.link}</a></p>: <p></p>}
                    <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
                </div>
            </div>
        );
    }
}

export default Safety;