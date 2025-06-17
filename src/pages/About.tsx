import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Icon from "@/components/ui/icon";

const About = () => {
  const steps = [
    {
      icon: "ShoppingCart",
      title: "Выберите план",
      description:
        "Выберите подходящий тариф в каталоге и оплатите российской картой",
    },
    {
      icon: "QrCode",
      title: "Получите QR-код",
      description: "Мгновенно получите QR-код для активации на email",
    },
    {
      icon: "Smartphone",
      title: "Установите eSIM",
      description: "Отсканируйте QR-код в настройках телефона",
    },
    {
      icon: "Wifi",
      title: "Готово!",
      description: "Интернет автоматически подключится по прибытии",
    },
  ];

  const faqItems = [
    {
      question: "Что такое eSIM?",
      answer:
        "eSIM (embedded SIM) — это виртуальная SIM-карта, встроенная в ваш телефон. Она работает как обычная SIM-карта, но не требует физической установки. Вы просто сканируете QR-код, и eSIM активируется автоматически.",
    },
    {
      question: "Какие телефоны поддерживают eSIM?",
      answer:
        "eSIM поддерживается большинством современных смартфонов: iPhone XS и новее, Samsung Galaxy S20 и новее, Google Pixel 3 и новее, а также многие модели Huawei, Xiaomi, OnePlus. Полный список доступен на нашем сайте.",
    },
    {
      question: "Работает ли eSIM в России?",
      answer:
        "Да! Наши eSIM работают в России без необходимости предъявления документов. Это особенно удобно для путешественников и тех, кто часто ездит за границу.",
    },
    {
      question: "Как происходит активация?",
      answer:
        "После покупки вы получаете QR-код на email. Отсканируйте его в настройках телефона (Настройки > Сотовая связь > Добавить тариф), и eSIM установится автоматически. Интернет подключится по прибытии в страну назначения.",
    },
    {
      question: "Можно ли использовать eSIM с российской SIM-картой?",
      answer:
        "Да, eSIM работает параллельно с вашей основной SIM-картой. Вы можете принимать звонки и SMS на российский номер, а интернет использовать через eSIM без роуминга.",
    },
    {
      question: "Какие способы оплаты доступны?",
      answer:
        "Мы принимаем все российские банковские карты (Visa, MasterCard, МИР), а также популярные электронные кошельки. Оплата проходит через защищенный шлюз.",
    },
    {
      question: "Что делать, если eSIM не работает?",
      answer:
        "Проверьте настройки роуминга данных и убедитесь, что eSIM выбран для передачи данных. Если проблема сохраняется, обратитесь в нашу службу поддержки в Telegram — мы поможем в течение 15 минут.",
    },
    {
      question: "Можно ли пополнить eSIM?",
      answer:
        "Да, большинство наших планов поддерживают пополнение. Вы можете добавить дополнительные гигабайты или продлить срок действия прямо через наш сайт.",
    },
    {
      question: "Есть ли ограничения скорости?",
      answer:
        "Мы предоставляем высокоскоростной интернет без ограничений. В некоторых планах после использования включенного трафика скорость может снижаться, но это всегда указано в описании тарифа.",
    },
    {
      question: "Безопасен ли eSIM?",
      answer:
        "eSIM даже безопаснее обычной SIM-карты, так как его нельзя физически извлечь или потерять. Все соединения шифруются по стандартам операторов связи.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="container mx-auto py-8 px-4">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <Badge className="mb-4" variant="secondary">
            <Icon name="Info" className="h-3 w-3 mr-1" />
            Все о технологии eSIM
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Как работает eSIM
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            eSIM — это будущее мобильной связи. Узнайте, как эта технология
            упрощает путешествия и экономит ваши деньги на роуминге.
          </p>
        </section>

        {/* What is eSIM */}
        <section className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Что такое eSIM?</h2>
              <div className="space-y-4 text-lg text-muted-foreground">
                <p>
                  <strong className="text-foreground">
                    eSIM (embedded SIM)
                  </strong>{" "}
                  — это виртуальная SIM-карта, встроенная прямо в ваш смартфон.
                  Никаких физических карточек, никаких походов к оператору.
                </p>
                <p>
                  Просто сканируете QR-код — и у вас есть интернет в любой
                  стране мира. Это особенно удобно для россиян, так как наши
                  eSIM работают в РФ без предъявления документов.
                </p>
                <p>
                  <strong className="text-foreground">
                    Главное преимущество:
                  </strong>{" "}
                  вы можете использовать eSIM параллельно с вашей основной
                  SIM-картой. Звонки и SMS на российский номер, а интернет — без
                  роуминга.
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-primary/10 via-background to-primary/5 p-8 rounded-2xl">
              <div className="text-center">
                <div className="flex justify-center mb-6">
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/20">
                    <Icon
                      name="Smartphone"
                      className="h-10 w-10 text-primary"
                    />
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center justify-center space-x-4">
                    <div className="h-8 w-12 bg-primary/30 rounded-sm flex items-center justify-center">
                      <span className="text-xs font-mono">SIM</span>
                    </div>
                    <span className="text-2xl">+</span>
                    <div className="h-8 w-12 bg-blue-500/30 rounded-sm flex items-center justify-center">
                      <span className="text-xs font-mono">eSIM</span>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Две SIM-карты в одном телефоне
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Как это работает
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Всего 4 простых шага до интернета в любой точке мира
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <Card
                key={index}
                className="relative text-center hover:shadow-lg transition-shadow"
              >
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-bold">
                    {index + 1}
                  </div>
                </div>
                <CardHeader className="pt-8">
                  <div className="flex justify-center mb-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                      <Icon
                        name={step.icon as any}
                        className="h-6 w-6 text-primary"
                      />
                    </div>
                  </div>
                  <CardTitle className="text-lg">{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {step.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Benefits */}
        <section className="mb-16 bg-muted/50 rounded-2xl p-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Преимущества eSIM
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-500/10">
                  <Icon name="DollarSign" className="h-8 w-8 text-green-600" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">Экономия до 90%</h3>
              <p className="text-muted-foreground">
                По сравнению с роумингом российских операторов
              </p>
            </div>

            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-500/10">
                  <Icon name="Zap" className="h-8 w-8 text-blue-600" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Мгновенная активация
              </h3>
              <p className="text-muted-foreground">
                Получите eSIM за 2 минуты после оплаты
              </p>
            </div>

            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-purple-500/10">
                  <Icon name="Shield" className="h-8 w-8 text-purple-600" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">Безопасность</h3>
              <p className="text-muted-foreground">
                Нельзя потерять или украсть, в отличие от обычной SIM
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Часто задаваемые вопросы
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Ответы на самые популярные вопросы о технологии eSIM
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              {faqItems.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left font-semibold">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center bg-primary text-primary-foreground rounded-2xl p-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Готовы попробовать eSIM?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Выберите план для вашего следующего путешествия и забудьте о
            роуминге навсегда
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="secondary"
              className="text-lg px-8 py-6"
              asChild
            >
              <Link to="/catalog">
                <Icon name="Globe" className="mr-2 h-5 w-5" />
                Выбрать eSIM
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-6 border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10"
            >
              <Icon name="MessageCircle" className="mr-2 h-5 w-5" />
              Задать вопрос
            </Button>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default About;
