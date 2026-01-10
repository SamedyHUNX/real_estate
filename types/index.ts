import { ImageSourcePropType } from "react-native";
import { Models } from "react-native-appwrite";

export type Agent = {
  name: string;
  title: string;
  avatar: string;
};

export type Facility = {
  icon: string;
  label: string;
};

export type Review = {
  id: number;
  name: string;
  avatar: string;
  rating: number;
  comment: string;
  date: string;
};

export interface Property extends Models.DefaultDocument {
  name: string;
  address: string;
  image: string;
  price: number;
  bedrooms: number;
  bathrooms: number;
  area: number;
  description: string;
  facilities: Facility[];
  rating: number;
  type: string;
  geolocation: string;
  agent: Agent;
  gallery: string[];
  reviews: Review[];
}

export interface CardData extends Models.DefaultDocument {
  image: string;
  rating: number;
  name: string;
  address: string;
  price: string;
}

export interface CardProps {
  item: CardData;
  onPress?: () => void;
}

export interface SettingsItemProp {
  icon: ImageSourcePropType;
  title: string;
  onPress?: () => void;
  textStyle?: any;
  showArrow?: boolean;
}
