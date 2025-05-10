declare interface SupportRequestI{
	customerName: string;
	email: string;
	phone: string;
	subject: string;
	report: string; // Markdown format
	status: 'pending' | 'resolved' | 'rejected'; // default is pending
}

declare interface RequestSupportI<ID = string> extends Omit<SupportRequestI<ID>, 'website' | 'status'> {}
declare interface PublicSupportRequestI<ID = string> extends SupportRequestI, TimeStampI {
	_id: ID;
}
declare type SupportSortableFields =
	| 'createdAt'
	| 'updatedAt'
	| 'customerName'
	| 'email'
	| 'subject'
	| 'status'
	| 'phone';
