import RenderItems from '@/components/RenderItems'
import Data, { OnboardingData } from '@/data/data'
import { StyleSheet, View } from 'react-native'
import Animated, { useAnimatedRef, useAnimatedScrollHandler, useSharedValue } from 'react-native-reanimated'
import { FlatList } from 'react-native-reanimated/lib/typescript/Animated'

type Props = {}

const index = (props: Props) => {

  const flatListRef = useAnimatedRef<FlatList<OnboardingData>>()
  const x = useSharedValue(0);

  const onScroll = useAnimatedScrollHandler({
    onScroll: event =>{
      x.value = event.contentOffset.x
    }
  })

  return (
    <View style={styles.Container}>
      <Animated.FlatList 
        ref={flatListRef}
        data={Data}
        renderItem={({item , index }) => {
          return <RenderItems items={item} index={index} x={x} />
        }}
        keyExtractor={item=> item.id.toString()}
        scrollEventThrottle={16}
        horizontal={true}   
        bounces={false}
        pagingEnabled={true}    
        showsHorizontalScrollIndicator={false} 
      />
    </View>
  )
}
const styles = StyleSheet.create({
  Container : {
    flex: 1,

  }
})