import * as React from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../../components/Button';
import ResultList from '../../components/List/ResultList';
import _Text from '../../components/Text';
import { State } from '../../store/reducers';
import { triviaAction } from '../../store/actions/';
import { CommonActions } from '@react-navigation/routers';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './styles';

interface ResultProps {
  navigation: any;
}

const Result = (props: ResultProps) => {
  const dispatch = useDispatch();
  const { triviaResult, userScore } = useSelector(
    (state: State) => state.trivia
  );

  const handlePlayAgain = () => {
    props.navigation.dispatch(
      CommonActions.reset({
        index: 1,
        routes: [{ name: 'Welcome' }],
      })
    );
    dispatch(triviaAction.resetTrivia([]));
  };

  return (
    <SafeAreaView style={styles.container}>
      <_Text style={styles.scoreBoard}>
        You scored {userScore} / {triviaResult.length}
      </_Text>
      <FlatList
        data={triviaResult}
        renderItem={({ item }) => <ResultList {...item} />}
        keyExtractor={(item, index) => index.toString()}
      />
      <Button onPress={handlePlayAgain} title="Play Again?" />
    </SafeAreaView>
  );
};

export default Result;
