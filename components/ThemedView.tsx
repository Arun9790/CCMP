import { View, ViewProps } from 'react-native';
import { COLORS } from '../constants/theme';

export function ThemedView({ style, ...props }: ViewProps) {
  return (
    <View style={[{ backgroundColor: COLORS.background }, style]} {...props} />
  );
}