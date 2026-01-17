# Guia de Configuração - Google Analytics no Google Tag Manager

## 📋 Pré-requisitos

1. Conta no Google Analytics 4 (GA4)
2. Acesso ao Google Tag Manager (GTM-PCR4B9PL)
3. Measurement ID do Google Analytics (formato: G-XXXXXXXXXX)

---

## 🔧 Passo 1: Obter o Measurement ID do Google Analytics

1. Acesse: https://analytics.google.com
2. Selecione sua propriedade ou crie uma nova
3. Vá em **Administração** (⚙️) > **Fluxos de dados**
4. Clique no seu fluxo de dados web
5. Copie o **Measurement ID** (ex: G-XXXXXXXXXX)

---

## 🏷️ Passo 2: Criar Tag de Configuração do GA4

1. No Google Tag Manager, vá em **Tags** > **Nova**
2. Nome: `GA4 - Configuration`
3. Tipo: **Google Analytics: GA4 Configuration**
4. Measurement ID: Cole seu ID (G-XXXXXXXXXX)
5. Trigger: **All Pages**
6. Salvar

---

## 🎯 Passo 3: Criar Triggers (Gatilhos)

### Trigger 1: Button Click
1. Vá em **Triggers** > **Novo**
2. Nome: `Button Click`
3. Tipo: **Custom Event**
4. Nome do evento: `button_click`
5. Salvar

### Trigger 2: Form Submit
1. Vá em **Triggers** > **Novo**
2. Nome: `Form Submit`
3. Tipo: **Custom Event**
4. Nome do evento: `form_submit`
5. Salvar

### Trigger 3: Form Step
1. Vá em **Triggers** > **Novo**
2. Nome: `Form Step`
3. Tipo: **Custom Event**
4. Nome do evento: `form_step`
5. Salvar

---

## 📊 Passo 4: Criar Variáveis do Data Layer

1. Vá em **Variáveis** > **Nova**
2. Crie as seguintes variáveis (tipo: **Data Layer Variable**):

| Nome da Variável | Nome do Data Layer | Tipo |
|-----------------|-------------------|------|
| Button Name | `button_name` | Data Layer Variable |
| Location | `location` | Data Layer Variable |
| Form Name | `form_name` | Data Layer Variable |
| Form Type | `form_type` | Data Layer Variable |
| Interesse | `interesse` | Data Layer Variable |
| Investimento | `investimento` | Data Layer Variable |
| Step Number | `step_number` | Data Layer Variable |
| Total Steps | `total_steps` | Data Layer Variable |

---

## 🏷️ Passo 5: Criar Tags de Eventos

### Tag 1: Button Click Event
1. Vá em **Tags** > **Nova**
2. Nome: `GA4 - Button Click`
3. Tipo: **Google Analytics: GA4 Event**
4. Measurement ID: Seu ID do GA4
5. Nome do evento: `button_click`
6. Parâmetros do evento:
   - `button_name`: `{{Button Name}}`
   - `location`: `{{Location}}`
7. Trigger: `Button Click`
8. Salvar

### Tag 2: Form Submit Event
1. Vá em **Tags** > **Nova**
2. Nome: `GA4 - Form Submit`
3. Tipo: **Google Analytics: GA4 Event**
4. Measurement ID: Seu ID do GA4
5. Nome do evento: `form_submit`
6. Parâmetros do evento:
   - `form_name`: `{{Form Name}}`
   - `form_type`: `{{Form Type}}`
   - `interesse`: `{{Interesse}}`
   - `investimento`: `{{Investimento}}`
7. Trigger: `Form Submit`
8. Salvar

### Tag 3: Form Step Event
1. Vá em **Tags** > **Nova**
2. Nome: `GA4 - Form Step`
3. Tipo: **Google Analytics: GA4 Event**
4. Measurement ID: Seu ID do GA4
5. Nome do evento: `form_step`
6. Parâmetros do evento:
   - `step_number`: `{{Step Number}}`
   - `total_steps`: `{{Total Steps}}`
7. Trigger: `Form Step`
8. Salvar

---

## ✅ Passo 6: Testar e Publicar

### Testar no Preview Mode:
1. Clique em **Visualizar** no GTM
2. Cole a URL do seu site
3. Teste clicando nos botões e preenchendo o formulário
4. Verifique se os eventos aparecem no GTM Preview

### Publicar:
1. Clique em **Enviar**
2. Adicione um nome de versão (ex: "Configuração inicial GA4")
3. Adicione uma descrição
4. Clique em **Publicar**

---

## 📈 Passo 7: Verificar no Google Analytics

1. Acesse o Google Analytics
2. Vá em **Relatórios** > **Tempo real**
3. Teste clicando nos botões do site
4. Os eventos devem aparecer em tempo real

### Ver eventos personalizados:
1. Vá em **Configurar** > **Eventos**
2. Você verá os eventos: `button_click`, `form_submit`, `form_step`

---

## 🎯 Eventos que serão rastreados:

### Botões:
- ✅ Header - "Falar com Especialista"
- ✅ Hero - "QUERO CRIAR MINHA LINHA"
- ✅ Value Proposition - "Solicitar Orçamento"
- ✅ Brand Expertise - "QUERO COMEÇAR AGORA" e "FALAR COM ESPECIALISTA"
- ✅ Packages - "Receber proposta" (com nome do pacote)
- ✅ Final CTA - "FAZER ORÇAMENTO AGORA"

### Formulário:
- ✅ Cada etapa do formulário (1-5)
- ✅ Formulário completo com todas as informações

---

## 💡 Dicas:

1. **Aguarde 24-48 horas** para ver dados completos no GA4
2. Use o **DebugView** no GA4 para ver eventos em tempo real
3. Crie **Relatórios personalizados** no GA4 para analisar os dados
4. Configure **Conversões** para `form_submit` como evento de conversão

---

## 🆘 Problemas Comuns:

**Eventos não aparecem:**
- Verifique se o GTM está publicado
- Verifique se o Measurement ID está correto
- Use o Preview Mode para debugar

**Variáveis não funcionam:**
- Certifique-se de que os nomes do Data Layer estão corretos
- Verifique se as variáveis estão habilitadas

---

## 📞 Suporte

Se precisar de ajuda, verifique:
- Console do navegador (F12) para erros
- Preview Mode do GTM para debug
- DebugView do GA4 para ver eventos em tempo real

