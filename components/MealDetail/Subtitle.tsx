import { Text, View, StyleSheet } from "react-native";
import { colorTheme } from "../../colorTheme";

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
    width: '90%',
    marginVertical: 8,
    // marginHorizontal: 14,
    paddingHorizontal: 16,
    borderBottomWidth: 3,
    borderBottomColor: colorTheme.colorGrey,
    alignSelf: "center",
  },
  subtitle: {
    fontSize: 18,
    fontWeight: "bold",
    // color: "#4A4A4A",
    textAlign: 'center',
    color: colorTheme.colorGrey,
  }, 
});

export default Subtitle;
