declare interface ConsultantResponse {
	title: string;
	response: string;
	summary: string;
	source: string;
	report: ContractReport;
}
declare interface ContractReport {
	contract_type: string;
	contract_purpose: string;
	parties: Array<{
		name: string;
		role: string;
		contact_info: {
			email: string;
			phone: string;
		};
	}>;
	contract_details: {
		asset_description: string;
		purchase_price: number;
	};
	financial_structure: {
		markup_rate: string;
		payment_terms: string;
	};
	timeline: {
		start_date: string;
		end_date: string;
	};
	sharia_compliance_notes: string[];
	applicable_standards: {
		FAS: string[];
		Sharia: string[];
	};
	executive_summary: string;
}
