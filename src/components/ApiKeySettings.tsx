
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Eye, EyeOff, Key, Save } from 'lucide-react';
import { toast } from 'sonner';

const ApiKeySettings = () => {
  const [apiKey, setApiKey] = useState(localStorage.getItem('openai_api_key') || '');
  const [showApiKey, setShowApiKey] = useState(false);

  const handleSaveApiKey = () => {
    if (!apiKey.trim()) {
      toast.error('Por favor, insira uma API Key válida');
      return;
    }

    if (!apiKey.startsWith('sk-')) {
      toast.error('A API Key da OpenAI deve começar com "sk-"');
      return;
    }

    localStorage.setItem('openai_api_key', apiKey.trim());
    toast.success('API Key salva com sucesso!');
  };

  const handleRemoveApiKey = () => {
    localStorage.removeItem('openai_api_key');
    setApiKey('');
    toast.success('API Key removida com sucesso!');
  };

  return (
    <Card className="w-full max-w-2xl">
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <Key className="h-5 w-5" />
          <span>Configurações da API OpenAI</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="apiKey">API Key da OpenAI</Label>
          <div className="flex space-x-2">
            <div className="relative flex-1">
              <Input
                id="apiKey"
                type={showApiKey ? 'text' : 'password'}
                placeholder="sk-..."
                value={apiKey}
                onChange={(e) => setApiKey(e.target.value)}
                className="pr-10"
              />
              <Button
                type="button"
                variant="ghost"
                size="icon"
                className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                onClick={() => setShowApiKey(!showApiKey)}
              >
                {showApiKey ? (
                  <EyeOff className="h-4 w-4" />
                ) : (
                  <Eye className="h-4 w-4" />
                )}
              </Button>
            </div>
            <Button onClick={handleSaveApiKey} className="shrink-0">
              <Save className="h-4 w-4 mr-2" />
              Salvar
            </Button>
          </div>
        </div>

        {apiKey && (
          <div className="flex justify-between items-center p-3 bg-muted rounded-lg">
            <span className="text-sm text-muted-foreground">
              API Key configurada ✓
            </span>
            <Button 
              variant="outline" 
              size="sm" 
              onClick={handleRemoveApiKey}
            >
              Remover
            </Button>
          </div>
        )}

        <div className="text-sm text-muted-foreground space-y-2">
          <p>
            <strong>Como obter sua API Key:</strong>
          </p>
          <ol className="list-decimal list-inside space-y-1 ml-2">
            <li>Acesse <a href="https://platform.openai.com/api-keys" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">platform.openai.com/api-keys</a></li>
            <li>Faça login ou crie uma conta</li>
            <li>Clique em "Create new secret key"</li>
            <li>Copie a chave gerada e cole aqui</li>
          </ol>
          <p className="text-xs mt-2">
            Sua API Key é armazenada localmente no seu navegador e nunca é enviada para nossos servidores.
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default ApiKeySettings;
