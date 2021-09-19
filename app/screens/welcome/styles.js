import { StyleSheet } from 'react-native';
import { bgColor, white } from '../../constants/colors';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: bgColor,
        // paddingHorizontal: 40
    },
    welcomeText: {
        color: white,
        fontSize: 20,
        fontWeight: '900',
        textAlign: 'center'
    },
    otherText: {
        color: white,
        fontSize: 16,
        margin: 20,
        textAlign: 'center',
        fontWeight: '600',

    }
});