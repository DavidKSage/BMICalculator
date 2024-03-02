import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Header from "./components/Header";

export default function App() {
  const [feet, setFeet] = useState("");
  const [inches, setInches] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBmi] = useState(0);

  const handlePress = () => {
    let myHeight = parseInt(feet) * 12 + parseInt(inches);
    let myBmi = (parseInt(weight) / myHeight ** 2) * 703;
    setBmi(myBmi);
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Header title="BMI Calculator" />
      <Text style={styles.heading}>Enter Height:</Text>
      <View style={styles.inputBlock}>
        <Text>Feet</Text>
        <Text>Inches</Text>
      </View>
      <View style={styles.inputBlock}>
        <TextInput
          style={styles.input}
          onChangeText={(val) => setFeet(val)}
        ></TextInput>
        <TextInput
          style={styles.input}
          onChangeText={(val) => setInches(val)}
        ></TextInput>
      </View>
      <View style={styles.heading} />
      <Text style={styles.heading}>Enter Weight:</Text>
      <View style={styles.inputBlock}>
        <Text>Weight (in lbs)</Text>
      </View>
      <View style={styles.inputBlock}>
        <TextInput
          style={styles.input}
          onChangeText={(val) => setWeight(val)}
        ></TextInput>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={handlePress}>
          <Text style={styles.buttonText}>Calculate BMI</Text>
        </TouchableOpacity>
      </View>
      <Text>Your BMI: {bmi}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  feet: {
    fontSize: 18,
    marginLeft: 10,
  },
  input: {
    flexDirection: "row",
    marginBottom: 12,
    borderWidth: 1,
    padding: 10,
    width: 150,
    height: 40,
  },
  inputBlock: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  heading: {
    fontSize: 24,
    marginBottom: 10,
    marginLeft: 10,
    // marginTop: 10,
  },
  button: {
    marginTop: 10,
    paddingVertical: 12,

    borderRadius: 10,
    elevation: 3,
    backgroundColor: "lavender",
  },
  buttonContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  buttonText: {
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 35,
    paddingVertical: 10,
    fontSize: 24,
  },
});
