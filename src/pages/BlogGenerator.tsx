
import TextGenerator from "@/components/TextGenerator";
import { FileText } from "lucide-react";

const BlogGenerator = () => {
  const generatePrompt = (topic: string, language: string, creativity: number) => {
    const isPortuguese = language === 'pt-BR';
    
    if (isPortuguese) {
      return `Escreva um artigo completo para blog sobre "${topic}". 
      O artigo deve incluir:
      - Título SEO otimizado
      - Introdução que desperte interesse
      - Desenvolvimento com subtópicos organizados
      - Informações relevantes e atualizadas
      - Conclusão que resuma os pontos principais
      - Meta descrição para SEO
      
      Nível de criatividade: ${creativity}/10
      Idioma: Português brasileiro
      Estilo de escrita: ${creativity > 7 ? 'Criativo e envolvente' : creativity > 4 ? 'Informativo e acessível' : 'Técnico e profissional'}
      Tamanho: Artigo médio (800-1200 palavras)`;
    }
    
    return `Write a complete blog article about "${topic}". 
    The article should include:
    - SEO optimized title
    - Introduction that sparks interest
    - Development with organized subtopics
    - Relevant and updated information
    - Conclusion that summarizes main points
    - Meta description for SEO
    
    Creativity level: ${creativity}/10
    Language: ${language}
    Writing style: ${creativity > 7 ? 'Creative and engaging' : creativity > 4 ? 'Informative and accessible' : 'Technical and professional'}
    Length: Medium article (800-1200 words)`;
  };

  return (
    <TextGenerator
      title="Gerador de Texto para Blog"
      description="Produza artigos completos e otimizados para SEO"
      placeholder="Ex: Como criar um negócio online, Tendências de marketing digital 2024, Guia completo de Python..."
      gradient="from-green-500 to-emerald-500"
      icon={<FileText className="h-6 w-6 text-white" />}
      generatePrompt={generatePrompt}
    />
  );
};

export default BlogGenerator;
