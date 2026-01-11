import React, { useState } from 'react';
import { Filter, Calendar, MapPin, Store, Utensils, Building, Camera, Clapperboard } from 'lucide-react';

export const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { id: 'all', label: 'Все проекты' },
    { id: 'security', label: 'Системы безопасности' },
    { id: 'video', label: 'Видеонаблюдение' },
    { id: 'fire', label: 'Пожарная сигнализация' },
    { id: 'access', label: 'Контроль доступа' },
    { id: 'network', label: 'Системы связи' }
  ];

  const projects = [
    {
      id: 1,
      title: 'Магазин "Саяны"',
      description: 'Довольный клиент, который получил качественные услуги по установке комплексной системы безопасности.',
      icon: Store,
      category: 'security',
      location: 'г. Саяногорск',
      type: 'Торговый объект'
    },
    {
      id: 2,
      title: 'Ресторан "Меридиан"',
      description: 'Успешная реализация комплексных решений безопасности для ресторанного бизнеса.',
      icon: Utensils,
      category: 'video',
      location: 'г. Саяногорск',
      type: 'Ресторан'
    },
    {
      id: 3,
      title: 'Гостиница "Меридиан"',
      description: 'Клиент остался доволен профессиональным подходом и качеством выполненных работ.',
      icon: Building,
      category: 'access',
      location: 'г. Саяногорск',
      type: 'Гостиничный комплекс'
    },
    {
      id: 4,
      title: 'Кинотеатр "Альянс"',
      description: 'Комплексное решение по обеспечению безопасности развлекательного комплекса.',
      icon: Clapperboard,
      category: 'fire',
      location: 'г. Саяногорск',
      type: 'Развлекательный комплекс'
    },
    {
      id: 5,
      title: 'Отель "Саяногорск"',
      description: 'Довольный клиент, получивший полный спектр услуг по обеспечению безопасности.',
      icon: Building,
      category: 'network',
      location: 'г. Саяногорск',
      type: 'Гостиничный комплекс'
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-gray-900 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-6">Примеры наших проектов</h1>
          <p className="text-xl text-gray-200">
            Клиенты, которые обращались к нам и остались довольны качеством наших услуг
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-4 mb-4">
            <Filter className="h-5 w-5 text-gray-500" />
            <span className="text-gray-700 font-medium">Фильтр по категориям:</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeFilter === filter.id
                    ? 'bg-gradient-to-r from-blue-600 to-emerald-500 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group"
              >
                <div className="relative h-64 bg-gradient-to-br from-blue-600 to-emerald-500 flex items-center justify-center">
                  <project.icon className="h-24 w-24 text-white group-hover:scale-110 transition-transform duration-300" />
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium">
                      {project.type}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>

                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <div className="flex items-center space-x-1">
                      <MapPin className="h-4 w-4" />
                      <span>{project.location}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-16">
              <div className="text-gray-400 mb-4">
                <Filter className="h-16 w-16 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold text-gray-600 mb-2">Проекты не найдены</h3>
              <p className="text-gray-500">Попробуйте изменить фильтр для поиска проектов</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-gray-900 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6">Хотите стать нашим довольным клиентом?</h2>
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
            <a
              href="/contacts"
              className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-blue-900 transition-all duration-300 transform hover:scale-105"
            >
              Связаться с нами
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};