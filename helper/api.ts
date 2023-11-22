export const sendContactForm = async (data: {
    name: string
    email: string
    subject: string
    message: string
}) => fetch('/api', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
    }
})