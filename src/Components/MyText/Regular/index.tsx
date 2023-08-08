import { useFonts } from "expo-font"
import { StyleSheet, Text } from "react-native"

type Props = {
    children: string
    style?: any
}

export const MyTextReg = ({ children, style }: Props) => {
    const [loaded] = useFonts({
        'TerminalDosis-Regular': require('../../../../assets/fonts/Terminal-Dosis-Regular.ttf'),
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
        fontFamily: 'TerminalDosis-Regular',
    }
})