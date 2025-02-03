import { View, Text, StyleSheet } from "react-native";

type MealDetailsProps = {
  details: {
    duration?: number;
    complexity?: string | undefined ;
    affordability?: string | undefined;
  };
};

const QuickInfo: React.FC<MealDetailsProps> = ({ details }) => {
  return (
    <View style={styles.details}>
      <Text style={styles.detailItem}>{details.duration}</Text>
      <Text> - </Text>
      <Text style={styles.detailItem}>{details.complexity}</Text>
      <Text> - </Text>
      <Text style={styles.detailItem}>{details.affordability}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  details: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
    gap: 15,
  },
  detailItem: {
    fontSize: 16,
  },
});

export default QuickInfo;
