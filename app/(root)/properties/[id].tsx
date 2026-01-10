import { HeaderImage } from "@/components/HeaderImage";
import { getPropertyById } from "@/lib/appwrite";
import { useAppwrite } from "@/lib/useAppwrite";
import { Facility } from "@/types";
import { Ionicons } from "@expo/vector-icons";
import { useLocalSearchParams } from "expo-router";
import {
  ActivityIndicator,
  Dimensions,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const { width } = Dimensions.get("window");

const facilityIcons = {
  "Car-parking": "car",
  "Swimming-pool": "water",
  Gym: "barbell",
  Restaurant: "restaurant",
  Cutlery: "restaurant",
  "Wi-fi": "wifi",
  "Pet-center": "paw",
  "Sports-center": "trophy",
  Laundry: "shirt",
  Others: "grid",
};

export default function Property() {
  const { id } = useLocalSearchParams();
  const normalizedId = Array.isArray(id) ? id[0] : id;

  const {
    data: detailPropertyByIdData,
    loading: detailPropertyByIdDataLoading,
  } = useAppwrite({
    fn: getPropertyById,
    params: {
      id: normalizedId,
    },
  });

  if (detailPropertyByIdDataLoading) {
    return (
      <SafeAreaView className="flex-1 bg-white items-center justify-center">
        <ActivityIndicator size="large" className="text-primary-300" />
      </SafeAreaView>
    );
  }

  if (!detailPropertyByIdData) {
    return (
      <SafeAreaView className="flex-1 bg-white items-center justify-center">
        <Text className="text-red-500">Failed to load property details.</Text>
      </SafeAreaView>
    );
  }

  const {
    name,
    address,
    image,
    price,
    bedrooms,
    bathrooms,
    area,
    description,
    facilities = [],
    geolocation,
    rating,
    type,
    agent,
  } = detailPropertyByIdData;

  // Parse geolocation if available
  const [lat, lng] = geolocation ? geolocation.split(", ") : ["0", "0"];

  const galleryItemWidth = (width - 48 - 24) / 3;
  const facilityItemWidth = (width - 48 - 48) / 4;

  // Mock reviews count - replace with actual reviews data when available
  const reviewCount = 1275;

  // Mock gallery - use actual gallery when available
  const gallery = [image, image, image];

  // Mock agent data - replace with actual agent lookup when available
  const agentData = {
    name: "Property Agent",
    title: "Owner",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80",
  };

  return (
    <>
      {/* Header Image */}
      <HeaderImage image={image} />

      <View className="flex-1 bg-gray-50">
        <ScrollView showsVerticalScrollIndicator={false}>
          <View className="bg-white rounded-t-3xl -mt-6 pt-6 pb-24">
            <View className="px-6 py-4 border-t border-gray-100">
              <Text className="text-2xl font-bold text-gray-900 mb-3">
                {name}
              </Text>

              <View className="flex-row items-center gap-4 mb-4">
                <View className="px-3 py-1 bg-blue-50 rounded-full">
                  <Text className="text-xs font-semibold text-blue-600">
                    {type.toUpperCase()}
                  </Text>
                </View>
                <View className="flex-row items-center gap-1">
                  <Ionicons name="star" size={16} color="#FCD34D" />
                  <Text className="text-sm font-semibold text-gray-900">
                    {rating}
                  </Text>
                  <Text className="text-sm text-gray-500">
                    ({reviewCount} reviews)
                  </Text>
                </View>
              </View>

              <View className="flex-row gap-6">
                <View className="flex-row items-center gap-2">
                  <View className="w-5 h-5 bg-blue-50 rounded items-center justify-center">
                    <Ionicons name="bed-outline" size={16} color="#3B82F6" />
                  </View>
                  <Text className="text-sm text-gray-600">{bedrooms} Beds</Text>
                </View>
                <View className="flex-row items-center gap-2">
                  <View className="w-5 h-5 bg-blue-50 rounded items-center justify-center">
                    <Ionicons name="water-outline" size={16} color="#3B82F6" />
                  </View>
                  <Text className="text-sm text-gray-600">
                    {bathrooms} bath
                  </Text>
                </View>
                <View className="flex-row items-center gap-2">
                  <View className="w-5 h-5 bg-blue-50 rounded items-center justify-center">
                    <Ionicons name="resize-outline" size={16} color="#3B82F6" />
                  </View>
                  <Text className="text-sm text-gray-600">{area} sqft</Text>
                </View>
              </View>
            </View>

            {/* Agent */}
            <View className="px-6 py-4 border-t border-gray-100">
              <Text className="text-lg font-bold text-gray-900 mb-4">
                Agent
              </Text>
              <View className="flex-row justify-between items-center">
                <View className="flex-row items-center gap-3">
                  <Image
                    source={{ uri: agentData.avatar }}
                    className="w-12 h-12 rounded-full"
                  />
                  <View>
                    <Text className="text-base font-semibold text-gray-900">
                      {agentData.name}
                    </Text>
                    <Text className="text-sm text-gray-500">
                      {agentData.title}
                    </Text>
                  </View>
                </View>
                <View className="flex-row gap-2">
                  <TouchableOpacity className="w-10 h-10 border border-blue-600 rounded-lg items-center justify-center">
                    <Ionicons
                      name="chatbubble-outline"
                      size={20}
                      color="#3B82F6"
                    />
                  </TouchableOpacity>
                  <TouchableOpacity className="w-10 h-10 border border-blue-600 rounded-lg items-center justify-center">
                    <Ionicons name="call-outline" size={20} color="#3B82F6" />
                  </TouchableOpacity>
                </View>
              </View>
            </View>

            {/* Overview */}
            <View className="px-6 py-4 border-t border-gray-100">
              <Text className="text-lg font-bold text-gray-900 mb-3">
                Overview
              </Text>
              <Text className="text-sm text-gray-600 leading-6">
                {description}
              </Text>
            </View>

            {/* Facilities */}
            {facilities.length > 0 && (
              <View className="px-6 py-4 border-t border-gray-100">
                <Text className="text-lg font-bold text-gray-900 mb-4">
                  Facilities
                </Text>
                <View className="flex-row flex-wrap gap-4">
                  {facilities.map((facility: Facility, index: number) => (
                    <View
                      key={index}
                      className="items-center gap-2"
                      style={{ width: facilityItemWidth }}
                    >
                      <View className="w-14 h-14 bg-blue-50 rounded-xl items-center justify-center">
                        <Ionicons
                          name={facilityIcons[facility.icon] || "ellipse"}
                          size={24}
                          color="#3B82F6"
                        />
                      </View>
                      <Text
                        className="text-xs text-gray-600 text-center"
                        numberOfLines={2}
                      >
                        {facilities}
                      </Text>
                    </View>
                  ))}
                </View>
              </View>
            )}

            {/* Gallery */}
            <View className="px-6 py-4 border-t border-gray-100">
              <Text className="text-lg font-bold text-gray-900 mb-4">
                Gallery
              </Text>
              <View className="flex-row gap-3">
                {gallery.slice(0, 3).map((img, index) => (
                  <View
                    key={index}
                    className="rounded-xl overflow-hidden relative"
                    style={{
                      width: galleryItemWidth,
                      height: galleryItemWidth,
                    }}
                  >
                    <Image
                      source={{ uri: img }}
                      className="w-full h-full"
                      resizeMode="cover"
                    />
                    {index === 2 && gallery.length > 3 && (
                      <View className="absolute inset-0 bg-black/50 items-center justify-center">
                        <Text className="text-white font-bold text-lg">
                          {gallery.length - 2}+
                        </Text>
                      </View>
                    )}
                  </View>
                ))}
              </View>
            </View>

            {/* Location */}
            <View className="px-6 py-4 border-t border-gray-100">
              <Text className="text-lg font-bold text-gray-900 mb-4">
                Location
              </Text>
              <View className="flex-row gap-2 mb-4">
                <Ionicons name="location" size={20} color="#3B82F6" />
                <Text className="flex-1 text-sm text-gray-600">{address}</Text>
              </View>
              <View className="h-48 rounded-xl overflow-hidden relative bg-gray-200">
                <Image
                  source={{
                    uri: `https://api.mapbox.com/styles/v1/mapbox/light-v11/static/${lng},${lat},12,0/600x300@2x?access_token=pk.eyJ1IjoiZXhhbXBsZSIsImEiOiJjazl5Z3VudGswMDBmM2ZtbzR6OWFyOXR4In0.placeholder`,
                  }}
                  className="w-full h-full opacity-50"
                  resizeMode="cover"
                />
                <View className="absolute inset-0 items-center justify-center">
                  <View className="w-12 h-12 bg-blue-600 rounded-full items-center justify-center shadow-lg">
                    <Ionicons name="location" size={28} color="#FFF" />
                  </View>
                </View>
              </View>
            </View>

            {/* Reviews Section - Placeholder */}
            <View className="px-6 py-4 border-t border-gray-100">
              <View className="flex-row justify-between items-center mb-4">
                <View className="flex-row items-center gap-2">
                  <Ionicons name="star" size={20} color="#FCD34D" />
                  <Text className="text-base font-bold text-gray-900">
                    {rating} ({reviewCount} reviews)
                  </Text>
                </View>
                <TouchableOpacity>
                  <Text className="text-sm font-semibold text-blue-600">
                    See All
                  </Text>
                </TouchableOpacity>
              </View>

              {/* Sample Review */}
              <View className="flex-row gap-3">
                <Image
                  source={{
                    uri: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80",
                  }}
                  className="w-10 h-10 rounded-full"
                />
                <View className="flex-1">
                  <View className="flex-row justify-between mb-1">
                    <Text className="text-sm font-semibold text-gray-900">
                      Sample Reviewer
                    </Text>
                    <Text className="text-xs text-gray-500">6 days ago</Text>
                  </View>
                  <Text className="text-sm text-gray-600 mb-2 leading-5">
                    Great property! Clean, modern, and exactly as described.
                  </Text>
                  <View className="flex-row items-center gap-1">
                    <Ionicons name="star" size={14} color="#FCD34D" />
                    <Text className="text-xs font-semibold text-gray-900">
                      {rating}
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>

        {/* Bottom Booking Bar */}
        <View className="absolute bottom-0 left-0 right-0 bg-white flex-row justify-between items-center px-6 py-4 border-t border-gray-200 shadow-2xl">
          <View>
            <Text className="text-xs text-gray-500 mb-0.5">PRICE</Text>
            <Text className="text-2xl font-bold text-blue-600">${price}</Text>
          </View>
          <TouchableOpacity className="bg-blue-600 px-8 py-3.5 rounded-xl">
            <Text className="text-white text-base font-semibold">
              Booking Now
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}
