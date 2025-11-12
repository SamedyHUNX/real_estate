import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { useState } from "react";
import { Image, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export const HeaderImage = ({ image }: { image: string }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const handleBack = () => router.back();

  return (
    <View className="relative h-2/4">
      <Image
        source={{ uri: image }}
        className="w-full h-full"
        resizeMode="cover"
      />
      <SafeAreaView className="absolute left-4 right-4 flex-row justify-between">
        <TouchableOpacity
          className="w-10 h-10 rounded-lg items-center justify-center shadow-lg"
          onPress={handleBack}
        >
          <Ionicons name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <View className="flex-row">
          <TouchableOpacity
            className="w-10 h-10 rounded-lg items-center justify-center shadow-lg"
            onPress={() => setIsFavorite(!isFavorite)}
          >
            <Ionicons
              name={isFavorite ? "heart" : "heart-outline"}
              size={24}
              color={isFavorite ? "#EF4444" : "#000"}
            />
          </TouchableOpacity>
          <TouchableOpacity className="w-10 h-10  rounded-lg items-center justify-center shadow-lg">
            <Ionicons name="share-outline" size={24} color="#000" />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </View>
  );
};
