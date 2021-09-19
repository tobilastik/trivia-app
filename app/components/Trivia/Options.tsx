import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { State } from '../../store/reducers/index';
import { triviaAction } from '../../store/actions/';
import { styles } from './styles';

interface OptionProps {
  qnIndex: number;
  value: any;
  navigation: any;
}

const Options = (props: OptionProps) => {
  const dispatch = useDispatch();
  const { trivialList } = useSelector((state: State) => state.trivia);

  let correctAnswer = trivialList[props.qnIndex]?.correct_answer;

  const handleAnswer = async () => {
    if (props.qnIndex + 1 >= trivialList?.length) {
      props.navigation.navigate('ResultScreen');
      let item = {
        trivia: trivialList[props.qnIndex],
        option: props.value,
      };
      dispatch(triviaAction.setTriviaResult(item));
    } else {
      if (props.value === correctAnswer) {
        let item = {
          trivia: trivialList[props.qnIndex],
          option: props.value,
        };
        dispatch(triviaAction.setTriviaResult(item));
        dispatch(triviaAction.setUserScore(1));
      } else {
        let item = {
          trivia: trivialList[props.qnIndex],
          option: props.value,
        };
        dispatch(triviaAction.setTriviaResult(item));
        dispatch(triviaAction.setUserScore(0));
      }
      props.navigation.navigate('TriviaScreen', {
        index: props.qnIndex + 1,
      });
    }
  };

  return (
    <TouchableOpacity style={[styles.Option]} onPress={() => handleAnswer()}>
      <Text style={styles.OptionText}>{props.value}</Text>
    </TouchableOpacity>
  );
};

export default Options;
