import React, { Component } from 'react';
import { Form, TextArea, Button } from 'semantic-ui-react'
import {Link} from 'react-router-dom'

class TrekDetail extends Component {

    

    render() {
        return (
            <div>
                <Button><Link to='/board' id="link">Back</Link></Button>
                    <Form>
                        <TextArea placeholder='Tell us more' style={{ minHeight: 100 }} />
                    </Form>
            </div>
        );
    }
}

export default TrekDetail;