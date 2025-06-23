import React, { useState, useEffect } from "react";
import WhatsAppButton from "./WhatsAppButton";

interface CardProps {
    title: string;
    subtitle?: string;
    content: string;
    imageUrl?: string;
    detailedContent?: string;
}

const Card: React.FC<CardProps> = ({ title, subtitle, content, imageUrl, detailedContent }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        if (isModalOpen) {
            setScrollY(window.scrollY); // Salva la posizione attuale dello scroll
            document.documentElement.style.overflow = "hidden"; // Blocca lo scroll su tutto il documento
            document.body.style.overflow = "hidden";
        } else {
            document.documentElement.style.overflow = "";
            document.body.style.overflow = "";
            window.scrollTo(0, scrollY); // Ripristina esattamente la posizione dello scroll
        }

        return () => {
            document.documentElement.style.overflow = "";
            document.body.style.overflow = "";
        };
    }, [isModalOpen]);

    return (
        <>
            <div onClick={() => setIsModalOpen(true)} className="border border-gray-300 rounded-lg p-4 w-full max-w-xs sm:max-w-sm shadow-md flex flex-col 
            items-center justify-center text-center m-4 gap-2 transform transition hover:scale-105 cursor-pointer">
                <h2 className="text-lg font-semibold mb-2 text-gray-800">{title}</h2>
                {subtitle && <h3 className="text-base text-gray-600 mb-2">{subtitle}</h3>}
                {imageUrl && <img src={imageUrl} alt="Card Image" className="mb-4 rounded-md w-full h-40 object-cover" />}
                <p className="text-sm text-gray-700" dangerouslySetInnerHTML={{ __html: content }} />
            </div>

            {isModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black/70 bg-opacity-70 p-4 z-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full text-center relative">
                        <button onClick={() => setIsModalOpen(false)} className="cursor-pointer absolute top-3 right-3 text-gray-600 hover:text-gray-800 text-xl">&times;</button>
                        <h2 className="text-2xl font-bold mb-4">{title}</h2>
                        {imageUrl && <img src={imageUrl} alt="Card Image" className="mb-4 rounded-md w-full max-h-60 object-cover" />}
                        <p className="text-gray-700 mb-4" dangerouslySetInnerHTML={{ __html: detailedContent ? detailedContent : content }} />
                        <WhatsAppButton nameButton="Prenota ora con WhatsApp" className="!bg-green-500 !text-white" 
                        message={`Ciao Monica, sono interessato a un appuntamento (${title})`}/>
                    </div>
                </div>
            )}
        </>
    );
};

export default Card;
