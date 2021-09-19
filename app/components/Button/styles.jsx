import { StyleSheet } from "react-native";
import { textColor } from '../../constants/colors';
import { WIDTH } from '../../constants/dimensions.tsx';


export const styles = StyleSheet.create({
  button: {
    borderRadius: 8,
    padding: 6,
    height: 50,
    width: WIDTH - 40,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
    margin: 12
  },
  buttonText: {
    fontSize: 16,
    color: textColor,
    fontWeight: 'bold'
  },
});
