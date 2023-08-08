import {
    Image, Text, View,
    StyleSheet, Pressable,
} from "react-native"
import { Select } from "../../Components/Select"
import { roverCameras } from "./roverCameras"
import { useState } from "react"
import { DateInput } from "../../Components/DateInput"
import { useAppDispatch } from "../../hooks/hooks"
import { setCamera, setTime } from "../../store/slice/mars"
import { useNavigation } from "@react-navigation/native"
import { bgColor } from "../../styleConsts"
import img from '../../../assets/images/image.png'
import { MyTextReg } from "../../Components/MyText/Regular"
import { MyTextSemiBold } from "../../Components/MyText/SemiBold"

export const CamNDateSelect = () => {
    const [date, setDate] = useState(new Date(Date.now().valueOf()));
    const [item, setItem] = useState(roverCameras[0])

    const dispatch = useAppDispatch()
    const navigation = useNavigation()
    
    const onBtnClick = () => {
        dispatch(setTime(date.valueOf()))
        dispatch(setCamera({
            value: item.value,
            title: item.title
        }))
        
        navigation.navigate('CameraRoll' as never)
    }

    return (
        <View style={styles.container}>
            <View>
                <MyTextSemiBold style={styles.title}>
                    Select Camera and Date
                </MyTextSemiBold>
            </View>

            <View style={styles.form}>
                <View style={styles.block}>
                    <MyTextReg style={styles.subTitle}>
                        Rover Camera
                    </MyTextReg>
                    <Select
                        value={item.title}
                        items={roverCameras}
                        onItemPress={setItem}
                    />
                </View>
    
                <View>
                    <MyTextReg style={styles.subTitle}>
                        Date
                    </MyTextReg>
                    <DateInput
                        date={date}
                        setDate={setDate}
                    />
                </View>
    
                <Pressable
                    style={styles.button}
                    onPress={onBtnClick}
                >
                    <MyTextSemiBold style={styles.buttonText}>
                        Explore
                    </MyTextSemiBold>
                </Pressable>
            </View>

            <Image style={styles.img} source={img} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        backgroundColor: bgColor,
        paddingHorizontal: 24,
    },
    title: {
        marginTop: 42,
        
        textAlign: 'center',
        fontSize: 18,
    },
    form: {
        marginTop: 50
    },
    subTitle: {
        fontSize: 14,
        marginBottom: 7,
    },
    block: {
        paddingBottom: 16,
    },
    button: {
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#BF2E0E',
        color: '#ffffff',
        borderRadius: 10,
        marginTop: 35,
        elevation: 4,
        shadowColor: '#ffffff',
    },
    buttonText: {
        color: '#ffffff',
    },
    img: {
        position: 'absolute',
        bottom: 0,
        zIndex: -1
    },
    datePicker: {
        width: 320,
        height: 260,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
})