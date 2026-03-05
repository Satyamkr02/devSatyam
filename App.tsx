import "./global.css";
import { useColorScheme } from "react-native";
import AppNavigator from "./src/navigation/AppNavigator";
import { View } from "react-native";

export default function App() {
  const scheme = useColorScheme();

  return (
    <View className={scheme === "dark" ? "flex-1 dark" : "flex-1"}>
      <AppNavigator />
    </View>
  );
}