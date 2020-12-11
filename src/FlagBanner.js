import React, { Component } from 'react';
import { Button, Icon } from 'semantic-ui-react';

class FlagBanner extends Component {
    
    render() {

        return (
            <>
                <br></br>
                <div id="flag-banner">🇮🇪 🇪🇸 🇲🇽 🇩🇪 🇫🇷 🇨🇭 🇳🇱 🇬🇧 🇨🇦 🇺🇸 🇲🇽 🇯🇵 🇨🇳</div>
                <Button icon><Icon name='add'/></Button>
            </>
        );
    }
}

export default FlagBanner;