
import TextGenerator from "@/components/TextGenerator";
import { Mail } from "lucide-react";

const ResignationLetterGenerator = () => {
  const generatePrompt = (topic: string, language: string, creativity: number) => {
    const isPortuguese = language === 'pt-BR';
    
    if (isPortuguese) {
      return `Crie uma carta de demissão profissional baseada na seguinte situação: "${topic}". 
      A carta deve incluir:
      - Cabeçalho formal com data e destinatário
      - Declaração clara de demissão
      - Data de último dia de trabalho
      - Agradecimento pela oportunidade
      - Oferecimento para transição
      - Tom respeitoso e profissional
      - Encerramento adequado
      
      Nível de formalidade: ${creativity < 4 ? 'Muito formal' : creativity < 7 ? 'Profissional padrão' : 'Cordial e pessoal'}
      Idioma: Português brasileiro`;
    }
    
    return `Create a professional resignation letter based on the following situation: "${topic}". 
    The letter should include:
    - Formal header with date and recipient
    - Clear statement of resignation
    - Last working day date
    - Gratitude for the opportunity
    - Offer to help with transition
    - Respectful and professional tone
    - Appropriate closing
    
    Formality level: ${creativity < 4 ? 'Very formal' : creativity < 7 ? 'Standard professional' : 'Cordial and personal'}
    Language: ${language}`;
  };

  return (
    <TextGenerator
      title="Gerador de Carta de Demissão"
      description="Redija cartas de demissão profissionais e personalizadas em minutos"
      placeholder="Ex: Mudança de carreira, Nova oportunidade, Motivos pessoais, Aposentadoria..."
      gradient="from-gray-500 to-slate-600"
      icon={<Mail className="h-6 w-6 text-white" />}
      generatePrompt={generatePrompt}
    />
  );
};

export default ResignationLetterGenerator;
