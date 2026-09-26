import { motion } from 'framer-motion';
import { ArrowLeft, ChevronUp, Menu, X, AlertTriangle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const post = {
  title: 'Proyecto de Reforma Fiscal 2027',
  date: '11 de septiembre, 2026',
  readTime: '12 min de lectura',
  category: 'Fiscal',
};

const tableOfContents = [
  { id: 'panorama', title: 'Panorama general' },
  { id: 'diez-puntos', title: 'Diez puntos clave' },
  { id: 'isr', title: '1. Propuestas en la Ley del ISR' },
  { id: 'iva', title: '2. Propuestas relacionadas con el IVA' },
  { id: 'cff', title: '3. CFF y fiscalización' },
  { id: 'recomendaciones', title: '4. Recomendaciones preventivas' },
  { id: 'conclusion', title: 'Conclusión' },
  { id: 'calendario', title: 'Calendario legislativo' },
  { id: 'fuentes', title: 'Fuentes consultadas' },
];

const diezPuntos = [
  {
    title: 'RESICO para personas físicas.',
    text: 'El límite anual de ingresos aumentaría de $3.5 millones a $5 millones.',
  },
  {
    title: 'RESICO para personas morales.',
    text: 'El límite aumentaría de $35 millones a $50 millones y el régimen se convertiría en opcional para las sociedades que cumplan sus requisitos.',
  },
  {
    title: 'IVA simplificado.',
    text: 'Los contribuyentes del RESICO podrían optar por pagar un porcentaje efectivo de 7% sobre sus ingresos (sin llevar contabilidad extra para micronegocios), sin acreditar el IVA de compras, gastos e inversiones. No es una reducción de la tasa general del 16%.',
  },
  {
    title: 'Grandes contribuyentes.',
    text: 'Las personas morales con ingresos superiores a $50 millones enfrentarían una limitación adicional a deducciones y pérdidas fiscales.',
  },
  {
    title: 'Intereses netos.',
    text: 'El límite general de deducibilidad bajaría de 30% a 20% de la utilidad fiscal ajustada.',
  },
  {
    title: 'Inversiones en RESICO-PM.',
    text: 'Se proponen porcentajes de deducción más altos para diversos activos, incluidos equipo de cómputo, transporte, mobiliario y maquinaria.',
  },
  {
    title: 'Pagos al extranjero.',
    text: 'Se reforzarían el momento de la deducción, la retención y los requisitos para aplicar tratados y documentar operaciones con partes relacionadas.',
  },
  {
    title: 'CUFIN, CUCA y acciones.',
    text: 'Se restringirían conceptos que pueden integrar estas cuentas y el costo fiscal de las acciones.',
  },
  {
    title: 'Plataformas digitales.',
    text: 'Cambiarían las retenciones de ISR e IVA, particularmente cuando no se proporcione RFC o los pagos terminen en cuentas extranjeras.',
  },
  {
    title: 'Repatriación de capitales.',
    text: 'Se propone una tasa preferencial de ISR de 7.5%, con inversión en México, permanencia mínima de tres años y requisitos documentales.',
  },
];

const inversiones = [
  { activo: 'Construcciones, casos generales', vigente: '13%', propuesta: '26%' },
  { activo: 'Mobiliario y equipo de oficina', vigente: '25%', propuesta: '50%' },
  { activo: 'Automóviles y transporte', vigente: '25%', propuesta: '50%' },
  { activo: 'Equipo de cómputo', vigente: '50%', propuesta: '100%' },
  { activo: 'Restaurantes', vigente: '33%', propuesta: '66%' },
  { activo: 'Otras actividades', vigente: '20%', propuesta: '40%' },
];

const recomendaciones = [
  {
    title: 'No implementar todavía.',
    text: 'No modificar cálculos, contratos, regímenes o políticas con base únicamente en la iniciativa.',
  },
  {
    title: 'Modelar escenarios.',
    text: 'Comparar RESICO contra régimen general y, en su caso, IVA tradicional contra la opción del 7%.',
  },
  {
    title: 'Revisar expedientes.',
    text: 'Integrar soporte de materialidad, razón de negocios, pagos al extranjero y partes relacionadas.',
  },
  {
    title: 'Depurar controles fiscales.',
    text: 'Conciliar CFDI, contabilidad, declaraciones, bancos, CUFIN, CUCA, inversiones y pérdidas fiscales.',
  },
  {
    title: 'Dar seguimiento legislativo.',
    text: 'Actualizar las conclusiones con los dictámenes del Congreso, el decreto publicado y las reglas de carácter general.',
  },
];

const calendario = [
  { etapa: '08 SEP 2026', detalle: 'Presentación del paquete' },
  { etapa: 'SEP-OCT', detalle: 'Análisis y dictámenes' },
  { etapa: 'OCT-NOV', detalle: 'Aprobación legislativa' },
  { etapa: 'POSTERIOR', detalle: 'Publicación en DOF' },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const ReformaFiscal2027Post = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [readingProgress, setReadingProgress] = useState(0);
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  const [showTableOfContents, setShowTableOfContents] = useState(true);

  useEffect(() => {
    const PAGE_URL = 'https://felixreyescontadores.com.mx/blog/reforma-fiscal-2027';
    const PAGE_TITLE = 'Proyecto de Reforma Fiscal 2027 | Félix Reyes Contadores';
    const PAGE_DESC = 'Avance informativo del Paquete Económico 2027: RESICO ampliado, IVA simplificado de 7%, límites a deducciones e intereses, CUFIN, CUCA y fiscalización.';
    const PAGE_IMAGE = 'https://felixreyescontadores.com.mx/reforma-fiscal-2027.webp';

    document.title = PAGE_TITLE;

    const setMeta = (name: string, content: string, prop = false) => {
      const attr = prop ? 'property' : 'name';
      let el = document.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement;
      if (!el) { el = document.createElement('meta'); el.setAttribute(attr, name); document.head.appendChild(el); }
      el.setAttribute('content', content);
    };
    setMeta('description', PAGE_DESC);
    setMeta('keywords', 'reforma fiscal 2027, paquete económico 2027, RESICO 2027, IVA simplificado 7%, deducción de intereses netos, CUFIN CUCA, repatriación de capitales, plataformas digitales, Félix Reyes Contadores');
    setMeta('og:title', PAGE_TITLE, true);
    setMeta('og:description', PAGE_DESC, true);
    setMeta('og:image', PAGE_IMAGE, true);
    setMeta('og:image:width', '1200', true);
    setMeta('og:image:height', '630', true);
    setMeta('og:url', PAGE_URL, true);
    setMeta('og:type', 'article', true);
    setMeta('og:locale', 'es_MX', true);
    setMeta('article:published_time', '2026-09-11', true);
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
      'headline': 'Proyecto de Reforma Fiscal 2027',
      'description': PAGE_DESC,
      'image': PAGE_IMAGE,
      'datePublished': '2026-09-11',
      'dateModified': '2026-09-11',
      'author': { '@type': 'Organization', 'name': 'Félix Reyes Contadores', 'url': 'https://felixreyescontadores.com.mx' },
      'publisher': { '@type': 'Organization', 'name': 'Félix Reyes Contadores', 'logo': { '@type': 'ImageObject', 'url': 'https://felixreyescontadores.com.mx/favicon.png' } },
      'mainEntityOfPage': { '@type': 'WebPage', '@id': PAGE_URL },
      'inLanguage': 'es-MX',
      'keywords': 'reforma fiscal 2027, paquete económico 2027, RESICO, IVA simplificado, ISR, CFF'
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
        setShowTableOfContents(footerRect.top >= windowHeight);
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
      const offsetPosition = element.getBoundingClientRect().top + window.pageYOffset - 100;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

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
                <p className="text-sm font-semibold uppercase tracking-wide text-primary mb-3">
                  Avance informativo
                </p>
                <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground leading-tight mb-4">
                  Proyecto de Reforma Fiscal 2027
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                  Principales propuestas en materia de ISR, IVA y Código Fiscal de la Federación.
                </p>

                {/* Ficha del boletín */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-border border border-border rounded-xl overflow-hidden mb-8">
                  <div className="bg-muted/50 p-4">
                    <p className="text-xs uppercase tracking-wide text-muted-foreground mb-1">Fecha de corte</p>
                    <p className="font-semibold text-foreground">11 de septiembre de 2026</p>
                  </div>
                  <div className="bg-muted/50 p-4">
                    <p className="text-xs uppercase tracking-wide text-muted-foreground mb-1">Carácter</p>
                    <p className="font-semibold text-foreground">Preliminar</p>
                  </div>
                  <div className="bg-muted/50 p-4">
                    <p className="text-xs uppercase tracking-wide text-muted-foreground mb-1">Dirigido a</p>
                    <p className="font-semibold text-foreground">Clientes y colaboradores</p>
                  </div>
                </div>

                <img
                  src="/reforma-fiscal-2027.webp"
                  alt="Proyecto de Reforma Fiscal 2027: propuestas en ISR, IVA y Código Fiscal de la Federación"
                  className="w-full h-auto max-h-[500px] object-cover rounded-xl shadow-lg"
                />
              </div>

              <div className="prose prose-lg max-w-none">

                {/* Aviso muy importante */}
                <motion.div
                  className="mb-12 flex gap-4 bg-amber-50 dark:bg-amber-950/30 border-l-4 border-amber-500 rounded-r-lg p-5"
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <AlertTriangle className="h-6 w-6 shrink-0 text-amber-600 dark:text-amber-400 mt-0.5" />
                  <div>
                    <h2 className="text-base font-bold uppercase tracking-wide text-amber-700 dark:text-amber-400 mb-2">
                      Aviso muy importante
                    </h2>
                    <p className="text-sm md:text-base font-medium text-amber-900 dark:text-amber-100 leading-relaxed">
                      El contenido de este boletín corresponde a propuestas presentadas al Congreso. <strong>No constituye legislación vigente ni debe aplicarse todavía.</strong> Las medidas podrán modificarse, eliminarse o adicionarse durante el proceso legislativo y solamente serán obligatorias si son aprobadas y publicadas en el Diario Oficial de la Federación.
                    </p>
                  </div>
                </motion.div>

                {/* Panorama general */}
                <motion.section
                  id="panorama"
                  className="scroll-mt-32 mb-12"
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <h2 className="text-3xl font-serif font-bold text-foreground mb-6 scroll-mt-32">
                    Panorama general
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    El Ejecutivo Federal presentó el <strong>Paquete Económico 2027</strong> el 8 de septiembre de 2026. La orientación anunciada consiste en fortalecer la recaudación mediante simplificación para pequeños contribuyentes, limitación de deducciones y pérdidas fiscales, y una fiscalización más intensa, <strong>sin proponer incrementos generales a las tasas del ISR corporativo ni del IVA</strong>.
                  </p>
                  <div className="bg-primary/5 border-l-4 border-primary rounded-r-lg p-4">
                    <p className="text-muted-foreground font-medium">
                      Este documento es un primer avance para facilitar la planeación. Las decisiones fiscales y corporativas deberán tomarse con base en el decreto definitivo y en las reglas que posteriormente se publiquen.
                    </p>
                  </div>
                </motion.section>

                {/* Diez puntos */}
                <motion.section
                  id="diez-puntos"
                  className="scroll-mt-32 mb-12"
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <h2 className="text-3xl font-serif font-bold text-foreground mb-6 scroll-mt-32">
                    Diez puntos que los contribuyentes deben conocer
                  </h2>
                  <div className="space-y-3">
                    {diezPuntos.map((punto, index) => (
                      <div
                        key={punto.title}
                        className="flex items-stretch overflow-hidden rounded-lg border border-border bg-muted/30"
                      >
                        <div className="flex w-14 shrink-0 items-center justify-center bg-primary text-white text-lg font-bold">
                          {index + 1}
                        </div>
                        <p className="px-4 py-3 text-muted-foreground leading-relaxed">
                          <strong className="text-foreground">{punto.title}</strong> {punto.text}
                        </p>
                      </div>
                    ))}
                  </div>
                </motion.section>

                {/* ISR */}
                <motion.section
                  id="isr"
                  className="scroll-mt-32 mb-12"
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <h2 className="text-3xl font-serif font-bold text-foreground mb-6 scroll-mt-32">
                    1. Propuestas en la Ley del Impuesto sobre la Renta
                  </h2>

                  <h3 className="text-2xl font-serif font-bold text-foreground mt-8 mb-4">
                    Régimen Simplificado de Confianza
                  </h3>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-6">
                    <li><strong className="text-foreground">Personas físicas:</strong> aumento del límite anual de $3.5 millones a $5 millones.</li>
                    <li><strong className="text-foreground">Personas morales:</strong> aumento del límite anual de $35 millones a $50 millones.</li>
                    <li>El RESICO de personas morales pasaría de obligatorio a <strong>opcional</strong>; la elección deberá sustentarse en una comparación financiera y fiscal.</li>
                    <li>Se permitiría regresar al régimen cuando se cumplan nuevamente los requisitos y el contribuyente se encuentre al corriente.</li>
                    <li>Para el sector primario, el monto anual exento de ISR aumentaría de $900,000 a $1 millón y podrían existir pagos trimestrales en ciertos casos.</li>
                  </ul>

                  <h3 className="text-2xl font-serif font-bold text-foreground mt-8 mb-4">
                    Deducción de inversiones en RESICO-PM
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Se proponen porcentajes acelerados para inversiones nuevas. Entre los ejemplos más relevantes:
                  </p>
                  <div className="overflow-x-auto my-6 -mx-4 px-4 md:mx-0 md:px-0">
                    <div className="inline-block min-w-full align-middle">
                      <div className="overflow-hidden shadow-sm ring-1 ring-border rounded-lg">
                        <table className="min-w-full border-collapse border border-border text-sm">
                          <thead className="bg-primary/10">
                            <tr>
                              <th className="border border-border px-4 py-2 text-left font-semibold">Activo o actividad</th>
                              <th className="border border-border px-4 py-2 text-left font-semibold">Porcentaje vigente</th>
                              <th className="border border-border px-4 py-2 text-left font-semibold">Propuesta 2027</th>
                            </tr>
                          </thead>
                          <tbody>
                            {inversiones.map((fila) => (
                              <tr key={fila.activo}>
                                <td className="border border-border px-4 py-2">{fila.activo}</td>
                                <td className="border border-border px-4 py-2">{fila.vigente}</td>
                                <td className="border border-border px-4 py-2 font-semibold text-foreground">{fila.propuesta}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                  <div className="bg-amber-50 dark:bg-amber-950/30 border-l-4 border-amber-500 rounded-r-lg p-4 mb-6">
                    <p className="text-sm text-amber-900 dark:text-amber-100">
                      <strong>Importante:</strong> las inversiones realizadas hasta el 31 de diciembre de 2026 conservarían los porcentajes aplicables al momento de su adquisición.
                    </p>
                  </div>

                  <h3 className="text-2xl font-serif font-bold text-foreground mt-8 mb-4">
                    Limitaciones a deducciones y pérdidas fiscales
                  </h3>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-6">
                    <li>Para personas morales con ingresos superiores a $50 millones se propone una base mínima mediante restricciones adicionales a las deducciones.</li>
                    <li>Si las deducciones no exceden del <strong>96.67%</strong> de los ingresos acumulables, únicamente sería deducible el <strong>99%</strong> de su importe; si exceden dicho nivel, quedarían limitadas al 96.67% de los ingresos.</li>
                    <li>Se intensificaría la revisión de pérdidas fiscales recurrentes, reestructuras, fusiones, escisiones y cambios accionarios.</li>
                    <li>El efecto práctico podría ser el pago de ISR aun con márgenes reducidos o pérdidas contables.</li>
                    <li>Actualmente, una empresa con pérdida fiscal puede disminuirla conforme a las reglas vigentes. La propuesta plantea que, para los contribuyentes sujetos al nuevo esquema, la pérdida solo pueda disminuirse hasta <strong>50% de la utilidad fiscal</strong>.</li>
                  </ul>

                  <h3 className="text-2xl font-serif font-bold text-foreground mt-8 mb-4">
                    Intereses netos y financiamiento
                  </h3>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-6">
                    <li>El límite de deducción de intereses netos se reduciría de <strong>30% a 20%</strong> de la utilidad fiscal ajustada.</li>
                    <li>El remanente no deducido podría continuar aplicándose durante los diez ejercicios siguientes.</li>
                    <li>Las empresas apalancadas y los financiamientos entre partes relacionadas requerirán una proyección específica.</li>
                  </ul>

                  <h3 className="text-2xl font-serif font-bold text-foreground mt-8 mb-4">
                    CUFIN, CUCA y costo fiscal de acciones
                  </h3>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-6">
                    <li>Para calcular la CUFIN se disminuirían los gastos que no hayan cumplido los requisitos de deducibilidad.</li>
                    <li>En capitalizaciones de pasivos no integrarían la CUCA los intereses devengados no pagados ni el IVA relacionado.</li>
                    <li>Se limitarían conceptos equivalentes para determinar el costo fiscal de las acciones y se diferiría el reconocimiento de ciertos derechos de cobro aportados hasta su recuperación efectiva.</li>
                  </ul>

                  <h3 className="text-2xl font-serif font-bold text-foreground mt-8 mb-4">
                    Pagos a residentes en el extranjero
                  </h3>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-6">
                    <li>La deducción procedería cuando se pague efectivamente la contraprestación y se entere la retención correspondiente.</li>
                    <li>Se reforzaría la documentación de residencia fiscal, beneficiario efectivo, razón de negocios, materialidad y precios de transferencia.</li>
                    <li>Será necesario alinear las fechas de devengo, exigibilidad, pago y entero de las retenciones.</li>
                  </ul>

                  <h3 className="text-2xl font-serif font-bold text-foreground mt-8 mb-4">
                    Otros cambios relevantes de ISR
                  </h3>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li>Eliminación propuesta del Régimen Opcional para Grupos de Sociedades y del diferimiento asociado.</li>
                    <li>Retención anual provisional sobre intereses de <strong>0.68%</strong> para 2027.</li>
                    <li>Homologación de requisitos para que las instituciones de crédito deduzcan pérdidas por créditos incobrables.</li>
                    <li>Programa temporal de repatriación de recursos lícitos mantenidos en el extranjero hasta el 8 de septiembre de 2026, con tasa de <strong>7.5%</strong>, inversión en México y permanencia mínima de tres años.</li>
                  </ul>
                </motion.section>

                {/* IVA */}
                <motion.section
                  id="iva"
                  className="scroll-mt-32 mb-12"
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <h2 className="text-3xl font-serif font-bold text-foreground mb-6 scroll-mt-32">
                    2. Propuestas relacionadas con el IVA
                  </h2>

                  <h3 className="text-2xl font-serif font-bold text-foreground mt-8 mb-4">
                    Opción simplificada para RESICO
                  </h3>
                  <div className="bg-muted/50 border border-border rounded-xl p-5 mb-6">
                    <p className="text-lg font-bold text-foreground mb-2">
                      El 7% no sustituye la tasa general del IVA de 16%.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      Sería una mecánica opcional para determinar el IVA directamente sobre los ingresos. Al elegirla, no se acreditaría el IVA pagado en compras, gastos e inversiones.
                    </p>
                  </div>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-6">
                    <li>La conveniencia dependerá del margen, los gastos gravados y el nivel de inversión de cada contribuyente.</li>
                    <li>Quienes tengan IVA acreditable elevado podrían obtener un resultado menos favorable con el porcentaje directo.</li>
                    <li>Se contempla integrar ISR e IVA en una sola declaración para ciertos contribuyentes del RESICO.</li>
                    <li>La mecánica definitiva dependerá del texto aprobado y de las reglas operativas que emita la autoridad.</li>
                  </ul>

                  <h3 className="text-2xl font-serif font-bold text-foreground mt-8 mb-4">
                    Plataformas tecnológicas
                  </h3>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-6">
                    <li>Se propone una retención de ISR de <strong>2.5%</strong> sobre operaciones de enajenación de bienes y prestación de servicios realizadas por personas físicas y morales mediante plataformas.</li>
                    <li>Cuando una persona moral no proporcione su RFC, la retención de ISR sería de <strong>20%</strong>.</li>
                    <li>La plataforma retendría el <strong>100% del IVA</strong> cuando el prestador sea residente en el extranjero sin establecimiento permanente en México.</li>
                    <li>También se prevé la retención total del IVA cuando los pagos se depositen en cuentas bancarias ubicadas en el extranjero.</li>
                  </ul>

                  <h3 className="text-2xl font-serif font-bold text-foreground mt-8 mb-4">
                    Precisión legislativa sobre IVA
                  </h3>
                  <div className="bg-primary/5 border-l-4 border-primary rounded-r-lg p-4">
                    <p className="text-muted-foreground font-medium">
                      Algunas medidas de IVA están contenidas o anunciadas a través de la Iniciativa de Ley de Ingresos y de esquemas de simplificación. Por ello, en esta etapa <strong>no debe asumirse que existe una reforma definitiva e integral a la LIVA</strong>. Debe revisarse el vehículo legislativo y el texto final de cada disposición.
                    </p>
                  </div>
                </motion.section>

                {/* CFF */}
                <motion.section
                  id="cff"
                  className="scroll-mt-32 mb-12"
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <h2 className="text-3xl font-serif font-bold text-foreground mb-6 scroll-mt-32">
                    3. Código Fiscal de la Federación y fiscalización
                  </h2>

                  <div className="bg-amber-50 dark:bg-amber-950/30 border-l-4 border-amber-500 rounded-r-lg p-5 mb-8">
                    <h3 className="text-lg font-bold text-amber-700 dark:text-amber-400 mb-2">
                      Distinción indispensable
                    </h3>
                    <p className="text-sm md:text-base text-amber-900 dark:text-amber-100 leading-relaxed">
                      En la documentación inicial del Paquete Económico no se identifica una reforma autónoma e integral al CFF con el mismo alcance de la propuesta de LISR. Varias medidas difundidas corresponden a una política de fiscalización más intensa y al uso de facultades que ya existen. No deben presentarse como artículos reformados hasta conocer el dictamen legislativo definitivo.
                    </p>
                  </div>

                  <h3 className="text-2xl font-serif font-bold text-foreground mt-8 mb-4">
                    Áreas de mayor vigilancia
                  </h3>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-6">
                    <li>Operaciones inexistentes, facturación simulada y procedimientos relacionados con el artículo 69-B del CFF.</li>
                    <li>Restricción temporal o cancelación de certificados de sello digital ante incumplimientos relevantes.</li>
                    <li>Cruces automatizados entre CFDI, declaraciones, contabilidad electrónica y estados de cuenta.</li>
                    <li>Acreditación de materialidad, sustancia económica y razón de negocios.</li>
                    <li>Pérdidas fiscales recurrentes, deducciones atípicas y discrepancias en márgenes.</li>
                    <li>Socios, accionistas, beneficiarios controladores y operaciones con partes relacionadas.</li>
                    <li>Depósitos bancarios, operaciones digitales y pagos hacia o desde el extranjero.</li>
                  </ul>

                  <h3 className="text-2xl font-serif font-bold text-foreground mt-8 mb-4">
                    Qué significa para las empresas
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Aunque no todas estas acciones requieran una reforma al CFF, anticipan revisiones más focalizadas. Será fundamental conservar contratos, entregables, evidencia de prestación, comunicaciones, trazabilidad bancaria, identificación de proveedores y documentación de beneficiario controlador.
                  </p>
                </motion.section>

                {/* Recomendaciones */}
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
                    4. Recomendaciones preventivas
                  </h2>
                  <div className="space-y-3">
                    {recomendaciones.map((rec, index) => (
                      <div
                        key={rec.title}
                        className="flex items-stretch overflow-hidden rounded-lg border border-border bg-muted/30"
                      >
                        <div className="flex w-14 shrink-0 items-center justify-center bg-primary text-white text-lg font-bold">
                          {index + 1}
                        </div>
                        <p className="px-4 py-3 text-muted-foreground leading-relaxed">
                          <strong className="text-foreground">{rec.title}</strong> {rec.text}
                        </p>
                      </div>
                    ))}
                  </div>
                </motion.section>

                {/* Conclusión */}
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
                    Conclusión
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    El proyecto para 2027 combina beneficios de simplificación para contribuyentes de menor tamaño con restricciones relevantes para empresas medianas y grandes. Los puntos de mayor impacto potencial son la ampliación y opcionalidad del RESICO, el IVA simplificado de 7%, la limitación de deducciones e intereses, los cambios en CUFIN y CUCA, y el fortalecimiento de controles sobre operaciones internacionales y materialidad.
                  </p>
                  <div className="bg-amber-500 rounded-xl p-6">
                    <h3 className="text-lg md:text-xl font-bold uppercase tracking-wide text-white mb-2">
                      Este boletín es un avance, no una disposición vigente
                    </h3>
                    <p className="text-white/95 font-medium leading-relaxed">
                      Las propuestas pueden cambiar durante su análisis en el Congreso. La aplicación de cualquier medida deberá esperar su aprobación, publicación en el Diario Oficial de la Federación y entrada en vigor.
                    </p>
                  </div>
                </motion.section>

                {/* Calendario legislativo */}
                <motion.section
                  id="calendario"
                  className="scroll-mt-32 mb-12"
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <h2 className="text-3xl font-serif font-bold text-foreground mb-6 scroll-mt-32">
                    Calendario legislativo de referencia
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border border border-border rounded-xl overflow-hidden">
                    {calendario.map((etapa, index) => (
                      <div
                        key={etapa.etapa}
                        className={index === 0 ? 'bg-primary p-4' : 'bg-muted/50 p-4'}
                      >
                        <p className={`text-sm font-bold uppercase tracking-wide mb-1 ${index === 0 ? 'text-white' : 'text-primary'}`}>
                          {etapa.etapa}
                        </p>
                        <p className={index === 0 ? 'text-white/90 text-sm' : 'text-muted-foreground text-sm'}>
                          {etapa.detalle}
                        </p>
                      </div>
                    ))}
                  </div>
                </motion.section>

                {/* Fuentes */}
                <motion.section
                  id="fuentes"
                  className="scroll-mt-32 mb-12"
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <h2 className="text-3xl font-serif font-bold text-foreground mb-6 scroll-mt-32">
                    Fuentes consultadas
                  </h2>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground text-sm mb-6">
                    <li>Secretaría de Hacienda y Crédito Público, Paquete Económico para el Ejercicio Fiscal 2027, presentado el 8 de septiembre de 2026.</li>
                    <li>Cámara de Diputados, iniciativas y documentos legislativos del Paquete Económico 2027.</li>
                    <li>PwC México, Presentación del Paquete Económico 2027, septiembre de 2026.</li>
                  </ul>
                  <p className="text-sm text-muted-foreground border-t border-border pt-4">
                    <strong className="text-foreground">Nota de alcance:</strong> el presente material tiene fines exclusivamente informativos y no constituye asesoría fiscal individual. Cada caso deberá analizarse conforme a sus operaciones y al texto legal definitivo.
                  </p>
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
                    ¿Cómo impactaría la Reforma Fiscal 2027 a tu empresa?
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    En Félix Reyes Contadores modelamos escenarios con tus cifras reales —RESICO contra régimen general, IVA tradicional contra la opción del 7%, límites a deducciones e intereses— para que llegues preparado al ejercicio 2027. Contáctanos para una consulta personalizada.
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

export default ReformaFiscal2027Post;
