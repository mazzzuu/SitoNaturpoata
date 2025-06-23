interface WhatsAppButtonProps {
  phoneNumber?: string;
  message?: string;
  nameButton?: string;
  className?: string;
}

const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({
  phoneNumber = "3454183737",
  message = "Ciao Monica, sono interessato a un appuntamento",
  nameButton = "Contattaci su WhatsApp",
  className = ""
}) => {
  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    
    <div className={`cursor-pointer ${className} mt-6 inline-block bg-white text-green-500 px-6 py-3 rounded-lg shadow-md hover:bg-gray-100`}>
      <a href={url} target="_blank" rel="noopener noreferrer">
        <button className="cursor-pointer">{nameButton}</button>
      </a>
    </div>
  );
};

export default WhatsAppButton;
