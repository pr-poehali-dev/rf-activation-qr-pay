import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

interface eSIMCardProps {
  id: string;
  title: string;
  description: string;
  dataAmount: string;
  price: number;
  currency: string;
  coverage: string[];
  validityDays: number;
  imageUrl?: string;
  popular?: boolean;
}

const eSIMCard = ({
  title,
  description,
  dataAmount,
  price,
  currency,
  coverage,
  validityDays,
  imageUrl,
  popular = false,
}: eSIMCardProps) => {
  return (
    <Card
      className={`relative overflow-hidden hover:shadow-lg transition-shadow ${popular ? "ring-2 ring-primary" : ""}`}
    >
      {popular && (
        <Badge className="absolute top-4 right-4 z-10">Популярный</Badge>
      )}

      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
              <Icon name="Globe" className="h-5 w-5 text-primary" />
            </div>
            <div>
              <CardTitle className="text-lg">{title}</CardTitle>
              <CardDescription className="text-sm">
                {description}
              </CardDescription>
            </div>
          </div>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Icon name="Database" className="h-4 w-4 text-muted-foreground" />
            <span className="font-semibold">{dataAmount}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Icon name="Calendar" className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">
              {validityDays} дней
            </span>
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <Icon name="MapPin" className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm font-medium">Покрытие:</span>
          </div>
          <div className="flex flex-wrap gap-1">
            {coverage.slice(0, 3).map((country, index) => (
              <Badge key={index} variant="secondary" className="text-xs">
                {country}
              </Badge>
            ))}
            {coverage.length > 3 && (
              <Badge variant="secondary" className="text-xs">
                +{coverage.length - 3} еще
              </Badge>
            )}
          </div>
        </div>

        <div className="pt-2">
          <div className="flex items-baseline space-x-1">
            <span className="text-2xl font-bold text-primary">{price}</span>
            <span className="text-sm text-muted-foreground">{currency}</span>
          </div>
        </div>
      </CardContent>

      <CardFooter>
        <Button className="w-full">
          <Icon name="ShoppingCart" className="h-4 w-4 mr-2" />
          Купить eSIM
        </Button>
      </CardFooter>
    </Card>
  );
};

export default eSIMCard;
