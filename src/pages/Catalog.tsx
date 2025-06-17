import { useState } from "react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import eSIMCard from "@/components/eSIMCard";
import Icon from "@/components/ui/icon";

const Catalog = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("all");
  const [selectedDataRange, setSelectedDataRange] = useState("all");

  const allPlans = [
    {
      id: "1",
      title: "Европа",
      description: "Покрытие 30+ стран Европы",
      dataAmount: "5 ГБ",
      price: 1200,
      currency: "₽",
      coverage: ["Германия", "Франция", "Италия", "Испания", "Нидерланды"],
      validityDays: 30,
      popular: true,
      region: "europe",
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
      region: "asia",
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
      region: "america",
    },
    {
      id: "4",
      title: "Турция",
      description: "Идеально для отдыха",
      dataAmount: "8 ГБ",
      price: 650,
      currency: "₽",
      coverage: ["Турция"],
      validityDays: 15,
      region: "europe",
    },
    {
      id: "5",
      title: "Китай",
      description: "Без VPN ограничений",
      dataAmount: "6 ГБ",
      price: 980,
      currency: "₽",
      coverage: ["Китай"],
      validityDays: 30,
      region: "asia",
    },
    {
      id: "6",
      title: "Глобальный",
      description: "Покрытие 120+ стран",
      dataAmount: "15 ГБ",
      price: 2800,
      currency: "₽",
      coverage: ["Европа", "Азия", "Америка", "Океания"],
      validityDays: 30,
      region: "global",
      popular: true,
    },
  ];

  const filteredPlans = allPlans.filter((plan) => {
    const matchesSearch =
      plan.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      plan.coverage.some((country) =>
        country.toLowerCase().includes(searchQuery.toLowerCase()),
      );
    const matchesRegion =
      selectedRegion === "all" || plan.region === selectedRegion;
    const matchesDataRange =
      selectedDataRange === "all" ||
      (selectedDataRange === "small" && parseInt(plan.dataAmount) <= 5) ||
      (selectedDataRange === "medium" &&
        parseInt(plan.dataAmount) > 5 &&
        parseInt(plan.dataAmount) <= 10) ||
      (selectedDataRange === "large" && parseInt(plan.dataAmount) > 10);

    return matchesSearch && matchesRegion && matchesDataRange;
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="container mx-auto py-8 px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Каталог eSIM</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Выберите идеальный план для ваших путешествий из {allPlans.length}{" "}
            доступных вариантов
          </p>
        </div>

        {/* Filters */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8 p-6 bg-muted/30 rounded-lg">
          <div className="space-y-2">
            <label className="text-sm font-medium">Поиск по стране</label>
            <Input
              placeholder="Найти страну..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Регион</label>
            <Select value={selectedRegion} onValueChange={setSelectedRegion}>
              <SelectTrigger>
                <SelectValue placeholder="Выберите регион" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Все регионы</SelectItem>
                <SelectItem value="europe">Европа</SelectItem>
                <SelectItem value="asia">Азия</SelectItem>
                <SelectItem value="america">Америка</SelectItem>
                <SelectItem value="global">Глобальный</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Объем данных</label>
            <Select
              value={selectedDataRange}
              onValueChange={setSelectedDataRange}
            >
              <SelectTrigger>
                <SelectValue placeholder="Выберите объем" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Любой объем</SelectItem>
                <SelectItem value="small">До 5 ГБ</SelectItem>
                <SelectItem value="medium">5-10 ГБ</SelectItem>
                <SelectItem value="large">Более 10 ГБ</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex items-end">
            <Button
              variant="outline"
              onClick={() => {
                setSearchQuery("");
                setSelectedRegion("all");
                setSelectedDataRange("all");
              }}
              className="w-full"
            >
              <Icon name="X" className="h-4 w-4 mr-2" />
              Сбросить
            </Button>
          </div>
        </div>

        {/* Results */}
        <div className="mb-6 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-sm text-muted-foreground">
              Найдено: {filteredPlans.length} планов
            </span>
            {filteredPlans.some((plan) => plan.popular) && (
              <Badge variant="secondary">
                <Icon name="Star" className="h-3 w-3 mr-1" />
                Популярные в подборке
              </Badge>
            )}
          </div>
        </div>

        {/* Plans Grid */}
        {filteredPlans.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPlans.map((plan) => (
              <eSIMCard key={plan.id} {...plan} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <Icon
              name="Search"
              className="h-16 w-16 text-muted-foreground mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Ничего не найдено</h3>
            <p className="text-muted-foreground mb-4">
              Попробуйте изменить параметры поиска или выбрать другие фильтры
            </p>
            <Button
              variant="outline"
              onClick={() => {
                setSearchQuery("");
                setSelectedRegion("all");
                setSelectedDataRange("all");
              }}
            >
              Сбросить фильтры
            </Button>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default Catalog;
