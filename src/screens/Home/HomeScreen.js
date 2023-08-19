import { View, Text, Button } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import useAuth from "../../Hooks/useAuth";

const HomeScreen = () => {
  const { message } = useSelector((state) => state.auth);
  const { handleClick } = useAuth();

  return (
    <View>
      <Text className="text-lg text-red-400">{`Home Screen ${message}`}</Text>
      <Button title="Click Me" onPress={handleClick} />
    </View>
  );
};

export default HomeScreen;
