
import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { icons } from "../constants"; 

const CustomTabBarButton = ({ route, accessibilityState, onPress }) => {
  const isSelected = accessibilityState.selected;

  return (
    <TouchableOpacity
      className="flex-1 items-center justify-center relative"
      onPress={onPress} 
    >
      <View style={{ position: 'absolute', top: 0, left: 0, right: 0, height: isSelected ? 3 : 0, backgroundColor: '#636AE8FF' }} />
      <Image
        source={icons[route.name.toLowerCase()]}
        style={{
          width: 24, 
          height: 24,
          tintColor: isSelected ? '#636AE8FF' : 'gray',
        }}
      />
      <Text style={{ fontSize: 10, color: isSelected ? '#636AE8FF' : 'gray', fontWeight: isSelected ? 'bold' : 'normal' }}>
        {route.name}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomTabBarButton;