
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Instagram, Mic, Users, Lightbulb, Radio, User, Hash, MessageSquare, UserCheck, Mail, Calendar } from "lucide-react";
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
    },
    {
      id: "social-post",
      title: "Gerador de Posts Sociais",
      description: "Gere postagens envolventes para redes sociais com otimizações para cliques",
      icon: MessageSquare,
      gradient: "from-orange-500 to-red-500",
      path: "/social-post-generator"
    },
    {
      id: "bullet-points",
      title: "Gerador de Bullet Points",
      description: "Transforme textos em bullet points organizados para currículos e marketing",
      icon: Hash,
      gradient: "from-indigo-500 to-purple-500",
      path: "/bullet-points-generator"
    },
    {
      id: "discussion-post",
      title: "Gerador de Posts de Discussão",
      description: "Crie posts interativos personalizados para estimular conversas online",
      icon: Users,
      gradient: "from-teal-500 to-green-500",
      path: "/discussion-post-generator"
    },
    {
      id: "resignation-letter",
      title: "Gerador de Carta de Demissão",
      description: "Redija cartas de demissão profissionais e personalizadas em minutos",
      icon: Mail,
      gradient: "from-gray-500 to-slate-600",
      path: "/resignation-letter-generator"
    },
    {
      id: "content-ideas",
      title: "Gerador de Ideias de Conteúdo",
      description: "Gere facilmente ideias de criação de conteúdo para blogs, vídeos e redes sociais",
      icon: Lightbulb,
      gradient: "from-yellow-500 to-orange-500",
      path: "/content-ideas-generator"
    },
    {
      id: "radio-ad",
      title: "Gerador de Script para Anúncio de Rádio",
      description: "Crie scripts convincentes e concisos para anúncios de rádio eficazes",
      icon: Radio,
      gradient: "from-pink-500 to-rose-500",
      path: "/radio-ad-generator"
    },
    {
      id: "resume-objective",
      title: "Gerador de Objetivo de Currículo",
      description: "Crie objetivos de currículo personalizados e impactantes para se destacar",
      icon: User,
      gradient: "from-blue-600 to-indigo-600",
      path: "/resume-objective-generator"
    },
    {
      id: "resume-headline",
      title: "Gerador de Título de Currículo",
      description: "Crie títulos profissionais personalizados para causar forte primeira impressão",
      icon: UserCheck,
      gradient: "from-emerald-600 to-teal-600",
      path: "/resume-headline-generator"
    },
    {
      id: "twitter-hashtag",
      title: "Gerador de Hashtags para Twitter",
      description: "Crie hashtags eficazes para aumentar visibilidade e engajamento no Twitter",
      icon: Hash,
      gradient: "from-sky-500 to-blue-500",
      path: "/twitter-hashtag-generator"
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
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {tools.map((tool) => {
              const IconComponent = tool.icon;
              return (
                <Card key={tool.id} className="group hover:shadow-2xl transition-all duration-300 border-0 overflow-hidden">
                  <CardContent className="p-0">
                    <div className={`bg-gradient-to-br ${tool.gradient} p-6 text-white`}>
                      <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                        <IconComponent className="h-6 w-6" />
                      </div>
                      <h3 className="text-lg font-bold mb-2">{tool.title}</h3>
                      <p className="text-white/90 text-sm">{tool.description}</p>
                    </div>
                    <div className="p-4">
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
