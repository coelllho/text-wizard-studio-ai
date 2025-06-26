
import TextGenerator from "@/components/TextGenerator";
import { Hash } from "lucide-react";

const TwitterHashtagGenerator = () => {
  const generatePrompt = (topic: string, language: string, creativity: number) => {
    const isPortuguese = language === 'pt-BR';
    
    if (isPortuguese) {
      return `Crie uma lista de hashtags eficazes para Twitter sobre "${topic}". 
      As hashtags devem incluir:
      - Mix de hashtags populares e específicas
      - Hashtags de nicho relevantes ao tópico
      - Hashtags de tendência quando aplicável
      - Diferentes níveis de popularidade
      - Total de 10-15 hashtags organizadas
      - Explicação do potencial de cada uma
      
      Nível de criatividade: ${creativity}/10
      Idioma: Português brasileiro
      Estratégia: ${creativity > 6 ? 'Inovadora com hashtags originais' : creativity > 3 ? 'Equilibrada entre populares e específicas' : 'Focada em hashtags estabelecidas'}`;
    }
    
    return `Create a list of effective Twitter hashtags about "${topic}". 
    The hashtags should include:
    - Mix of popular and specific hashtags
    - Niche hashtags relevant to the topic
    - Trending hashtags when applicable
    - Different popularity levels
    - Total of 10-15 organized hashtags
    - Explanation of each one's potential
    
    Creativity level: ${creativity}/10
    Language: ${language}
    Strategy: ${creativity > 6 ? 'Innovative with original hashtags' : creativity > 3 ? 'Balanced between popular and specific' : 'Focused on established hashtags'}`;
  };

  return (
    <TextGenerator
      title="Gerador de Hashtags para Twitter"
      description="Crie hashtags eficazes para aumentar visibilidade e engajamento no Twitter"
      placeholder="Ex: Marketing digital, Inteligência artificial, Sustentabilidade, Startups..."
      gradient="from-sky-500 to-blue-500"
      icon={<Hash className="h-6 w-6 text-white" />}
      generatePrompt={generatePrompt}
    />
  );
};

export default TwitterHashtagGenerator;
