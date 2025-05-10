declare type IntegrationFlagsT = 'order' | 'add-product' | 'remove-product' | 'increment-product' | 'decrement-product';
declare interface IntegrationI {
	id: string;
	flags: Record<IntegrationFlagsT, boolean>;
}
declare interface AnalyticsIntegrationI {
	meta?: IntegrationI;
	google_analytics?: IntegrationI;
}
