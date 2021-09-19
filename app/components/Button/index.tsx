import React, { PureComponent } from 'react';
import { Text, Pressable, View } from 'react-native';
import { primaryColor } from '../../constants/colors';
import { styles } from './styles';

interface ButtonProps {
  disabled?: boolean;
  onPress(): void;
  backgroundColor?: any;
  style?: any;
  title: string;
}

const Button: React.FC<ButtonProps> = ({
  title,
  onPress,
  backgroundColor,
  style,
  disabled,
  ...restProps
}) => {
  return (
    <View>
      <Pressable
        disabled={disabled}
        android_disableSound={true}
        android_ripple={{ color: 'transparent' }}
        hitSlop={{ top: 5, bottom: 5, left: 5, right: 5 }}
        {...restProps}
        onPress={onPress}
        style={({ pressed }) => [
          {
            backgroundColor: pressed ? 'rgb(210, 230, 255)' : primaryColor,
          },
          styles.button,
        ]}
      >
        <Text style={styles.buttonText}> {title}</Text>
      </Pressable>
    </View>
  );
};

export default Button;
