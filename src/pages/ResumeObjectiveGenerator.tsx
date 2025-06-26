
import TextGenerator from "@/components/TextGenerator";
import { User } from "lucide-react";

const ResumeObjectiveGenerator = () => {
  const generatePrompt = (topic: string, language: string, creativity: number) => {
    const isPortuguese = language === 'pt-BR';
    
    if (isPortuguese) {
      return `Crie um objetivo profissional impactante para currículo baseado no seguinte perfil: "${topic}". 
      O objetivo deve:
      - Ser conciso (2-3 frases máximo)
      - Destacar qualificações principais
      - Mostrar valor que o candidato oferece
      - Ser específico para a área/cargo
      - Usar palavras-chave relevantes
      - Transmitir ambição e profissionalismo
      
      Nível de criatividade: ${creativity}/10
      Idioma: Português brasileiro
      Tom: ${creativity > 6 ? 'Confiante e diferenciado' : creativity > 3 ? 'Profissional e direto' : 'Formal e conservador'}`;
    }
    
    return `Create an impactful professional objective for resume based on the following profile: "${topic}". 
    The objective should:
    - Be concise (2-3 sentences maximum)
    - Highlight main qualifications
    - Show value the candidate offers
    - Be specific to the area/position
    - Use relevant keywords
    - Convey ambition and professionalism
    
    Creativity level: ${creativity}/10
    Language: ${language}
    Tone: ${creativity > 6 ? 'Confident and differentiated' : creativity > 3 ? 'Professional and direct' : 'Formal and conservative'}`;
  };

  return (
    <TextGenerator
      title="Gerador de Objetivo de Currículo"
      description="Crie objetivos de currículo personalizados e impactantes para se destacar"
      placeholder="Ex: Analista de Marketing júnior, Desenvolvedor Full-stack sênior, Gerente de Vendas..."
      gradient="from-blue-600 to-indigo-600"
      icon={<User className="h-6 w-6 text-white" />}
      generatePrompt={generatePrompt}
    />
  );
};

export default ResumeObjectiveGenerator;
