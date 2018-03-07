import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { black } from '../utils/colors';
import { connect } from 'react-redux';
import { receiveEntries, addEntry } from '../actions';
import { timeToString, getDailyReminderValue } from '../utils/helpers';
import { fetchCalendarResults } from '../utils/api';

class History extends Component {
  componentDidMount() {
    const { dispatch } = this.props;

    fetchCalendarResults
      .then((entries) => dispatch(receiveEntries(entries)))
      .then(({ entries }) => {
        if (!entries[timeToString]) {
          dispatch(addEntry({
            [timeToString()]: getDailyReminderValue()
          }))
        }
      })
  }
  render() {
    return (
      <View>
        <Text style={{ color: black }}>{JSON.stringify(this.props)}</Text>
      </View>
    );
  }
}

function mapStateToProps (entries) {
  return {
    entries
  }
}

export default connect(mapStateToProps)(History);
