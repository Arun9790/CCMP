// components/UpcomingConferences.tsx
import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { ConferenceCard } from './ConferenceCard';
import { COLORS, SPACING } from '../constants/theme';

const upcomingConferences = [
  {
    id: '1',
    name: 'Developer Summit 2025',
    date: 'Next Week',
    location: 'Virtual Event',
    imageUrl: 'https://example.com/conf1.jpg',
    status: 'Registration Open',
  },
  {
    id: '2',
    name: 'Cloud Computing Expo',
    date: 'In 2 Weeks',
    location: 'Chicago, IL',
    imageUrl: 'https://example.com/conf2.jpg',
    status: 'Early Bird',
  },
  // Add more conferences as needed
];

export function UpcomingConferences() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Upcoming Conferences</Text>
        <TouchableOpacity style={styles.viewAllButton}>
          <Text style={styles.viewAllText}>View All</Text>
          <FontAwesome5 name="chevron-right" size={14} color={COLORS.primary} />
        </TouchableOpacity>
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {upcomingConferences.map((conference) => (
          <View key={conference.id} style={styles.cardContainer}>
            <ConferenceCard conference={conference} />
            <View style={styles.statusContainer}>
              <Text style={styles.statusText}>{conference.status}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: SPACING.large,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: SPACING.medium,
    marginBottom: SPACING.medium,
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    color: COLORS.text,
  },
  viewAllButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  viewAllText: {
    color: COLORS.primary,
    marginRight: SPACING.small,
    fontSize: 14,
  },
  scrollContent: {
    paddingHorizontal: SPACING.medium,
  },
  cardContainer: {
    marginRight: SPACING.medium,
    position: 'relative',
  },
  statusContainer: {
    position: 'absolute',
    top: SPACING.small,
    right: SPACING.small,
    backgroundColor: COLORS.primary,
    paddingHorizontal: SPACING.small,
    paddingVertical: 4,
    borderRadius: 12,
  },
  statusText: {
    color: COLORS.white,
    fontSize: 12,
    fontWeight: '500',
  },
});