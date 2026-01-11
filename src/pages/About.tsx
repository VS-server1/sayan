import React from 'react';
import { 
  Shield, 
  Users, 
  Award, 
  TrendingUp, 
  Target, 
  Heart, 
  Zap,
  CheckCircle
} from 'lucide-react';

export const About: React.FC = () => {
  const values = [
    {
      icon: Shield,
      title: 'Надежность',
      description: 'Используем только проверенное оборудование и технологии от ведущих производителей'
    },
    {
      icon: Users,
      title: 'Профессионализм',
      description: 'Команда сертифицированных специалистов с многолетним опытом работы'
    },
    {
      icon: Heart,
      title: 'Клиенто-ориентированность',
      description: 'Индивидуальный подход к каждому клиенту и проекту'
    },
    {
      icon: Zap,
      title: 'Инновации',
      description: 'Внедряем современные технологии и передовые решения'
    }
  ];

  const advantages = [
    'Бесплатное техническое обследование объекта',
    'Проектирование с учетом всех норм и требований',
    'Профессиональный монтаж и настройка',
    'Гарантийное и постгарантийное обслуживание',
    'Круглосуточная техническая поддержка',
    'Конкурентные цены без скрытых платежей'
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-gray-900 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-6">О компании Кондор</h1>
          <p className="text-xl text-gray-200 leading-relaxed">
            Более 15 лет мы обеспечиваем безопасность предприятий и организаций 
            в Республике Хакасия, предлагая комплексные решения в области 
            систем безопасности и связи
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="mb-12">
                <Target className="h-12 w-12 text-blue-600 mb-4" />
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Наша миссия</h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Обеспечить максимальный уровень безопасности и комфорта для наших клиентов 
                  через внедрение инновационных технологических решений и профессиональный сервис.
                </p>
              </div>
            </div>
            
            <div className="flex items-center justify-center">
              <div className="bg-gradient-to-r from-blue-600 to-emerald-500 text-white p-12 rounded-3xl shadow-2xl transform hover:scale-105 transition-all duration-300 text-center group cursor-pointer">
                <div className="text-6xl font-bold mb-4 group-hover:scale-110 transition-transform duration-300">100+</div>
                <div className="text-xl font-semibold">Оказанных услуг</div>
                <div className="mt-4 text-sm opacity-90">Довольных клиентов по всей Хакасии</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Наши ценности</h2>
            <p className="text-xl text-gray-600">Принципы, которыми мы руководствуемся в работе</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-emerald-500 rounded-xl mb-6">
                  <value.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4 leading-tight">{value.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-8">Почему выбирают нас</h2>
              <div className="space-y-4">
                {advantages.map((advantage, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-emerald-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{advantage}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
                <TrendingUp className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <div className="text-3xl font-bold text-gray-900 mb-2">15+</div>
                <div className="text-gray-600">Лет на рынке</div>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
                <Users className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
                <div className="text-3xl font-bold text-gray-900 mb-2">200+</div>
                <div className="text-gray-600">Довольных клиентов</div>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
                <Award className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <div className="text-3xl font-bold text-gray-900 mb-2">100+</div>
                <div className="text-gray-600">Оказанных услуг</div>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
                <Shield className="h-12 w-12 text-red-600 mx-auto mb-4" />
                <div className="text-3xl font-bold text-gray-900 mb-2">24/7</div>
                <div className="text-gray-600">Поддержка</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certificates Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Лицензия</h2>
            <p className="text-xl text-gray-600">Подтверждение нашей квалификации и профессионализма</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="aspect-[3/4] overflow-hidden rounded-xl">
                <img
                  src="https://i.ibb.co/VWDb4vv4/sertificat-open.jpg"
                  alt="Лицензия 1"
                  className="w-full h-full object-contain bg-gray-50 hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="aspect-[3/4] overflow-hidden rounded-xl">
                <img
                  src="https://i.ibb.co/gFHq7R3W/sertificat-open2.jpg"
                  alt="Лицензия 2"
                  className="w-full h-full object-contain bg-gray-50 hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};