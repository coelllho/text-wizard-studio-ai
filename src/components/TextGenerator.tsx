
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Copy, RefreshCw, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { toast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

interface TextGeneratorProps {
  title: string;
  description: string;
  placeholder: string;
  gradient: string;
  icon: React.ReactNode;
  generatePrompt: (topic: string, language: string, creativity: number) => string;
}

const TextGenerator: React.FC<TextGeneratorProps> = ({
  title,
  description,
  placeholder,
  gradient,
  icon,
  generatePrompt
}) => {
  const [topic, setTopic] = useState('');
  const [language, setLanguage] = useState('pt-BR');
  const [creativity, setCreativity] = useState([5]);
  const [generatedText, setGeneratedText] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);

  const languages = [
    { value: 'pt-BR', label: 'Português (Brasil)' },
    { value: 'en', label: 'English' },
    { value: 'es', label: 'Español' },
    { value: 'fr', label: 'Français' },
    { value: 'de', label: 'Deutsch' },
    { value: 'it', label: 'Italiano' }
  ];

  const handleGenerate = async () => {
    if (!topic.trim()) {
      toast({
        title: "Erro",
        description: "Por favor, insira um tópico para gerar o texto.",
        variant: "destructive"
      });
      return;
    }

    setIsGenerating(true);
    
    try {
      const prompt = generatePrompt(topic, language, creativity[0]);
      
      const { data, error } = await supabase.functions.invoke('generate-text', {
        body: { prompt }
      });

      if (error) {
        throw new Error(error.message);
      }

      if (data && data.generatedText) {
        setGeneratedText(data.generatedText);
        toast({
          title: "Sucesso!",
          description: "Texto gerado com sucesso.",
        });
      } else {
        throw new Error('Nenhum texto foi gerado');
      }
    } catch (error) {
      console.error('Erro ao gerar texto:', error);
      toast({
        title: "Erro",
        description: "Erro ao gerar o texto. Tente novamente em alguns segundos.",
        variant: "destructive"
      });
    } finally {
      setIsGenerating(false);
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatedText);
    toast({
      title: "Copiado!",
      description: "O texto foi copiado para a área de transferência.",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Link to="/">
                <Button variant="ghost" size="sm">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Voltar
                </Button>
              </Link>
              <div className={`w-10 h-10 bg-gradient-to-r ${gradient} rounded-lg flex items-center justify-center`}>
                {icon}
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-800">{title}</h1>
                <p className="text-sm text-gray-600">{description}</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Configuration Panel */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <span>Configurações</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Topic Input */}
              <div>
                <label className="block text-sm font-medium mb-2">
                  Tópico ou Palavras-chave
                </label>
                <Textarea
                  placeholder={placeholder}
                  value={topic}
                  onChange={(e) => setTopic(e.target.value)}
                  className="min-h-[100px]"
                />
              </div>

              {/* Language Selection */}
              <div>
                <label className="block text-sm font-medium mb-2">
                  Idioma
                </label>
                <Select value={language} onValueChange={setLanguage}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {languages.map((lang) => (
                      <SelectItem key={lang.value} value={lang.value}>
                        {lang.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Creativity Level */}
              <div>
                <label className="block text-sm font-medium mb-2">
                  Nível de Criatividade: {creativity[0]}/10
                </label>
                <Slider
                  value={creativity}
                  onValueChange={setCreativity}
                  max={10}
                  min={1}
                  step={1}
                  className="w-full"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>Conservador</span>
                  <span>Criativo</span>
                </div>
              </div>

              {/* Generate Button */}
              <Button 
                onClick={handleGenerate} 
                disabled={isGenerating}
                className={`w-full bg-gradient-to-r ${gradient} hover:opacity-90`}
              >
                {isGenerating ? (
                  <>
                    <RefreshCw className="h-4 w-4 mr-2 animate-spin" />
                    Gerando...
                  </>
                ) : (
                  'Gerar Texto'
                )}
              </Button>
            </CardContent>
          </Card>

          {/* Result Panel */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span>Resultado</span>
                {generatedText && (
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm" onClick={copyToClipboard}>
                      <Copy className="h-4 w-4 mr-2" />
                      Copiar
                    </Button>
                    <Button variant="outline" size="sm" onClick={handleGenerate}>
                      <RefreshCw className="h-4 w-4 mr-2" />
                      Gerar Novo
                    </Button>
                  </div>
                )}
              </CardTitle>
            </CardHeader>
            <CardContent>
              {generatedText ? (
                <div className="bg-gray-50 p-4 rounded-lg">
                  <pre className="whitespace-pre-wrap text-sm text-gray-800 font-mono">
                    {generatedText}
                  </pre>
                </div>
              ) : (
                <div className="text-center py-12 text-gray-500">
                  <div className={`w-16 h-16 bg-gradient-to-r ${gradient} rounded-full mx-auto mb-4 flex items-center justify-center opacity-20`}>
                    {icon}
                  </div>
                  <p>Configure as opções e clique em "Gerar Texto" para começar</p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default TextGenerator;
