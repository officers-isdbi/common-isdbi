declare interface UserLogInI {
	email: string;
	password: string;
	stay?: boolean;
}
declare interface UserLogInWithCaptchaI extends UserLogInI {
	captcha: string;
}
declare interface UserAuthI {
	user: PublicUserI;
	new?: boolean;
}
declare type UserTokenI = string;

declare type UserUpdateI = RegistrationUserI;

declare type UserGoogleRegistrationI = AppDetailsI;
declare type ValidationKeysI = 'email' | 'phone';
declare type ValidatedElementsI<
	T extends Omit<ValidationI, 'updatedAt'> = Omit<ValidationI, 'updatedAt'>
> = Record<ValidationKeysI, T>;

/* ----------------------- Google auth -----------------------*/
declare type GoogleAuthorizationUrlRequestI = object;
declare interface GoogleLogOnI {
	code: string;
}
declare interface ChangePasswordI {
	oldPassword: string;
	newPassword: string;
	confirmPassword: string;
}
