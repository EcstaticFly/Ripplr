import { Feather } from "@expo/vector-icons";
import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

//TODO: Make the search functionality backend and connect here

const TRENDING_TOPICS = [
  { topic: "#AI", twweets: "576k" },
  { topic: "#ReactNative", twweets: "125k" },
  { topic: "#TypeScript", twweets: "89k" },
  { topic: "#Development", twweets: "234k" },
  { topic: "#TechNews", twweets: "69k" },
];

const SearchScreen = () => {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="px-4 py-3 border-b border-gray-100 ">
        <View className="flex-row items-center bg-gray-100 rounded-full px-4 py-3">
          <Feather name="search" size={20} color="#657786" />
          <TextInput
            placeholder="Search Ripplr"
            className="flex-1 ml-3 text-base"
            placeholderTextColor="#657786"
          />
        </View>
      </View>

      <ScrollView className="flex-1">
        <View className="p-4">
          <Text className="text-xl font-bold text-gray-900 mb-4">
            Trending for you
          </Text>

          {TRENDING_TOPICS.map((item, index) => (
            <TouchableOpacity
              key={index}
              className="py-3 border-b border-gray-100"
            >
              <Text className="text-gray-500 text-sm">
                Trending in Technology
              </Text>
              <Text className="text-gray-900 text-lg font-bold">
                {item.topic}
              </Text>
              <Text className="text-gray-500 text-sm">
                {item.twweets} Tweets
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SearchScreen;
