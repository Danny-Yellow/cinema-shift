type TVariants<T extends Record<string, string>> = {
	[K in keyof T]: { [key in T[K]]: string };
};

interface TStyles<T extends Record<string, string>> {
	defaultVariants: object;
	variants: TVariants<T>;
}
