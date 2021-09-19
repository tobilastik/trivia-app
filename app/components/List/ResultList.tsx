import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import _Text from '../Text';
import { styles } from './styles';

interface ResultListProps {
  option: string;
  trivia: {
    question: string;
    correct_answer: string;
  };
}

const ResultList = (props: ResultListProps) => {
  return (
    <View style={styles.container}>
      <Text>
        {props.option == props.trivia?.correct_answer ? (
          <_Text style={styles.correctAnswers}> + </_Text>
        ) : (
          <_Text style={styles.wrongAnswers}> - </_Text>
        )}
        <_Text style={styles.question}>{props.trivia?.question}</_Text>
      </Text>
    </View>
  );
};

export default ResultList;
