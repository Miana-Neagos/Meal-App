import { View, Text, StyleSheet } from "react-native";
import { colorTheme } from "../../colorTheme";

type MealDetailsProps = {
  details: {
    duration?: number;
    complexity?: string | undefined;
    affordability?: string | undefined;
  };
};

const QuickInfo: React.FC<MealDetailsProps> = ({ details }) => {
  const formattedDetails = [
    details.duration ? `${details.duration} min` : "No Info",
    details.complexity?.toUpperCase() || "No Info",
    details.affordability?.toUpperCase() || "No Info",
  ];

  return (
    <View style={styles.details}>
      <Text style={styles.detailItem}>{formattedDetails.join(" • ")}</Text>
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
    fontSize: 14,
    color: colorTheme.colorGrey,
    fontWeight: "bold",
  },
});

export default QuickInfo;
