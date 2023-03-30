import React from 'react';
import './adminpage.css';

class AdminPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: 'Jessica Gichuru',
      flight: '911',
      time: '4:00 am',
      destination: 'Kisumu',
      contact: '0711610431'
    };
  }

  handleSubmit(event) {
    event.preventDefault();
    // handle the form submission here
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <div className="admin-page">
        <h1>Flight Booking Admin Page</h1>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" value={this.state.email} onChange={this.handleChange} required />

          <label htmlFor="flight">Flight:</label>
          <input type="text" id="flight" name="flight" value={this.state.flight} onChange={this.handleChange} required />

          <label htmlFor="time">Time:</label>
          <input type="text" id="time" name="time" value={this.state.time} onChange={this.handleChange} required />

          <label htmlFor="destination">Destination:</label>
          <input type="text" id="destination" name="destination" value={this.state.destination} onChange={this.handleChange} required />

          <label htmlFor="contact">Contact:</label>
          <input type="tel" id="contact" name="contact" value={this.state.contact} onChange={this.handleChange} required />

          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default AdminPage;
