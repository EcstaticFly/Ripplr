import { Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import SignOutBtn from "@/components/SignOutBtn";

const HomeScreen = () => {
  return (
    <SafeAreaView className="flex-1">
      <Text>HomeScreen</Text>
      <SignOutBtn />
    </SafeAreaView>
  );
};

export default HomeScreen;
