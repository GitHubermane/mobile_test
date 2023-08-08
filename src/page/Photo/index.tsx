import {
    View, StyleSheet, Text,
    Image, Pressable
} from "react-native"
import { useAppSelector } from "../../hooks/hooks"
import { useNavigation } from "@react-navigation/native"
import { ShareBtn } from "../../Components/ShareBtn"
import { borderRadius } from "../../styleConsts"
import back from "../../../assets/icons/backWhite.png"
import { MyTextReg } from "../../Components/MyText/Regular"
import { MyTextSemiBold } from "../../Components/MyText/SemiBold"

export const Photo = () => {
    const { id, url } = useAppSelector(state => state.mars.currentPhoto)

    const navigation = useNavigation()
    const onPressBack = () => {
        navigation.navigate('CameraRoll' as never)
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Pressable
                    style={styles.btnBlock}
                    onPress={onPressBack}
                >
                    <Image source={back} />
                </Pressable>
                <View>
                    <MyTextReg style={styles.title}>
                        Photo ID
                    </MyTextReg>
                    <MyTextSemiBold style={styles.id}>
                        {id}
                    </MyTextSemiBold>
                </View>
                <ShareBtn url={url}/>
            </View>
            <Image
                style={styles.img}
                source={{ uri: url }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        backgroundColor: '#000',
        paddingHorizontal: 16,
        paddingBottom: 34
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 42,
    },
    imgBlock: {
        height: '100%',
        width: '100%',
    },
    img: {
        height: '85%',
        width: '100%',
        marginTop: 16,
        borderRadius
    },
    btnBlock: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 30,
        width: 30,
    },
    title: {
        fontSize: 13,
        color: '#fff',
        textAlign: 'center',
    },
    id: {
        fontSize: 18,
        color: '#fff'
    }
})