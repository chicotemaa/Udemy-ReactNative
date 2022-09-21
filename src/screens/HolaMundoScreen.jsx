import { Text, View } from "react-native"

export const HolaMundoScreen = () => {
  return (
    <View
    style={{
      flex: 1,
      // backgroundColor: 'grey',
      justifyContent: 'center',
    }}>
    <Text
      style={{
        fontSize: 45,
        textAlign: 'center',
      }}>
     AppPrincipal
    </Text>
  </View>
  )
}
