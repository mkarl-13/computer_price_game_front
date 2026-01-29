import { Card } from "@/components/ui/card";
import { Item, ItemMedia, ItemContent, ItemTitle } from "@/components/ui/item";
import { CircleDollarSign } from "lucide-react";

export const History = () => {
  return (
    <Card className="flex flex-col p-4">
      <div className="flex flex-row gap-4 w-4xl">
        <div className="flex flex-col gap-2">
          <Item className="bg-orange-400">
            <ItemMedia variant="icon">
              <CircleDollarSign />
            </ItemMedia>
            <ItemContent>
              <ItemTitle className="text-lg font-semibold">500 €</ItemTitle>
            </ItemContent>
          </Item>
        </div>
      </div>
    </Card>
  );
};
