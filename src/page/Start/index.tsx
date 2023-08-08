import {
    Image, StyleSheet, Pressable
} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { MyTextReg } from '../../Components/MyText/Regular'
import marsImg from '../../../assets/images/mars.png'
import marsText from '../../../assets/images/marsByCuriosity.png'

export const Start = () => {
    const navigation = useNavigation()

    const onNextPagePress = () => {
        navigation.navigate('CamNDateSelect' as never)
    }

    return (
        <Pressable
            style={styles.container}
            onPress={onNextPagePress}
        >
            <Image
                style={styles.image}
                source={marsImg}
            />

            <Image
                style={styles.textImage}
                source={marsText}
            />

            <MyTextReg style={styles.text}>
                Tap to continue...
            </MyTextReg>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    textImage: {
        position: 'absolute',
        top: 42,
        left: 18,
    },
    image: {
        position: 'absolute',
    },
    text: {
        position: "absolute",
        fontSize: 18,
        bottom: 70,
        color: '#fff',
        zIndex: 2,
    }
})