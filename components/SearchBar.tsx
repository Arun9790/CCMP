// components/SearchBar.tsx
import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { COLORS, SPACING } from '../constants/theme';

export function SearchBar({ onSearch }) {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <View style={styles.searchContainer}>
      <View style={styles.searchBar}>
        <FontAwesome5 name="search" size={18} color={COLORS.secondary} />
        <TextInput
          style={styles.input}
          placeholder="Search conferences..."
          value={searchQuery}
          onChangeText={setSearchQuery}
          placeholderTextColor={COLORS.textLight}
        />
        {searchQuery.length > 0 && (
          <TouchableOpacity onPress={() => setSearchQuery('')}>
            <FontAwesome5 name="times" size={18} color={COLORS.secondary} />
          </TouchableOpacity>
        )}
      </View>
      <View style={styles.filterContainer}>
        <TouchableOpacity style={styles.filterButton}>
          <FontAwesome5 name="filter" size={16} color={COLORS.primary} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: 'row',
    padding: SPACING.medium,
    backgroundColor: COLORS.white,
    alignItems: 'center',
  },
  searchBar: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.background,
    paddingHorizontal: SPACING.medium,
    borderRadius: 10,
    height: 45,
  },
  input: {
    flex: 1,
    marginLeft: SPACING.small,
    color: COLORS.text,
    fontSize: 16,
  },
  filterContainer: {
    marginLeft: SPACING.small,
  },
  filterButton: {
    padding: SPACING.small,
  },
});