import React, { Component } from 'react';

class HolidaySettings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentDate: new Date(),
      currentWeek: this.getWeekOfYear(new Date()),
      weeksToAdd: 0,
    };
    this.handleWeeksChange = this.handleWeeksChange.bind(this);
  }

  getWeekOfYear(date) {
    const oneJan = new Date(date.getFullYear(), 0, 1);
    const numberOfDays = Math.floor((date - oneJan) / (24 * 60 * 60 * 1000));
    return Math.ceil((date.getDay() + 1 + numberOfDays) / 7);
  }

  handleWeeksChange(event) {
    const weeksToAdd = Number(event.target.value);
    const newDate = new Date(this.state.currentDate);
    newDate.setDate(newDate.getDate() + (weeksToAdd * 7));
    const newWeek = this.getWeekOfYear(newDate);
    this.setState({
      currentDate: newDate,
      currentWeek: newWeek,
      weeksToAdd: weeksToAdd,
    });
  }

  render() {
    const { currentDate, currentWeek, weeksToAdd } = this.state;
    const year = currentDate.getFullYear();
    const month = currentDate.toLocaleString('default', { month: 'long' });
    const date = currentDate.toLocaleDateString();
    return (
      <div>
        <h1>Week Counter</h1>
        <p>
          {`${month} ${year} (Week ${currentWeek})`}
        </p>
        <p>{`Current Date: ${date}`}</p>
        <label>
          Weeks to Add:
          <input
            type="number"
            value={weeksToAdd}
            onChange={this.handleWeeksChange}
          />
        </label>
      </div>
    );
  }
  
}

export default HolidaySettings;
