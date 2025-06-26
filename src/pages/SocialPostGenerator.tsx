
import TextGenerator from "@/components/TextGenerator";
import { MessageSquare } from "lucide-react";

const SocialPostGenerator = () => {
  const generatePrompt = (topic: string, language: string, creativity: number) => {
    const isPortuguese = language === 'pt-BR';
    
    if (isPortuguese) {
      return `Crie um post envolvente para redes sociais sobre "${topic}". 
      O post deve incluir:
      - Hook inicial cativante para capturar atenção
      - Conteúdo valioso e interessante
      - Call-to-action que gere interação (curtidas, comentários, compartilhamentos)
      - Tom adequado para redes sociais
      - Emojis estratégicos ${creativity > 6 ? '(use generosamente)' : '(use moderadamente)'}
      - Formato otimizado para engagement
      
      Nível de criatividade: ${creativity}/10
      Idioma: Português brasileiro
      Estilo: ${creativity > 7 ? 'Muito criativo e viral' : creativity > 4 ? 'Envolvente e autêntico' : 'Profissional e informativo'}`;
    }
    
    return `Create an engaging social media post about "${topic}". 
    The post should include:
    - Captivating initial hook to grab attention
    - Valuable and interesting content
    - Call-to-action that generates interaction (likes, comments, shares)
    - Appropriate tone for social media
    - Strategic emojis ${creativity > 6 ? '(use generously)' : '(use moderately)'}
    - Format optimized for engagement
    
    Creativity level: ${creativity}/10
    Language: ${language}
    Style: ${creativity > 7 ? 'Very creative and viral' : creativity > 4 ? 'Engaging and authentic' : 'Professional and informative'}`;
  };

  return (
    <TextGenerator
      title="Gerador de Posts Sociais"
      description="Gere postagens envolventes para redes sociais com otimizações para cliques"
      placeholder="Ex: Dicas de produtividade, Motivação segunda-feira, Tendências 2024..."
      gradient="from-orange-500 to-red-500"
      icon={<MessageSquare className="h-6 w-6 text-white" />}
      generatePrompt={generatePrompt}
    />
  );
};

export default SocialPostGenerator;
