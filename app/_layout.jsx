import { Text, View } from "react-native";
import { Stack, useRouter } from "expo-router";
import { useFonts } from "expo-font";
import { useEffect, useState } from "react";

import Loading from "./Loading";

const RootLayout = () => {
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  const [fontsLoaded, error] = useFonts({
    Archivo: require("../assets/fonts/Archivo-VariableFont_wdth,wght.ttf"),
    Inter: require("../assets/fonts/Inter-VariableFont_opsz,wght.ttf"),
  });

  useEffect(() => {
    if (error) throw error;
    if (fontsLoaded) {
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [fontsLoaded, error]);

  if (isLoading || !fontsLoaded) {
    return <Loading />;
  }

  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="(home)" options={{ headerShown: false }} />
    </Stack>
  );
};

export default RootLayout;
