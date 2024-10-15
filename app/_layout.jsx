import { Stack } from "expo-router";
import {createStackNavigator} from '@react-navigation/native'
import { useFonts } from "expo-font";
import { useEffect, useState } from "react";
import Loading from "./Loading";

const RootLayout = () => {
  const [isLoading, setIsLoading] = useState(true);
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
    <Stack screenOptions={{headerShown:false}}>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      {/* Other routes can go here if needed */}
    </Stack>
  );
};

export default RootLayout;
