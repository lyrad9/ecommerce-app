import Link from 'next/link';
import { ShoppingCart, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, navigationMenuTriggerStyle } from '@/components/ui/navigation-menu';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'; // Pour le panier mobile/modal

const Header = () => {
  // TODO: Ajouter la logique du panier (nombre d'items)
  const cartItemCount = 0; // Exemple

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        {/* Logo */}
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <span className="font-bold sm:inline-block">
            TechShop
          </span>
        </Link>

        {/* Navigation principale (desktop) */}
        <NavigationMenu className="hidden md:flex flex-1">
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link href="/" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Accueil
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
               {/* TODO: Ajouter un dropdown pour les catégories de produits */}
               <Link href="/products" legacyBehavior passHref>
                 <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                   Produits
                 </NavigationMenuLink>
               </Link>
            </NavigationMenuItem>
             <NavigationMenuItem>
              <Link href="/about" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  À propos
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/contact" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Contact
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Barre de recherche et Panier */}
        <div className="flex flex-1 items-center justify-end space-x-4">
          {/* Barre de recherche */}
          <div className="relative hidden sm:block w-full max-w-xs">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Rechercher des produits..."
              className="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px]"
            />
             {/* TODO: Intégrer la recherche avec suggestions */}
          </div>

          {/* Panier */}
          <Sheet>
              <SheetTrigger asChild>
                  <Button variant="outline" size="icon" className="relative">
                      <ShoppingCart className="h-5 w-5" />
                      {cartItemCount > 0 && (
                          <span className="absolute -top-2 -right-2 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full">
                              {cartItemCount}
                          </span>
                      )}
                       <span className="sr-only">Ouvrir le panier</span>
                  </Button>
              </SheetTrigger>
              <SheetContent>
                  <SheetHeader>
                      <SheetTitle>Votre Panier</SheetTitle>
                  </SheetHeader>
                  {/* TODO: Intégrer le contenu du panier ici */}
                  <div className="mt-4">
                     {cartItemCount === 0 ? <p>Votre panier est vide.</p> : <p>Contenu du panier...</p>}
                  </div>
              </SheetContent>
          </Sheet>

           {/* TODO: Ajouter menu burger pour mobile */}

        </div>
      </div>
    </header>
  );
};

export default Header;
