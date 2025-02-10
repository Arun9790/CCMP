import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

interface Action {
  label: string;
  onPress: () => void;
}

interface QuickActionsProps {
  actions?: Action[];  // Marking it optional to prevent undefined errors
}

export function QuickActions({ actions = [] }: QuickActionsProps) { // Default to empty array
  return (
    <View style={styles.container}>
      {actions.length > 0 ? (
        actions.map((action, index) => (
          <TouchableOpacity key={index} style={styles.button} onPress={action.onPress}>
            <Text style={styles.text}>{action.label}</Text>
          </TouchableOpacity>
        ))
      ) : (
        <Text style={styles.placeholder}>No actions available</Text> // Fallback UI
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
  button: {
    backgroundColor: '#007AFF',
    padding: 10,
    borderRadius: 8,
  },
  text: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  placeholder: {
    color: 'gray',
    fontSize: 14,
  },
});

export default QuickActions;
