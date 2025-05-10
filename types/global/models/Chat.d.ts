declare interface ChatMessageI {
	id: string;
	conversationId: string;
	content: string;
	sender: 'user' | 'bot';
	timestamp: string;
}
