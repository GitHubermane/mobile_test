import {
    View, Image, StyleSheet,
    SafeAreaView, FlatList, Pressable
} from "react-native"
import { useGetPhotosQuery } from "../../store/api/mars"
import { useAppSelector } from "../../hooks/hooks"
import { ImageItem } from "../../Components/ImageItem"
import { useNavigation } from "@react-navigation/native"
import { formatDate } from "../../utils/formatDate"
import { bgColor } from "../../styleConsts"
import back from "../../../assets/icons/back.png"
import spinner from "../../../assets/icons/spinner.gif"
import { MyTextSemiBold } from "../../Components/MyText/SemiBold"
import { MyTextReg } from "../../Components/MyText/Regular"

export const CameraRoll = () => {

    const { camera, date } = useAppSelector(state => state.mars)

    const formatDateForReq = () => {
        const dateObj = new Date(date)
        const day = dateObj.getDate()
        const month = dateObj.getMonth()
        const year = dateObj.getFullYear()

        return `${year}-${month + 1}-${day}`
    }
    const reqObject = {
        date: formatDateForReq(),
        camera: camera.value
    }

    const { data, isLoading } = useGetPhotosQuery(reqObject)
    
    const navigation = useNavigation()
    const onBackPress = () => {
        navigation.navigate('CamNDateSelect' as never)
    }

    return (

        <SafeAreaView style={styles.container}>
            {
                isLoading

                    ? <View style={styles.spinnerContainer}>
                        <Image
                            style={styles.spinner}
                            source={spinner}
                        />
                    </View>

                    : <View style={styles.content}>
                        <MyTextSemiBold style={styles.title}>
                            {camera.title}
                        </MyTextSemiBold>

                        <MyTextReg style={styles.date}>
                            {formatDate(date)}
                        </MyTextReg>

                        <Pressable
                            style={styles.backBtn}
                            onPress={onBackPress}
                        >
                            <Image source={back} />
                        </Pressable>

                        {
                            data?.photos.length !== 0

                                ? <FlatList
                                    data={data?.photos}
                                    renderItem={({ item }) => (
                                        <ImageItem item={item} />
                                    )}
                                    style={styles.imgsList}
                                    numColumns={3}
                                />

                                : <MyTextReg style={styles.noData}>
                                    No data
                                </MyTextReg>
                        }
                    </View>
            }
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        flex: 1,
        paddingHorizontal: 12,
        justifyContent: 'center',
        backgroundColor: bgColor,
    },
    spinnerContainer: {
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    noData: {
        alignSelf: 'center',
        marginTop: '50%',
    },
    content: {
        height: '100%',
    },
    title: {
        alignSelf: 'center',
        textAlign: 'center',
        maxWidth: 300,
        marginTop: 42,
        fontSize: 18
    },
    date: {
        textAlign: 'center',
        marginTop: 5,
        fontSize: 13
    },
    backBtn: {
        height: 30,
        width: 30,
        position: 'absolute',
        left: 12.5,
        top: 60,
    },
    spinner: {
        height: 50,
        width: 50,
    },
    imgsList: {
        paddingTop: 16
    },
})