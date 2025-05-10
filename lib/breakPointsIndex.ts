export const breakPointsIndex: BreakpointsT[] = ['sm', 'md', 'lg', 'xl'];
export const breakPointsIndexWithDefault: BreakpointsWithDefaultT[] = ['default', ...breakPointsIndex];
export const breakPointsWidths: Record<BreakpointsT, string> = {
	sm: '639px',
	md: '767px',
	lg: '1023px',
	xl: '100%',
};
