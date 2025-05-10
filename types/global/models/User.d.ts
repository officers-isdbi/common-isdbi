declare interface RegistrationUserI {
	firstName: string;
	lastName: string;
	email: string;
	phone: string;
	password: string;
	confirmPassword: string;
}
declare type RegistrationAdminI = Omit<
	RegistrationUserI,
	'password' | 'confirmPassword'
>;
declare interface UserI<ID = string> extends RegistrationAdminI {
	_id: ID;
	enabled: boolean;
	lastLogin?: Date | string;
	emailValidated: boolean;
	isAdmin: boolean;
}
declare type PublicUserI = UserI;
declare interface UserDocumentI<
	ID = string,
	D extends Date | string = Date | string
> extends UserI<ID> {
	isAdmin: boolean;
	password: string;
	salt: string;
	createdAt: D;
	updatedAt: D;
}

declare type UserSortableFields =
	| 'createdAt'
	| 'enabled'
	| 'firstName'
	| 'lastName'
	| 'lastLogin';
