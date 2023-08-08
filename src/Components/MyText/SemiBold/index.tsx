import { useFonts } from "expo-font"
import { StyleSheet, Text } from "react-native"

type Props = {
    children: string
    style?: any
}

export const MyTextSemiBold = ({ children, style }: Props) => {
    const [loaded] = useFonts({
        'TerminalDosis-SemiBold': require('../../../../assets/fonts/Terminal-Dosis-SemiBold.ttf'),
    })
    if (!loaded) return null

    return (
        <Text style={[styles.text, style]}>
            {children}
        </Text>
    )
}

const styles = StyleSheet.create({
    text: {
        fontFamily: 'TerminalDosis-SemiBold'
    }
})