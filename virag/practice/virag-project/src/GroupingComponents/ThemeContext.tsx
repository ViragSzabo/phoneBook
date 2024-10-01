import React, { createContext, ReactNode } from "react"

import { ColorScheme } from "./ColorScheme"

type ThemeWrapperProps = {
	children: ReactNode
	theme: ColorScheme
}

export const ThemeContext = createContext({
	name: "",
	primary: "rgb(0, 70, 255)",
	primary25: "rgba(0, 70, 255, .25)",
	primaryVariant: "rgb(0, 0, 200)",
	primaryVariant05: "rgba(0, 0, 200, .05)",
	primaryVariant25: "rgba(0, 0, 200, .25)",
	background: "rgba(244,246,255,1)",
	white: "rgb(255,255,255)",
	black: "rgb(0,0,13)",
	black50: "rgba(0, 0, 13, .50)",
	black25: "rgba(0, 0, 13, .25)",
	black05: "rgba(0, 0, 0, .05)",
	red: "rgb(255, 0, 0)",
	green: "rgba(0, 213, 146, 1)",
})

export const ThemeProvider = ({ children, theme }: ThemeWrapperProps) => {
	return (
		<ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
	)
}