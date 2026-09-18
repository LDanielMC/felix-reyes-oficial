import { motion } from 'framer-motion';
import { ArrowLeft, ChevronUp, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const post = {
  title: 'Depósitos y retiros en efectivo de $140,000 o más',
  date: '9 de julio, 2026',
  readTime: '10 min de lectura',
  category: 'Fiscal',
};

const tableOfContents = [
  { id: 'que-cambio', title: '¿Qué cambió a partir del 1 de julio de 2026?' },
  { id: 'nuevo-impuesto', title: '¿Se creó un nuevo impuesto?' },
  { id: 'facultades-sat', title: '¿El SAT tendrá nuevas facultades?' },
  { id: 'objetivo', title: 'Objetivo de la medida' },
  { id: 'que-solicita-banco', title: '¿Qué podrá solicitar el banco?' },
  { id: 'origen-dinero', title: '¿Obligación de justificar el origen?' },
  { id: 'recomendaciones', title: 'Recomendaciones' },
  { id: 'conclusion', title: 'Conclusión' },
  { id: 'preguntas-frecuentes', title: 'Preguntas frecuentes' },
  { id: 'fundamento-legal', title: 'Fundamento legal' },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const DepositosEfectivoPost = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [readingProgress, setReadingProgress] = useState(0);
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  const [showTableOfContents, setShowTableOfContents] = useState(true);

  useEffect(() => {
    const PAGE_URL = 'https://felixreyescontadores.com.mx/blog/depositos-efectivo-140000';
    const PAGE_TITLE = 'Depósitos y retiros en efectivo de $140,000 o más | Félix Reyes Contadores';
    const PAGE_DESC = 'Análisis jurídico y fiscal: ¿existe una nueva obligación fiscal por depósitos o retiros en efectivo de $140,000 o más a partir del 1 de julio de 2026?';
    const PAGE_IMAGE = 'https://felixreyescontadores.com.mx/depositos-efectivo.webp';

    document.title = PAGE_TITLE;

    const setMeta = (name: string, content: string, prop = false) => {
      const attr = prop ? 'property' : 'name';
      let el = document.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement;
      if (!el) { el = document.createElement('meta'); el.setAttribute(attr, name); document.head.appendChild(el); }
      el.setAttribute('content', content);
    };
    setMeta('description', PAGE_DESC);
    setMeta('keywords', 'depósitos en efectivo 140000, retiros efectivo SAT, lavado de dinero México, ABM identificación clientes, KYC bancos México, obligaciones fiscales 2026, Félix Reyes Contadores');
    setMeta('og:title', PAGE_TITLE, true);
    setMeta('og:description', PAGE_DESC, true);
    setMeta('og:image', PAGE_IMAGE, true);
    setMeta('og:image:width', '1200', true);
    setMeta('og:image:height', '630', true);
    setMeta('og:url', PAGE_URL, true);
    setMeta('og:type', 'article', true);
    setMeta('og:locale', 'es_MX', true);
    setMeta('article:published_time', '2026-07-09', true);
    setMeta('article:author', 'Félix Reyes Contadores', true);
    setMeta('article:section', 'Fiscal', true);
    setMeta('twitter:title', PAGE_TITLE);
    setMeta('twitter:description', PAGE_DESC);
    setMeta('twitter:image', PAGE_IMAGE);

    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonical) { canonical = document.createElement('link'); canonical.setAttribute('rel', 'canonical'); document.head.appendChild(canonical); }
    const prevCanonical = canonical.href;
    canonical.setAttribute('href', PAGE_URL);

    const schema = document.createElement('script');
    schema.type = 'application/ld+json';
    schema.id = 'article-schema';
    schema.text = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Article',
      'headline': 'Depósitos y retiros en efectivo de $140,000 o más',
      'description': PAGE_DESC,
      'image': PAGE_IMAGE,
      'datePublished': '2026-07-09',
      'dateModified': '2026-07-09',
      'author': { '@type': 'Organization', 'name': 'Félix Reyes Contadores', 'url': 'https://felixreyescontadores.com.mx' },
      'publisher': { '@type': 'Organization', 'name': 'Félix Reyes Contadores', 'logo': { '@type': 'ImageObject', 'url': 'https://felixreyescontadores.com.mx/favicon.png' } },
      'mainEntityOfPage': { '@type': 'WebPage', '@id': PAGE_URL },
      'inLanguage': 'es-MX',
      'keywords': 'depósitos en efectivo, retiros efectivo, SAT, ABM, lavado de dinero, KYC, GAFI'
    });
    document.head.appendChild(schema);

    return () => {
      document.title = 'Félix Reyes Contadores - Servicios Contables y Fiscales Profesionales';
      canonical.setAttribute('href', prevCanonical);
      document.getElementById('article-schema')?.remove();
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);

      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight - windowHeight;
      const scrolled = (window.scrollY / documentHeight) * 100;
      setReadingProgress(scrolled);

      const footer = document.querySelector('footer');
      if (footer) {
        const footerRect = footer.getBoundingClientRect();
        const isNearFooter = footerRect.top < windowHeight;
        setShowTableOfContents(!isNearFooter);
      }

      const sections = tableOfContents.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(tableOfContents[i].id);
          setCurrentSectionIndex(i);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToSection = (direction: 'prev' | 'next') => {
    const newIndex = direction === 'prev' ? currentSectionIndex - 1 : currentSectionIndex + 1;
    if (newIndex >= 0 && newIndex < tableOfContents.length) {
      scrollToSection(tableOfContents[newIndex].id);
    }
  };

  return (
    <div className="min-h-screen bg-background pt-24 md:pt-32 relative">
      {/* Barra de progreso de lectura */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-muted z-50">
        <motion.div
          className="h-full bg-primary"
          style={{ width: `${readingProgress}%` }}
          initial={{ width: 0 }}
          animate={{ width: `${readingProgress}%` }}
          transition={{ duration: 0.1 }}
        />
      </div>

      {showBackToTop && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-4 z-40 p-4 bg-primary text-white rounded-full shadow-2xl hover:bg-primary/90 transition-all hover:scale-110 active:scale-95"
          aria-label="Volver arriba"
        >
          <ChevronUp className="h-6 w-6" />
        </motion.button>
      )}

      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="fixed bottom-8 left-4 z-40 lg:hidden p-4 bg-primary text-white rounded-full shadow-2xl hover:bg-primary/90 transition-all hover:scale-110 active:scale-95"
        aria-label="Tabla de contenidos"
      >
        {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      <div className="fixed bottom-24 left-4 z-40 lg:hidden flex flex-col gap-2">
        {currentSectionIndex > 0 && (
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            onClick={() => navigateToSection('prev')}
            className="p-3 bg-background border-2 border-primary text-primary rounded-full shadow-lg hover:bg-primary hover:text-white transition-all"
            aria-label="Sección anterior"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
            </svg>
          </motion.button>
        )}
        {currentSectionIndex < tableOfContents.length - 1 && (
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            onClick={() => navigateToSection('next')}
            className="p-3 bg-background border-2 border-primary text-primary rounded-full shadow-lg hover:bg-primary hover:text-white transition-all"
            aria-label="Siguiente sección"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </motion.button>
        )}
      </div>

      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          {/* Tabla de contenidos - Desktop sticky sidebar */}
          <aside className="hidden lg:block lg:col-span-3">
            <div className={`fixed top-40 left-8 w-64 z-10 max-h-[calc(100vh-12rem)] overflow-y-auto bg-background/95 backdrop-blur-sm p-4 rounded-lg border border-border shadow-sm transition-opacity duration-300 ${
              showTableOfContents ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}>
              <h3 className="text-lg font-serif font-bold text-primary/90 mb-4">Contenido</h3>
              <nav className="space-y-2">
                {tableOfContents.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`block w-full text-left text-sm px-3 py-2 rounded-md transition-colors ${
                      activeSection === item.id
                        ? 'bg-primary/10 text-primary font-semibold'
                        : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                    }`}
                  >
                    {item.title}
                  </button>
                ))}
              </nav>
            </div>
          </aside>

          {/* Mobile tabla de contenidos */}
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, x: -300 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -300 }}
              className="fixed bottom-24 left-4 z-40 w-72 bg-background border border-border rounded-xl shadow-2xl p-4 lg:hidden"
            >
              <h3 className="text-lg font-serif font-bold text-primary/90 mb-3">Contenido</h3>
              <nav className="space-y-1">
                {tableOfContents.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`block w-full text-left text-sm px-3 py-2 rounded-md transition-colors ${
                      activeSection === item.id
                        ? 'bg-primary/10 text-primary font-semibold'
                        : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                    }`}
                  >
                    {item.title}
                  </button>
                ))}
              </nav>
            </motion.div>
          )}

          {/* Contenido principal */}
          <main className="lg:col-span-9">
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.6 }}
            >
              <Link
                to="/blog"
                className="inline-flex items-center text-sm text-muted-foreground hover:text-primary transition-colors mb-8 group"
              >
                <ArrowLeft className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                Volver al blog
              </Link>

              {/* Header del artículo */}
              <div className="mb-10">
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary/20">
                    {post.category}
                  </span>
                  <span className="text-sm text-muted-foreground">{post.date}</span>
                  <span className="text-sm text-muted-foreground">·</span>
                  <span className="text-sm text-muted-foreground">{post.readTime}</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground leading-tight mb-4">
                  Depósitos y retiros en efectivo de $140,000 o más
                </h1>
                <p className="text-2xl font-serif text-primary font-semibold mb-6">
                  ¿Existe una nueva obligación fiscal? Análisis Jurídico y Fiscal
                </p>
                <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                  En fechas recientes ha circulado información en diversos medios de comunicación y redes sociales respecto de que, a partir del <strong>1 de julio de 2026</strong>, los bancos identificarán a las personas que realicen depósitos o retiros en efectivo por <strong>$140,000.00 o más</strong>, lo que ha generado dudas sobre una posible reforma fiscal o nuevas facultades del Servicio de Administración Tributaria (SAT).
                </p>
                <img
                  src="/depositos-efectivo.webp"
                  alt="Depósitos y retiros en efectivo de $140,000 o más - Análisis Jurídico y Fiscal"
                  className="w-full h-auto max-h-[500px] object-cover rounded-xl shadow-lg"
                />
              </div>

              <div className="prose prose-lg max-w-none">

                {/* Sección I */}
                <motion.section
                  id="que-cambio"
                  className="scroll-mt-32 mb-12"
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <h2 className="text-3xl font-serif font-bold text-foreground mb-6 scroll-mt-32">
                    I. ¿Qué cambió a partir del 1 de julio de 2026?
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    Las instituciones integrantes de la <strong>Asociación de Bancos de México (ABM)</strong> comenzaron a aplicar procedimientos reforzados de identificación para las personas que efectúen depósitos o retiros en efectivo por <strong>$140,000.00 o más</strong>.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    La finalidad de esta medida consiste en fortalecer los mecanismos de:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-6 ml-4">
                    <li>Prevención de lavado de dinero.</li>
                    <li>Combate al financiamiento al terrorismo.</li>
                    <li>Conocimiento del cliente (Know Your Customer – KYC).</li>
                    <li>Prevención del fraude financiero.</li>
                    <li>Mayor trazabilidad de operaciones en efectivo.</li>
                  </ul>
                  <div className="bg-primary/5 border-l-4 border-primary rounded-r-lg p-4">
                    <p className="text-muted-foreground font-medium">
                      Se trata de una medida de cumplimiento regulatorio implementada por el sector bancario y <strong>no de una reforma tributaria</strong>.
                    </p>
                  </div>
                </motion.section>

                {/* Sección II */}
                <motion.section
                  id="nuevo-impuesto"
                  className="scroll-mt-32 mb-12"
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <h2 className="text-3xl font-serif font-bold text-foreground mb-6 scroll-mt-32">
                    II. ¿Se creó un nuevo impuesto?
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    <strong>No.</strong> No existe reforma alguna a:
                  </p>
                  <ol className="list-decimal list-inside space-y-2 text-muted-foreground mb-6 ml-4">
                    <li>La Ley del Impuesto sobre la Renta.</li>
                    <li>La Ley del Impuesto al Valor Agregado.</li>
                    <li>El Código Fiscal de la Federación.</li>
                  </ol>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    que establezca un impuesto por realizar depósitos o retiros en efectivo de ese monto.
                  </p>
                  <div className="bg-primary/5 border-l-4 border-primary rounded-r-lg p-4">
                    <p className="text-muted-foreground">
                      El depósito en efectivo, por sí mismo, <strong>no constituye un hecho generador de impuestos</strong>. Las obligaciones fiscales continúan dependiendo del origen, naturaleza y tratamiento legal de los recursos.
                    </p>
                  </div>
                </motion.section>

                {/* Sección III */}
                <motion.section
                  id="facultades-sat"
                  className="scroll-mt-32 mb-12"
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <h2 className="text-3xl font-serif font-bold text-foreground mb-6 scroll-mt-32">
                    III. ¿El SAT tendrá nuevas facultades?
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    <strong>No.</strong> Las facultades del SAT permanecen sin modificación. La medida implementada corresponde a los procedimientos internos de identificación y administración de riesgos de las instituciones financieras.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Ello no implica que:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-6 ml-4">
                    <li>Exista una auditoría automática.</li>
                    <li>Se determine un crédito fiscal.</li>
                    <li>Se presuma un ingreso acumulable.</li>
                    <li>Se inicie una revisión fiscal únicamente por realizar un depósito de ese monto.</li>
                  </ul>
                  <p className="text-muted-foreground leading-relaxed">
                    Las facultades de comprobación del SAT continúan regulándose por el <strong>Código Fiscal de la Federación</strong>.
                  </p>
                </motion.section>

                {/* Sección IV */}
                <motion.section
                  id="objetivo"
                  className="scroll-mt-32 mb-12"
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <h2 className="text-3xl font-serif font-bold text-foreground mb-6 scroll-mt-32">
                    IV. ¿Cuál es el verdadero objetivo de la medida?
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    El sistema financiero mexicano continúa alineándose a estándares internacionales emitidos por el <strong>Grupo de Acción Financiera Internacional (GAFI)</strong>. El objetivo consiste en:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-6 ml-4">
                    <li>Conocer plenamente al usuario del sistema financiero.</li>
                    <li>Identificar operaciones inusuales.</li>
                    <li>Prevenir operaciones con recursos de procedencia ilícita.</li>
                    <li>Fortalecer la seguridad financiera.</li>
                    <li>Proteger la integridad del sistema bancario mexicano.</li>
                  </ul>
                </motion.section>

                {/* Sección V */}
                <motion.section
                  id="que-solicita-banco"
                  className="scroll-mt-32 mb-12"
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <h2 className="text-3xl font-serif font-bold text-foreground mb-6 scroll-mt-32">
                    V. ¿Qué podrá solicitar el banco?
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Cuando una operación alcance o supere los <strong>$140,000.00 en efectivo</strong>, la institución financiera podrá requerir:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-6 ml-4">
                    <li>Identificación oficial vigente.</li>
                    <li>Registro de la persona que realiza físicamente la operación.</li>
                    <li>Confirmación de datos personales.</li>
                    <li>Información adicional cuando la operación así lo requiera conforme a sus políticas de prevención de lavado de dinero.</li>
                  </ul>
                  <p className="text-muted-foreground leading-relaxed">
                    Cada banco podrá establecer controles adicionales dependiendo del perfil de riesgo del cliente.
                  </p>
                </motion.section>

                {/* Sección VI */}
                <motion.section
                  id="origen-dinero"
                  className="scroll-mt-32 mb-12"
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <h2 className="text-3xl font-serif font-bold text-foreground mb-6 scroll-mt-32">
                    VI. ¿Existe obligación de justificar el origen del dinero?
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    No necesariamente en todas las operaciones. Sin embargo, cuando una institución financiera detecte operaciones que resulten inusuales o inconsistentes con el perfil transaccional del cliente, podrá solicitar documentación complementaria para acreditar el origen lícito de los recursos.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Por ello, es recomendable conservar documentación soporte, tales como:
                  </p>
                  <ol className="list-decimal list-inside space-y-2 text-muted-foreground mb-6 ml-4">
                    <li>Contratos.</li>
                    <li>Facturas.</li>
                    <li>Estados de cuenta.</li>
                    <li>Recibos.</li>
                    <li>Escrituras.</li>
                    <li>Convenios.</li>
                    <li>Comprobantes de préstamos.</li>
                    <li>Documentación sucesoria o donaciones, cuando corresponda.</li>
                  </ol>
                </motion.section>

                {/* Sección VII */}
                <motion.section
                  id="recomendaciones"
                  className="scroll-mt-32 mb-12"
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <h2 className="text-3xl font-serif font-bold text-foreground mb-6 scroll-mt-32">
                    VII. Recomendaciones de Félix Reyes Contadores
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Con independencia del monto de las operaciones, recomendamos:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-6 ml-4">
                    <li>Mantener debidamente soportado el origen de todos los recursos.</li>
                    <li>Evitar depósitos en efectivo sin documentación.</li>
                    <li>Registrar correctamente las operaciones en la contabilidad.</li>
                    <li>Conservar expedientes completos que acrediten el origen y destino de los recursos.</li>
                    <li>Consultar previamente con su asesor fiscal antes de realizar operaciones relevantes en efectivo.</li>
                  </ul>
                  <div className="bg-primary/5 border-l-4 border-primary rounded-r-lg p-4">
                    <p className="text-muted-foreground font-medium">
                      La mejor defensa frente a cualquier revisión de autoridad continúa siendo una adecuada documentación y materialidad de las operaciones.
                    </p>
                  </div>
                </motion.section>

                {/* Sección VIII */}
                <motion.section
                  id="conclusion"
                  className="scroll-mt-32 mb-12"
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <h2 className="text-3xl font-serif font-bold text-foreground mb-6 scroll-mt-32">
                    VIII. Conclusión
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    La medida implementada por la banca mexicana <strong>no constituye una reforma fiscal</strong>, no crea nuevas contribuciones y no amplía las facultades del SAT.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Se trata de un fortalecimiento de las políticas de prevención de lavado de dinero dentro del sistema financiero nacional.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    No obstante, confirma una tendencia que continuará fortaleciéndose durante los próximos años: una mayor <strong>transparencia y trazabilidad</strong> de las operaciones financieras.
                  </p>
                </motion.section>

                {/* Preguntas frecuentes */}
                <motion.section
                  id="preguntas-frecuentes"
                  className="scroll-mt-32 mb-12"
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <h2 className="text-3xl font-serif font-bold text-foreground mb-6 scroll-mt-32">
                    Preguntas frecuentes
                  </h2>
                  <div className="space-y-6">
                    {[
                      {
                        q: '¿Debo pagar impuestos por depositar $140,000.00?',
                        a: 'No. El impuesto depende del origen y naturaleza de los recursos, no del simple depósito.',
                      },
                      {
                        q: '¿El SAT recibirá automáticamente un aviso?',
                        a: 'No existe una disposición que establezca que cada depósito de ese monto genere automáticamente una auditoría o una revisión fiscal.',
                      },
                      {
                        q: '¿Es ilegal realizar depósitos en efectivo?',
                        a: 'No. Son perfectamente legales cuando provienen de recursos lícitos y cuentan con el debido soporte documental.',
                      },
                      {
                        q: '¿Puede el banco negarse a realizar la operación?',
                        a: 'Sí. Si el usuario no acredita su identidad o no cumple con las políticas de identificación aplicables, la institución financiera puede rechazar la operación.',
                      },
                    ].map((faq, i) => (
                      <div key={i} className="bg-muted/40 rounded-lg p-5 border border-border/50">
                        <p className="font-semibold text-foreground mb-2">{faq.q}</p>
                        <p className="text-muted-foreground">{faq.a}</p>
                      </div>
                    ))}
                  </div>
                </motion.section>

                {/* Fundamento legal */}
                <motion.section
                  id="fundamento-legal"
                  className="scroll-mt-32 mb-12"
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <h2 className="text-3xl font-serif font-bold text-foreground mb-6 scroll-mt-32">
                    Anexo Jurídico — Fundamento Legal
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    El presente boletín se sustenta, entre otras, en las siguientes disposiciones:
                  </p>
                  <div className="space-y-4">
                    {/* 1 */}
                    <div className="border border-border/50 rounded-lg p-5">
                      <p className="font-semibold text-foreground mb-1">1. Constitución Política de los Estados Unidos Mexicanos</p>
                      <ul className="list-disc list-inside text-muted-foreground text-sm ml-2">
                        <li>Artículo 31, fracción IV.</li>
                      </ul>
                    </div>
                    {/* 2 */}
                    <div className="border border-border/50 rounded-lg p-5">
                      <p className="font-semibold text-foreground mb-1">2. Ley de Instituciones de Crédito</p>
                      <ul className="list-disc list-inside text-muted-foreground text-sm ml-2">
                        <li>Artículos relativos a las obligaciones de control interno, administración de riesgos, identificación de clientes y cumplimiento regulatorio aplicables a las instituciones de crédito.</li>
                      </ul>
                    </div>
                    {/* 3 */}
                    <div className="border border-border/50 rounded-lg p-5">
                      <p className="font-semibold text-foreground mb-1">3. Ley para la Prevención e Identificación de Operaciones con Recursos de Procedencia Ilícita (LFPIORPI)</p>
                      <ul className="list-disc list-inside text-muted-foreground text-sm ml-2">
                        <li>Disposiciones relativas a la prevención de operaciones con recursos de procedencia ilícita y coordinación con autoridades competentes.</li>
                      </ul>
                    </div>
                    {/* 4 */}
                    <div className="border border-border/50 rounded-lg p-5">
                      <p className="font-semibold text-foreground mb-2">4. Disposiciones de Carácter General a que se refiere el artículo 115 de la Ley de Instituciones de Crédito, emitidas por la Comisión Nacional Bancaria y de Valores (CNBV).</p>
                      <p className="text-muted-foreground text-sm mb-1">Reglas relativas a:</p>
                      <ul className="list-disc list-inside text-muted-foreground text-sm ml-4 space-y-1">
                        <li>identificación y conocimiento del cliente;</li>
                        <li>expediente único;</li>
                        <li>monitoreo de operaciones;</li>
                        <li>reportes de operaciones relevantes, inusuales e internas preocupantes;</li>
                        <li>administración de riesgos en materia de prevención de lavado de dinero y financiamiento al terrorismo.</li>
                      </ul>
                    </div>
                    {/* 5 */}
                    <div className="border border-border/50 rounded-lg p-5">
                      <p className="font-semibold text-foreground mb-2">5. Estándares internacionales del Grupo de Acción Financiera Internacional (GAFI/FATF), particularmente las recomendaciones relativas a:</p>
                      <ul className="list-disc list-inside text-muted-foreground text-sm ml-4 space-y-1">
                        <li>Debida diligencia del cliente (Customer Due Diligence).</li>
                        <li>Identificación del beneficiario final.</li>
                        <li>Enfoque basado en riesgos.</li>
                        <li>Conservación de información.</li>
                        <li>Prevención del lavado de dinero y financiamiento al terrorismo.</li>
                      </ul>
                    </div>
                    {/* 6 */}
                    <div className="border border-border/50 rounded-lg p-5">
                      <p className="font-semibold text-foreground mb-1">6. Comunicado de Prensa 14/2025 de la Asociación de Bancos de México, de fecha 29 de octubre de 2025, mediante el cual se anunció que, a partir del 1 de julio de 2026, las instituciones bancarias identificarían a las personas que realicen depósitos o retiros en efectivo por montos iguales o superiores a $140,000.00, como parte del fortalecimiento de las políticas de prevención de lavado de dinero.</p>
                    </div>
                  </div>
                  <div className="mt-6 bg-muted/40 rounded-lg p-4 border border-border/50">
                    <p className="text-sm text-muted-foreground italic">
                      <strong>Nota técnica:</strong> El umbral de $140,000.00 corresponde a una política de autorregulación adoptada por las instituciones bancarias y difundida por la Asociación de Bancos de México. No deriva de una reforma específica publicada en el Diario Oficial de la Federación ni modifica las facultades legales del Servicio de Administración Tributaria.
                    </p>
                  </div>
                </motion.section>

                {/* CTA final */}
                <motion.div
                  className="mt-12 p-8 bg-primary/5 border border-primary/20 rounded-2xl text-center"
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <h3 className="text-2xl font-serif font-bold text-foreground mb-3">
                    ¿Tienes dudas sobre tus operaciones en efectivo?
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    En Félix Reyes Contadores te asesoramos para mantener tus operaciones debidamente documentadas y cumplir con todos los requerimientos del sistema financiero. Contáctanos para una consulta personalizada.
                  </p>
                  <Link
                    to="/contacto"
                    className="inline-flex items-center px-6 py-3 bg-primary text-white font-semibold rounded-full hover:bg-primary/90 transition-all hover:scale-105 active:scale-95 shadow-lg"
                  >
                    Solicitar consulta
                  </Link>
                </motion.div>

              </div>
            </motion.div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default DepositosEfectivoPost;
