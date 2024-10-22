import { useState } from "react";
import { Text, View, Button, TextInput } from "react-native";

export default function Index() {
  const [counter, setCounter] = useState(0);
  const [mynumber, setmynumber] = useState("");
  const [errormsg, seterrormsg] = useState("");

  function addPlus() {
    const isNotaNumber = Number(mynumber);

    if (isNaN(isNotaNumber)) {
      seterrormsg("INTE en siffra");
    } else {
      seterrormsg("");

      setCounter(isNotaNumber + counter);
      if (counter >= 10) {
        setCounter(0);
      }
    }
  }

  function addMinus() {
    setCounter(counter - Number(mynumber));

    if (counter <= 0) {
      setCounter(0);
    }
  }

  function addReset() {
    setCounter(0);
  }

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {errormsg != "" && (
        <Text style={{ borderWidth: 3, width: 200, height: 100 }}>
          {errormsg}
        </Text>
      )}
      <TextInput
        style={{ borderWidth: 3, width: 150, borderColor: "pink" }}
        onChangeText={setmynumber}
        value={mynumber}
      />

      <Text style={{ fontSize: 30 }}>{counter}</Text>
      <Button title="PLUS" onPress={addPlus} />

      {counter > 0 && <Button title="MINUS" onPress={addMinus} />}

      <Button title="RESET" onPress={addReset} />
    </View>
  );
}
