
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Loader2, Copy, ArrowLeft, Sparkles, Wand2 } from "lucide-react";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { Link } from "react-router-dom";
import { ThemeToggle } from "./ThemeToggle";

interface TextGeneratorProps {
  title: string;
  description: string;
  placeholder: string;
  gradient: string;
  icon: React.ReactNode;
  generatePrompt: (topic: string, language: string, creativity: number) => string;
}

const TextGenerator = ({ title, description, placeholder, gradient, icon, generatePrompt }: TextGeneratorProps) => {
  const [topic, setTopic] = useState("");
  const [language, setLanguage] = useState("pt-BR");
  const [creativity, setCreativity] = useState([5]);
  const [generatedText, setGeneratedText] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleGenerate = async () => {
    if (!topic.trim()) {
      toast.error("Por favor, insira um tópico antes de gerar o texto.");
      return;
    }

    setIsLoading(true);
    
    try {
      const prompt = generatePrompt(topic, language, creativity[0]);
      
      const { data, error } = await supabase.functions.invoke('generate-text', {
        body: { prompt }
      });

      if (error) {
        console.error('Supabase function error:', error);
        throw error;
      }

      if (!data?.text) {
        throw new Error('Nenhum texto foi gerado');
      }

      setGeneratedText(data.text);
      toast.success("Texto gerado com sucesso!");
      
    } catch (error) {
      console.error('Error generating text:', error);
      toast.error("Erro ao gerar texto. Tente novamente.");
    } finally {
      setIsLoading(false);
    }
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(generatedText);
      toast.success("Texto copiado para a área de transferência!");
    } catch (error) {
      toast.error("Erro ao copiar texto.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-xl">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link to="/">
                <Button variant="ghost" size="icon" className="rounded-xl hover:bg-primary/10 hover:text-primary transition-all duration-200">
                  <ArrowLeft className="h-5 w-5" />
                </Button>
              </Link>
              <div className="flex items-center space-x-3">
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center shadow-lg`}>
                  {icon}
                </div>
                <div>
                  <h1 className="text-xl font-bold text-foreground">{title}</h1>
                  <p className="text-xs text-muted-foreground">{description}</p>
                </div>
              </div>
            </div>
            <ThemeToggle />
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {/* Input Section */}
          <Card className="h-fit bg-card/50 backdrop-blur-sm border-border/50 shadow-xl">
            <CardHeader className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${gradient} flex items-center justify-center shadow-lg`}>
                  {icon}
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-foreground">{title}</h2>
                  <p className="text-muted-foreground">{description}</p>
                </div>
              </div>
            </CardHeader>

            <CardContent className="space-y-6">
              {/* Topic Input */}
              <div className="space-y-3">
                <label className="text-sm font-medium text-foreground flex items-center space-x-2">
                  <Sparkles className="h-4 w-4 text-primary" />
                  <span>Tópico ou Ideia</span>
                </label>
                <Textarea
                  placeholder={placeholder}
                  value={topic}
                  onChange={(e) => setTopic(e.target.value)}
                  className="min-h-[120px] bg-background/50 border-border/50 focus:border-primary/50 focus:ring-primary/20 rounded-xl resize-none"
                />
              </div>

              {/* Language Selection */}
              <div className="space-y-3">
                <label className="text-sm font-medium text-foreground">Idioma</label>
                <Select value={language} onValueChange={setLanguage}>
                  <SelectTrigger className="bg-background/50 border-border/50 focus:border-primary/50 rounded-xl">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="bg-background border-border/50 rounded-xl">
                    <SelectItem value="pt-BR">Português (Brasil)</SelectItem>
                    <SelectItem value="en">English</SelectItem>
                    <SelectItem value="es">Español</SelectItem>
                    <SelectItem value="fr">Français</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Creativity Slider */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <label className="text-sm font-medium text-foreground">Criatividade</label>
                  <div className="flex items-center space-x-2 bg-primary/10 px-3 py-1 rounded-full">
                    <Wand2 className="h-3 w-3 text-primary" />
                    <span className="text-sm font-medium text-primary">{creativity[0]}/10</span>
                  </div>
                </div>
                <Slider
                  value={creativity}
                  onValueChange={setCreativity}
                  min={1}
                  max={10}
                  step={1}
                  className="w-full"
                />
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>Conservador</span>
                  <span>Equilibrado</span>
                  <span>Criativo</span>
                </div>
              </div>

              {/* Generate Button */}
              <Button
                onClick={handleGenerate}
                disabled={isLoading || !topic.trim()}
                className={`w-full bg-gradient-to-r ${gradient} hover:opacity-90 text-white font-medium py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50`}
                size="lg"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    Gerando Texto...
                  </>
                ) : (
                  <>
                    <Sparkles className="mr-2 h-5 w-5" />
                    Gerar Texto
                  </>
                )}
              </Button>
            </CardContent>
          </Card>

          {/* Output Section */}
          <Card className="bg-card/50 backdrop-blur-sm border-border/50 shadow-xl">
            <CardHeader>
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold text-foreground">Texto Gerado</h3>
                {generatedText && (
                  <Button
                    onClick={copyToClipboard}
                    variant="outline"
                    size="sm"
                    className="rounded-xl border-border/50 hover:border-primary/50 hover:bg-primary/10 hover:text-primary transition-all duration-200"
                  >
                    <Copy className="mr-2 h-4 w-4" />
                    Copiar
                  </Button>
                )}
              </div>
            </CardHeader>

            <CardContent>
              {generatedText ? (
                <div className="bg-background/50 rounded-xl p-6 border border-border/50">
                  <pre className="whitespace-pre-wrap text-sm text-foreground leading-relaxed font-mono">
                    {generatedText}
                  </pre>
                </div>
              ) : (
                <div className="bg-background/30 rounded-xl p-12 border border-dashed border-border/50 text-center">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${gradient} flex items-center justify-center mx-auto mb-4 opacity-50`}>
                    {icon}
                  </div>
                  <p className="text-muted-foreground mb-2">Seu texto aparecerá aqui</p>
                  <p className="text-sm text-muted-foreground">
                    Preencha os campos acima e clique em "Gerar Texto"
                  </p>
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
