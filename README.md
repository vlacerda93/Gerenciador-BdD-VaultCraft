# VaultBox // Gerenciador de Banco de Dados

**VaultBox** é um software desktop de alto desempenho desenvolvido para o desafio **"Gerenciador de Banco de Dados Local (Lite)"** da plataforma **CodeCraftGenz**. O projeto foi customizado para atender às necessidades de gerenciamento de membros do clã de **Warhammer 40k: Tacticus**, integrando-se ao ecossistema do portal **Warhammer Brasil**.

## 🌌 Visão Geral
O sistema utiliza a estética **VaultCraft**, caracterizada por uma interface industrial em **Dark Mode** com acentos em **Ciano Neon**, evocando a atmosfera tecnológica e gótica do universo Warhammer 40.000.

## 🛠️ Stack Tecnológica
- **Frontend:** React.js com Tailwind CSS.
- **Desktop Framework:** Tauri (Rust backend).
- **Database:** SQLite.
- **Estilização:** VaultCraft Design System.

## 📋 Funcionalidades
- **Registro de Membros:** Gestão completa de nicks, e-mails e patentes do clã.
- **Controle Hierárquico:** Atribuição de patentes inspiradas no lore de Warhammer (ex: Capitão, Battle-Brother).
- **Monitoramento de Status:** Visualização em tempo real de membros Ativos, Inativos ou Em Missão.
- **Interface Tática:** Tabela responsiva com filtragem e visualização otimizada para administradores.

## 🗄️ Estrutura do Banco de Dados
O projeto utiliza um arquivo local `tacticus_clan.db` com a seguinte estrutura:

| Campo | Tipo | Descrição |
| :--- | :--- | :--- |
| **id** | INTEGER | Identificador único (Auto-increment). |
| **nick** | TEXT | Login/Nick do jogador no Tacticus. |
| **email** | TEXT | Contato do membro. |
| **patente** | TEXT | Posto hierárquico no clã. |
| **data_ingresso** | TEXT | Data de entrada no registro. |
| **status** | TEXT | Estado operacional do membro. |

## 🚀 Como Executar

### Pré-requisitos
- **Rust:** Necessário para compilar o core do Tauri.
- **Node.js:** Para gerenciar as dependências do React.

### Instalação
1. Clone o repositório:
```bash
git clone https://github.com/vlacerda93/Gerenciador-BdD-VaultCraft.git
cd Gerenciador-BdD-VaultCraft/VaultBox
```

2. Instale as dependências:
```bash
npm install
```

3. Inicie o ambiente de desenvolvimento:
```bash
npm run tauri dev
```

## 📜 Licença
Este projeto é parte do portfólio de **Vinícius Lacerda**, desenvolvido para fins educacionais e comunitários. 📖
