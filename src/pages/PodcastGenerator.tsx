
import TextGenerator from "@/components/TextGenerator";
import { Mic } from "lucide-react";

const PodcastGenerator = () => {
  const generatePrompt = (topic: string, language: string, creativity: number) => {
    const isPortuguese = language === 'pt-BR';
    
    if (isPortuguese) {
      return `Crie um roteiro completo para podcast sobre "${topic}". 
      O roteiro deve incluir:
      - Abertura cativante
      - Desenvolvimento do tema com informações relevantes
      - Transições naturais entre os pontos
      - Encerramento que convide à ação
      
      Nível de criatividade: ${creativity}/10
      Idioma: Português brasileiro
      Tom: ${creativity > 7 ? 'Descontraído e criativo' : creativity > 4 ? 'Profissional e envolvente' : 'Formal e informativo'}`;
    }
    
    return `Create a complete podcast script about "${topic}". 
    The script should include:
    - Engaging opening
    - Topic development with relevant information
    - Natural transitions between points
    - Closing that invites action
    
    Creativity level: ${creativity}/10
    Language: ${language}
    Tone: ${creativity > 7 ? 'Casual and creative' : creativity > 4 ? 'Professional and engaging' : 'Formal and informative'}`;
  };

  return (
    <TextGenerator
      title="Gerador de Script para Podcast"
      description="Crie roteiros envolventes e profissionais para seus episódios"
      placeholder="Ex: O futuro da inteligência artificial, Dicas de empreendedorismo para iniciantes..."
      gradient="from-purple-500 to-pink-500"
      icon={<Mic className="h-6 w-6 text-white" />}
      generatePrompt={generatePrompt}
    />
  );
};

export default PodcastGenerator;
