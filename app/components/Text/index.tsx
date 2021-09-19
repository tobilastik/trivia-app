import React from 'react';
import { Text } from 'react-native';
import { styles } from './styles';
import { decode } from 'html-entities';

interface TextProps {
  children: any;
  style: any;
  selectable?: boolean;
  numberOfLines?: number;
}

const _Text = (props: TextProps) => {
  return (
    <Text
      numberOfLines={props.numberOfLines}
      selectable={props.selectable || false}
      style={[styles.textStyle, props.style]}
    >
      {decode(props.children)}
    </Text>
  );
};

export default _Text;
