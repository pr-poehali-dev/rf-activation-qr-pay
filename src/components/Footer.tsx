import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <footer className="border-t bg-background">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
                <Icon name="Wifi" className="h-4 w-4 text-primary-foreground" />
              </div>
              <span className="font-bold text-xl">Есимыч</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Современные eSIM для путешествий по всему миру. Быстро, удобно,
              без роуминга.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold">Навигация</h4>
            <nav className="flex flex-col space-y-2">
              <a
                href="#hero"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Главная
              </a>
              <a
                href="#catalog"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Каталог eSIM
              </a>
              <a
                href="#about"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                О нас
              </a>
              <a
                href="#contact"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Контакты
              </a>
            </nav>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold">Поддержка</h4>
            <nav className="flex flex-col space-y-2">
              <a
                href="#"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Помощь
              </a>
              <a
                href="#"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Контакты
              </a>
              <a
                href="#"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Telegram
              </a>
            </nav>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold">Связь</h4>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Icon name="MessageCircle" className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Icon name="Mail" className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Icon name="Phone" className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-muted-foreground">
              © 2024 Есимыч. Все права защищены.
            </p>
            <div className="flex space-x-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-primary transition-colors">
                Политика конфиденциальности
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                Условия использования
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
