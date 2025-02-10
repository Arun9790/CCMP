import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

interface Conference {
  imageUrl: string;
  name: string;
  date: string;
  location: string;
}

interface ConferenceCardProps {
  conference: Conference;
}

export function ConferenceCard({ conference }: ConferenceCardProps) {
  return (
    <TouchableOpacity style={styles.card}>
      <Image 
        source={{ uri: conference.imageUrl }}
        style={styles.image}
      />
      <View style={styles.content}>
        <Text style={styles.title}>{conference.name}</Text>
        <Text style={styles.date}>{conference.date}</Text>
        <Text style={styles.location}>{conference.location}</Text>
      </View>
    </TouchableOpacity>
  );
}

// Define the missing styles object
const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 10,
    margin: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3, // For Android shadow
  },
  image: {
    width: '100%',
    height: 150,
    borderRadius: 8,
  },
  content: {
    marginTop: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  date: {
    fontSize: 14,
    color: 'gray',
    marginTop: 4,
  },
  location: {
    fontSize: 14,
    color: 'gray',
    marginTop: 2,
  },
});

export default ConferenceCard;
