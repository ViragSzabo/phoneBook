import React, { useContext } from "react"
import {
	StyleProp,
	StyleSheet,
	Pressable,
	PressableProps,
	ViewStyle,
    Text,
} from "react-native"

import { ThemeContext } from "./ThemeContext"

interface ButtonProps extends PressableProps {
	text: string
	alternativeButtonStyling?: StyleProp<ViewStyle>
}

export function Button({
	text,
	disabled,
	alternativeButtonStyling,
	...props
}: ButtonProps) {
	const theme = useContext(ThemeContext)

	const styles = StyleSheet.create({
		base: {
			borderRadius: 10,
			paddingTop: 7,
			paddingBottom: 9,
			backgroundColor: theme.primary,
			alignSelf: "stretch",
		},
		disabled: {
			backgroundColor: theme.primary25,
		},
		label: {
			fontFamily: "Montserrat_700Bold",
			fontSize: 16,
			lineHeight: 24,
			color: theme.white,
			textAlign: "center",
		},
	})

	return (
		<Pressable
			style={[
				styles.base,
				alternativeButtonStyling,
				disabled ? styles.disabled : null,
			]}
			disabled={disabled}
			{...props}
		>
			<Text>{text}</Text>
		</Pressable>
	)
}
