
import TextGenerator from "@/components/TextGenerator";
import { Users } from "lucide-react";

const DiscussionPostGenerator = () => {
  const generatePrompt = (topic: string, language: string, creativity: number) => {
    const isPortuguese = language === 'pt-BR';
    
    if (isPortuguese) {
      return `Crie um post de discussão interativo sobre "${topic}". 
      O post deve incluir:
      - Introdução envolvente do tópico
      - Pergunta provocativa para gerar debate
      - Diferentes perspectivas sobre o assunto
      - Convite claro para participação dos usuários
      - Tom que estimule conversas respeitosas
      - Call-to-action específico para comentários
      
      Nível de criatividade: ${creativity}/10
      Idioma: Português brasileiro
      Abordagem: ${creativity > 7 ? 'Provocativa e instigante' : creativity > 4 ? 'Equilibrada e inclusiva' : 'Formal e educativa'}`;
    }
    
    return `Create an interactive discussion post about "${topic}". 
    The post should include:
    - Engaging introduction to the topic
    - Provocative question to generate debate
    - Different perspectives on the subject
    - Clear invitation for user participation
    - Tone that encourages respectful conversations
    - Specific call-to-action for comments
    
    Creativity level: ${creativity}/10
    Language: ${language}
    Approach: ${creativity > 7 ? 'Provocative and thought-provoking' : creativity > 4 ? 'Balanced and inclusive' : 'Formal and educational'}`;
  };

  return (
    <TextGenerator
      title="Gerador de Posts de Discussão"
      description="Crie posts interativos personalizados para estimular conversas online"
      placeholder="Ex: Futuro do trabalho remoto, IA na educação, Sustentabilidade empresarial..."
      gradient="from-teal-500 to-green-500"
      icon={<Users className="h-6 w-6 text-white" />}
      generatePrompt={generatePrompt}
    />
  );
};

export default DiscussionPostGenerator;
