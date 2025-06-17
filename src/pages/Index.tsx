import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import eSIMCard from "@/components/eSIMCard";
import Icon from "@/components/ui/icon";

const Index = () => {
  const popularPlans = [
    {
      id: "1",
      title: "Европа",
      description: "Покрытие 30+ стран",
      dataAmount: "5 ГБ",
      price: 1200,
      currency: "₽",
      coverage: ["Германия", "Франция", "Италия", "Испания"],
      validityDays: 30,
      popular: true,
    },
    {
      id: "2",
      title: "Азия",
      description: "Япония, Корея, Сингапур",
      dataAmount: "3 ГБ",
      price: 890,
      currency: "₽",
      coverage: ["Япония", "Корея", "Сингапур", "Таиланд"],
      validityDays: 15,
    },
    {
      id: "3",
      title: "США",
      description: "Полное покрытие США",
      dataAmount: "10 ГБ",
      price: 1500,
      currency: "₽",
      coverage: ["США"],
      validityDays: 30,
    },
  ];

  const benefits = [
    {
      icon: "Passport",
      title: "Без паспорта",
      description: "Работает в РФ без предъявления документов",
    },
    {
      icon: "Zap",
      title: "Мгновенная активация",
      description: "Активируется автоматически по прибытии",
    },
    {
      icon: "QrCode",
      title: "QR-код",
      description: "Простая установка через сканирование",
    },
    {
      icon: "CreditCard",
      title: "Оплата картой РФ",
      description: "Принимаем все российские карты",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section
        id="hero"
        className="relative py-20 px-4 bg-gradient-to-br from-primary/5 via-background to-primary/10"
      >
        <div className="container mx-auto text-center">
          <Badge className="mb-4" variant="secondary">
            🚀 Новинка для путешественников
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-slate-800 via-slate-700 to-slate-600 bg-clip-text text-transparent">
            eSIM от Есимыч
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Интернет в любой стране мира. Без роуминга, без привязки к
            оператору. Работает в РФ без паспорта.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="text-lg px-8 py-6" asChild>
              <a href="#catalog">
                <Icon name="Globe" className="mr-2 h-5 w-5" />
                Выбрать eSIM
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-6"
              asChild
            >
              <a href="#about">Как это работает</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Catalog Section */}
      <section
        id="catalog"
        className="py-20 px-4 bg-slate-50 dark:bg-slate-900"
      >
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-800 dark:text-slate-100">
              Популярные eSIM
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Выберите подходящий тариф для ваших путешествий
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {popularPlans.map((plan) => (
              <eSIMCard
                key={`catalog-${plan.id}`}
                id={plan.id}
                country={plan.title}
                flag="🌍"
                data={plan.dataAmount}
                duration={`${plan.validityDays} дней`}
                price={plan.price}
                popular={plan.popular}
                features={plan.coverage}
              />
            ))}
          </div>
        </div>
      </section>

      {/* About/FAQ Section */}
      <section id="about" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Почему выбирают Есимыч
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Современная технология для комфортных путешествий
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-lg transition-shadow"
              >
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                      <Icon
                        name={benefit.icon as any}
                        className="h-8 w-8 text-primary"
                      />
                    </div>
                  </div>
                  <CardTitle className="text-lg">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {benefit.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Catalog Section */}
      <section id="catalog" className="py-20 px-4 bg-muted/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Каталог eSIM
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Выберите подходящий тариф для ваших путешествий
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {popularPlans.map((plan) => (
              <eSIMCard
                key={`catalog-${plan.id}`}
                id={plan.id}
                country={plan.title}
                flag="🌍"
                data={plan.dataAmount}
                duration={`${plan.validityDays} дней`}
                price={plan.price}
                popular={plan.popular}
                features={plan.coverage}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Contact/CTA Section */}
      <section
        id="contact"
        className="py-20 px-4 bg-primary text-primary-foreground"
      >
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Готовы к путешествию?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Получите eSIM от Есимыч за 2 минуты и путешествуйте с интернетом в
            любой точке мира
          </p>
          <Button
            size="lg"
            variant="secondary"
            className="text-lg px-8 py-6"
            asChild
          >
            <a href="#catalog">
              <Icon name="Rocket" className="mr-2 h-5 w-5" />
              Купить eSIM сейчас
            </a>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
