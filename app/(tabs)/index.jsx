import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Dashboard from "../(home)/Dashboard"; 
import TransferTo from "../(payments)/TransferTo"; 
import Apply from "../(apply)/Apply"; 
import Settings from "../(settings)/Settings"; 
import CustomTabBarButton from '../../components/CustomTabBarButton'

const Tab = createBottomTabNavigator();

const TabLayout = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: "#636AE8FF",
        tabBarInactiveTintColor: "gray",
        tabBarStyle: {
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          elevation: 0,
          backgroundColor: "#FAFAFBFF",
          borderTopWidth: 0,
          borderTopColor: "#636AE8FF",
        },
        tabBarButton: (props) => <CustomTabBarButton {...props} route={route} />,
      })}
    >
      <Tab.Screen name="Home" component={Dashboard} options={{ headerShown: false }} />
      <Tab.Screen name="Payments" component={TransferTo} options={{ headerShown: false }} />
      <Tab.Screen name="Apply" component={Apply} options={{ headerShown: false }} />
      <Tab.Screen name="Settings" component={Settings} options={{ headerShown: false }} />
    </Tab.Navigator>
  );
};

export default TabLayout;