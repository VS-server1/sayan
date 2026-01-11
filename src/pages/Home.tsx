import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Shield, 
  Camera, 
  Flame, 
  Lock, 
  Wifi, 
  Thermometer, 
  ChevronRight,
  Star,
  Users,
  Award,
  TrendingUp,
  Store,
  Utensils,
  Building
} from 'lucide-react';

export const Home: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const services = [
    {
      icon: Flame,
      title: 'Пожарная сигнализация',
      description: 'Защита жизни и имущества от пожаров. Раннее обнаружение возгораний и автоматическое оповещение для быстрой эвакуации людей и минимизации ущерба.',
      color: 'from-red-500 to-orange-500'
    },
    {
      icon: Shield,
      title: 'Охранная сигнализация',
      description: 'Защита от несанкционированного проникновения. Круглосуточный контроль периметра и помещений для обеспечения безопасности вашего бизнеса.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Camera,
      title: 'Видеонаблюдение',
      description: 'Визуальный контроль территории в режиме реального времени. Запись событий для анализа инцидентов и предотвращения правонарушений.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Lock,
      title: 'Контроль доступа',
      description: 'Управление входом в здания и помещения. Ограничение доступа для посторонних лиц и контроль перемещения сотрудников по территории.',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Wifi,
      title: 'Системы связи',
      description: 'Надежные системы связи для бесперебойной коммуникации. Высококачественная передача данных и стабильная связь для вашего бизнеса.',
      color: 'from-indigo-500 to-blue-500'
    },
    {
      icon: Thermometer,
      title: 'Кондиционирование',
      description: 'Комфортный микроклимат в помещениях. Поддержание оптимальной температуры и влажности для продуктивной работы и сохранности оборудования.',
      color: 'from-cyan-500 to-teal-500'
    }
  ];

  const stats = [
    { icon: Users, value: '200+', label: 'Довольных клиентов' },
    { icon: Award, value: '15+', label: 'Лет опыта' },
    { icon: TrendingUp, value: '100+', label: 'Оказанных услуг' },
    { icon: Star, value: '5.0', label: 'Рейтинг качества' }
  ];

  const recentProjects = [
    {
      title: 'Магазин "Саяны"',
      description: 'Довольный клиент, который получил качественные услуги по установке систем безопасности',
      icon: Store,
      type: 'Торговый объект'
    },
    {
      title: 'Ресторан "Меридиан"',
      description: 'Успешная реализация комплексных решений безопасности для ресторанного бизнеса',
      icon: Utensils,
      type: 'Ресторан'
    },
    {
      title: 'Гостиница "Меридиан"',
      description: 'Клиент остался доволен профессиональным подходом и качеством выполненных работ',
      icon: Building,
      type: 'Гостиничный комплекс'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-gradient-to-br from-blue-900 via-gray-900 to-gray-800"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=1200)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-gray-900/80" />
        </div>
        
        <div className={`relative z-10 text-center text-white max-w-4xl mx-auto px-4 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
            Кондор
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Профессиональные системы безопасности и связи в Республике Хакасия
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contacts"
              className="bg-gradient-to-r from-blue-600 to-emerald-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-blue-700 hover:to-emerald-600 transition-all duration-300 transform hover:scale-105 shadow-xl"
            >
              Связаться с нами
            </Link>
            <Link
              to="/projects"
              className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300 transform hover:scale-105"
            >
              Примеры работ
            </Link>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronRight className="h-6 w-6 text-white rotate-90" />
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-emerald-500 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Наши услуги</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Комплексные решения для обеспечения безопасности и автоматизации вашего бизнеса
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group"
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <Link
                  to="/contacts"
                  className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors"
                >
                  Узнать больше
                  <ChevronRight className="h-4 w-4 ml-1" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Projects Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Примеры наших проектов</h2>
            <p className="text-xl text-gray-600">Клиенты, которые обращались и остались довольны нашей компанией</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentProjects.map((project, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="relative h-48 bg-gradient-to-br from-blue-600 to-emerald-500 flex items-center justify-center">
                  <project.icon className="h-20 w-20 text-white hover:scale-110 transition-transform duration-300" />
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium">
                      {project.type}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{project.title}</h3>
                  <p className="text-gray-600">{project.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/projects"
              className="bg-gradient-to-r from-blue-600 to-emerald-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-blue-700 hover:to-emerald-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Все примеры
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-gray-900 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6">Готовы обеспечить безопасность вашего объекта?</h2>
          <p className="text-xl text-gray-200 mb-8">
            Позвоните нам и закажите наши услуги
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+79134410936"
              className="bg-white text-blue-900 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              +7 (913) 441-09-36
            </a>
            <Link
              to="/contacts"
              className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-blue-900 transition-all duration-300 transform hover:scale-105"
            >
              Связаться с нами
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};