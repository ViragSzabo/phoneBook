export type Color = keyof ColorScheme

export interface ColorScheme {
	name: string
	primary: string
	primary25: string
	primaryVariant: string
	primaryVariant05: string
	primaryVariant25: string
	background: string
	white: string
	black: string
	black50: string
	black25: string
	black05: string
	red: string
	green: string
}