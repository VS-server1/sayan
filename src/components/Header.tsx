import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const navigation = [
    { name: 'Главная', href: '/' },
    { name: 'О компании', href: '/about' },
    { name: 'Проекты', href: '/projects' },
    { name: 'Контакты', href: '/contacts' },
  ];

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/98 backdrop-blur-md shadow-lg' : 'bg-white/95 backdrop-blur-sm shadow-md'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="flex items-center space-x-2 group">
            <span className={`text-xl font-bold transition-colors duration-300 ${
              isScrolled ? 'text-blue-900' : 'text-blue-900'
            }`}>
              Кондор
            </span>
          </Link>

          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`relative px-3 py-2 text-sm font-medium transition-colors duration-300 ${
                  location.pathname === item.href
                    ? 'text-blue-600'
                    : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                {item.name}
                {location.pathname === item.href && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-400 to-emerald-400 rounded-full" />
                )}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <a
              href="tel:+79134410936"
              className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors duration-300"
            >
              +7 (913) 441-09-36
            </a>
            <Link
              to="/contacts"
              className="bg-gradient-to-r from-blue-600 to-emerald-500 text-white px-6 py-2 rounded-full text-sm font-medium hover:from-blue-700 hover:to-emerald-600 transition-all duration-300 transform hover:scale-105"
            >
              Связаться
            </Link>
          </div>

          <button
            className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden transition-all duration-300 ${
        isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
      } overflow-hidden bg-white shadow-lg`}>
        <div className="px-4 py-6 space-y-4">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={`block px-3 py-2 text-base font-medium rounded-lg transition-colors duration-300 ${
                location.pathname === item.href
                  ? 'text-blue-600 bg-blue-50'
                  : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
              }`}
            >
              {item.name}
            </Link>
          ))}
          <div className="pt-4 border-t border-gray-200">
            <a
              href="tel:+79134410936"
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600"
            >
              +7 (913) 441-09-36
            </a>
            <Link
              to="/contacts"
              className="mt-2 block bg-gradient-to-r from-blue-600 to-emerald-500 text-white px-6 py-3 rounded-lg text-center font-medium hover:from-blue-700 hover:to-emerald-600 transition-all duration-300"
            >
              Связаться
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};