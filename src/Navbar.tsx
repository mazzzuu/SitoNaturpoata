
export default function Navbar() {
  return (
    <nav className="bg-white border-b-4 border-green-500 w-full fixed top-0 left-0 shadow-md p-4 z-50">
      <div className="w-full flex items-center justify-between px-4">
        
        {/* Logo allineato a sinistra e più grande */}
        <div className="flex items-center">
        <img className="h-20 w-auto" src="/logo.png" alt="Logo" />

        </div>

        {/* Link di navigazione */}
        <div className="flex space-x-8">
          <a href="/home#home" className="text-gray-900 text-lg font-medium hover:text-green-500">
            Home
          </a>
          <a href="/home#servizi" className="text-gray-900 text-lg font-medium hover:text-green-500">
            Servizi
          </a>
          <a href="/home#contatti" className="text-gray-900 text-lg font-medium hover:text-green-500">
            Contatti
          </a>
          <a href="/login" className="text-gray-900 text-lg font-medium hover:text-green-500">Login</a>
        </div>
      </div>
    </nav>
  );
}
