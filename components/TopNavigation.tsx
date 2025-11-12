import icons from "@/constants/icons";
import { Image, TouchableOpacity, View } from "react-native";

export const TopNavigation = () => {
  return (
    <View className="absolute top-16 left-16 right-16 flex flex-row justify-between">
      <TouchableOpacity className="w-10 h-10 bg-[#FFF] border-10 align-middle justify-center shadow-white opacity-5">
        <Image source={icons.backArrow} className="size-24 color-[#000]" />
      </TouchableOpacity>
    </View>
  );
};
