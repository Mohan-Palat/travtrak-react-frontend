import React, { Component } from 'react';

class TrekDetail extends Component {

    render() {
        return (
            <div id='trek-details'>
                {(this.props.trek !== '') ? <h2 id="trek-detail-header">{this.props.trek}</h2>: <h2></h2>}
                {(this.props.date !== '') ? <h3 id="center"> {this.props.date}</h3>: <h2></h2>}
                {(this.props.airline !== '') ? <h3 id='flight-info'>Flight Info: </h3>: <h2></h2>}
                {(this.props.airline !== '') ? <h5 class='detail-granular'>✈️ {this.props.airline} ✅ {this.props.confirmation_code}</h5> : <h2></h2>}
                {(this.props.trek !== '') ? <br></br> : <h2></h2>}
                {(this.props.trek !== '') ? <br></br> : <h2></h2>}
                {(this.props.trek !== '') ? <br></br> : <h2></h2>}
            </div>
        );
    }
}

export default TrekDetail;