import { Button } from "@/components/ui/button"; // Assuming Button component
import { Checkbox } from "@/components/ui/checkbox"; // Assuming Checkbox component
import { Label } from "@/components/ui/label"; // Assuming Label component
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"; // Assuming Accordion component
import { Separator } from "@/components/ui/separator"; // Assuming Separator component
// import { Slider } from "@/components/ui/slider"; // Assuming Slider component for price range

// Mock data - replace with actual data fetching and filtering logic
const categoryName = "Composants"; // Example category name, fetch based on slug
const products = [
  {
    id: "123",
    name: "Processeur Intel Core i9",
    price: 599.99,
    brand: "Intel",
    available: true,
    image: "/placeholder-image.svg",
  },
  {
    id: "456",
    name: "Carte Mère Z790",
    price: 349.99,
    brand: "ASUS",
    available: true,
    image: "/placeholder-image.svg",
  },
  {
    id: "789",
    name: "RAM DDR5 32Go",
    price: 189.99,
    brand: "Corsair",
    available: false,
    image: "/placeholder-image.svg",
  },
  {
    id: "101",
    name: "Carte Graphique RTX 4080",
    price: 1299.99,
    brand: "NVIDIA",
    available: true,
    image: "/placeholder-image.svg",
  },
];

const brands = ["Intel", "ASUS", "Corsair", "NVIDIA", "AMD", "MSI"]; // Example filters
const priceRange = { min: 100, max: 1500 }; // Example price range

export default function CategoryPage({ params }: { params: { slug: string } }) {
  // Fetch category details and products based on params.slug
  const categorySlug = params.slug;

  // Placeholder for handling filter state and logic

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">
        {categoryName} (Category: {categorySlug})
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Filters Sidebar */}
        <aside className="md:col-span-1">
          <h2 className="text-xl font-semibold mb-4">Filtres</h2>
          <Separator className="mb-4" />
          <Accordion type="multiple" defaultValue={["price", "brand", "availability"]} className="w-full">
            {/* Price Filter */}
            <AccordionItem value="price">
              <AccordionTrigger>Prix</AccordionTrigger>
              <AccordionContent>
                <div className="p-1">
                  {/* Placeholder for Price Slider */}
                  <p className="text-sm text-gray-500 mb-2">Range: {priceRange.min}€ - {priceRange.max}€</p>
                   {/* <Slider
                      defaultValue={[priceRange.min, priceRange.max]}
                      max={priceRange.max}
                      min={priceRange.min}
                      step={10}
                      className="my-4"
                    /> */}
                    <div className="flex justify-between text-sm">
                        <span>{priceRange.min} €</span>
                        <span>{priceRange.max} €</span>
                    </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Brand Filter */}
            <AccordionItem value="brand">
              <AccordionTrigger>Marque</AccordionTrigger>
              <AccordionContent>
                <div className="space-y-2 p-1 max-h-48 overflow-y-auto">
                    {brands.map((brand) => (
                       <div key={brand} className="flex items-center space-x-2">
                          <Checkbox id={`brand-${brand}`} />
                          <Label htmlFor={`brand-${brand}`} className="font-normal">{brand}</Label>
                       </div>
                    ))}
                </div>
              </AccordionContent>
            </AccordionItem>

             {/* Availability Filter */}
             <AccordionItem value="availability">
              <AccordionTrigger>Disponibilité</AccordionTrigger>
              <AccordionContent>
                 <div className="space-y-2 p-1">
                    <div className="flex items-center space-x-2">
                        <Checkbox id="available" />
                        <Label htmlFor="available" className="font-normal">En stock</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                        <Checkbox id="unavailable" />
                        <Label htmlFor="unavailable" className="font-normal">Hors stock</Label>
                    </div>
                 </div>
              </AccordionContent>
            </AccordionItem>

          </Accordion>
          <Button className="mt-6 w-full">Appliquer Filtres</Button>
        </aside>

        {/* Product List */}
        <main className="md:col-span-3">
          {products.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product) => (
                <div
                  key={product.id}
                  className="border rounded-lg shadow hover:shadow-md transition-shadow overflow-hidden"
                >
                  {/* Product Card Placeholder */}
                  <div className="bg-gray-200 h-48 w-full"></div> {/* Image Placeholder */}
                  <div className="p-4">
                    <h3 className="font-semibold text-lg mb-1">{product.name}</h3>
                     <p className="text-sm text-gray-500 mb-2">{product.brand}</p>
                    <p className="font-bold text-blue-700 mb-2">
                      {product.price.toFixed(2)} €
                    </p>
                    <p className={`text-sm mb-3 ${product.available ? 'text-green-600' : 'text-red-600'}`}>
                      {product.available ? 'En stock' : 'Hors stock'}
                    </p>
                    <Button variant="outline" className="w-full">Voir le produit</Button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-500">
              Aucun produit trouvé pour cette catégorie ou ces filtres.
            </p>
          )}
          {/* Add Pagination controls here */}
        </main>
      </div>
    </div>
  );
}
