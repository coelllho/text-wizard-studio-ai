
import TextGenerator from "@/components/TextGenerator";
import { Radio } from "lucide-react";

const RadioAdGenerator = () => {
  const generatePrompt = (topic: string, language: string, creativity: number) => {
    const isPortuguese = language === 'pt-BR';
    
    if (isPortuguese) {
      return `Crie um script persuasivo para anúncio de rádio sobre "${topic}". 
      O script deve incluir:
      - Duração: 30-60 segundos
      - Abertura impactante que chama atenção
      - Benefícios claros do produto/serviço
      - Call-to-action memorável
      - Linguagem para áudio (ritmo, pausas)
      - Tom adequado para o público-alvo
      - Informações de contato quando necessário
      
      Nível de criatividade: ${creativity}/10
      Idioma: Português brasileiro
      Estilo: ${creativity > 7 ? 'Criativo com jingles ou sons' : creativity > 4 ? 'Envolvente e persuasivo' : 'Direto e informativo'}`;
    }
    
    return `Create a persuasive radio ad script about "${topic}". 
    The script should include:
    - Duration: 30-60 seconds
    - Impactful opening that grabs attention
    - Clear benefits of the product/service
    - Memorable call-to-action
    - Audio-appropriate language (rhythm, pauses)
    - Tone suitable for target audience
    - Contact information when necessary
    
    Creativity level: ${creativity}/10
    Language: ${language}
    Style: ${creativity > 7 ? 'Creative with jingles or sounds' : creativity > 4 ? 'Engaging and persuasive' : 'Direct and informative'}`;
  };

  return (
    <TextGenerator
      title="Gerador de Script para Anúncio de Rádio"
      description="Crie scripts convincentes e concisos para anúncios de rádio eficazes"
      placeholder="Ex: Restaurante local, Curso online, Promoção de loja, Evento..."
      gradient="from-pink-500 to-rose-500"
      icon={<Radio className="h-6 w-6 text-white" />}
      generatePrompt={generatePrompt}
    />
  );
};

export default RadioAdGenerator;
