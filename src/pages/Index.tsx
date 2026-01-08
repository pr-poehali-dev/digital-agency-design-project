import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const categories = ['Все', 'Концептуальный дизайн', 'Полиграфия', 'Брендинг', '3D визуализация'];

const portfolioItems = [
  {
    id: 1,
    title: 'Премиальный брендинг',
    category: 'Брендинг',
    image: 'https://cdn.poehali.dev/projects/6dde7b8f-4543-45e7-810a-01f52ac3eb12/files/73776d37-5c85-4a85-abef-fc8386890f43.jpg',
  },
  {
    id: 2,
    title: 'Архитектурная визуализация',
    category: '3D визуализация',
    image: 'https://cdn.poehali.dev/projects/6dde7b8f-4543-45e7-810a-01f52ac3eb12/files/819ae42f-e8f8-4728-b23f-1ab281474fcb.jpg',
  },
  {
    id: 3,
    title: 'Концептуальное решение',
    category: 'Концептуальный дизайн',
    image: 'https://cdn.poehali.dev/projects/6dde7b8f-4543-45e7-810a-01f52ac3eb12/files/b613081e-9579-4fef-b34b-b3f2970cebab.jpg',
  },
];

const services = [
  {
    icon: 'Lightbulb',
    title: 'Концептуальный дизайн',
    description: 'Создаём уникальные концепции, отражающие суть вашего бренда',
  },
  {
    icon: 'FileText',
    title: 'Полиграфия',
    description: 'Разработка печатной продукции высочайшего качества',
  },
  {
    icon: 'Sparkles',
    title: 'Брендинг',
    description: 'Формирование целостного визуального стиля компании',
  },
  {
    icon: 'Box',
    title: '3D визуализация',
    description: 'Фотореалистичная визуализация пространств и продуктов',
  },
];

const team = [
  { name: 'Анна Соколова', role: 'Арт-директор', image: '👩‍🎨' },
  { name: 'Дмитрий Волков', role: '3D художник', image: '👨‍💻' },
  { name: 'Елена Петрова', role: 'Графический дизайнер', image: '👩‍🎨' },
  { name: 'Михаил Иванов', role: 'Бренд-стратег', image: '👨‍💼' },
];

function Index() {
  const [activeCategory, setActiveCategory] = useState('Все');
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const filteredPortfolio =
    activeCategory === 'Все'
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeCategory);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-gold">LUXE DESIGN</h1>
          <div className="hidden md:flex gap-8">
            {['Главная', 'О студии', 'Услуги', 'Портфолио', 'Команда', 'Контакты'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </nav>

      <section id="главная" className="pt-32 pb-20 px-6">
        <div className="container mx-auto text-center animate-fade-in">
          <h2 className="text-7xl md:text-8xl font-bold mb-6 text-gold">
            Создаём искусство
            <br />
            <span className="text-foreground">которое продаёт</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-12">
            Дизайн-агентство премиум-класса, специализирующееся на концептуальном дизайне, полиграфии, брендинге и 3D
            визуализации
          </p>
          <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-6">
            Начать проект
          </Button>
        </div>
      </section>

      <section id="о студии" className="py-20 px-6 bg-card">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="animate-slide-up">
              <h3 className="text-5xl font-bold mb-6 text-gold">О студии</h3>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Мы создаём визуальные решения, которые выделяют бренды на рынке и запоминаются на годы. Наша команда
                объединяет креативное мышление с глубоким пониманием бизнес-задач.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Более 10 лет опыта в работе с премиальными брендами. Каждый проект — это уникальная история, рассказанная
                через дизайн.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <Card className="p-8 text-center bg-background border-border hover:border-primary transition-colors">
                <div className="text-4xl font-bold text-gold mb-2">150+</div>
                <div className="text-muted-foreground">Проектов</div>
              </Card>
              <Card className="p-8 text-center bg-background border-border hover:border-primary transition-colors">
                <div className="text-4xl font-bold text-gold mb-2">50+</div>
                <div className="text-muted-foreground">Клиентов</div>
              </Card>
              <Card className="p-8 text-center bg-background border-border hover:border-primary transition-colors">
                <div className="text-4xl font-bold text-gold mb-2">10+</div>
                <div className="text-muted-foreground">Лет опыта</div>
              </Card>
              <Card className="p-8 text-center bg-background border-border hover:border-primary transition-colors">
                <div className="text-4xl font-bold text-gold mb-2">25</div>
                <div className="text-muted-foreground">Наград</div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="услуги" className="py-20 px-6">
        <div className="container mx-auto">
          <h3 className="text-5xl font-bold text-center mb-16 text-gold">Наши услуги</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="p-8 bg-card border-border hover:border-primary transition-all hover:transform hover:scale-105 group"
              >
                <div className="mb-6 text-primary">
                  <Icon name={service.icon} size={48} className="group-hover:scale-110 transition-transform" />
                </div>
                <h4 className="text-2xl font-bold mb-4 text-foreground">{service.title}</h4>
                <p className="text-muted-foreground">{service.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="портфолио" className="py-20 px-6 bg-card">
        <div className="container mx-auto">
          <h3 className="text-5xl font-bold text-center mb-12 text-gold">Портфолио</h3>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? 'default' : 'outline'}
                onClick={() => setActiveCategory(category)}
                className={
                  activeCategory === category
                    ? 'bg-primary text-primary-foreground'
                    : 'border-border hover:border-primary'
                }
              >
                {category}
              </Button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPortfolio.map((item) => (
              <Card key={item.id} className="overflow-hidden bg-background border-border group cursor-pointer">
                <div className="relative overflow-hidden aspect-[4/3]">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-0 group-hover:opacity-90 transition-opacity flex items-end p-6">
                    <div>
                      <h4 className="text-2xl font-bold text-gold mb-2">{item.title}</h4>
                      <p className="text-muted-foreground">{item.category}</p>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="команда" className="py-20 px-6">
        <div className="container mx-auto">
          <h3 className="text-5xl font-bold text-center mb-16 text-gold">Наша команда</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card
                key={index}
                className="p-8 text-center bg-card border-border hover:border-primary transition-colors group"
              >
                <div className="text-6xl mb-4 group-hover:scale-110 transition-transform">{member.image}</div>
                <h4 className="text-xl font-bold mb-2 text-foreground">{member.name}</h4>
                <p className="text-muted-foreground">{member.role}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="контакты" className="py-20 px-6 bg-card">
        <div className="container mx-auto max-w-4xl">
          <h3 className="text-5xl font-bold text-center mb-12 text-gold">Свяжитесь с нами</h3>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h4 className="text-2xl font-bold mb-6 text-foreground">Контактная информация</h4>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <Icon name="Mail" className="text-primary" size={24} />
                  <span className="text-muted-foreground">info@luxedesign.ru</span>
                </div>
                <div className="flex items-center gap-4">
                  <Icon name="Phone" className="text-primary" size={24} />
                  <span className="text-muted-foreground">+7 (495) 123-45-67</span>
                </div>
                <div className="flex items-center gap-4">
                  <Icon name="MapPin" className="text-primary" size={24} />
                  <span className="text-muted-foreground">Москва, ул. Тверская, 1</span>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                placeholder="Ваше имя"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="bg-background border-border"
              />
              <Input
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="bg-background border-border"
              />
              <Textarea
                placeholder="Ваше сообщение"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="bg-background border-border min-h-32"
              />
              <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                Отправить
              </Button>
            </form>
          </div>
        </div>
      </section>

      <footer className="py-8 px-6 border-t border-border">
        <div className="container mx-auto text-center text-muted-foreground">
          <p>&copy; 2024 LUXE DESIGN. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
}

export default Index;
