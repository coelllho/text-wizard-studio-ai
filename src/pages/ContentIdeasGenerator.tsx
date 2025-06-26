
import TextGenerator from "@/components/TextGenerator";
import { Lightbulb } from "lucide-react";

const ContentIdeasGenerator = () => {
  const generatePrompt = (topic: string, language: string, creativity: number) => {
    const isPortuguese = language === 'pt-BR';
    
    if (isPortuguese) {
      return `Gere uma lista de ideias criativas de conteúdo sobre "${topic}". 
      As ideias devem incluir:
      - Pelo menos 10 ideias diferentes
      - Formatos variados (posts, vídeos, artigos, stories, etc.)
      - Ângulos únicos e interessantes
      - Potencial de engajamento
      - Relevância para o público-alvo
      - Sugestões de SEO quando aplicável
      
      Nível de criatividade: ${creativity}/10
      Idioma: Português brasileiro
      Estilo: ${creativity > 7 ? 'Muito criativo e inovador' : creativity > 4 ? 'Equilibrado entre criatividade e praticidade' : 'Prático e testado'}`;
    }
    
    return `Generate a list of creative content ideas about "${topic}". 
    The ideas should include:
    - At least 10 different ideas
    - Varied formats (posts, videos, articles, stories, etc.)
    - Unique and interesting angles
    - Engagement potential
    - Relevance to target audience
    - SEO suggestions when applicable
    
    Creativity level: ${creativity}/10
    Language: ${language}
    Style: ${creativity > 7 ? 'Very creative and innovative' : creativity > 4 ? 'Balanced between creativity and practicality' : 'Practical and tested'}`;
  };

  return (
    <TextGenerator
      title="Gerador de Ideias de Conteúdo"
      description="Gere facilmente ideias de criação de conteúdo para blogs, vídeos e redes sociais"
      placeholder="Ex: Marketing digital, Fitness, Culinária saudável, Tecnologia..."
      gradient="from-yellow-500 to-orange-500"
      icon={<Lightbulb className="h-6 w-6 text-white" />}
      generatePrompt={generatePrompt}
    />
  );
};

export default ContentIdeasGenerator;
