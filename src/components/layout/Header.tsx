import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Link } from "react-router-dom";

import { ModeToggle } from "@/components/ui/mode-toggle";

export const Header = () => {
  return (
    <div className="flex justify-between items-center p-4">
      <NavigationMenu>
        <NavigationMenuList className="gap-4">
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link to="/" className={navigationMenuTriggerStyle()}>
                Play
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link to="/leaderboard" className={navigationMenuTriggerStyle()}>
                Leaderboard
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <ModeToggle />
    </div>
  );
};
