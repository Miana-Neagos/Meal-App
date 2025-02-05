import { View, Text, Pressable, StyleSheet, Platform } from "react-native";

type CategoryGridTileProps = {
  title: string;
  color: string;
  onPress: () => void;
};

const CategoryGridTile: React.FC<CategoryGridTileProps> = ({ title, color, onPress}) => {
  return (
    <View style={styles.categoryGrid}>
      <View style={styles.outerContainer}>
        <Pressable
          android_ripple={{ color: "#F1F2F3" }}
          style={({ pressed }) => [
            styles.button,
            pressed ? styles.buttonPressed : null,
          ]}
          onPress={onPress}
        >
          <View style={[styles.innerContainer, { backgroundColor: color }]}>
            <Text style={styles.title}>{title}</Text>
          </View>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  categoryGrid: {
    flex: 1,
    margin: 16,
    height: 150,
    borderRadius: 8,
    elevation: 4,
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    shadowOpacity: 0.35,
    backgroundColor: "#ffffff",
    // overflow: Platform.OS === "android" ? "hidden" : "visible",
  },
  outerContainer: {
    flex: 1,
    borderRadius: 8,
    overflow: 'hidden',
  },
  button: {
    flex: 1,
    transform: [{ scale: 1 }],
  },
  buttonPressed: {
    opacity: 0.75,
    transform: [{ scale: 1.1 }],
  },
  innerContainer: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
  },
});

export default CategoryGridTile;
