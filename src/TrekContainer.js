import React, { Component } from 'react';
import axios from 'axios';
import TrekList from './TrekList';
import {Icon, Button } from 'semantic-ui-react';
import {Link} from 'react-router-dom'
import TrekDetail from './TrekDetail'
import EditTrekModal from './EditTrekModal';

class TrekContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      treks: [],
      trekID: '',
      trek: '',
      airline: '',
      confirmation_code:'',
      date: '',
      trekToEdit: {
        id: '',
        trek: '',
        airline: '',
        confirmation_code: '',
        date: ''
      },
      showEditModal: false,
      showNewUserModal: false,
      newUser: {
        username: '',
        email: '',
        password: '',
      },
      currentUser: {},
    }
  }



  componentDidMount() {
    this.getTreks();
  }
  getTreks = async () => {
    try {
      const parsedTreks = await axios(
        process.env.REACT_APP_FLASK_API_URL + '/api/v1/treks/'
      );
      await this.setState({
        treks: parsedTreks.data.data,
      });
    } catch (err) {
      console.log(err);
    }
  };

  addTreks = async (e, trek) => {
    e.preventDefault();
    try {
      const createdTrekResponse = await axios({
        method: 'POST',
        url: process.env.REACT_APP_FLASK_API_URL + '/api/v1/treks/',
        data: trek,
        headers: {
          'Content-Type': 'application/json',
        },
      });


      this.setState({
        treks: [...this.state.trek, createdTrekResponse.data.data],
      });
    } catch (err) {
      console.log('error', err);
    }
  };

  deleteTrek = async (id) => {
    const deleteTrekResponse = await axios.delete(
      `${process.env.REACT_APP_FLASK_API_URL}/api/v1/treks/${id.id}`
    );
    console.log(deleteTrekResponse);
    // Now that the db has deleted our item, we need to remove it from state
    // Then make the delete request, then remove the trek from the state array using filter
    this.setState({ 
      treks: this.state.treks.filter((trek) => trek.id !== id.id), 
    });
  };

  handleTrekDetails = async (id) => {
    
    
      try {
        const detailTrek = await axios(
          process.env.REACT_APP_FLASK_API_URL + `/api/v1/treks/${id}`
        );
        await this.setState({
          trekID: id,
          trek: detailTrek.data.data[0].trip_name,
          airline: detailTrek.data.data[0].airline,
          confirmation_code:detailTrek.data.data[0].confirmation_code,
          date: detailTrek.data.data[0].date
        });

        console.log(this.state.trekID);
        console.log(detailTrek.data.data[0].date);

      } catch (err) {
        console.log(err);
      }
    };

    openAndEdit = (trekFromTheList) => {
      console.log(trekFromTheList, ' trekToEdit  ');
    
      this.setState({
        trekID: trekFromTheList,
        showEditModal: true,
        trekToEdit: {
          ...trekFromTheList,
        },
      });
    };

    handleEditChange = (e) => {

      const treksEdited = {...this.state.trekToEdit}
      
      treksEdited[e.currentTarget.name] = e.currentTarget.value
      
      this.setState({
        trekToEdit: treksEdited
      });
    };


closeAndEdit = async (e) => {
  e.preventDefault();
  try {
    const editResponse = await axios.put(
      process.env.REACT_APP_FLASK_API_URL +
        '/api/v1/treks/' +
        this.state.trekID,
      this.state.trekToEdit
    );

    const newTrekArrayWithEdit = this.state.treks.map((trek) => {
      if (trek.id === editResponse.data.data.id) {
        trek = editResponse.data.data;
      }

      return trek;
    });

    this.setState({
      showEditModal: false,
      treks: newTrekArrayWithEdit,
    });
  } catch (err) {
    console.log(err);
  }
};

closeModal = () => {
  this.setState({ showModal: false })
}

  render() {
      return (
        <>
          <h1 id='center-header'>My Treks</h1>
          <h3 id="center">Keep track of your trips and details here! Add treks below and click details <br></br> for flight information. You can also edit your information as needed. </h3>
          <br></br><br></br>
          <Button icon id='add-trek-button'><Link to='/add' id="link"><Icon name='add'/></Link></Button>
          <br></br><br></br>
          <TrekList openAndEdit={this.openAndEdit} treks={this.state.treks} deleteTrek={this.deleteTrek} handleTrekDetails={this.handleTrekDetails}/>
          <br></br>
          {(this.state.trek !== '') ? <h2 id='trek-details-1'>Trek Details</h2>: <h2></h2>}
          <TrekDetail date ={this.state.date} trek={this.state.trek} airline={this.state.airline} confirmation_code={this.state.confirmation_code}/>
          <EditTrekModal closeModal={this.closeModal} handleEditChange={this.handleEditChange} open={this.state.showEditModal} trekToEdit={this.state.trekToEdit} closeAndEdit={this.closeAndEdit}/>
          <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
        </>
      )
    
  }
}

export default TrekContainer;