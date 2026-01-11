import React from 'react';
import { 
  MapPin, 
  Phone, 
  Clock, 
  Mail, 
  CheckCircle
} from 'lucide-react';

export const Contacts: React.FC = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-gray-900 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-6">Контакты</h1>
          <p className="text-xl text-gray-200">
            Свяжитесь с нами для получения информации о наших услугах
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-1 gap-16">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Как с нами связаться</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start space-x-4 p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                  <div className="bg-gradient-to-r from-blue-600 to-emerald-500 p-3 rounded-xl">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Наш офис</h3>
                    <p className="text-gray-600">
                      655603, Республика Хакасия,<br />
                      г. Саяногорск, Южный микрорайон,<br />
                      д. 5, офис 8
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                  <div className="bg-gradient-to-r from-green-600 to-blue-500 p-3 rounded-xl">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Телефон</h3>
                    <a 
                      href="tel:+79134410936" 
                      className="text-blue-600 hover:text-blue-700 font-medium text-lg"
                    >
                      +7 (913) 441-09-36
                    </a>
                    <p className="text-gray-500 text-sm mt-1">Звонки принимаем круглосуточно</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                  <div className="bg-gradient-to-r from-purple-600 to-pink-500 p-3 rounded-xl">
                    <Clock className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Режим работы</h3>
                    <div className="text-gray-600">
                      <p>Понедельник - Пятница: 9:00 - 18:00</p>
                      <p>Суббота: 10:00 - 16:00</p>
                      <p>Воскресенье: выходной</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                  <div className="bg-gradient-to-r from-orange-600 to-red-500 p-3 rounded-xl">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Email</h3>
                    <a 
                      href="mailto:Sayan-kondor@mail.ru" 
                      className="text-blue-600 hover:text-blue-700 font-medium"
                    >
                      Sayan-kondor@mail.ru
                    </a>
                    <p className="text-gray-500 text-sm mt-1">Ответим в течение дня</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Info */}
            <div className="bg-gradient-to-r from-blue-50 to-emerald-50 rounded-2xl p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Быстрая помощь</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-emerald-500" />
                  <span className="text-gray-700">Бесплатная консультация по телефону</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-emerald-500" />
                  <span className="text-gray-700">Выезд специалиста на объект</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-emerald-500" />
                  <span className="text-gray-700">Составление коммерческого предложения</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-emerald-500" />
                  <span className="text-gray-700">Гарантия на все виды работ</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};