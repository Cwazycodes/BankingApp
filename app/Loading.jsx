import { View, ActivityIndicator, Image } from "react-native";

import { images } from "../constants";

const Loading = () => {
  return (
    <View className=" flex-1 justify-center items-center bg-primary">
      <Image
        source={images.logo}
        resizeMode="contain"
        className="absolute mt-[383px] ml-[155px] w-[150px] h-[150px] rounded-none"
      />
      <ActivityIndicator size="small" className=" mt-[75px] color-gray" />
    </View>
  );
};

export default Loading;
