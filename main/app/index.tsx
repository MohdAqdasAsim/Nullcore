import React, { useEffect, useState } from "react";
import { ActivityIndicator, View, Text, TouchableOpacity } from "react-native";
import { useFirstLaunch } from "@/hooks/useFirstLaunch";
import { BackgroundWrapper, OnboardingModal } from "@/components"; // assuming you have these components
import { useRouter } from "expo-router"; // import useRouter from expo-router

export default function Home() {
  const router = useRouter(); // initialize the router
  const isFirstLaunch = useFirstLaunch();
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    if (isFirstLaunch === false) return;
    if (isFirstLaunch === true) {
      setModalVisible(true);
    }
  }, [isFirstLaunch]);

  if (isFirstLaunch === null) {
    return (
      <BackgroundWrapper>
        <ActivityIndicator size="large" color="#513d73" />
      </BackgroundWrapper>
    );
  }

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  const handleSinglePlayerPress = () => {
    router.push("/pages/world-selection" as never); // navigate to singleplayer screen
  };

  const handleMultiPlayerPress = () => {
    router.push("/pages/multiplayer" as never); // navigate to multiplayer screen
  };

  const handleLeaderboardPress = () => {
    router.push("/pages/leaderboard" as never); // navigate to leaderboard screen
  };

  return (
    <BackgroundWrapper>
      {/* Header */}
      <Text className="text-9xl text-white font-glitch text-center mt-24">
        Nullcore
      </Text>

      {/* Buttons */}
      <View className="p-4 flex-col gap-4 items-center">
        <TouchableOpacity
          onPress={handleSinglePlayerPress}
          className="border-4 border-neon-teal px-6 py-3 rounded-xl flex justify-center items-center"
        >
          <Text className="text-2xl text-white font-extrabold uppercase">
            Singleplayer
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={handleMultiPlayerPress}
          className="border-4 border-neon-pink px-6 py-3 rounded-xl flex justify-center items-center"
        >
          <Text className="text-2xl text-white font-extrabold uppercase">
            Multiplayer
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={handleLeaderboardPress}
          className="border-4 border-neon-teal px-6 py-3 rounded-xl flex justify-center items-center"
        >
          <Text className="text-2xl text-white font-extrabold uppercase">
            Leaderboard
          </Text>
        </TouchableOpacity>
      </View>

      {/* Settings Icon */}
      <TouchableOpacity className="absolute bottom-10 right-10 w-16 h-16 rounded-full border-4 border-white flex items-center justify-center">
        <Text className="text-white text-4xl">⚙️</Text>
      </TouchableOpacity>

      {/* Render the OnboardingModal if it's the first launch */}
      <OnboardingModal visible={modalVisible} onClose={handleCloseModal} />
    </BackgroundWrapper>
  );
}
