type TVariants<T extends Record<string, string>> = {
	[K in keyof T]: { [key in T[K]]: string };
};

type TStyles<T extends Record<string, string>> = {
	variants: TVariants<T>;
};
