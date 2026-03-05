import "./global.css";
import { View } from "react-native";
import { H1 } from "./src/components/CustomTags/H1";
import { Body } from "./src/components/CustomTags/Body";
import FormInput from "./src/components/CustomTags/FormInput";

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-white gap-4">

      <H1 className="text-3xl text-black font-bold">
        H1-BOLD
      </H1>

      <H1 className="text-3xl text-black font-light">
        H1-LIGHT
      </H1>

      <H1 className="text-3xl text-black font-regular">
        H1-REGULAR
      </H1>

      <H1 className="text-3xl text-black font-semibold">
        H1-SEMIBOLD
      </H1>

      <Body className="text-3xl text-black font-bold">
        BODY-BOLD
      </Body>

      <Body className="text-3xl text-black font-light">
        BODY-LIGHT
      </Body>

      <Body className="text-3xl text-black font-regular">
        BODY-REGULAR
      </Body>

      <Body className="text-3xl text-black font-semibold">
        BODY-SEMIBOLD
      </Body>

      <FormInput
        className="border border-gray-300 p-3 rounded-xl w-64 text-black"
        placeholder="Enter email"
      />

    </View>
  );
}