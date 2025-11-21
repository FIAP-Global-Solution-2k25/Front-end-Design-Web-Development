# 🌐 PosturAI - Landing Page e Módulo de Configuração (Web)
<p align="center">
  <img src="https://img.shields.io/badge/FIAP%20Global%20Solution%202K25-Landing%20Page-007ACC?style=for-the-badge&logo=react&logoColor=white" alt="Global Solution 2K25 Badge">
</p>

> Repositório dedicado ao desenvolvimento da [**Landing Page Oficial**](https://posturai-jet.vercel.app/) do projeto PosturAI. Esta página serve como ponto central para apresentação da solução, download de arquivos e fornecimento de instruções detalhadas de configuração para o usuário final.

---

## 👥 Autores

- **Ulisses Ribeiro - RM562230** — Desenvolvimento *core* e arquitetura técnica da solução em Visão Computacional.
- **Arthur Berlofa Bosi - RM564438** — Responsável pela integração IoT (ESP32) e pela gestão de configuração via arquivos JSON.
- **Arthur Ferreira - RM564958** - Responsavel pela organização das pastas, e planejamento do software.

---

## 💡 Sobre o Módulo Web
Este módulo atua como a face pública e o centro de suporte do projeto PosturAI. Ele foca em:

1.  **Apresentação:** Explicar a proposta de valor do PosturAI (cadeira inteligente e monitoramento de postura).
2.  **Suporte:** Guiar o usuário no processo de instalação do sistema de IA (PosturAI-Python).
3.  **Configuração Simplificada:** Oferecer uma interface amigável para gerar o arquivo de configuração **`preferences.json`** que será utilizado pelo módulo de IA.

---

## ✨ Recursos Principais da Landing Page
* **Apresentação de Vídeo/Demonstração:** Exibição do conceito do produto e sua aplicação.
* **Download Direto do Sistema de IA:** Link para o pacote de instalação do repositório `PosturAI-Python`.
* **Gerador de Configuração:** Formulário interativo para o usuário inserir credenciais (MQTT Broker, Limites de Alerta, Intensidade de Monitoramento) e gerar o arquivo **`preferences.json`** customizado.

---

## 🛠️ Tecnologias Utilizadas
A escolha da tecnologia prioriza a velocidade de carregamento, design responsivo e facilidade de geração de formulários:

| Categoria | Tecnologia |
| :--- | :--- |
| **Framework** | **React** | 
| **Linguagem** | **JavaScript (ES6+)** |
| **Estilização** | **Tailwind CSS** |
| **Build Tool** | **Vite** |

---

## 🚀 Instalação e Execução

Para rodar a Landing Page localmente:

### 1. Pré-requisitos
Certifique-se de ter o **Node.js** e o **npm** instalados.

### 2. Clonar o Repositório
```bash
git clone https://github.com/FIAP-Global-Solution-2k25/Front-end-Design-Web-Development.git

cd Front-end-Design-Web-Development
````

### 3\. Instalar Dependências

```bash
npm install 
```

### 4\. Iniciar o Servidor de Desenvolvimento

```bash
npm run dev
```

O servidor será iniciado, geralmente em `http://localhost:3000`.

-----

## 📝 Processo de Configuração (Foco do Usuário)

O principal objetivo desta aplicação web é gerar o arquivo de configuração para o sistema de IA.

1.  O usuário acessa a seção **"Configuração"** da Landing Page.
2.  Preenche um formulário simples com:
      * **MQTT Broker IP/URL**
      * **MQTT Broker Port**
      * **Limites de Tempo para Alerta** (Ex: 5000 alertas de má postura)
3.  O Front-end gera o objeto JSON e permite o download do arquivo **`preferences.json`**.
4.  O usuário salva este arquivo na mesma pasta de execução do módulo `PosturAI-Python`.

-----

## 🤝 Contribuição

Seu trabalho em design e desenvolvimento web é crucial para a experiência do usuário. Para contribuir:

1.  Faça um **Fork** do Projeto.
2.  Crie uma **Branch** para sua Feature (`git checkout -b feature/NpmeDaFeature`).
3.  Commit suas Mudanças (`git commit -m 'add: Mensagem do Commmit'`).
4.  Faça um **Push** para a Branch (`git push origin feature/NpmeDaFeature`).
5.  Abra um **Pull Request**.

-----

## 📄 Licença

Este projeto está sob a licença **MIT**. Consulte o arquivo `LICENSE` no repositório para mais detalhes.

-----

<div align="center">
  Desenvolvido para a Global Solution 2025 da FIAP.
  
  Você pode encontrar mais informações sobre a Global Solution da FIAP no site oficial: <a href="https://www.fiap.com.br/graduacao/global-solution/?utm_term=&utm_campaign=GRAD+-+DSA&utm_source=adwords&utm_medium=ppc&hsa_acc=3358810376&hsa_cam=21102294227&hsa_grp=158449020381&hsa_ad=737370541126&hsa_src=g&hsa_tgt=dsa-2403784242683&hsa_kw=&hsa_mt=&hsa_net=adwords&hsa_ver=3&gad_source=1&gad_campaignid=21102294227&gbraid=0AAAAADqmiBBL0vsXCBVGF-uBG2qZC6mbY&gclid=CjwKCAiAlfvIBhA6EiwAcErpyZ9ifXZTOhMagASAJJAlFp0BM2fjwkvAjUnWgSHiFA5UMkvOpMlhyhoCflUQAvD_BwE">Global Solution FIAP</a>
</div>
