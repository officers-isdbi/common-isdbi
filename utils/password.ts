import crypto from 'node:crypto';
export async function hashPassword(password: string): Promise<{ password: string; salt: string }> {
	const salt = crypto.randomBytes(16).toString('hex');
	return new Promise((resolve, reject) => {
		crypto.pbkdf2(password, salt, 1000, 64, 'sha512', (err, derivedKey) => {
			if (err) return reject(err);
			resolve({ password: derivedKey.toString('hex'), salt });
		});
	});
}
export async function compareHashes(hashedPassword: string, password: string, salt: string): Promise<boolean> {
	return new Promise((resolve, reject) => {
		crypto.pbkdf2(password, salt, 1000, 64, 'sha512', (err, derivedKey) => {
			if (err) return reject(err);
			resolve(hashedPassword === derivedKey.toString('hex'));
		});
	});
}
