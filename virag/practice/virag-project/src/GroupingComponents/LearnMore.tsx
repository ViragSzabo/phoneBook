import { ParamListBase } from "@react-navigation/native"
import { StackScreenProps } from "@react-navigation/stack"
import { Pressable, Text } from "react-native"
export default function LearnMore({navigation}: StackScreenProps<ParamListBase>) {
    return (
        <>
            <Text>Learning</Text>
            <Pressable onPress={() => navigation.goBack}>Go back</Pressable>
        </>
    )
}