// Now update your not-found screen:
// app/+not-found.tsx
import { StyleSheet } from 'react-native';
import { Link } from 'expo-router';
import { ThemedText } from '../components/ThemedText';
import { ThemedView } from '../components/ThemedView';
import { COLORS, SPACING } from '../constants/theme';

export default function NotFoundScreen() {
  return (
    <ThemedView style={styles.container}>
      <ThemedText style={styles.title}>Oops!</ThemedText>
      <ThemedText style={styles.message}>
        We couldn't find the page you're looking for.
      </ThemedText>
      <Link href="/" style={styles.link}>
        <ThemedText style={styles.linkText}>Go back home</ThemedText>
      </Link>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: SPACING.large,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: SPACING.medium,
  },
  message: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: SPACING.large,
    color: COLORS.textLight,
  },
  link: {
    marginTop: SPACING.medium,
  },
  linkText: {
    color: COLORS.primary,
    fontSize: 16,
    textDecorationLine: 'underline',
  },
});