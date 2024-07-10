// lib/api.ts

export const sendContactForm = async (data: any) => {
    try {
        const response = await fetch('/api/send-email', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        if (!response.ok) {
            throw new Error('Failed to send contact form');
        }
    } catch (error) {
        throw error;
    }
};
