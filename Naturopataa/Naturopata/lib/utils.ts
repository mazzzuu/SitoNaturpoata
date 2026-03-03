export interface CardType {
    key: string,
    title: string,
    subtitle?: string,
    imageUrl?: string,
    content: string
    detailedContent?: string,
}

export interface IconType {
    iconKey: string;
    svg_path: string;
    className?: string; // Optional if not always required
}

export interface WhatsAppButtonProps {
    phoneNumber: string;
    message: string;
    nameButton: string;
    className?: string; // Optional if not always required
}