import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

export default function Index() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-wine-dark text-white px-6 py-4">
        <nav className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold font-heading">WineOutsourcing</div>
          <div className="hidden md:flex space-x-8">
            <a href="#home" className="hover:text-wine-light transition-colors">Главная</a>
            <a href="#cases" className="hover:text-wine-light transition-colors">Кейсы</a>
            <a href="#services" className="hover:text-wine-light transition-colors">Услуги</a>
            <a href="#contact" className="hover:text-wine-light transition-colors">Обратная связь</a>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="home" className="bg-gradient-to-br from-wine-dark to-wine-medium text-white py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-6 font-heading">Профессиональный аутсорсинг винодельческих процессов</h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Комплексные решения для винодельческой индустрии: от виноградников до готовой продукции на складе
          </p>
          <Button size="lg" className="bg-white text-wine-dark hover:bg-wine-light hover:text-white">
            Начать сотрудничество
          </Button>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-wine-dark font-heading">Наши услуги</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-wine-medium rounded-full flex items-center justify-center mb-4">
                  <Icon name="Grape" size={32} className="text-white" />
                </div>
                <CardTitle className="text-wine-dark">Работа с виноградниками</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-lg">
                  Полный цикл работ: от посадки до сбора урожая. Контроль качества винограда и соблюдение технологий выращивания.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-wine-medium rounded-full flex items-center justify-center mb-4">
                  <Icon name="Factory" size={32} className="text-white" />
                </div>
                <CardTitle className="text-wine-dark">Производство</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-lg">
                  Переработка винограда, контроль процессов брожения, купажирование и розлив готовой продукции.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-wine-medium rounded-full flex items-center justify-center mb-4">
                  <Icon name="Package" size={32} className="text-white" />
                </div>
                <CardTitle className="text-wine-dark">Складские операции</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-lg">
                  Хранение готовой продукции, контроль температурного режима, упаковка и логистика отгрузок.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Cases Section */}
      <section id="cases" className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-wine-dark font-heading">Успешные кейсы</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-full h-48 rounded-lg mb-4 overflow-hidden">
                  <img 
                    src="/img/52e67164-3e6c-4272-8095-33123ce900a6.jpg" 
                    alt="Виноградники"
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardTitle className="text-wine-dark">Увеличение урожайности на 35%</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Оптимизация процессов выращивания винограда для крупного производителя в Краснодарском крае.
                </CardDescription>
                <div className="mt-4 text-sm text-wine-medium font-semibold">
                  РЕЗУЛЬТАТ: +35% урожайность
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-full h-48 rounded-lg mb-4 overflow-hidden">
                  <img 
                    src="/img/c38ffe1f-8f3d-48ed-9ce2-afb8971f67b7.jpg" 
                    alt="Производство вина"
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardTitle className="text-wine-dark">Сертификация ISO 22000</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Внедрение системы качества на производстве премиальных вин с получением международной сертификации.
                </CardDescription>
                <div className="mt-4 text-sm text-wine-medium font-semibold">
                  РЕЗУЛЬТАТ: ISO 22000 сертификат
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-full h-48 rounded-lg mb-4 overflow-hidden">
                  <img 
                    src="/img/128b2614-43c4-49e6-847c-d882bdaf0ee0.jpg" 
                    alt="Склад вина"
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardTitle className="text-wine-dark">Сокращение времени производства</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Автоматизация складских процессов и оптимизация логистики для ускорения цикла производства.
                </CardDescription>
                <div className="mt-4 text-sm text-wine-medium font-semibold">
                  РЕЗУЛЬТАТ: -40% время цикла
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-wine-dark text-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">15+</div>
              <div className="text-wine-light">Лет опыта</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">200+</div>
              <div className="text-wine-light">Реализованных проектов</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-wine-light">Постоянных клиентов</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">99%</div>
              <div className="text-wine-light">Удовлетворенность клиентов</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-wine-dark font-heading">Обратная связь</h2>
          <Card>
            <CardHeader>
              <CardTitle className="text-center text-wine-dark">Свяжитесь с нами</CardTitle>
              <CardDescription className="text-center">
                Расскажите о вашем проекте, и мы предложим оптимальное решение
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Имя</label>
                  <Input placeholder="Ваше имя" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Компания</label>
                  <Input placeholder="Название компании" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <Input type="email" placeholder="email@example.com" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Сообщение</label>
                <Textarea placeholder="Опишите ваш проект или задачу" rows={4} />
              </div>
              <Button className="w-full bg-wine-dark hover:bg-wine-medium">
                Отправить заявку
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-wine-dark text-white py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">WineOutsourcing</h3>
              <p className="text-wine-light">
                Профессиональные решения для винодельческой индустрии с 2009 года
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <div className="space-y-2 text-wine-light">
                <div className="flex items-center space-x-2">
                  <Icon name="Phone" size={16} />
                  <span>+7 (800) 123-45-67</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Mail" size={16} />
                  <span>info@wineoutsourcing.ru</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="MapPin" size={16} />
                  <span>Краснодар, ул. Винная, 1</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-wine-light">
                <li>Работа с виноградниками</li>
                <li>Производство вина</li>
                <li>Складские услуги</li>
                <li>Консалтинг</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-wine-medium mt-8 pt-8 text-center text-wine-light">
            <p>&copy; 2024 WineOutsourcing. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}