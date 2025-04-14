// src/components/layout/Footer.tsx
import Link from 'next/link';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Github, Linkedin, Twitter } from 'lucide-react'; // Exemple d'icônes

const Footer = () => {
  return (
    <footer className="bg-muted text-muted-foreground mt-auto">
      <Separator />
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Newsletter */}
          <div className="space-y-4 md:col-span-2">
            <h4 className="font-semibold text-foreground">Restez Informé</h4>
            <p className="text-sm">Abonnez-vous à notre newsletter pour recevoir les dernières nouvelles et offres spéciales.</p>
            <form className="flex space-x-2">
              <Input type="email" placeholder="Votre email" className="max-w-lg flex-1" />
              <Button type="submit">S'abonner</Button>
               {/* TODO: Ajouter la logique d'abonnement */}
            </form>
          </div>

          {/* Navigation Rapide */}
          <div className="space-y-2">
            <h4 className="font-semibold text-foreground">Navigation</h4>
            <ul className="space-y-1 text-sm">
              <li><Link href="/" className="hover:text-foreground transition-colors">Accueil</Link></li>
              <li><Link href="/products" className="hover:text-foreground transition-colors">Produits</Link></li>
              <li><Link href="/about" className="hover:text-foreground transition-colors">À propos</Link></li>
              <li><Link href="/contact" className="hover:text-foreground transition-colors">Contact</Link></li>
              {/* TODO: Créer les pages correspondantes */}
              <li><Link href="/legal" className="hover:text-foreground transition-colors">Mentions Légales</Link></li>
              <li><Link href="/cgv" className="hover:text-foreground transition-colors">Conditions Générales de Vente</Link></li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Contactez-nous</h4>
            <div className="text-sm space-y-1">
              <p>123 Rue de l'Informatique</p>
              <p>75001 Paris, France</p>
              <p>Email: contact@techshop.com</p>
              <p>Tel: +33 1 23 45 67 89</p>
            </div>
             <div className="flex space-x-4">
                {/* TODO: Mettre les vrais liens */}
                <Link href="#" aria-label="Twitter" className="hover:text-foreground transition-colors"><Twitter className="h-5 w-5" /></Link>
                <Link href="#" aria-label="LinkedIn" className="hover:text-foreground transition-colors"><Linkedin className="h-5 w-5" /></Link>
                <Link href="#" aria-label="GitHub" className="hover:text-foreground transition-colors"><Github className="h-5 w-5" /></Link>
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm">
          <p>&copy; {new Date().getFullYear()} TechShop. Tous droits réservés.</p>
           {/* TODO: Ajouter les logos des méthodes de paiement */}
          <div className="flex space-x-2 mt-4 md:mt-0 font-medium">
             <span>VISA</span> <span>MasterCard</span> <span>PayPal</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
