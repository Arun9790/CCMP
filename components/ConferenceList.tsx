// components/ConferenceList.tsx
import React from 'react';
import { View, FlatList, Text, StyleSheet } from 'react-native';
import { ConferenceCard } from './ConferenceCard';
import { COLORS, SPACING } from '../constants/theme';

const dummyConferences = [
  {
    id: '1',
    name: 'Tech Summit 2025',
    date: 'Mar 15-17, 2025',
    location: 'San Francisco, CA',
    imageUrl: 'https://example.com/conference1.jpg',
    category: 'Technology',
  },
  {
    id: '2',
    name: 'Global AI Conference',
    date: 'Apr 5-7, 2025',
    location: 'New York, NY',
    imageUrl: 'https://example.com/conference2.jpg',
    category: 'AI & ML',
  },
  // Add more dummy data as needed
];

export function ConferenceList() {
  const renderSection = ({ item: category }) => (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>{category}</Text>
      <FlatList
        data={dummyConferences.filter(conf => conf.category === category)}
        renderItem={({ item }) => <ConferenceCard conference={item} />}
        keyExtractor={item => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.conferenceList}
      />
    </View>
  );

  const categories = [...new Set(dummyConferences.map(conf => conf.category))];

  return (
    <FlatList
      data={categories}
      renderItem={renderSection}
      keyExtractor={item => item}
      contentContainerStyle={styles.container}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    padding: SPACING.medium,
  },
  section: {
    marginBottom: SPACING.large,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: COLORS.text,
    marginBottom: SPACING.medium,
  },
  conferenceList: {
    paddingRight: SPACING.medium,
  },
});