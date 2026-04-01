import React from 'react';

/**
 * MemberTable Component - VaultCraft Style
 * 
 * Aesthetic: Dark Mode, Neon Cyan (Ciano Neon), Industrial/Futuristic.
 * This table displays clã members from the Warhammer 40k: Tacticus database.
 */
const MemberTable = ({ members = [] }) => {
  return (
    <div className="bg-[#0b0d0f] text-cyan-400 p-6 rounded-lg border border-cyan-900 shadow-[0_0_15px_rgba(0,243,255,0.1)] font-mono">
      <div className="flex justify-between items-center mb-6 border-b border-cyan-800 pb-2">
        <h2 className="text-2xl font-bold tracking-widest uppercase italic text-cyan-300">
          Clan Registry // TACTICUS
        </h2>
        <span className="text-xs text-cyan-600">DATABASE STATUS: ONLINE</span>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-cyan-950/30 text-cyan-300 border-b border-cyan-800">
              <th className="px-4 py-3 text-xs uppercase tracking-tighter">ID</th>
              <th className="px-4 py-3 text-xs uppercase tracking-tighter">Nick / Login</th>
              <th className="px-4 py-3 text-xs uppercase tracking-tighter">Email</th>
              <th className="px-4 py-3 text-xs uppercase tracking-tighter">Patente</th>
              <th className="px-4 py-3 text-xs uppercase tracking-tighter">Ingresso</th>
              <th className="px-4 py-3 text-xs uppercase tracking-tighter">Status</th>
            </tr>
          </thead>
          <tbody>
            {members.length > 0 ? (
              members.map((member) => (
                <tr 
                  key={member.id} 
                  className="border-b border-cyan-900/50 hover:bg-cyan-900/10 transition-colors cursor-pointer group"
                >
                  <td className="px-4 py-4 text-cyan-700 text-xs">{member.id.toString().padStart(3, '0')}</td>
                  <td className="px-4 py-4 font-bold group-hover:text-cyan-200">{member.nick}</td>
                  <td className="px-4 py-4 text-cyan-600 text-sm">{member.email}</td>
                  <td className="px-4 py-4 italic text-cyan-500">{member.patente}</td>
                  <td className="px-4 py-4 text-cyan-600 text-xs">{member.data_ingresso}</td>
                  <td className="px-4 py-4">
                    <span className={`px-2 py-1 rounded-sm text-[10px] uppercase font-bold ${
                      member.status === 'Ativo' ? 'bg-cyan-900/40 text-cyan-400 border border-cyan-400' :
                      member.status === 'Em Missão' ? 'bg-yellow-900/40 text-yellow-400 border border-yellow-400' :
                      'bg-red-900/40 text-red-400 border border-red-400'
                    }`}>
                      {member.status}
                    </span>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="px-4 py-10 text-center text-cyan-800 italic">
                  SEM REGISTROS NO BANCO DE DADOS...
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <div className="mt-6 flex justify-end">
        <button className="px-4 py-2 bg-transparent border border-cyan-500 text-cyan-500 hover:bg-cyan-500 hover:text-black transition-all text-xs font-bold uppercase tracking-widest active:scale-95 shadow-[0_0_10px_rgba(0,243,255,0.2)]">
          + Iniciar Recrutamento
        </button>
      </div>
    </div>
  );
};

export default MemberTable;
