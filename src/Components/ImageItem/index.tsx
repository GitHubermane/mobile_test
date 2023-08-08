import { Image, Pressable, StyleSheet } from "react-native"
import { Photo } from "../../types/PhotosRes"
import { useAppDispatch } from "../../hooks/hooks"
import { setCurrentPhoto } from "../../store/slice/mars"
import { useNavigation } from "@react-navigation/native"
import { borderRadius } from "../../styleConsts"

type Props = {
    item: Photo
}
export const ImageItem = ({ item }: Props) => {
    const dispatch = useAppDispatch()

    const photo = {
        id: item.id.toString(),
        url: item.img_src
    }

    const navigation = useNavigation()
    const onPhotoPress = () => {
        dispatch(setCurrentPhoto(photo))

        navigation.navigate('Photo' as never)
    }
    
    return (
        <Pressable
            onPress={onPhotoPress}
            style={styles.imgBlock}
        >
            <Image
                style={styles.img}
                source={{ uri: item.img_src }}
            />
        </Pressable>
    )
}

const styles = StyleSheet.create({
    imgBlock: {
        flex: 1,
        flexDirection: 'column',
        margin: 4
    },
    img: {
        height: 109,
        borderRadius
    }
})
