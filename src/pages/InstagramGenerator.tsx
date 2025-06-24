
import TextGenerator from "@/components/TextGenerator";
import { Instagram } from "lucide-react";

const InstagramGenerator = () => {
  const generatePrompt = (topic: string, language: string, creativity: number) => {
    const isPortuguese = language === 'pt-BR';
    
    if (isPortuguese) {
      return `Crie uma legenda envolvente para Instagram sobre "${topic}". 
      A legenda deve incluir:
      - Hook inicial para capturar atenção
      - Conteúdo informativo ou inspiracional
      - Emojis relevantes (${creativity > 5 ? 'use bastante' : 'use moderadamente'})
      - Call-to-action no final
      - Hashtags relevantes e populares
      
      Nível de criatividade: ${creativity}/10
      Idioma: Português brasileiro
      Estilo: ${creativity > 7 ? 'Muito criativo e despojado' : creativity > 4 ? 'Envolvente e autêntico' : 'Profissional e direto'}`;
    }
    
    return `Create an engaging Instagram caption about "${topic}". 
    The caption should include:
    - Initial hook to capture attention
    - Informative or inspirational content
    - Relevant emojis (${creativity > 5 ? 'use plenty' : 'use moderately'})
    - Call-to-action at the end
    - Relevant and popular hashtags
    
    Creativity level: ${creativity}/10
    Language: ${language}
    Style: ${creativity > 7 ? 'Very creative and casual' : creativity > 4 ? 'Engaging and authentic' : 'Professional and direct'}`;
  };

  return (
    <TextGenerator
      title="Gerador de Descrição para Instagram"
      description="Desenvolva legendas cativantes com hashtags relevantes"
      placeholder="Ex: Dicas de produtividade, Receita de bolo saudável, Motivação para segunda-feira..."
      gradient="from-blue-500 to-cyan-500"
      icon={<Instagram className="h-6 w-6 text-white" />}
      generatePrompt={generatePrompt}
    />
  );
};

export default InstagramGenerator;
