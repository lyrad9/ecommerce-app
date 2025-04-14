import { Separator } from "@/components/ui/separator"; // Assuming Separator component
// import { Users, Target, Eye } from 'lucide-react'; // Example icons

export default function AboutPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 py-16">
        {/* Header Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-800 mb-4">
            À Propos de TechShop
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Votre partenaire de confiance pour tout ce qui concerne
            l'informatique : composants, systèmes et expertise.
          </p>
        </section>

        {/* Mission, Vision, Expertise Section */}
        <section className="grid md:grid-cols-3 gap-12 mb-16">
          {/* Mission */}
          <div className="text-center p-6 bg-white rounded-lg shadow-md border border-gray-200">
            {/* <Target className="mx-auto h-12 w-12 text-blue-600 mb-4" /> */}
             <div className="mx-auto h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">🎯</div> {/* Icon Placeholder */}
            <h2 className="text-2xl font-semibold mb-2">Notre Mission</h2>
            <p className="text-gray-600">
              Fournir les meilleurs produits technologiques avec un service
              client exceptionnel, rendant la technologie accessible et
              compréhensible pour tous.
            </p>
          </div>

          {/* Vision */}
          <div className="text-center p-6 bg-white rounded-lg shadow-md border border-gray-200">
            {/* <Eye className="mx-auto h-12 w-12 text-blue-600 mb-4" /> */}
            <div className="mx-auto h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">👁️</div> {/* Icon Placeholder */}
            <h2 className="text-2xl font-semibold mb-2">Notre Vision</h2>
            <p className="text-gray-600">
              Devenir la référence en ligne pour les passionnés d'informatique
              et les professionnels, en offrant une sélection de pointe et des
              conseils d'experts.
            </p>
          </div>

          {/* Expertise */}
          <div className="text-center p-6 bg-white rounded-lg shadow-md border border-gray-200">
             {/* <Users className="mx-auto h-12 w-12 text-blue-600 mb-4" /> */}
             <div className="mx-auto h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">💡</div> {/* Icon Placeholder */}
            <h2 className="text-2xl font-semibold mb-2">Notre Expertise</h2>
            <p className="text-gray-600">
              Forts d'années d'expérience, nos experts sélectionnent
              rigoureusement chaque produit et sont là pour vous guider dans vos
              choix techniques.
            </p>
          </div>
        </section>

        <Separator className="my-16" />

        {/* Our Story Section */}
        <section className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-8">
            Notre Histoire
          </h2>
          <div className="space-y-4 text-gray-700 text-justify">
            <p>
              Fondé par des passionnés d'informatique, TechShop est né de
              l'envie de créer une plateforme unique où amateurs et
              professionnels pourraient trouver non seulement les meilleurs
              composants et systèmes, mais aussi des conseils fiables et une
              communauté partageant les mêmes intérêts.
            </p>
            <p>
              Depuis nos débuts modestes, nous avons grandi en nous concentrant
              sur la qualité, la performance et la satisfaction client. Nous
              croyons fermement qu'un bon équipement informatique peut
              transformer la manière dont nous travaillons, jouons et créons.
            </p>
             <p>
              Aujourd'hui, TechShop continue d'évoluer, en restant à l'affût des
              dernières innovations technologiques pour vous offrir le meilleur
              du monde informatique.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
