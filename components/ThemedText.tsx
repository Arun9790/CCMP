import { Text, TextProps } from 'react-native';
import { COLORS } from '../constants/theme';

export function ThemedText({ style, ...props }: TextProps) {
  return (
    <Text style={[{ color: COLORS.text }, style]} {...props} />
  );
}