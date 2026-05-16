import React, { useState, useEffect } from 'react';

const InstagramIcon = () => (
  <svg className="w-8 h-8 sm:w-10 sm:h-10 text-[#39ff14] group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
  </svg>
);

function App() {
  // Controle da Tela de Entrada (Splash Screen)
  const [splashStep, setSplashStep] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Sequência de animação da tela inicial
    const timers = [
      setTimeout(() => setSplashStep(1), 1800), // Passo 1: Mostra a Frase
      setTimeout(() => setSplashStep(2), 4000), // Passo 2: Mostra a Logo Escrita
      setTimeout(() => {
        setIsLoaded(true); // Passo 3: Libera o site
      }, 5500) 
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  const drinks = [
    { id: 1, img: '/roxo.png', label: 'Pitaya Premium', desc: 'Frutas Vermelhas & Pitaya Silvestre' },
    { id: 2, img: '/laranja.png', label: 'Citrus Tropical', desc: 'Maracujá & Mix de Cítricos' },
    { id: 3, img: '/amostra.png', label: 'Morango Fresh', desc: 'Morango com Toque Especial' },
    { id: 4, img: '/todos.png', label: 'Combo Experience', desc: 'A Noite Completa On Disk' },
  ];

  // Texto das faixas
  const marqueeText = " • ON DISK DRINKS • A BEBIDA QUE VOCÊ RESPEITA • ENTREGA RÁPIDA • EXPERIÊNCIA PREMIUM";
  const fullMarquee = marqueeText.repeat(8);

  return (
    <div className="min-h-screen bg-transparent text-white relative selection:bg-[#39ff14] selection:text-black">
      
      {/* TELA DE SPLASH SEQUENCIAL (CARREGAMENTO) */}
      <div className={`fixed inset-0 z-[999] bg-[#020202] flex items-center justify-center transition-all duration-1000 ease-in-out ${isLoaded ? 'opacity-0 pointer-events-none scale-110' : 'opacity-100 scale-100'}`}>
        
        {/* Passo 0: Apenas a Logo Símbolo */}
        <div className={`absolute transition-all duration-700 transform ${splashStep === 0 ? 'opacity-100 scale-100' : 'opacity-0 scale-90 pointer-events-none'}`}>
          <div className="relative">
            <div className="absolute inset-0 bg-[#39ff14] blur-[50px] opacity-20 animate-pulse rounded-full"></div>
            <img src="/logo on disk.png" alt="Símbolo On Disk" className="w-32 md:w-48 relative z-10 drop-shadow-[0_0_30px_#39ff14] animate-bounce" />
          </div>
        </div>

        {/* Passo 1: A Frase de Impacto */}
        <div className={`absolute px-6 text-center transition-all duration-700 transform ${splashStep === 1 ? 'opacity-100 scale-100' : 'opacity-0 scale-110 pointer-events-none'}`}>
          <h2 className="text-2xl md:text-5xl font-black uppercase tracking-tight leading-snug">
            As melhores bebidas <br/>
            <span className="text-neon text-[#39ff14]">você encontra aqui.</span>
          </h2>
        </div>

        {/* Passo 2: A Logo Escrita */}
        <div className={`absolute transition-all duration-700 transform ${splashStep >= 2 ? 'opacity-100 scale-100' : 'opacity-0 scale-90 pointer-events-none'}`}>
          <img src="/logo com nome.png" alt="On Disk Nome" className="h-10 md:h-16 drop-shadow-[0_0_20px_rgba(57,255,20,0.6)] animate-pulse" />
        </div>

      </div>

      {/* FUNDO GLOBAL ANIMADO */}
      <div className="fixed inset-0 bg-grid-pattern animate-grid pointer-events-none z-0"></div>
      <div className="fixed top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-[#39ff14]/10 rounded-full blur-[150px] pointer-events-none z-0"></div>
      <div className="fixed bottom-[-10%] right-[-10%] w-[40vw] h-[40vw] bg-emerald-600/10 rounded-full blur-[150px] pointer-events-none z-0"></div>

      {/* BARRA DE AVISO 18+ */}
      <div className="relative z-50 bg-[#39ff14] text-black text-center py-2 text-[10px] sm:text-xs font-black tracking-widest uppercase shadow-[0_0_15px_rgba(57,255,20,0.3)]">
        🚫 Proibida a venda de bebidas para menores de 18 anos
      </div>

      {/* NAVBAR */}
      <nav className="relative z-40 w-full border-b border-white/5 bg-black/40 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <img src="/logo com nome.png" alt="On Disk" className="h-5 sm:h-7 drop-shadow-[0_0_8px_rgba(57,255,20,0.4)]" />
          <a href="#unidades" className="hidden sm:flex bg-white/5 border border-white/10 hover:border-[#39ff14]/50 hover:bg-[#39ff14]/10 text-white px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all">
            Nossas Unidades
          </a>
        </div>
      </nav>

      {/* TELA INICIAL (HERO) */}
      <header className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-24 flex flex-col lg:flex-row items-center justify-between gap-12">
        <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#39ff14]/10 border border-[#39ff14]/30 mb-6">
            <span className="w-2 h-2 rounded-full bg-[#39ff14] animate-pulse"></span>
            <span className="text-[#39ff14] text-[10px] sm:text-xs font-bold uppercase tracking-widest">Aberto Agora</span>
          </div>
          
          <img 
            src="/logo on disk.png" 
            alt="Logo On Disk" 
            className="w-24 sm:w-32 mb-6 drop-shadow-[0_0_15px_rgba(57,255,20,0.3)] hover:drop-shadow-[0_0_40px_rgba(57,255,20,0.8)] hover:scale-110 hover:-rotate-3 cursor-pointer transition-all duration-500" 
          />
          
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black uppercase tracking-tighter leading-[1.1] mb-6">
            A NOITE PEDE <br/>
            <span className="text-neon text-[#39ff14]">ON DRINKS</span>
          </h1>
          
          <p className="text-zinc-400 text-sm sm:text-base lg:text-lg max-w-lg font-light mb-10 leading-relaxed">
            A maior conveniência da região. Sabores únicos, adega completa e tabacaria premium. Peça agora e receba trincando na sua porta.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <a href="#unidades" className="bg-[#39ff14] text-black font-black px-8 py-4 rounded-xl text-center shadow-[0_0_20px_rgba(57,255,20,0.3)] hover:bg-white hover:scale-105 transition-all uppercase tracking-wider text-sm">
              Fazer Pedido
            </a>
            <a href="#cardapio" className="bg-white/5 border border-white/10 text-white font-bold px-8 py-4 rounded-xl text-center hover:bg-white/10 transition-all uppercase tracking-wider text-sm">
              Ver Sabores
            </a>
          </div>
        </div>

        <div className="w-full lg:w-1/2 flex justify-center items-center relative mt-10 lg:mt-0">
          <div className="absolute w-64 h-64 sm:w-96 sm:h-96 bg-[#39ff14]/20 rounded-full blur-[80px] pointer-events-none"></div>
          <img 
            src="/todos.png" 
            alt="Combo On Disk" 
            className="w-full max-w-[300px] sm:max-w-[450px] lg:max-w-[600px] object-contain animate-float drop-shadow-[0_20px_40px_rgba(0,0,0,0.8)] relative z-10" 
          />
        </div>
      </header>

      {/* DUAS FAIXAS INFINITAS CRUZADAS (ESTILO GR6) */}
      <div className="relative z-20 flex flex-col items-center justify-center h-48 sm:h-64 overflow-hidden w-full my-8">
        {/* Faixa 1 (Verde) - Inclinada para baixo */}
        <div className="absolute w-[120%] bg-[#39ff14] py-3 shadow-[0_0_30px_rgba(57,255,20,0.4)] border-y border-black z-10 -rotate-2">
          <div className="animate-marquee whitespace-nowrap flex items-center">
            <span className="text-black font-black text-xl sm:text-2xl uppercase tracking-widest">{fullMarquee}</span>
            <span className="text-black font-black text-xl sm:text-2xl uppercase tracking-widest">{fullMarquee}</span>
          </div>
        </div>
        
        {/* Faixa 2 (Preta) - Inclinada para cima (Cruza por baixo) */}
        <div className="absolute w-[120%] bg-[#050505] py-3 shadow-[0_0_30px_rgba(57,255,20,0.1)] border-y border-[#39ff14] z-0 rotate-2">
          <div className="animate-marquee-reverse whitespace-nowrap flex items-center">
            <span className="text-[#39ff14] font-black text-xl sm:text-2xl uppercase tracking-widest">{fullMarquee}</span>
            <span className="text-[#39ff14] font-black text-xl sm:text-2xl uppercase tracking-widest">{fullMarquee}</span>
          </div>
        </div>
      </div>

      {/* GALERIA DE DRINKS */}
      <section id="cardapio" className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight">
            Sabores <span className="text-[#39ff14] text-neon">Exclusivos</span>
          </h2>
          <p className="text-zinc-400 mt-3 text-sm">Design livre de bordas. Sinta o frescor.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {drinks.map((drink) => (
            <div 
              key={drink.id} 
              className="group glass-effect rounded-[2rem] p-6 flex flex-col justify-between cursor-pointer transition-all duration-500 overflow-hidden relative"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-[#39ff14]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="h-64 sm:h-72 flex items-center justify-center relative z-10">
                <img 
                  src={drink.img} 
                  alt={drink.label} 
                  className="max-h-full max-w-full object-contain drop-shadow-[0_15px_25px_rgba(0,0,0,0.6)] group-hover:scale-110 group-hover:-translate-y-4 transition-transform duration-500" 
                />
              </div>

              <div className="mt-6 text-center relative z-10">
                <h4 className="text-xl font-bold tracking-wide text-white group-hover:text-[#39ff14] transition-colors uppercase">{drink.label}</h4>
                <p className="text-xs text-zinc-400 mt-2 font-light">{drink.desc}</p>
              </div>

              <div className="absolute inset-0 bg-black/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-6 text-center z-20">
                <h3 className="text-[#39ff14] text-2xl font-black tracking-tight text-neon mb-2 uppercase">FICOU COM VONTADE?</h3>
                <p className="text-zinc-300 text-sm font-light mb-6">Bebida única, só encontra com a gente!</p>
                <a href="#unidades" className="bg-[#39ff14] text-black font-black text-xs px-6 py-3 rounded-full uppercase hover:bg-white transition-all w-full shadow-[0_0_15px_rgba(57,255,20,0.4)]">
                  Pedir Agora
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* REDES SOCIAIS (INSTAGRAM) */}
      <section className="relative z-10 bg-gradient-to-b from-transparent to-black/80 py-24 px-4 sm:px-6 lg:px-8 border-t border-white/5">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight mb-4">
            Acompanhe a <span className="text-neon text-[#39ff14]">On Disk</span>
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base max-w-2xl mx-auto mb-12">
            Venha ver as novidades, bastidores e promoções exclusivas direto na nossa rede social. Siga a unidade mais próxima de você!
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <a 
              href="https://www.instagram.com/ondisk_machado/" 
              target="_blank" 
              rel="noreferrer"
              className="group flex items-center justify-center gap-4 bg-zinc-900/40 border border-zinc-800 p-8 rounded-[2rem] hover:bg-[#39ff14]/10 hover:border-[#39ff14]/50 transition-all duration-300 backdrop-blur-md"
            >
              <InstagramIcon />
              <div className="text-left">
                <p className="text-zinc-500 text-[10px] sm:text-xs font-bold uppercase tracking-widest mb-1 group-hover:text-zinc-300 transition-colors">Siga a Matriz</p>
                <span className="text-lg sm:text-xl font-black uppercase text-white group-hover:text-[#39ff14] transition-colors">@ondisk_machado</span>
              </div>
            </a>

            <a 
              href="https://www.instagram.com/ondisk_pocosdecaldas/" 
              target="_blank" 
              rel="noreferrer"
              className="group flex items-center justify-center gap-4 bg-zinc-900/40 border border-zinc-800 p-8 rounded-[2rem] hover:bg-[#39ff14]/10 hover:border-[#39ff14]/50 transition-all duration-300 backdrop-blur-md"
            >
              <InstagramIcon />
              <div className="text-left">
                <p className="text-zinc-500 text-[10px] sm:text-xs font-bold uppercase tracking-widest mb-1 group-hover:text-zinc-300 transition-colors">Siga a Filial</p>
                <span className="text-lg sm:text-xl font-black uppercase text-white group-hover:text-[#39ff14] transition-colors">@ondisk_pocosdecaldas</span>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* UNIDADES */}
      <section id="unidades" className="relative z-10 bg-black/60 backdrop-blur-xl border-t border-white/5 py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight">
              Onde <span className="text-[#39ff14]">Estamos</span>
            </h2>
            <p className="text-zinc-400 mt-3 text-sm">Selecione a unidade mais próxima para entrega rápida</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="glass-effect rounded-3xl p-6 sm:p-10 flex flex-col justify-between relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#39ff14]/10 rounded-bl-full pointer-events-none group-hover:scale-150 transition-transform duration-700"></div>
              <div>
                <div className="flex flex-wrap justify-between items-center gap-2 mb-8">
                  <span className="bg-[#39ff14]/20 text-[#39ff14] px-3 py-1 rounded-md text-[10px] sm:text-xs font-bold uppercase tracking-widest">Matriz</span>
                  <span className="text-zinc-500 text-[10px] sm:text-xs font-mono">CNPJ: 56.981.861/0001-52</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-black uppercase mb-6 text-white group-hover:text-[#39ff14] transition-colors">On Disk Machado</h3>
                <div className="space-y-4 mb-10">
                  <p className="text-zinc-300 text-sm flex items-start gap-3">
                    <span className="text-[#39ff14] text-lg">📍</span>
                    <span className="leading-relaxed">Praça Rodoviária - Centro<br/>Machado - MG, 37750-000</span>
                  </p>
                  <p className="text-zinc-300 text-sm flex items-center gap-3">
                    <span className="text-[#39ff14] text-lg">📱</span>
                    <span>(35) 99770-9086</span>
                  </p>
                </div>
              </div>
              <a href="https://wa.me/5535997709086" target="_blank" rel="noreferrer" className="w-full text-center bg-[#39ff14] text-black font-black px-4 py-4 rounded-xl text-xs sm:text-sm tracking-widest uppercase hover:bg-white transition-all shadow-[0_0_20px_rgba(57,255,20,0.2)]">
                Pedir em Machado
              </a>
            </div>

            <div className="glass-effect rounded-3xl p-6 sm:p-10 flex flex-col justify-between relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-bl-full pointer-events-none group-hover:scale-150 transition-transform duration-700"></div>
              <div>
                <div className="flex flex-wrap justify-between items-center gap-2 mb-8">
                  <span className="bg-white/10 text-white px-3 py-1 rounded-md text-[10px] sm:text-xs font-bold uppercase tracking-widest">Filial</span>
                  <span className="text-zinc-500 text-[10px] sm:text-xs font-mono">CNPJ: 59.549.387/0001-82</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-black uppercase mb-6 text-white group-hover:text-[#39ff14] transition-colors">On Disk Poços de Caldas</h3>
                <div className="space-y-4 mb-10">
                  <p className="text-zinc-300 text-sm flex items-start gap-3">
                    <span className="text-[#39ff14] text-lg">📍</span>
                    <span className="leading-relaxed">Av. João Pinheiro, 452 - Centro<br/>Poços de Caldas - MG, 37701-386</span>
                  </p>
                  <p className="text-zinc-300 text-sm flex items-center gap-3">
                    <span className="text-[#39ff14] text-lg">📱</span>
                    <span>(35) 99731-6217</span>
                  </p>
                </div>
              </div>
              <a href="tel:35997316217" className="w-full text-center bg-white/10 border border-white/20 text-white font-black px-4 py-4 rounded-xl text-xs sm:text-sm tracking-widest uppercase hover:bg-white/20 hover:border-white/40 transition-all">
                Ligar para Poços
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="relative z-10 bg-black pt-12 pb-6 px-4 sm:px-6 lg:px-8 border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <img src="/logo com nome.png" alt="On Disk Logo" className="h-5 mb-4 opacity-40 grayscale hover:grayscale-0 transition-all" />
            <p className="text-zinc-500 text-[10px] sm:text-xs max-w-sm leading-relaxed">
              Operação exclusiva para maiores de 18 anos. Beba com moderação. Se beber, não dirija.
            </p>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto border-t border-white/5 mt-10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-[10px] text-zinc-600 uppercase tracking-widest">
          <span>© {new Date().getFullYear()} On Disk Drinks. Direitos Reservados.</span>
          <span>
            Desenvolvido por <a href="http://www.grupozynsa.com" target="_blank" rel="noreferrer" className="text-[#39ff14] font-bold hover:underline transition-all">Grupo Zynsa</a>
          </span>
        </div>
      </footer>

    </div>
  );
}

export default App;