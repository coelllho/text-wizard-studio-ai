
import TextGenerator from "@/components/TextGenerator";
import { Hash } from "lucide-react";

const BulletPointsGenerator = () => {
  const generatePrompt = (topic: string, language: string, creativity: number) => {
    const isPortuguese = language === 'pt-BR';
    
    if (isPortuguese) {
      return `Transforme o seguinte texto ou tópico em bullet points organizados e impactantes: "${topic}". 
      Os bullet points devem ser:
      - Concisos e diretos ao ponto
      - Fáceis de ler e escanear
      - Organizados por ordem de importância
      - Adequados para currículos, apresentações ou marketing
      - Com linguagem clara e profissional
      
      Nível de criatividade: ${creativity}/10
      Idioma: Português brasileiro
      Formato: ${creativity > 6 ? 'Criativo com símbolos e formatação especial' : 'Profissional e limpo'}`;
    }
    
    return `Transform the following text or topic into organized and impactful bullet points: "${topic}". 
    The bullet points should be:
    - Concise and to the point
    - Easy to read and scan
    - Organized by order of importance
    - Suitable for resumes, presentations or marketing
    - With clear and professional language
    
    Creativity level: ${creativity}/10
    Language: ${language}
    Format: ${creativity > 6 ? 'Creative with symbols and special formatting' : 'Professional and clean'}`;
  };

  return (
    <TextGenerator
      title="Gerador de Bullet Points"
      description="Transforme textos em bullet points organizados para currículos e marketing"
      placeholder="Ex: Experiência em vendas, Responsabilidades do cargo, Benefícios do produto..."
      gradient="from-indigo-500 to-purple-500"
      icon={<Hash className="h-6 w-6 text-white" />}
      generatePrompt={generatePrompt}
    />
  );
};

export default BulletPointsGenerator;
