export const scrollToElement = (elementId: string) => {
  const element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

export const openWhatsApp = (message: string, phoneNumber: string) => {
  const encodedMessage = encodeURIComponent(message);
  window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
};

export const openEmail = (email: string, subject: string, body: string) => {
  const encodedSubject = encodeURIComponent(subject);
  const encodedBody = encodeURIComponent(body);
  window.location.href = `mailto:${email}?subject=${encodedSubject}&body=${encodedBody}`;
};

export const formatPhoneNumber = (phone: string) => {
  return phone.replace(/^(\d{3})(\d{3})(\d{4})$/, '($1) $2-$3');
};

export const copyToClipboard = (text: string) => {
  navigator.clipboard.writeText(text);
};
