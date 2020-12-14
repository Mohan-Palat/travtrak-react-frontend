import React, { Component } from 'react';
import { Button, Icon } from 'semantic-ui-react';

class FlagBanner extends Component {
    
    render() {

        return (
            <>
                <br></br>
                <div id="flag-banner">🇮🇪 🇪🇸 🇲🇽 🇩🇪 🇫🇷 🇨🇭 🇳🇱 🇬🇧 🇨🇦 🇺🇸 🇲🇽 🇯🇵 🇨🇳</div>
                <Button>Add/Update Flags</Button>
            </>
        );
    }
}

export default FlagBanner;