import React, { useState } from "react";
import WhatsAppButton from "./WhatsAppButton";

interface Event {
  title: string;
  date: string;
  description: string;
  imageUrl: string;
}

const events: Event[] = [
  {
    title: "Il Perineo",
    date: "Lunedì 6 ottobre - 24 novembre, 18:30-20:00",
    description:
      "Il luogo dove risiede l'energia vitale e creativa della donna.",
    imageUrl: "/11.jpg",
  },
  {
    title: "Yoga Emozionale",
    date: "Martedì 18:30-19:40",
    description:
      "Rilassamento, respirazione e gestione delle emozioni attraverso lo yoga.",
    imageUrl: "/12.jpg",
  },
  {
    title: "Tai Chi e Qi Gong",
    date: "Mercoledì 19:00-20:00",
    description: "Movimento lento, meditazione e armonizzazione dell'energia.",
    imageUrl: "/13.jpeg",
  },
  {
    title: "Io Sono Tiaba",
    date: "Giovedì 20/11 - 11/12, 18:30-20:30",
    description: "Ciclo di 4 incontri con Ada Nicolin, costellatrice familiare.",
    imageUrl: "/14.jpeg",
  },
  {
    title: "Serate Luna Piena",
    date: "7 ottobre, 5 novembre e 5 dicembre, 20:00-21:30",
    description:
      "Suono di campane tribali, diapason, fiori di Bach e tisana.",
    imageUrl: "/15.jpeg",
  },
];

const EventsGallery: React.FC = () => {
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);

  return (
    <div className="bg-white py-8 px-4 sm:py-12 sm:px-8">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
        Eventi e Corsi
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 sm:gap-8">
        {/* Prima riga: grande e piccola */}
        <div
          onClick={() => setSelectedEvent(events[0])}
          className="group relative flex items-end overflow-hidden rounded-lg shadow-lg cursor-pointer hover:shadow-2xl transition-transform hover:scale-105 h-64 sm:h-72 md:col-span-4"
        >
          <img
            src={events[0].imageUrl}
            alt={events[0].title}
            className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-50"></div>
          <span className="relative m-4 text-white font-semibold text-sm sm:text-base">
            {events[0].title}
          </span>
        </div>

        <div
          onClick={() => setSelectedEvent(events[1])}
          className="group relative flex items-end overflow-hidden rounded-lg shadow-lg cursor-pointer hover:shadow-2xl transition-transform hover:scale-105 h-64 sm:h-72 md:col-span-2"
        >
          <img
            src={events[1].imageUrl}
            alt={events[1].title}
            className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-50"></div>
          <span className="relative m-4 text-white font-semibold text-sm sm:text-base">
            {events[1].title}
          </span>
        </div>

        {/* Seconda riga: tre piccole */}
        {events.slice(2).map((event, idx) => (
          <div
            key={idx}
            onClick={() => setSelectedEvent(event)}
            className="group relative flex items-end overflow-hidden rounded-lg shadow-lg cursor-pointer hover:shadow-2xl transition-transform hover:scale-105 h-56 sm:h-64 md:col-span-2"
          >
            <img
              src={event.imageUrl}
              alt={event.title}
              className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-50"></div>
            <span className="relative m-4 text-white font-semibold text-sm sm:text-base">
              {event.title}
            </span>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedEvent && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4">
          <div className="bg-white rounded-lg shadow-lg max-w-md w-full relative overflow-hidden">
            <button
              onClick={() => setSelectedEvent(null)}
              className="absolute top-3 right-3 text-gray-600 hover:text-gray-800 text-2xl cursor-pointer z-10"
            >
              &times;
            </button>

            {/* Immagine sopra */}
            <img
              src={selectedEvent.imageUrl}
              alt={selectedEvent.title}
              className="w-full h-56 sm:h-64 object-cover object-center"
            />

            {/* Contenuto testo */}
            <div className="p-6 text-center">
              <h2 className="text-2xl font-bold mb-2">{selectedEvent.title}</h2>
              <p className="text-gray-500 mb-2">{selectedEvent.date}</p>
              <p className="text-gray-700 mb-4">{selectedEvent.description}</p>
              <WhatsAppButton
                nameButton="Prenota ora con WhatsApp"
                className="!bg-green-500 !text-white"
                message={`Ciao Monica, sono interessato a un appuntamento (${selectedEvent.title})`}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EventsGallery;
