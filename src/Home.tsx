import Card from "./Card";
import { cardData } from "../constants/index";
import WhatsAppButton from "./WhatsAppButton";


function Home() {


  return (
    <div id="home" className="bg-white text-gray-900">
      {/* Hero Section */}
      <section
        className="relative h-[500px] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: 'url("/home.jpg")' }}
      >
        <div className="bg-black/50 absolute inset-0"></div>
        <div className="relative text-center text-white px-6">
          <h1 className="text-4xl sm:text-6xl font-bold">
            Benvenuti nel mondo della Naturopatia
          </h1>
          <p className="mt-4 text-lg">Benessere naturale per corpo e mente</p>
        </div>
      </section>

      {/* Chi Siamo */}
      <section className="max-w-6xl mx-auto py-12 px-6 text-center">
        <h2 className="text-3xl font-bold">Chi siamo</h2>
        <p className="mt-4 text-gray-700">
          Siamo un centro specializzato in naturopatia, dedicato al benessere naturale attraverso trattamenti olistici e
          consulenze personalizzate.
        </p>
      </section>



      <section className="max-w-6xl mx-auto py-12 px-6 text-center">
        <h2 className="text-3xl font-bold">Corsi ed Eventi</h2>
        <p className="mt-4 text-gray-700">
          //////
        </p>
      </section>


      {/* Servizi */}
      <section id="servizi" className="max-w-7xl mx-auto py-12 px-6 relative">
        <div className="flex items-center justify-center relative">
          <h2 className="text-3xl font-bold text-center">I nostri servizi</h2>
        </div>
        {/* Grid or List Toggle */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          {cardData.map((item) => (
            <Card title={item.title} content={item.content} key={item.key} imageUrl={item.imageUrl} detailedContent={item.detailedContent} />
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-green-500 text-white py-12 text-center">
        <h2 className="text-3xl font-bold">Prenota una consulenza gratuita</h2>
        <p className="mt-4">Scopri il percorso giusto per il tuo benessere</p>
        <WhatsAppButton />
      </section>
    </div>
  );
}

export default Home;
