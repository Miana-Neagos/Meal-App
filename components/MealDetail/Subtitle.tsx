import { Text, View, StyleSheet } from "react-native";

const Subtitle: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.subtitle} accessibilityRole="header">
        {children}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // alignItems: 'center',
    marginVertical: 8,
    marginHorizontal: 8,
    paddingHorizontal: 16,
    borderBottomWidth: 2,
    borderBottomColor: "#ccc",
    alignSelf: "flex-start",
  },
  subtitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#4A4A4A",
  },
});

export default Subtitle;
