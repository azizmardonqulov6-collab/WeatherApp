import { AnimationObject } from "lottie-react-native";
export interface OnboardingData{
  id: number,
  animation: AnimationObject,
  text: string,
  textColor: string,
  bacroundColor: string
}

const Data: OnboardingData[] = [
  {
    id: 1,
    animation: require("../assets/animations/Lottio1.json"),
    text: "Xavo Haroratini Shu yerda biling",
    textColor: "#263238",
    bacroundColor: "#FFF4E6",
  },
  {
    id: 2,
    animation: require("../assets/animations/Lottio2.json"),
    text: "Joylashuvni o'zi kifoya",
    textColor: "#19324D",
    bacroundColor: "#EAF6FF",
  },
  {
    id: 3,
    animation: require("../assets/animations/Lottio3.json"),
    text: "Bir Tugma va Hafta haroratini biling",
    textColor: "#25253D",
    bacroundColor: "#EEF0FF",
  }
]

export default Data
