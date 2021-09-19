import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Button from '../../components/Button';
import _Text from '../../components/Text';
import { styles } from './styles';
import { useDispatch } from 'react-redux';
import { triviaAction } from '../../store/actions';
import { API } from '../../api';

interface WelcomeProps {
  navigation: any;
  setTrivia: any;
}

const Welcome: React.FC<WelcomeProps> = ({ navigation: { navigate } }) => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    loadTrivia();
  }, []);

  const loadTrivia = () => {
    API.trivia({
      success: (data: { results: any }) => {
        dispatch(triviaAction.setTriviaList(data.results));
      },
      error: (error: any) => {
        console.log(' error', error);
      },
    });
  };

  return (
    <View style={styles.container}>
      <View style={{}}>
        <_Text style={styles.welcomeText}>
          Welcome to the Trivia Challenge!{' '}
        </_Text>
      </View>

      <Text style={styles.otherText}>
        You will be presented with 10 True of False questions{' '}
      </Text>

      <Text style={styles.otherText}>Can you score 100%? </Text>
      <Button
        onPress={() =>
          navigate('TriviaScreen', {
            index: 0,
          })
        }
        title="Begin"
      ></Button>
    </View>
  );
};

export default Welcome;
