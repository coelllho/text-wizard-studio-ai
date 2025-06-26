
import TextGenerator from "@/components/TextGenerator";
import { UserCheck } from "lucide-react";

const ResumeHeadlineGenerator = () => {
  const generatePrompt = (topic: string, language: string, creativity: number) => {
    const isPortuguese = language === 'pt-BR';
    
    if (isPortuguese) {
      return `Crie um título profissional marcante para currículo baseado no seguinte perfil: "${topic}". 
      O título deve:
      - Ser uma única linha impactante
      - Capturar a essência profissional
      - Incluir a área de atuação
      - Destacar o principal diferencial
      - Ser memorável e profissional
      - Funcionar como "elevator pitch" resumido
      
      Nível de criatividade: ${creativity}/10
      Idioma: Português brasileiro
      Estilo: ${creativity > 7 ? 'Criativo e marcante' : creativity > 4 ? 'Profissional com personalidade' : 'Tradicional e sólido'}`;
    }
    
    return `Create a striking professional headline for resume based on the following profile: "${topic}". 
    The headline should:
    - Be a single impactful line
    - Capture professional essence
    - Include the area of expertise
    - Highlight main differentiator
    - Be memorable and professional
    - Work as a summarized elevator pitch
    
    Creativity level: ${creativity}/10
    Language: ${language}
    Style: ${creativity > 7 ? 'Creative and striking' : creativity > 4 ? 'Professional with personality' : 'Traditional and solid'}`;
  };

  return (
    <TextGenerator
      title="Gerador de Título de Currículo"
      description="Crie títulos profissionais personalizados para causar forte primeira impressão"
      placeholder="Ex: Designer UX com 5 anos, Contador especialista em startups, Professor de inglês..."
      gradient="from-emerald-600 to-teal-600"
      icon={<UserCheck className="h-6 w-6 text-white" />}
      generatePrompt={generatePrompt}
    />
  );
};

export default ResumeHeadlineGenerator;
