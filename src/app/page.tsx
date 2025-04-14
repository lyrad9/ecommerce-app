import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"; // Assuming Card components are available
import { Star } from "lucide-react"; // Example Icon

// Sample product data array
const popularProducts = [
  {
    id: "prod1",
    name: "Processeur Ryzen 7",
    description: "Haute performance pour gaming et création.",
    price: 349.99,
    rating: 5,
    imageUrl: "/placeholder-cpu.svg", // Replace with actual image path
  },
  {
    id: "prod2",
    name: "Carte Graphique RTX 4070",
    description: "Graphismes nouvelle génération.",
    price: 649.99,
    rating: 4,
    imageUrl: "/placeholder-gpu.svg", // Replace with actual image path
  },
  {
    id: "prod3",
    name: "SSD NVMe 1To",
    description: "Stockage ultra-rapide.",
    price: 99.99,
    rating: 5,
    imageUrl: "/placeholder-ssd.svg", // Replace with actual image path
  },
  {
    id: "prod4",
    name: "Kit RAM DDR5 32Go",
    description: "Mémoire vive pour PC puissant.",
    price: 189.99,
    rating: 4,
    imageUrl: "/placeholder-ram.svg", // Replace with actual image path
  },
];

// Helper to render stars
const renderStars = (rating: number) => {
  return Array(5)
    .fill(0)
    .map((_, index) => (
      <Star
        key={index}
        className={`h-4 w-4 ${
          index < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
        }`}
      />
    ));
};


export default function Home() {
  return (
    <main className="flex flex-col gap-8">
      {/* Hero Banner */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Votre Destination Tech Ultime
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
          Découvrez les derniers composants, périphériques et systèmes
          informatiques aux meilleurs prix.
        </p>
        <Button size="lg" variant="secondary">
          Découvrir Nos Produits
        </Button>{" "}
      </section>

      {/* Sections Container */}
      <div className="container mx-auto px-4">
        {/* Produits Populaires Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-center">
            Produits Populaires
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {popularProducts.map((product) => (
              <Card key={product.id} className="flex flex-col overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <CardHeader className="p-0 relative">
                  {/* Placeholder for Image */}
                   <div className="aspect-square w-full bg-gray-100 flex items-center justify-center">
                     <img src={product.imageUrl} alt={product.name} className="h-32 w-32 object-contain" /> {/* Adjust size as needed */}
                   </div>
                </CardHeader>
                <CardContent className="flex-grow p-4">
                  <CardTitle className="text-lg font-semibold mb-1">{product.name}</CardTitle>
                  <p className="text-sm text-gray-600 mb-2 h-10 overflow-hidden">{product.description}</p> {/* Limited height description */}
                   <div className="flex items-center mb-2">
                     {renderStars(product.rating)}
                   </div>
                </CardContent>
                <CardFooter className="p-4 flex justify-between items-center bg-gray-50">
                  <p className="text-xl font-bold text-blue-700">
                     {product.price.toFixed(2)} €
                  </p>
                  <Button size="sm" variant="outline">Ajouter</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>

        {/* Catégories Section */}
        <section className="mb-12">
           {/* ... (rest of the categories section remains the same) ... */}
           <h2 className="text-3xl font-semibold mb-6 text-center">
            Catégories
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {/* Placeholder for category links/cards */}
            <div className="border p-6 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors cursor-pointer">
              Ordinateurs
            </div>
            <div className="border p-6 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors cursor-pointer">
              Composants
            </div>
            <div className="border p-6 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors cursor-pointer">
              Périphériques
            </div>
            <div className="border p-6 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors cursor-pointer">
              Accessoires
            </div>
          </div>
        </section>

        {/* Nouveautés Section */}
        <section className="mb-12">
           {/* ... (rest of the new arrivals section remains the same) ... */}
           <h2 className="text-3xl font-semibold mb-6 text-center">
            Nouveautés
          </h2>
          {/* Placeholder content */}
          <div className="text-center text-gray-500">
            Bientôt disponible...
          </div>
        </section>

        {/* Promotions Section */}
        <section className="mb-12">
          {/* ... (rest of the promotions section remains the same) ... */}
           <h2 className="text-3xl font-semibold mb-6 text-center text-red-600">
            Promotions
          </h2>
          {/* Placeholder content */}
          <div className="text-center text-gray-500">
            Découvrez nos offres spéciales bientôt !
          </div>
        </section>
      </div>
    </main>
  );
}
