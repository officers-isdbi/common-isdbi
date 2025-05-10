export default function getEachBreakPointValue(values: MasonryBreakpointI): BreakpointsValuesT {
	return {
		sm: values.sm ?? values.default,
		md: values.md ?? values.default,
		lg: values.lg ?? values.default,
		xl: values.xl ?? values.default,
	};
}
export function getEachBreakPointPartialValue(values: MasonryBreakpointP): Partial<BreakpointsValuesT> {
	return {
		sm: values.sm ?? values.default,
		md: values.md ?? values.default,
		lg: values.lg ?? values.default,
		xl: values.xl ?? values.default,
	};
}
