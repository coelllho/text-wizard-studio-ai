
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Instagram, Mic, Users, Lightbulb, Radio, User, Hash, MessageSquare, UserCheck, Mail, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { ThemeToggle } from "@/components/ThemeToggle";

const Index = () => {
  const tools = [
    {
      id: "podcast",
      title: "Script para Podcast",
      description: "Roteiros envolventes e profissionais para seus episódios",
      icon: Mic,
      gradient: "from-purple-500 via-purple-600 to-indigo-600",
      path: "/podcast-generator"
    },
    {
      id: "instagram",
      title: "Descrição para Instagram",
      description: "Legendas cativantes com hashtags relevantes",
      icon: Instagram,
      gradient: "from-pink-500 via-rose-500 to-orange-500",
      path: "/instagram-generator"
    },
    {
      id: "blog",
      title: "Texto para Blog",
      description: "Artigos completos e otimizados para SEO",
      icon: FileText,
      gradient: "from-green-500 via-emerald-500 to-teal-500",
      path: "/blog-generator"
    },
    {
      id: "social-post",
      title: "Posts Sociais",
      description: "Postagens envolventes otimizadas para engajamento",
      icon: MessageSquare,
      gradient: "from-blue-500 via-cyan-500 to-teal-500",
      path: "/social-post-generator"
    },
    {
      id: "bullet-points",
      title: "Bullet Points",
      description: "Listas organizadas para currículos e marketing",
      icon: Hash,
      gradient: "from-indigo-500 via-purple-500 to-pink-500",
      path: "/bullet-points-generator"
    },
    {
      id: "discussion-post",
      title: "Posts de Discussão",
      description: "Conteúdo interativo para estimular conversas",
      icon: Users,
      gradient: "from-teal-500 via-green-500 to-emerald-500",
      path: "/discussion-post-generator"
    },
    {
      id: "resignation-letter",
      title: "Carta de Demissão",
      description: "Cartas profissionais personalizadas",
      icon: Mail,
      gradient: "from-gray-600 via-slate-600 to-zinc-600",
      path: "/resignation-letter-generator"
    },
    {
      id: "content-ideas",
      title: "Ideias de Conteúdo",
      description: "Inspiração criativa para blogs e redes sociais",
      icon: Lightbulb,
      gradient: "from-yellow-500 via-amber-500 to-orange-500",
      path: "/content-ideas-generator"
    },
    {
      id: "radio-ad",
      title: "Anúncio de Rádio",
      description: "Scripts convincentes para anúncios eficazes",
      icon: Radio,
      gradient: "from-pink-500 via-rose-500 to-red-500",
      path: "/radio-ad-generator"
    },
    {
      id: "resume-objective",
      title: "Objetivo de Currículo",
      description: "Objetivos impactantes para se destacar",
      icon: User,
      gradient: "from-blue-600 via-indigo-600 to-purple-600",
      path: "/resume-objective-generator"
    },
    {
      id: "resume-headline",
      title: "Título de Currículo",
      description: "Headlines profissionais marcantes",
      icon: UserCheck,
      gradient: "from-emerald-600 via-teal-600 to-cyan-600",
      path: "/resume-headline-generator"
    },
    {
      id: "twitter-hashtag",
      title: "Hashtags para Twitter",
      description: "Hashtags estratégicas para maior alcance",
      icon: Hash,
      gradient: "from-sky-500 via-blue-500 to-indigo-500",
      path: "/twitter-hashtag-generator"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-xl">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="relative">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center shadow-lg shadow-primary/25">
                  <FileText className="h-6 w-6 text-primary-foreground" />
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full animate-pulse"></div>
              </div>
              <div>
                <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                  Geração de textos com IA
                </h1>
              </div>
            </div>
            <ThemeToggle />
          </div>
        </div>
      </header>

      {/* Tools Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {tools.map((tool) => {
              const IconComponent = tool.icon;
              return (
                <Card key={tool.id} className="group relative overflow-hidden border-0 bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-primary/10 h-[320px] flex flex-col">
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <CardContent className="p-0 relative flex flex-col h-full">
                    <div className={`bg-gradient-to-br ${tool.gradient} p-6 text-white relative overflow-hidden flex-1 flex flex-col justify-center min-h-[180px]`}>
                      <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
                      <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-y-12 -translate-x-12"></div>
                      
                      <div className="relative z-10 flex flex-col justify-center h-full">
                        <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                          <IconComponent className="h-7 w-7" />
                        </div>
                        <h3 className="text-xl font-bold mb-3 leading-tight">{tool.title}</h3>
                        <p className="text-white/90 text-sm leading-relaxed">{tool.description}</p>
                      </div>
                    </div>
                    
                    <div className="p-6 mt-auto">
                      <Link to={tool.path}>
                        <Button className="w-full bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-primary-foreground font-medium rounded-xl shadow-md hover:shadow-lg transition-all duration-300 group-hover:scale-105">
                          Usar Ferramenta
                          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
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
    </div>
  );
};

export default Index;
