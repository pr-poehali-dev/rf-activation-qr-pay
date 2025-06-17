import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

interface eSIMCardProps {
  id: string;
  country: string;
  flag: string;
  data: string;
  duration: string;
  price: number;
  popular?: boolean;
  features: string[];
}

const eSIMCard = ({
  country,
  flag,
  data,
  duration,
  price,
  popular,
  features,
}: eSIMCardProps) => {
  return (
    <Card
      className={`relative hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${popular ? "border-2 border-primary" : ""}`}
    >
      {popular && (
        <Badge className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground">
          Популярный
        </Badge>
      )}

      <CardHeader className="text-center pb-4">
        <div className="flex justify-center items-center gap-2 mb-2">
          <span className="text-3xl">{flag}</span>
          <CardTitle className="text-xl font-bold">{country}</CardTitle>
        </div>
        <div className="space-y-1">
          <div className="text-2xl font-bold text-primary">{data}</div>
          <CardDescription className="text-sm">{duration}</CardDescription>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        <div className="space-y-2">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center gap-2 text-sm">
              <Icon name="Check" className="h-4 w-4 text-green-500" />
              <span>{feature}</span>
            </div>
          ))}
        </div>

        <div className="border-t pt-4">
          <div className="flex items-center justify-between mb-4">
            <div>
              <span className="text-2xl font-bold">{price}₽</span>
              <span className="text-sm text-muted-foreground ml-1">
                за весь период
              </span>
            </div>
          </div>

          <Button className="w-full" size="lg">
            <Icon name="ShoppingCart" className="mr-2 h-4 w-4" />
            Купить eSIM
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default eSIMCard;
