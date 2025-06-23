import Icon from "./Icon"
import { Link } from 'react-router-dom';


function Footer() {
    return (
      <footer id="contatti" className="bg-gray-100 text-gray-900 py-8">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-center sm:text-left">
          
          {/* Dove siamo */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Dove siamo</h3>
            <p>Lonigo (VI) - Via C. Battisti, 168/E</p>
            <p>CREAZZO (VI) - Via Petrarca, 37</p>
          </div>
  
          {/* Contatti */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Telefono/WhatsApp</h3>
            <a href="tel:+393454183737" className="text-blue-600 hover:underline">
              +39 345 418 3737
            </a>
            <h3 className="text-lg font-semibold mt-4">Email</h3>
            <a href="mailto:moval70@gmail.com" className="text-blue-600 hover:underline">
              moval70@gmail.com
            </a>
          </div>

  
          {/* Social & Privacy */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Seguici su</h3>
            <div className="flex justify-center sm:justify-start space-x-4">
            <Link to="https://www.instagram.com/monicavallacqua.naturopata/" target="_blank">
              <Icon svg_path='/instagram.svg' iconKey='instagram' className='w-20 h-20 px-4' />
            </Link>
            <Link to="https://www.facebook.com/profile.php?id=61553647220852" target="_blank">
              <Icon svg_path='/facebook.svg' iconKey='bho' className='w-20 h-20 px-4' />
            </Link>
            <Link to="tel:+393454183737" target="_blank">
              <Icon svg_path='/telefono.svg' iconKey='telefono' className='w-12 h-11 mt-5 ml-3' />
            </Link>

            </div>
            <h3 className="text-lg font-semibold mt-4">Informativa sulla Privacy</h3>
            <a href="/privacy-policy" className="text-blue-500 hover:underline">Leggi qui</a>
          </div>
  
        </div>
      </footer>
    );
  }
  


// other facebook = https://www.facebook.com/share/18ZDkW45LX
  export default Footer;