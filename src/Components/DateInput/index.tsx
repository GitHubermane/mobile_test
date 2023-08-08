import {
    Image, View, Pressable,
    StyleSheet
} from "react-native"
import DateTimePickerAndroid, {
    DateTimePickerEvent
} from "@react-native-community/datetimepicker"
import { useState } from "react"
import { formatDate } from "../../utils/formatDate"
import calendar from "../../../assets/icons/calendar.png"
import { useFonts } from "expo-font"
import { MyTextReg } from "../MyText/Regular"

type Props = {
    date: Date
    setDate: (date: Date) => void
}

export const DateInput = ({ date, setDate }: Props) => {
    const [isPickerShow, setIsPickerShow] = useState(false)

    const [loaded] = useFonts({
        TerminalDosis: require('../../../assets/fonts/Terminal-Dosis-Regular.ttf'),
    })
    if (!loaded) return null

    const toggleDatePicker = () => {
        setIsPickerShow(!isPickerShow)
    }

    const onChange = ({ type }: DateTimePickerEvent, value?: Date) => {
        if (type === "set") {
            if (value) setDate(value)
        }

        toggleDatePicker()
    }

    return (
        <View style={styles.container}>
            <Pressable onPress={toggleDatePicker}>
                <MyTextReg style={styles.input}>
                    {formatDate(date)}
                </MyTextReg>

                <Image
                    style={styles.calendarImg}
                    source={calendar}
                />
            </Pressable>

            {
                isPickerShow &&
                <DateTimePickerAndroid
                    value={date}
                    mode={'date'}
                    display={'spinner'}
                    is24Hour={true}
                    onChange={onChange}
                />
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        height: 60,
        paddingHorizontal: 16,
        backgroundColor: "#EEE7DF",
        borderRadius: 10,
    },
    input: {
        color: '#000'
    },
    calendarImg: {
        position: "absolute",
        right: 0,
        zIndex: 1
    }
})