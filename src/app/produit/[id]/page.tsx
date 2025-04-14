import { Button } from "@/components/ui/button"; // Assuming Button component
import { Separator } from "@/components/ui/separator"; // Assuming Separator component
// You'll likely need components for Carousel and potentially Input/Select for quantity/variants
// import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";

// Mock data for demonstration - replace with actual data fetching
const product = {
  id: "123",
  name: "Processeur Intel Core i9",
  price: 599.99,
  description:
    "Un processeur haute performance pour les tâches exigeantes et le gaming.",
  features: [
    "16 Coeurs / 24 Threads",
    "Fréquence Boost jusqu'à 5.8 GHz",
    "Socket LGA1700",
    "Compatible DDR5",
  ],
  images: [
    "/placeholder-image.svg", // Replace with actual image paths
    "/placeholder-image.svg",
    "/placeholder-image.svg",
  ],
  variants: {
    // Example structure
    // color: ["Noir", "Blanc"],
    // memory: ["16GB", "32GB"]
  },
};

// Placeholder for product reviews
const reviews = [
  { id: 1, author: "Client A", rating: 5, comment: "Excellent produit !" },
  { id: 2, author: "Client B", rating: 4, comment: "Très performant." },
];

// Placeholder for similar products
const similarProducts = [
  { id: "456", name: "Carte Mère Z790", price: 349.99 },
  { id: "789", name: "RAM DDR5 32Go", price: 189.99 },
];

// Page component
export default function ProductPage({ params }: { params: { id: string } }) {
  // In a real app, you would fetch product data based on params.id
  const productId = params.id;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid md:grid-cols-2 gap-8 md:gap-12">
        {/* Image Gallery */}
        <div>
          {/* Placeholder for Carousel or Image Gallery */}
          <div className="border rounded-lg bg-gray-200 h-96 flex items-center justify-center mb-4">
            Image Carousel Placeholder (Product ID: {productId})
          </div>
          <div className="flex space-x-2 overflow-x-auto">
            {product.images.map((img, index) => (
              <div
                key={index}
                className="border rounded bg-gray-100 w-20 h-20 flex-shrink-0"
              >
                {/* Small image thumb */}
              </div>
            ))}
          </div>
        </div>

        {/* Product Details */}
        <div>
          <h1 className="text-3xl md:text-4xl font-bold mb-2">{product.name}</h1>
          <p className="text-2xl font-semibold text-blue-700 mb-4">
            {product.price.toFixed(2)} €
          </p>
          <p className="text-gray-700 mb-4">{product.description}</p>

          <Separator className="my-4" />

          <h3 className="text-lg font-semibold mb-2">Caractéristiques :</h3>
          <ul className="list-disc list-inside text-gray-600 mb-4 space-y-1">
            {product.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>

          {/* Variants Selector Placeholder - Add logic if variants exist */}
          {/* {Object.keys(product.variants).length > 0 && (
            <div className="mb-4">
              <Label>Options :</Label>
              </div>
          )} */}

          {/* Quantity Selector Placeholder */}
          <div className="flex items-center space-x-4 mb-6">
            <label htmlFor="quantity" className="font-medium">
              Quantité :
            </label>
            <input
              type="number"
              id="quantity"
              name="quantity"
              min="1"
              defaultValue="1"
              className="border rounded w-16 p-2 text-center" // Use Input component if available
            />
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="flex-grow">
              Ajouter au panier
            </Button>
            <Button size="lg" variant="outline" className="flex-grow">
              Acheter maintenant
            </Button>
          </div>
        </div>
      </div>

      <Separator className="my-12" />

      {/* Reviews Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Avis Clients</h2>
        {reviews.length > 0 ? (
          <div className="space-y-4">
            {reviews.map((review) => (
              <div key={review.id} className="border p-4 rounded-lg">
                <p className="font-semibold">{review.author} - {review.rating}/5</p>
                <p className="text-gray-600">{review.comment}</p>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-500">Aucun avis pour ce produit pour le moment.</p>
        )}
         {/* Add a form or link to add a review here */}
      </section>

      {/* Similar Products Section */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Produits Similaires</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {similarProducts.map((prod) => (
            <div key={prod.id} className="border p-4 rounded-lg shadow hover:shadow-md transition-shadow text-center">
               {/* Placeholder for product card component */}
               <div className="bg-gray-200 h-32 mb-2 rounded"></div> {/* Image Placeholder */}
              <h3 className="font-medium">{prod.name}</h3>
              <p className="text-blue-600">{prod.price.toFixed(2)} €</p>
              <Button variant="outline" size="sm" className="mt-2">Voir</Button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
