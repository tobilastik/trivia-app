import { StyleSheet } from 'react-native';
import { red } from '../../constants/colors';

export const styles = StyleSheet.create({
    container: {
        padding: 12
    },
    question: {
        fontSize: 16
    },
    wrongAnswers: {
        color: red,
        fontSize: 30
    },
    correctAnswers: {
        color: 'green',
        fontSize: 30
    }
});
