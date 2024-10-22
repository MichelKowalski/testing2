import { useState } from "react";
import { Text, View, Button, TextInput } from "react-native";

export default function Index() {
  const [myNumb, setMyNumb] = useState(0);
  const [inputNumber, setInputNumber] = useState("");
  const [errormsg, setErrormsg] = useState("");

  function addPlus() {
    const notANumb = Number(inputNumber);

    if (isNaN(notANumb)) {
      setErrormsg("this is not a NUMB");
    } else {
      setErrormsg("");
      setMyNumb(myNumb + notANumb);
      if (myNumb >= 10) {
        setMyNumb(0);
      }
    }
  }

  function addMinus() {
    const notANumb = Number(inputNumber);

    if (isNaN(notANumb)) {
      setErrormsg("Not a minusNumber");
    } else {
      setErrormsg("");
      setMyNumb(myNumb - notANumb);
      if (myNumb <= 0) {
        setMyNumb(0);
      }
    }
  }

  function reset() {
    setMyNumb(0);
  }

  return (
    <View
      style={{
        backgroundColor: "grey",
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text>{errormsg}</Text>
      <Text style={{ fontSize: 100, color: "pink" }}>{myNumb}</Text>
      <TextInput
        onChangeText={setInputNumber}
        value={inputNumber}
        style={{
          borderWidth: 2,
          width: 300,
          height: 50,
          fontSize: 40,
          fontStyle: "italic",
        }}
      />
      <Button title="PLUS" onPress={addPlus} />

      <Button title="MINUS" onPress={addMinus} />
      {myNumb > 0 && (
        <Button
          title="RESET"
          onPress={() => {
            reset();
          }}
        />
      )}
    </View>
  );
}
