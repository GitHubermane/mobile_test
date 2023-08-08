import {
    Image, Pressable, StyleSheet,
    Share
} from "react-native"
import share from "../../../assets/icons/share.png"

type Props = {
    url: string

}
export const ShareBtn = ({url}: Props) => {
    const onShare = async () => {
        try {
            await Share.share({
                message: url
            })
        } catch (error) {
            console.log(error)
        }
    }
    
    return (
        <Pressable
            style={styles.btnBlock}
            onPress={onShare}
        >
            <Image source={share} />
        </Pressable>

    )
}

const styles = StyleSheet.create({
    btnBlock: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 30,
        width: 30,
    }
})