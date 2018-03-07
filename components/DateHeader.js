import React from 'react';
import { Text } from 'react-native';
import { purple } from '../utils/colors';

export default function DateHeader({ date }) {
  return (
    <Text styles={{color: purple, fontSize: 25}}>
      {date}
    </Text>
  );
}
