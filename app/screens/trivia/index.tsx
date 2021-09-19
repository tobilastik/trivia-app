import React from 'react';
import { View, Text } from 'react-native';
import { useSelector } from 'react-redux';
import _Text from '../../components/Text';
import Options from '../../components/Trivia/Options';
import { State } from '../../store/reducers/index';
import { styles } from './styles';
import { SafeAreaView } from 'react-native-safe-area-context';

interface TriviaProps {
  route: any;
  navigation: any;
}

const Trivia = (props: TriviaProps) => {
  const { index } = props.route.params;
  const { trivialList } = useSelector((state: State) => state.trivia);

  const options = ['True', 'False'];

  const renderOptions = (): JSX.Element[] => {
    return options.map((option, i) => {
      return (
        <Options
          value={option}
          navigation={props.navigation}
          qnIndex={index}
          key={i}
        />
      );
    });
  };

  const renderNoTrivia = () => {
    return (
      <View>
        <_Text style={styles.Question}>
          For some reasons, the Trivias are not loading at the moment, please
          try again
        </_Text>
      </View>
    );
  };

  return (
    <SafeAreaView>
      {trivialList.length > 0 ? (
        <>
          <Text style={styles.questionNo}>
            {index + 1} of {trivialList?.length}
          </Text>
          <_Text style={styles.Question}>{trivialList[index]?.question}</_Text>
          {renderOptions()}
        </>
      ) : (
        renderNoTrivia()
      )}
    </SafeAreaView>
  );
};

export default Trivia;
