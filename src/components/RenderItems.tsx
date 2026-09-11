import { OnboardingData } from "@/data/data"
import LottieView from "lottie-react-native"
import { StyleSheet, Text, useWindowDimensions, View } from "react-native"
import Animated, { Extrapolation, interpolate, SharedValue, useAnimatedStyle } from "react-native-reanimated"

type Props = {
    items: OnboardingData,
    index: number,
    x: SharedValue<number>
}

const RenderItems = ({items , index , x}: Props) => {
    const {width: SCREEN_WIDTH} = useWindowDimensions();
    const cricleAnimation = useAnimatedStyle(() => {
      const scale = interpolate(
        x.value,
        [
            (index - 1) * SCREEN_WIDTH,
            index * SCREEN_WIDTH,
            (index + 1) * SCREEN_WIDTH
        ],
        [1,4,4],
        Extrapolation.CLAMP
      )
      return {
        transform: [{scale: scale}]
      }
    })
  return (
    <View style={[styles.Container , {width: SCREEN_WIDTH}]}>
        <Animated.View style={styles.cricleCointainer }>
            <Animated.View style={[{
                width: SCREEN_WIDTH , 
                height: SCREEN_WIDTH , 
                backgroundColor: items.bacroundColor , 
                borderRadius: SCREEN_WIDTH / 2
                }, cricleAnimation
                ]} />
        </Animated.View>
        <View>
            <LottieView source={items.animation} 
                style={{width: SCREEN_WIDTH * 0.9, height: SCREEN_WIDTH * 0.9}}
                autoPlay
                loop
            />
        </View>
        <View >
            <Text style={[styles.ItemText , {color: items.textColor}]}>
                {items.text}
            </Text>
        </View>
    </View>
  )
}

export default RenderItems

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        flexDirection:"column",
        justifyContent: "space-around",
        alignItems: "center",
        marginBottom: 120,
    },
    ItemText : {
        fontSize: 40,
        textAlign: "center",
        marginHorizontal: 20,
        marginBottom: 10,
    },
    cricleCointainer: {
        position: "absolute",
        left: 0,
        top: 0,
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    }

})