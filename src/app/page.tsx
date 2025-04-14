import { Button } from "@/components/ui/button"; // Assuming you have a Button component

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
        {/* Using Button component */}
      </section>

      {/* Sections Placeholder */}
      <div className="container mx-auto px-4">
        {/* Produits Populaires Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-center">
            Produits Populaires
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {/* Placeholder for product cards */}
            <div className="border p-4 rounded-lg shadow hover:shadow-md transition-shadow">
              Produit 1
            </div>
            <div className="border p-4 rounded-lg shadow hover:shadow-md transition-shadow">
              Produit 2
            </div>
            <div className="border p-4 rounded-lg shadow hover:shadow-md transition-shadow">
              Produit 3
            </div>
            <div className="border p-4 rounded-lg shadow hover:shadow-md transition-shadow">
              Produit 4
            </div>
          </div>
        </section>

        {/* Catégories Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-center">
            Catégories
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {/* Placeholder for category links/cards */}
            <div className="border p-6 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors">
              Ordinateurs
            </div>
            <div className="border p-6 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors">
              Composants
            </div>
            <div className="border p-6 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors">
              Périphériques
            </div>
            <div className="border p-6 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors">
              Accessoires
            </div>
          </div>
        </section>

        {/* Nouveautés Section */}
        <section className="mb-12">
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
