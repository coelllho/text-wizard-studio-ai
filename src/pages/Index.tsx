
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Instagram, Mic } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  const tools = [
    {
      id: "podcast",
      title: "Gerador de Script para Podcast",
      description: "Crie roteiros envolventes e profissionais para seus episódios",
      icon: Mic,
      gradient: "from-purple-500 to-pink-500",
      path: "/podcast-generator"
    },
    {
      id: "instagram",
      title: "Gerador de Descrição para Instagram",
      description: "Desenvolva legendas cativantes com hashtags relevantes",
      icon: Instagram,
      gradient: "from-blue-500 to-cyan-500",
      path: "/instagram-generator"
    },
    {
      id: "blog",
      title: "Gerador de Texto para Blog",
      description: "Produza artigos completos e otimizados para SEO",
      icon: FileText,
      gradient: "from-green-500 to-emerald-500",
      path: "/blog-generator"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
                <FileText className="h-6 w-6 text-white" />
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                AITextGen
              </h1>
            </div>
            <div className="flex items-center space-x-2">
              <span className="px-3 py-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm rounded-full font-medium">
                100% Grátis
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent">
            Geração de Textos com IA
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Acesse gratuitamente nossos agentes especializados em criação de conteúdo. 
            Transforme suas ideias em textos profissionais e envolventes.
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-16">
            <div className="relative">
              <input
                type="text"
                placeholder="Procurar ferramentas..."
                className="w-full px-6 py-4 rounded-2xl border-2 border-gray-200 focus:border-purple-400 focus:outline-none text-lg"
              />
              <Button className="absolute right-2 top-2 bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600">
                Buscar
              </Button>
            </div>
          </div>

          {/* Tools Grid */}
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {tools.map((tool) => {
              const IconComponent = tool.icon;
              return (
                <Card key={tool.id} className="group hover:shadow-2xl transition-all duration-300 border-0 overflow-hidden">
                  <CardContent className="p-0">
                    <div className={`bg-gradient-to-br ${tool.gradient} p-8 text-white`}>
                      <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                        <IconComponent className="h-8 w-8" />
                      </div>
                      <h3 className="text-xl font-bold mb-2">{tool.title}</h3>
                      <p className="text-white/90 text-sm">{tool.description}</p>
                    </div>
                    <div className="p-6">
                      <Link to={tool.path}>
                        <Button className="w-full bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-900 hover:to-black">
                          Começar Agora
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-600">
            © 2024 AITextGen. Ferramenta gratuita para criação de conteúdo com IA.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
