import { useState, useEffect } from "react";
import Database from "@tauri-apps/plugin-sql";
import MemberTable from "./components/MemberTable";
import "./App.css";

function App() {
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(true);

  // Inicializa o banco e busca os membros
  const loadMembers = async () => {
    try {
      setLoading(true);
      // Carrega o banco (o Tauri cuida da inicialização automática via lib.rs)
      const db = await Database.load("sqlite:tacticus_clan.db");
      
      // Busca os registros da tabela membros
      const result = await db.select("SELECT * FROM membros ORDER BY id DESC");
      setMembers(result);
    } catch (error) {
      console.error("Erro ao carregar banco de dados:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadMembers();
  }, []);

  return (
    <main className="min-h-screen bg-[#0b0d0f] p-8 text-cyan-400 font-mono">
      <header className="mb-12 text-center">
        <h1 className="text-5xl font-black italic tracking-[0.2em] uppercase text-cyan-300 drop-shadow-[0_0_10px_rgba(0,243,255,0.5)]">
          VaultBox
        </h1>
        <div className="mt-2 text-xs text-cyan-800 tracking-widest uppercase">
          Tacticus Clan Management System // v0.1.0-lite
        </div>
      </header>

      <div className="max-w-6xl mx-auto">
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-pulse text-cyan-500 uppercase tracking-tighter">
              Acessando Registros do Clã...
            </div>
          </div>
        ) : (
          <MemberTable members={members} />
        )}
      </div>

      <footer className="mt-12 text-center text-[10px] text-cyan-900 uppercase tracking-widest">
        &copy; 2026 CodeCraftGenz // Warhammer Brasil Portal // Terminal Link: ESTABLISHED
      </footer>
    </main>
  );
}

export default App;
