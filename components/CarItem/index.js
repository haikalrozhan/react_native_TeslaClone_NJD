import { View, Text, ImageBackground } from "react-native";
import styles from "./styles";
import StyledButton from "../StyledButton";

const CarItem = () => {
  return (
    <View style={styles.carContainer}>
      <ImageBackground
        source={require("../../assets/images/ModelX.jpeg")}
        style={styles.image}
      />
      <View style={styles.titles}>
        <Text style={styles.title}>Model S</Text>
        <Text style={styles.subTitle}>Starting at $69,420</Text>
      </View>
      <StyledButton
        type="primary"
        content="custom order"
        onPress={() => {
          console.warn("Custom order was press");
        }}
      />
      <StyledButton
        type="secondary"
        content="Existing Inventory"
        onPress={() => {
          console.warn("Existing Inventory");
        }}
      />
    </View>
  );
};

export default CarItem;
