# 🌐 PosturAI — Landing Page do Sistema de Monitoramento de Postura

<p align="center">
  <img src="https://img.shields.io/badge/FIAP%20Global%20Solution%202K25-2%C2%BA%20Semestre-blue?style=for-the-badge&logo=github&logoColor=white" alt="Global Solution 2K25 Badge">
</p>

**Interface moderna, microinterações responsivas e experiência sensorial orientada à curiosidade.**

O repositório abriga o código-fonte da **Landing Page oficial do PosturAI**, uma plataforma criada para apresentar o aplicativo, contextualizar sua proposta de valor, fornecer tutorial de uso, permitir o download do software e disponibilizar um configurador inteligente para gerar o arquivo de preferências do usuário.

A essência desse site não é apenas exibir conteúdo — é conduzir o visitante por um **fluxo emocional**, despertando **curiosidade** e incentivando a **exploração contínua** através de efeitos dinâmicos, partículas animadas, transições suaves e microinterações responsivas.

---

## ✨ Visão Geral do Projeto

A Landing Page do PosturAI foi construída com foco em três pilares fundamentais, garantindo uma experiência de usuário **imersiva** e **cativante**:

1.  **Experiência Sensorial**
    > Tudo é vivo.
    A homepage abre com um fundo dinâmico de **partículas em movimento**, criando uma atmosfera leve, tecnológica e imersiva.
2.  **Curiosidade Guiada**
    > Nenhum elemento entrega tudo de imediato.
    Textos diretos e "mini gatilhos" mentais calculados. As seções se complementam visualmente e conceitualmente, incentivando a exploração contínua.
3.  **Microinterações Inteligentes**
    > Botões, cartões, partículas e seções reagem ao usuário.
    A sensação transmitida é: **“mexer no site é gostoso.”** Aumentando o tempo de permanência e o engajamento.

---

## 🏛️ Tecnologias Utilizadas

O projeto utiliza um *stack* moderno e otimizado para performance e animações ricas:

* **React.js**: Biblioteca principal para construção da interface.
* **TailwindCSS**: Framework CSS utilitário (com design system próprio do projeto).
* **GSAP + ScrollToPlugin**: Para animações **cinematográficas** e âncoras suaves.
* **OGL (WebGL lightweight)**: Para renderizar o sistema de **partículas animadas** de fundo.
* **ScrollReveal (customizado)**: Para gerenciar animações de entrada de elementos.
* Ícones React e React Router DOM.

---

## 🎨 Principais Características

| Seção/Funcionalidade | Destaques |
| :--- | :--- |
| **Homepage Cinemática** | Fundo com partículas vivas, efeitos discretos de *glow*, *scrolls* extremamente suaves (*ease slow curve*) e microinterações em botões e *cards*. |
| **Seção “Sobre Nós”** | Texto instigante, estrutura narrativa e **Linha do tempo visual** moderna com efeito de **revelação progressiva**. |
| **Seção “Download”** | Área centralizada com **cartão animado**, botão principal ampliado e design focado na **conversão** do visitante. |
| **Seção “Tutorial”** | Vídeo embutido em container moderno (*blur* e borda luminosa) e **cards animados** para as etapas de configuração. |
| **Seção “Configurar Preferências”** | **Formulário inteligente** que gera um **JSON pronto** para o PosturAI, com pré-visualização em tempo real e download automático do arquivo. |
| **Footer Dinâmico** | *Glow* suave de fundo, *scroll* suave para navegação rápida e links sociais animados. |

---

## 👥 Autores

* **Ulisses Ribeiro (RM562230)** — Desenvolvimento *core* e arquitetura técnica da solução em Visão Computacional.
* **Arthur Berlofa Bosi (RM564438)** — Responsável pela integração IoT (ESP32) e pela gestão de configuração via arquivos JSON.
* **Arthur Ferreira (RM564958)** — Responsável pela organização das pastas e planejamento do software.

---

## 🔧 Como rodar o projeto localmente

Para ter a Landing Page rodando em sua máquina, siga os passos abaixo:

1.  Clone o repositório:
    ```bash
    git clone https://github.com/FIAP-Global-Solution-2k25/PosturAI-Website.git
    ```
2.  Navegue até o diretório do projeto:
    ```bash
    cd posturai-landing-page
    ```
3.  Instale as dependências:
    ```bash
    npm install
    ```
4.  Inicie o servidor de desenvolvimento:
    ```bash
    npm run dev
    ```
Acesse o projeto através do seu navegador em: **`http://localhost:5173/`**
