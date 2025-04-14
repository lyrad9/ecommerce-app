import { Button } from "@/components/ui/button"; // Assuming Button component
import { Input } from "@/components/ui/input"; // Assuming Input component
import { Label } from "@/components/ui/label"; // Assuming Label component
import { Textarea } from "@/components/ui/textarea"; // Assuming Textarea component
import { Separator } from "@/components/ui/separator"; // Assuming Separator component

export default function ContactPage() {
  // Placeholder for form handling logic (e.g., using react-hook-form)

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">
        Contactez-Nous
      </h1>
      <p className="text-center text-gray-600 mb-12 max-w-xl mx-auto">
        Vous avez une question, une suggestion ou besoin d'assistance ?
        N'hésitez pas à nous contacter via le formulaire ci-dessous ou nos
        coordonnées.
      </p>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Contact Form */}
        <section>
          <h2 className="text-2xl font-semibold mb-6">Envoyer un message</h2>
          <form className="space-y-4">
            {/* Replace with Form component if using shadcn form */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName">Prénom</Label>
                <Input id="firstName" placeholder="Votre prénom" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Nom</Label>
                <Input id="lastName" placeholder="Votre nom" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input type="email" id="email" placeholder="Votre email" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="subject">Sujet</Label>
              <Input id="subject" placeholder="Sujet de votre message" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                placeholder="Écrivez votre message ici..."
                rows={5}
              />
            </div>
            <Button type="submit" className="w-full sm:w-auto">
              Envoyer le message
            </Button>
          </form>
        </section>

        {/* Contact Information */}
        <section>
          <h2 className="text-2xl font-semibold mb-6">Nos Coordonnées</h2>
          <div className="space-y-4 text-gray-700">
            <div>
              <h3 className="font-semibold text-lg mb-1">Adresse</h3>
              <p>123 Rue de la Tech</p>
              <p>75001 Paris, France</p>
            </div>
            <Separator />
            <div>
              <h3 className="font-semibold text-lg mb-1">Téléphone</h3>
              <p>+33 1 23 45 67 89</p>
            </div>
            <Separator />
            <div>
              <h3 className="font-semibold text-lg mb-1">Email</h3>
              <p>contact@techshop.example.com</p>
            </div>
            <Separator />
            <div>
              <h3 className="font-semibold text-lg mb-1">Horaires</h3>
              <p>Lundi - Vendredi : 9h00 - 18h00</p>
              <p>Samedi : 10h00 - 16h00</p>
            </div>
            {/* Optionally add a map embed here */}
          </div>
        </section>
      </div>
    </div>
  );
}
