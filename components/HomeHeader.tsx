// components/HomeHeader.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { COLORS, SPACING } from '../constants/theme';

export function HomeHeader() {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>Conference Hub</Text>
      <Text style={styles.subtitle}>Welcome back, User!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    padding: SPACING.medium,
    backgroundColor: COLORS.white,
    borderBottomWidth: 1,
    borderBottomColor: '#e2e8f0',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: COLORS.text,
    marginBottom: SPACING.small,
  },
  subtitle: {
    fontSize: 16,
    color: COLORS.textLight,
  },
});