/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  HeartPulse, 
  CreditCard, 
  Smile, 
  ShieldCheck, 
  ChevronRight, 
  Menu, 
  X, 
  Phone, 
  Mail, 
  MapPin, 
  Instagram, 
  Linkedin,
  ArrowRight,
  CheckCircle2,
  Quote,
  Clock,
  Zap,
  Shield,
  FileText,
  Users,
  TrendingUp,
  Download,
  MessageSquare
} from 'lucide-react';
import { cn } from './lib/utils';

// --- Types ---
type Page = 'home' | 'produtos' | 'consultoria' | 'blog' | 'sobre' | 'contato';

// --- Components ---

const Navbar = ({ activePage, setActivePage }: { activePage: Page, setActivePage: (p: Page) => void }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks: { label: string, id: Page }[] = [
    { label: 'Home', id: 'home' },
    { label: 'Sobre', id: 'sobre' },
    { label: 'Produtos', id: 'produtos' },
    { label: 'Consultoria', id: 'consultoria' },
    { label: 'Blog', id: 'blog' },
    { label: 'Contato', id: 'contato' },
  ];

  return (
    <nav className={cn(
      "fixed top-0 w-full z-50 transition-all duration-300 px-6 py-4",
      isScrolled ? "bg-white/95 backdrop-blur-md shadow-md py-2" : "bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div 
          className="flex items-center gap-2 cursor-pointer" 
          onClick={() => setActivePage('home')}
        >
          <img 
            src="/input_file_0.png" 
            alt="Prisma Benefícios" 
            className="h-12 md:h-16 w-auto object-contain"
            referrerPolicy="no-referrer"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
              e.currentTarget.nextElementSibling?.classList.remove('hidden');
            }}
          />
          <span className="hidden font-display font-extrabold text-2xl tracking-tighter text-prisma-brown">PRISMA</span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => setActivePage(link.id)}
              className={cn(
                "text-sm font-bold transition-all hover:text-prisma-orange relative py-2",
                activePage === link.id ? "text-prisma-orange after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-prisma-orange" : "text-prisma-brown"
              )}
            >
              {link.label}
            </button>
          ))}
          <button 
            onClick={() => setActivePage('contato')}
            className="bg-prisma-orange text-white px-6 py-2.5 rounded-full font-bold text-sm hover:shadow-lg hover:shadow-prisma-orange/20 transition-all active:scale-95"
          >
            FAÇA UMA COTAÇÃO
          </button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-prisma-brown" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-white shadow-xl p-6 flex flex-col gap-4 md:hidden"
          >
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => { setActivePage(link.id); setIsMobileMenuOpen(false); }}
                className="text-left py-2 font-semibold text-prisma-brown"
              >
                {link.label}
              </button>
            ))}
            <button className="bg-prisma-orange text-white py-3 rounded-xl font-bold">
              FAÇA UMA COTAÇÃO
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Footer = () => (
  <footer className="bg-prisma-dark text-white pt-20 pb-10 px-6">
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
      <div>
        <div className="flex items-center gap-2 mb-6">
          <img 
            src="/input_file_5.png" 
            alt="Prisma Icon" 
            className="h-10 w-auto"
            referrerPolicy="no-referrer"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
            }}
          />
          <span className="font-display font-extrabold text-2xl tracking-tighter">PRISMA</span>
        </div>
        <p className="text-gray-400 text-sm leading-relaxed mb-6">
          Simplificamos o complexo mundo dos seguros para você ter tranquilidade e proteção real.
        </p>
        <div className="flex gap-4">
          <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-prisma-orange transition-colors">
            <Instagram size={18} />
          </a>
          <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-prisma-orange transition-colors">
            <Linkedin size={18} />
          </a>
        </div>
      </div>

      <div>
        <h4 className="font-display font-bold mb-6 text-lg">Produtos</h4>
        <ul className="space-y-4 text-gray-400 text-sm">
          <li><a href="#" className="hover:text-white transition-colors">Planos de Saúde</a></li>
          <li><a href="#" className="hover:text-white transition-colors">Cartão de Desconto</a></li>
          <li><a href="#" className="hover:text-white transition-colors">Plano Odontológico</a></li>
          <li><a href="#" className="hover:text-white transition-colors">Seguros Diversos</a></li>
        </ul>
      </div>

      <div>
        <h4 className="font-display font-bold mb-6 text-lg">Institucional</h4>
        <ul className="space-y-4 text-gray-400 text-sm">
          <li><a href="#" className="hover:text-white transition-colors">Quem Somos</a></li>
          <li><a href="#" className="hover:text-white transition-colors">Nossos Valores</a></li>
          <li><a href="#" className="hover:text-white transition-colors">Trabalhe Conosco</a></li>
          <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
        </ul>
      </div>

      <div>
        <h4 className="font-display font-bold mb-6 text-lg">Contato</h4>
        <ul className="space-y-4 text-gray-400 text-sm">
          <li className="flex items-center gap-3">
            <Mail size={16} className="text-prisma-orange" />
            contato@prismabeneficios.com.br
          </li>
          <li className="flex items-center gap-3">
            <Phone size={16} className="text-prisma-orange" />
            (XX) XXXXX-XXXX
          </li>
          <li className="flex items-start gap-3">
            <MapPin size={16} className="text-prisma-orange mt-1" />
            Atendimento em DF, Vitória e Palmas
          </li>
        </ul>
      </div>
    </div>

    <div className="max-w-7xl mx-auto pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
      <p>© 2026 Prisma Benefícios. CNPJ: 65.349.622/0001-75. Todos os direitos reservados.</p>
      <div className="flex gap-6">
        <a href="#" className="hover:text-white">Privacidade</a>
        <a href="#" className="hover:text-white">Termos de Uso</a>
      </div>
    </div>
  </footer>
);

// --- Page Content Components ---

const ConsultingSection = ({ setActivePage }: { setActivePage: (p: Page) => void }) => {
  const [activeTab, setActiveTab] = useState(0);
  
  const tabs = [
    {
      title: "Criação de Produtos",
      content: "Auxiliamos corretoras a estruturar e desenvolver produtos de seguros e benefícios diferenciados, com foco em nichos específicos de mercado. Nossa metodologia inclui análise de mercado, estruturação técnica e negociação estratégica.",
      items: ["Análise de mercado", "Estruturação técnica", "Negociação estratégica", "Precificação competitiva"]
    },
    {
      title: "Assessoria em Licitações",
      content: "Maximize suas chances de sucesso em processos licitatórios. Analisamos editais, preparamos documentação técnica e estruturamos propostas competitivas para sua corretora conquistar grandes contratos.",
      items: ["Análise de editais", "Preparação de documentos", "Estruturação de propostas", "Acompanhamento completo"]
    },
    {
      title: "Suporte Técnico",
      content: "Conhecimento técnico que impulsiona resultados. Oferecemos suporte em casos complexos de sinistros, análise de contratos, treinamento de equipes e assessoria em regulação e compliance.",
      items: ["Casos complexos de sinistros", "Treinamento de equipes", "Análise de contratos", "Compliance e Regulação"]
    }
  ];

  return (
    <section className="py-24 px-6 bg-prisma-bg">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-prisma-orange/10 text-prisma-orange text-xs font-bold mb-6 tracking-wider uppercase">
            B2B & Strategic Support
          </div>
          <h2 className="text-4xl font-display font-extrabold text-prisma-brown mb-4">Consultoria para Corretoras</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">Transformamos conhecimento técnico em soluções estratégicas para o crescimento do seu negócio.</p>
        </div>

        <div className="flex flex-wrap gap-4 mb-12 justify-center">
          {tabs.map((tab, i) => (
            <button
              key={i}
              onClick={() => setActiveTab(i)}
              className={cn(
                "px-8 py-4 rounded-2xl font-bold transition-all border-2",
                activeTab === i ? "bg-prisma-orange border-prisma-orange text-white shadow-lg" : "bg-white border-transparent text-prisma-brown hover:border-prisma-orange/30"
              )}
            >
              {tab.title}
            </button>
          ))}
        </div>

        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white p-8 md:p-16 rounded-[40px] shadow-xl grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
        >
          <div>
            <h3 className="text-3xl font-display font-bold text-prisma-brown mb-6">{tabs[activeTab].title}</h3>
            <p className="text-gray-600 mb-8 leading-relaxed text-lg">{tabs[activeTab].content}</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {tabs[activeTab].items.map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-prisma-brown font-semibold bg-prisma-bg p-4 rounded-xl">
                  <CheckCircle2 className="text-prisma-orange" size={18} /> {item}
                </div>
              ))}
            </div>
            <button 
              onClick={() => setActivePage('consultoria')}
              className="text-prisma-orange font-bold flex items-center gap-2 hover:gap-3 transition-all"
            >
              VER DETALHES DA CONSULTORIA <ChevronRight size={20} />
            </button>
          </div>
          <div className="rounded-3xl overflow-hidden h-96 shadow-inner bg-gray-100">
            <img 
              src={`https://images.unsplash.com/photo-1454165833767-027ffea9e778?auto=format&fit=crop&q=80&w=800&sig=${activeTab}`} 
              alt="Consultoria" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const BlogSection = ({ setActivePage }: { setActivePage: (p: Page) => void }) => (
  <section className="py-24 px-6">
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
        <div className="max-w-2xl">
          <h2 className="text-4xl font-display font-extrabold text-prisma-brown mb-4">Blog Prisma</h2>
          <p className="text-gray-500">Conteúdo educativo e estratégico para simplificar suas decisões no mundo dos seguros.</p>
        </div>
        <button 
          onClick={() => setActivePage('blog')}
          className="bg-prisma-brown text-white px-8 py-4 rounded-xl font-bold hover:bg-prisma-brown/90 transition-all"
        >
          VER TODOS OS ARTIGOS
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { 
            title: "5 mitos sobre planos de saúde que você precisa saber", 
            cat: "Saúde", 
            img: "https://images.unsplash.com/photo-1505751172107-573225a91200?auto=format&fit=crop&q=80&w=600" 
          },
          { 
            title: "Coparticipação x Franquia: entenda as diferenças", 
            cat: "Seguros", 
            img: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=600" 
          },
          { 
            title: "Como escolher o plano ideal para sua empresa", 
            cat: "Empresarial", 
            img: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=600" 
          }
        ].map((post, i) => (
          <motion.div 
            key={i} 
            whileHover={{ y: -5 }}
            className="group cursor-pointer bg-white rounded-[32px] overflow-hidden shadow-sm hover:shadow-xl transition-all border border-gray-100"
          >
            <div className="overflow-hidden aspect-video relative">
              <img src={post.img} alt={post.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" referrerPolicy="no-referrer" />
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-prisma-orange text-[10px] font-bold uppercase tracking-widest">
                {post.cat}
              </div>
            </div>
            <div className="p-8">
              <h3 className="text-xl font-bold text-prisma-brown group-hover:text-prisma-orange transition-colors leading-tight mb-4">
                {post.title}
              </h3>
              <div className="flex items-center gap-2 text-prisma-orange font-bold text-sm">
                LER ARTIGO <ArrowRight size={16} />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const HomePage = ({ setActivePage }: { setActivePage: (p: Page) => void }) => (
  <div className="overflow-hidden">
    {/* Hero Section */}
    <section className="relative min-h-screen flex items-center pt-20 px-6">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=1920" 
          alt="Modern Office" 
          className="w-full h-full object-cover opacity-10"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-white via-white/80 to-prisma-orange/5" />
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-prisma-orange/10 text-prisma-orange text-xs font-bold mb-6 tracking-wider uppercase">
            <Zap size={14} /> Corretora Moderna & Acolhedora
          </div>
          <h1 className="text-5xl md:text-7xl font-display font-extrabold text-prisma-brown leading-[1.1] mb-6 tracking-tight">
            Simplificamos o complexo mundo dos <span className="text-prisma-orange">seguros</span> para você.
          </h1>
          <p className="text-lg text-gray-600 mb-10 max-w-lg leading-relaxed">
            Soluções personalizadas em planos de saúde e seguros que equilibram sua realidade financeira com suas necessidades de proteção.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              onClick={() => setActivePage('contato')}
              className="bg-prisma-orange text-white px-8 py-4 rounded-xl font-bold text-lg hover:shadow-2xl hover:shadow-prisma-orange/30 transition-all active:scale-95 flex items-center justify-center gap-2"
            >
              FAÇA UMA COTAÇÃO GRATUITA <ArrowRight size={20} />
            </button>
            <button 
              onClick={() => setActivePage('produtos')}
              className="bg-white border-2 border-prisma-brown/10 text-prisma-brown px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-50 transition-all"
            >
              NOSSAS SOLUÇÕES
            </button>
          </div>
          
          <div className="mt-12 flex items-center gap-6">
            <div className="flex -space-x-3">
              {[1,2,3,4].map(i => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-gray-200 overflow-hidden">
                  <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="User" referrerPolicy="no-referrer" />
                </div>
              ))}
            </div>
            <p className="text-sm text-gray-500">
              <span className="font-bold text-prisma-brown">+1000 clientes</span> satisfeitos em todo o Brasil.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative hidden lg:block"
        >
          <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
             <img 
               src="https://images.unsplash.com/photo-1600880212340-38375930ce91?auto=format&fit=crop&q=80&w=800" 
               alt="Happy Family" 
               className="w-full aspect-[4/5] object-cover"
               referrerPolicy="no-referrer"
             />
          </div>
          <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl z-20 max-w-[240px]">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                <ShieldCheck size={24} />
              </div>
              <span className="font-bold text-prisma-brown">Proteção Total</span>
            </div>
            <p className="text-xs text-gray-500 leading-relaxed">
              Encontramos o equilíbrio perfeito entre custo e benefício para sua família.
            </p>
          </div>
          <div className="absolute -top-6 -right-6 bg-prisma-brown text-white p-6 rounded-2xl shadow-xl z-20">
            <div className="text-3xl font-bold mb-1">100%</div>
            <div className="text-[10px] uppercase tracking-widest opacity-70">Suporte em Sinistros</div>
          </div>
        </motion.div>
      </div>
    </section>

    {/* Solutions Section */}
    <section className="py-24 px-6 bg-prisma-bg">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-display font-extrabold text-prisma-brown mb-4">Nossas Soluções</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Trabalhamos com as melhores operadoras do mercado para oferecer proteção real e acessível.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { 
              title: "Planos de Saúde", 
              icon: <HeartPulse className="text-prisma-orange" size={32} />, 
              desc: "Do individual ao empresarial, o plano que se encaixa na sua realidade financeira.",
              color: "bg-red-50"
            },
            { 
              title: "Cartão de Desconto", 
              icon: <CreditCard className="text-prisma-orange" size={32} />, 
              desc: "Acesso à saúde privada com flexibilidade e economia para quem busca alternativas.",
              color: "bg-orange-50"
            },
            { 
              title: "Plano Odontológico", 
              icon: <Smile className="text-prisma-orange" size={32} />, 
              desc: "Sorria com confiança! Opções para servidores públicos e empresas de todos os portes.",
              color: "bg-blue-50"
            },
            { 
              title: "Seguros Diversos", 
              icon: <Shield className="text-prisma-orange" size={32} />, 
              desc: "Proteção completa para seu automóvel, residência e vida com coberturas personalizadas.",
              color: "bg-purple-50"
            }
          ].map((item, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -10 }}
              className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all group"
            >
              <div className={cn("w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-colors", item.color)}>
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-prisma-brown mb-4">{item.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed mb-6">{item.desc}</p>
              <button 
                onClick={() => setActivePage('produtos')}
                className="text-prisma-orange font-bold text-sm flex items-center gap-2 group-hover:gap-3 transition-all"
              >
                SAIBA MAIS <ChevronRight size={16} />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Values Section */}
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div>
          <h2 className="text-4xl font-display font-extrabold text-prisma-brown mb-8">Nossos Valores</h2>
          <div className="space-y-8">
            {[
              { 
                title: "Ambição", 
                desc: "Enxergamos oportunidades onde outros veem obstáculos, sempre em busca de crescimento para nós e nossos clientes.",
                icon: <Zap className="text-prisma-orange" />
              },
              { 
                title: "Honestidade", 
                desc: "Tratamos tudo com verdade e clareza, construindo relacionamentos baseados em confiança e transparência.",
                icon: <ShieldCheck className="text-prisma-orange" />
              },
              { 
                title: "Resiliência", 
                desc: "Comprometidos em superar desafios e oferecer sempre o melhor serviço, não desistimos até encontrar a solução ideal.",
                icon: <Clock className="text-prisma-orange" />
              }
            ].map((value, idx) => (
              <div key={idx} className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-prisma-orange/5 flex items-center justify-center">
                  {value.icon}
                </div>
                <div>
                  <h4 className="text-lg font-bold text-prisma-brown mb-2">{value.title}</h4>
                  <p className="text-sm text-gray-500 leading-relaxed">{value.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-prisma-brown rounded-[40px] p-12 text-white relative overflow-hidden">
          <div className="relative z-10">
            <Quote className="text-prisma-orange mb-6" size={48} />
            <p className="text-2xl font-medium leading-relaxed mb-8 italic">
              "A Prisma transformou algo que parecia complexo em uma decisão simples. Encontraram um plano que se encaixou perfeitamente no orçamento da nossa empresa."
            </p>
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-gray-400 overflow-hidden border-2 border-prisma-orange">
                <img src="https://i.pravatar.cc/150?img=32" alt="Maria Silva" referrerPolicy="no-referrer" />
              </div>
              <div>
                <div className="font-bold text-lg">Maria Silva</div>
                <div className="text-sm text-white/60">Gestora de RH</div>
              </div>
            </div>
          </div>
          <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-prisma-orange/10 rounded-full blur-3xl" />
        </div>
      </div>
    </section>

    {/* Consultancy Section */}
    <ConsultingSection setActivePage={setActivePage} />

    {/* Blog Section */}
    <BlogSection setActivePage={setActivePage} />

    {/* Final CTA */}
    <section className="py-24 px-6">
      <div className="max-w-5xl mx-auto bg-prisma-orange rounded-[40px] p-12 md:p-20 text-center text-white relative overflow-hidden shadow-2xl shadow-prisma-orange/20">
        <div className="relative z-10">
          <h2 className="text-4xl md:text-5xl font-display font-extrabold mb-6">Quer proteção sem complicação?</h2>
          <p className="text-lg text-white/80 mb-10 max-w-2xl mx-auto">
            Fale com nossos consultores e descubra como podemos ajudar você ou sua empresa a ter mais segurança hoje.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => setActivePage('contato')}
              className="bg-white text-prisma-orange px-10 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all shadow-xl"
            >
              SOLICITAR CONTATO
            </button>
            <button 
              onClick={() => setActivePage('contato')}
              className="bg-prisma-brown text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-prisma-brown/90 transition-all"
            >
              FAZER COTAÇÃO ONLINE
            </button>
          </div>
        </div>
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-40 h-40 bg-prisma-brown/10 rounded-full translate-y-1/2 -translate-x-1/2" />
      </div>
    </section>
  </div>
);

const ProductsPage = () => (
  <div className="pt-32 pb-24">
    <section className="px-6 mb-20">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-5xl md:text-6xl font-display font-extrabold text-prisma-brown mb-6 tracking-tight">Nossas Soluções</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Encontramos o equilíbrio perfeito entre cobertura de qualidade e custo acessível para você, sua família ou sua empresa.
        </p>
      </div>
    </section>

    {/* Planos de Saúde */}
    <section className="py-20 px-6 bg-prisma-bg">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <div className="text-prisma-orange font-bold text-sm uppercase tracking-widest mb-4">Saúde & Bem-estar</div>
          <h2 className="text-4xl font-display font-extrabold text-prisma-brown mb-6">Planos de Saúde</h2>
          <p className="text-gray-600 mb-8 leading-relaxed">
            Trabalhamos com as principais operadoras do mercado para oferecer opções que equilibram cobertura de qualidade e custo acessível. Do individual ao empresarial.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
            {['Empresas (PME e Grandes)', 'Profissionais Autônomos', 'Planos Familiares', 'Planos Individuais'].map((item, i) => (
              <div key={i} className="flex items-center gap-3 text-prisma-brown font-semibold bg-white p-4 rounded-xl shadow-sm">
                <CheckCircle2 className="text-prisma-orange" size={20} /> {item}
              </div>
            ))}
          </div>
          <button className="bg-prisma-orange text-white px-8 py-4 rounded-xl font-bold hover:shadow-lg transition-all active:scale-95">
            SOLICITAR COTAÇÃO PERSONALIZADA
          </button>
        </div>
        <div className="rounded-[40px] overflow-hidden shadow-2xl border-8 border-white">
          <img src="https://images.unsplash.com/photo-1505751172107-573225a91200?auto=format&fit=crop&q=80&w=800" alt="Saúde" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
        </div>
      </div>
    </section>

    {/* Cartão de Desconto */}
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="order-2 lg:order-1 rounded-[40px] overflow-hidden shadow-2xl border-8 border-white">
          <img src="https://images.unsplash.com/photo-1556742044-3c52d6e88c62?auto=format&fit=crop&q=80&w=800" alt="Cartão" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
        </div>
        <div className="order-1 lg:order-2">
          <div className="text-prisma-orange font-bold text-sm uppercase tracking-widest mb-4">Economia & Acesso</div>
          <h2 className="text-4xl font-display font-extrabold text-prisma-brown mb-6">Cartão de Desconto</h2>
          <p className="text-gray-600 mb-8 leading-relaxed">
            Acesso à saúde privada sem mensalidades fixas. Pague apenas pelo que usar, com descontos significativos em consultas, exames e procedimentos.
          </p>
          <div className="space-y-4 mb-10">
            {[
              { t: "Economia Real", d: "Descontos de até 70% em clínicas particulares." },
              { t: "Sem Carência", d: "Use imediatamente após a contratação." },
              { t: "Flexibilidade Total", d: "Sem mensalidades fixas ou surpresas." }
            ].map((item, i) => (
              <div key={i} className="flex gap-4 p-4 bg-prisma-bg rounded-2xl">
                <div className="w-10 h-10 rounded-full bg-prisma-orange/10 flex items-center justify-center text-prisma-orange shrink-0">
                  <Zap size={20} />
                </div>
                <div>
                  <div className="font-bold text-prisma-brown">{item.t}</div>
                  <div className="text-xs text-gray-500">{item.d}</div>
                </div>
              </div>
            ))}
          </div>
          <button className="bg-prisma-brown text-white px-8 py-4 rounded-xl font-bold hover:bg-prisma-brown/90 transition-all active:scale-95">
            QUERO SABER MAIS
          </button>
        </div>
      </div>
    </section>

    {/* Seguros Diversos */}
    <section className="py-20 px-6 bg-prisma-dark text-white rounded-[60px] mx-6 mb-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="text-prisma-orange font-bold text-sm uppercase tracking-widest mb-4">Proteção Patrimonial</div>
          <h2 className="text-4xl font-display font-extrabold mb-4">Seguros Diversos</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Proteção completa para o que realmente importa na sua vida, com coberturas adaptáveis ao seu perfil.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { title: 'Automotivo', icon: <Shield />, desc: 'Assistência 24h e cobertura contra terceiros.' },
            { title: 'Residencial', icon: <MapPin />, desc: 'Contra incêndio, roubo e danos elétricos.' },
            { title: 'Vida', icon: <HeartPulse />, desc: 'Garantia de proteção financeira para sua família.' },
            { title: 'Responsabilidade Civil', icon: <ShieldCheck />, desc: 'Essencial para profissionais liberais e empresas.' }
          ].map((item, i) => (
            <div key={i} className="bg-white/5 p-8 rounded-3xl border border-white/10 hover:bg-white/10 transition-all group">
              <div className="text-prisma-orange mb-6 group-hover:scale-110 transition-transform">{item.icon}</div>
              <h4 className="font-bold text-xl mb-3">{item.title}</h4>
              <p className="text-sm text-gray-400 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  </div>
);

const ConsultingPage = () => {
  const [activeTab, setActiveTab] = useState(0);
  
  const tabs = [
    {
      title: "Criação de Produtos",
      content: "Auxiliamos corretoras a estruturar e desenvolver produtos de seguros e benefícios diferenciados, com foco em nichos específicos de mercado. Nossa metodologia inclui análise de mercado, estruturação técnica e negociação estratégica.",
      items: ["Análise de mercado", "Estruturação técnica", "Negociação estratégica", "Precificação competitiva"]
    },
    {
      title: "Assessoria em Licitações",
      content: "Maximize suas chances de sucesso em processos licitatórios. Analisamos editais, preparamos documentação técnica e estruturamos propostas competitivas para sua corretora conquistar grandes contratos.",
      items: ["Análise de editais", "Preparação de documentos", "Estruturação de propostas", "Acompanhamento completo"]
    },
    {
      title: "Suporte Técnico",
      content: "Conhecimento técnico que impulsiona resultados. Oferecemos suporte em casos complexos de sinistros, análise de contratos, treinamento de equipes e assessoria em regulação e compliance.",
      items: ["Casos complexos de sinistros", "Treinamento de equipes", "Análise de contratos", "Compliance e Regulação"]
    }
  ];

  return (
    <div className="pt-32 pb-24">
      {/* Hero */}
      <section className="px-6 mb-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-prisma-orange/10 text-prisma-orange text-xs font-bold mb-6 tracking-wider uppercase">
              B2B & Strategic Support
            </div>
            <h1 className="text-5xl md:text-6xl font-display font-extrabold text-prisma-brown mb-6 tracking-tight">Consultoria para Corretoras</h1>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Transformamos conhecimento técnico em soluções estratégicas para o crescimento do seu negócio. Compartilhamos nossa expertise para potencializar sua corretora.
            </p>
            <button className="bg-prisma-orange text-white px-8 py-4 rounded-xl font-bold text-lg shadow-xl shadow-prisma-orange/20 hover:shadow-prisma-orange/40 transition-all">
              AGENDAR CONSULTORIA
            </button>
          </div>
          <div className="relative">
            <div className="bg-prisma-brown rounded-[40px] p-12 text-white relative z-10">
              <h3 className="text-2xl font-bold mb-8">Por que escolher nossa consultoria?</h3>
              <div className="space-y-6">
                {[
                  { t: "Expertise Técnica", d: "Anos de experiência real no mercado." },
                  { t: "Foco em Resultados", d: "Estratégias voltadas para rentabilidade." },
                  { t: "Suporte Estratégico", d: "Acompanhamento contínuo do seu negócio." },
                  { t: "Soluções Sob Medida", d: "Adaptadas ao porte da sua corretora." }
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-6 h-6 rounded-full bg-prisma-orange flex items-center justify-center text-white shrink-0 mt-1">
                      <CheckCircle2 size={14} />
                    </div>
                    <div>
                      <div className="font-bold">{item.t}</div>
                      <div className="text-xs text-white/60">{item.d}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-prisma-orange/20 rounded-full blur-2xl" />
          </div>
        </div>
      </section>

      {/* Tabs Section */}
      <section className="py-24 px-6 bg-prisma-bg">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-extrabold text-prisma-brown mb-4">Nossos Serviços</h2>
            <p className="text-gray-500">Soluções modulares para cada desafio da sua corretora.</p>
          </div>

          <div className="flex flex-wrap gap-4 mb-12 justify-center">
            {tabs.map((tab, i) => (
              <button
                key={i}
                onClick={() => setActiveTab(i)}
                className={cn(
                  "px-8 py-4 rounded-2xl font-bold transition-all border-2",
                  activeTab === i ? "bg-prisma-orange border-prisma-orange text-white shadow-lg" : "bg-white border-transparent text-prisma-brown hover:border-prisma-orange/30"
                )}
              >
                {tab.title}
              </button>
            ))}
          </div>

          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white p-8 md:p-16 rounded-[40px] shadow-xl grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
          >
            <div>
              <h3 className="text-3xl font-display font-bold text-prisma-brown mb-6">{tabs[activeTab].title}</h3>
              <p className="text-gray-600 mb-8 leading-relaxed text-lg">{tabs[activeTab].content}</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {tabs[activeTab].items.map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-prisma-brown font-semibold bg-prisma-bg p-4 rounded-xl">
                    <CheckCircle2 className="text-prisma-orange" size={18} /> {item}
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-3xl overflow-hidden h-96 shadow-inner bg-gray-100">
              <img 
                src={`https://images.unsplash.com/photo-1454165833767-027ffea9e778?auto=format&fit=crop&q=80&w=800&sig=${activeTab}`} 
                alt="Consultoria" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-display font-extrabold text-prisma-brown mb-16 text-center">Como Funciona</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-prisma-orange/20 -translate-y-1/2 z-0" />
            {[
              { t: "Diagnóstico", d: "Análise completa da sua corretora e objetivos.", icon: <TrendingUp /> },
              { t: "Planejamento", d: "Desenvolvimento do plano de ação personalizado.", icon: <FileText /> },
              { t: "Implementação", d: "Execução das estratégias com suporte total.", icon: <Zap /> },
              { t: "Resultados", d: "Monitoramento e ajustes para o sucesso.", icon: <CheckCircle2 /> }
            ].map((step, i) => (
              <div key={i} className="relative z-10 bg-white p-8 rounded-3xl shadow-lg border border-gray-50 text-center">
                <div className="w-16 h-16 rounded-2xl bg-prisma-orange text-white flex items-center justify-center mx-auto mb-6 shadow-lg shadow-prisma-orange/20">
                  {step.icon}
                </div>
                <h4 className="font-bold text-prisma-brown mb-2">{step.t}</h4>
                <p className="text-xs text-gray-500 leading-relaxed">{step.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cases Section */}
      <section className="py-24 px-6 bg-prisma-brown text-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-display font-extrabold mb-16 text-center">Cases de Sucesso</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { r: "35%", t: "Aumento na Carteira", d: "Corretora ABC estruturou um novo produto de saúde PME em 6 meses." },
              { r: "R$ 1.2M", t: "Contrato Vencido", d: "Segura Bem Corretora venceu sua primeira licitação de grande porte." },
              { r: "98%", t: "Satisfação", d: "Corretora XYZ melhorou drasticamente o suporte técnico aos seus clientes." }
            ].map((caseItem, i) => (
              <div key={i} className="bg-white/5 p-10 rounded-[40px] border border-white/10 text-center">
                <div className="text-5xl font-display font-extrabold text-prisma-orange mb-4">{caseItem.r}</div>
                <h4 className="text-xl font-bold mb-4">{caseItem.t}</h4>
                <p className="text-sm text-white/60 leading-relaxed">{caseItem.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

const BlogPage = () => (
  <div className="pt-32 pb-24 px-6">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-display font-extrabold text-prisma-brown mb-4 tracking-tight">Blog Prisma</h1>
        <p className="text-gray-500 max-w-xl mx-auto">Conteúdo educativo e estratégico para simplificar suas decisões no mundo dos seguros.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {[
          { 
            title: "5 mitos sobre planos de saúde que você precisa saber", 
            cat: "Saúde", 
            img: "https://images.unsplash.com/photo-1505751172107-573225a91200?auto=format&fit=crop&q=80&w=600" 
          },
          { 
            title: "Coparticipação x Franquia: entenda as diferenças", 
            cat: "Seguros", 
            img: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=600" 
          },
          { 
            title: "Como escolher o plano ideal para sua empresa", 
            cat: "Empresarial", 
            img: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=600" 
          },
          { 
            title: "O futuro do mercado de seguros no Brasil", 
            cat: "Mercado", 
            img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600" 
          },
          { 
            title: "Dicas para economizar no seguro residencial", 
            cat: "Residencial", 
            img: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=600" 
          },
          { 
            title: "A importância do seguro de vida para jovens", 
            cat: "Vida", 
            img: "https://images.unsplash.com/photo-1516733725897-1aa73b87c8e8?auto=format&fit=crop&q=80&w=600" 
          }
        ].map((post, i) => (
          <motion.div 
            key={i} 
            whileHover={{ y: -5 }}
            className="group cursor-pointer bg-white rounded-[32px] overflow-hidden shadow-sm hover:shadow-xl transition-all border border-gray-100"
          >
            <div className="overflow-hidden aspect-video relative">
              <img src={post.img} alt={post.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" referrerPolicy="no-referrer" />
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-prisma-orange text-[10px] font-bold uppercase tracking-widest">
                {post.cat}
              </div>
            </div>
            <div className="p-8">
              <h3 className="text-xl font-bold text-prisma-brown group-hover:text-prisma-orange transition-colors leading-tight mb-4">
                {post.title}
              </h3>
              <div className="flex items-center gap-2 text-prisma-orange font-bold text-sm">
                LER ARTIGO <ArrowRight size={16} />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </div>
);

export default function App() {
  const [activePage, setActivePage] = useState<Page>('home');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activePage]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar activePage={activePage} setActivePage={setActivePage} />
      
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={activePage}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            {activePage === 'home' && <HomePage setActivePage={setActivePage} />}
            {activePage === 'produtos' && <ProductsPage />}
            {activePage === 'consultoria' && <ConsultingPage />}
            {activePage === 'blog' && <BlogPage />}
            {activePage === 'sobre' && (
              <div className="pt-32 pb-24 px-6 max-w-4xl mx-auto">
                <div className="text-center mb-16">
                   <h1 className="text-5xl font-display font-extrabold text-prisma-brown mb-6">Quem Somos</h1>
                   <div className="w-20 h-1.5 bg-prisma-orange mx-auto rounded-full" />
                </div>
                <div className="prose prose-lg text-gray-600 mx-auto">
                  <p className="mb-8 text-xl leading-relaxed text-prisma-brown font-medium">A Prisma Benefícios nasceu com um propósito claro: democratizar o acesso à saúde privada e segurança financeira, proporcionando tranquilidade para pessoas e empresas.</p>
                  <p className="mb-8 leading-relaxed">Somos uma corretora moderna e jovem, que combina conhecimento técnico com atendimento acolhedor para simplificar o complexo mundo dos seguros.</p>
                  <p className="mb-12 leading-relaxed">O que começou como uma pequena corretora evoluiu para uma empresa completa de soluções em benefícios, sempre guiada pelos valores de ambição, honestidade e resiliência. Hoje, atendemos clientes em todo o DF e entorno, Vitória e Palmas, com soluções personalizadas que equilibram realidade financeira e necessidades de proteção.</p>
                  
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 text-center">
                    <div className="bg-prisma-bg p-8 rounded-[32px]">
                      <div className="text-4xl font-display font-extrabold text-prisma-orange mb-2">+1k</div>
                      <div className="text-[10px] text-gray-400 uppercase font-bold tracking-widest">Clientes</div>
                    </div>
                    <div className="bg-prisma-bg p-8 rounded-[32px]">
                      <div className="text-4xl font-display font-extrabold text-prisma-orange mb-2">15+</div>
                      <div className="text-[10px] text-gray-400 uppercase font-bold tracking-widest">Parceiros</div>
                    </div>
                    <div className="bg-prisma-bg p-8 rounded-[32px]">
                      <div className="text-4xl font-display font-extrabold text-prisma-orange mb-2">4</div>
                      <div className="text-[10px] text-gray-400 uppercase font-bold tracking-widest">Cidades</div>
                    </div>
                    <div className="bg-prisma-bg p-8 rounded-[32px]">
                      <div className="text-4xl font-display font-extrabold text-prisma-orange mb-2">100%</div>
                      <div className="text-[10px] text-gray-400 uppercase font-bold tracking-widest">Suporte</div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {activePage === 'contato' && (
              <div className="pt-32 pb-24 px-6 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
                  <div>
                    <h1 className="text-5xl font-display font-extrabold text-prisma-brown mb-6 tracking-tight">Estamos aqui para ajudar</h1>
                    <p className="text-lg text-gray-600 mb-12 leading-relaxed">Seja para uma cotação, dúvida ou suporte, nossa equipe está pronta para atender você com agilidade e conhecimento técnico.</p>
                    <div className="space-y-8">
                      <div className="flex gap-6 p-6 bg-prisma-bg rounded-[32px] border border-gray-100">
                        <div className="w-14 h-14 rounded-2xl bg-prisma-orange/10 flex items-center justify-center text-prisma-orange shrink-0">
                          <Phone size={28} />
                        </div>
                        <div>
                          <div className="font-bold text-prisma-brown text-lg">WhatsApp</div>
                          <div className="text-gray-500">(XX) XXXXX-XXXX</div>
                        </div>
                      </div>
                      <div className="flex gap-6 p-6 bg-prisma-bg rounded-[32px] border border-gray-100">
                        <div className="w-14 h-14 rounded-2xl bg-prisma-orange/10 flex items-center justify-center text-prisma-orange shrink-0">
                          <Mail size={28} />
                        </div>
                        <div>
                          <div className="font-bold text-prisma-brown text-lg">E-mail</div>
                          <div className="text-gray-500">contato@prismabeneficios.com.br</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white p-10 rounded-[48px] shadow-2xl border border-gray-100 relative overflow-hidden">
                    <form className="space-y-6 relative z-10">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-[10px] font-bold text-gray-400 uppercase mb-2 ml-2">Nome</label>
                          <input type="text" placeholder="Seu nome" className="w-full px-6 py-4 rounded-2xl bg-prisma-bg border-none focus:ring-2 focus:ring-prisma-orange transition-all" />
                        </div>
                        <div>
                          <label className="block text-[10px] font-bold text-gray-400 uppercase mb-2 ml-2">E-mail</label>
                          <input type="email" placeholder="seu@email.com" className="w-full px-6 py-4 rounded-2xl bg-prisma-bg border-none focus:ring-2 focus:ring-prisma-orange transition-all" />
                        </div>
                      </div>
                      <div>
                        <label className="block text-[10px] font-bold text-gray-400 uppercase mb-2 ml-2">Assunto</label>
                        <select className="w-full px-6 py-4 rounded-2xl bg-prisma-bg border-none focus:ring-2 focus:ring-prisma-orange transition-all">
                          <option>Planos de Saúde</option>
                          <option>Cartão de Desconto</option>
                          <option>Seguros Diversos</option>
                          <option>Consultoria para Corretoras</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-[10px] font-bold text-gray-400 uppercase mb-2 ml-2">Mensagem</label>
                        <textarea placeholder="Como podemos ajudar?" rows={4} className="w-full px-6 py-4 rounded-2xl bg-prisma-bg border-none focus:ring-2 focus:ring-prisma-orange transition-all"></textarea>
                      </div>
                      <button className="w-full bg-prisma-orange text-white py-5 rounded-2xl font-bold text-lg hover:shadow-2xl hover:shadow-prisma-orange/30 transition-all active:scale-95 flex items-center justify-center gap-2">
                        ENVIAR MENSAGEM <ArrowRight size={20} />
                      </button>
                    </form>
                    <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-prisma-orange/5 rounded-full blur-3xl" />
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  );
}
