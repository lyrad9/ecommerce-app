import { Button } from "@/components/ui/button"; // Assuming Button component
import { Separator } from "@/components/ui/separator"; // Assuming Separator component
// import { Input } from "@/components/ui/input"; // For quantity
// import { Trash2 } from 'lucide-react'; // Example icon for delete

// Mock data for demonstration - replace with actual cart state management
const cartItems = [
  {
    id: "123",
    name: "Processeur Intel Core i9",
    price: 599.99,
    quantity: 1,
    image: "/placeholder-image.svg", // Replace with actual image path
  },
  {
    id: "789",
    name: "RAM DDR5 32Go",
    price: 189.99,
    quantity: 2,
    image: "/placeholder-image.svg", // Replace with actual image path
  },
];

// Calculate totals
const calculateItemTotal = (item: any) => item.price * item.quantity;
const calculateCartTotal = (items: any[]) =>
  items.reduce((total, item) => total + calculateItemTotal(item), 0);

const cartTotal = calculateCartTotal(cartItems);

export default function CartPage() {
  // In a real app, cartItems would come from state management (Context, Zustand, Redux, etc.)

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Votre Panier</h1>

      {cartItems.length === 0 ? (
        <p className="text-gray-500">Votre panier est vide.</p>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items List */}
          <div className="lg:col-span-2 space-y-4">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex flex-col sm:flex-row items-center justify-between border rounded-lg p-4 gap-4"
              >
                <div className="flex items-center gap-4 w-full sm:w-auto">
                  {/* Image Placeholder */}
                  <div className="bg-gray-200 w-16 h-16 rounded flex-shrink-0"></div>
                  <div>
                    <h3 className="font-medium">{item.name}</h3>
                    <p className="text-sm text-gray-500">
                      Prix unitaire: {item.price.toFixed(2)} €
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-between sm:justify-end gap-4 sm:gap-8 w-full sm:w-auto">
                   {/* Quantity Selector Placeholder */}
                   <div className="flex items-center space-x-2">
                     <label htmlFor={`quantity-${item.id}`} className="text-sm sr-only">Quantité</label>
                     <input
                        type="number"
                        id={`quantity-${item.id}`}
                        name={`quantity-${item.id}`}
                        min="1"
                        defaultValue={item.quantity}
                        className="border rounded w-16 p-1.5 text-center text-sm" // Use Input component if available
                        // Add onChange handler to update cart state
                      />
                  </div>
                  <p className="font-semibold w-24 text-right">
                    {calculateItemTotal(item).toFixed(2)} €
                  </p>
                  {/* Remove Item Button Placeholder */}
                  <Button variant="ghost" size="sm" className="text-red-500">
                     {/* <Trash2 className="h-4 w-4" /> */}
                     Supprimer
                  </Button>
                </div>
              </div>
            ))}
             <div className="text-right mt-4">
                <Button variant="outline" >
                    {/* Add onClick to clear cart state */}
                    Vider le panier
                </Button>
            </div>
          </div>


          {/* Cart Summary */}
          <div className="lg:col-span-1">
            <div className="border rounded-lg p-6 sticky top-20"> {/* Sticky summary */}
              <h2 className="text-xl font-semibold mb-4">Résumé du Panier</h2>
              <Separator className="mb-4" />
              <div className="flex justify-between mb-2">
                <span className="text-gray-600">Sous-total</span>
                <span>{cartTotal.toFixed(2)} €</span>
              </div>
              <div className="flex justify-between mb-4">
                <span className="text-gray-600">Livraison</span>
                <span>Calculée à l'étape suivante</span> {/* Or display shipping cost */}
              </div>
              <Separator className="mb-4" />
              <div className="flex justify-between font-bold text-lg mb-6">
                <span>Total</span>
                <span>{cartTotal.toFixed(2)} €</span>
              </div>
              <Button size="lg" className="w-full">
                Passer commande
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
