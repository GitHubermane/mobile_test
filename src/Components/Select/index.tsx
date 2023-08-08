import {
    StyleSheet,
    View,
    Text,
    Image,
    Pressable,
    ScrollView
} from "react-native"
import { Dispatch, SetStateAction, useState } from "react"
import dropdown from "../../../assets/icons/dropdown.png"
import close from "../../../assets/icons/close.png"
import check from "../../../assets/icons/check.png"
import { MyTextReg } from "../MyText/Regular"

type Item = {
    id: number
    value: string
    title: string
}

type Props = {
    value: string
    items: Item[]
    onItemPress: Dispatch<SetStateAction<Item>>
}

export const Select = (props: Props) => {
    const {
        value,
        items,
    } = props

    const [isActive, setIsActive] = useState(false)


    const onTogglePress = () => {
        setIsActive(!isActive)
    }

    const onItemPress = (item: Item) => () => {
        props.onItemPress(item)
        setIsActive(false)
    }

    const isChecked = (val: string) => val === value

    return (
        <View>
            <Pressable
                onPress={onTogglePress}
                style={styles.selectContainer}
            >
                <MyTextReg>
                    {value}
                </MyTextReg>

                <Image
                    style={styles.image}
                    source={isActive ? close : dropdown}
                />
            </Pressable>

            {
                isActive &&
                <ScrollView style={styles.itemsContainer}>
                    {
                        items?.map(item => (
                            <Pressable
                                onPress={onItemPress(item)}
                                style={styles.item}
                                key={item.id}
                            >
                                <MyTextReg style={styles.itemText}>
                                    {item.title}
                                </MyTextReg>
                                {
                                    isChecked(item.title) &&
                                    <Image
                                        style={styles.checkImage}
                                        source={check}
                                    />

                                }
                            </Pressable>
                        ))
                    }
                </ScrollView>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    selectContainer: {
        justifyContent: "center",
        height: 60,
        paddingHorizontal: 16,
        backgroundColor: "#EEE7DF",
        borderRadius: 10,
    },
    image: {
        position: "absolute",
        right: 16,
    },
    itemsContainer: {
        position: "absolute",
        zIndex: 2,
        top: 65,
        left: 0,
        height: 240,
        width: "100%",
        borderRadius: 10,
        backgroundColor: "#fff"
    },
    item: {
        height: 55,
        alignItems: "center",
        justifyContent: "center",
        borderBottomColor: "#ccc",
        borderBottomWidth: 1,
    },
    itemText: {
        textAlign: "center",
        fontSize: 15,
        maxWidth: 240
    },
    checkImage: {
        position: "absolute",
        right: 20,
        height: 15,
        width: 15,
    }
})