import { motion } from 'framer-motion';
import { ArrowLeft, ChevronUp, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const post = {
  title: 'Declaración Anual de Personas Físicas',
  date: '9 de abril, 2026',
  readTime: '5 min de lectura',
  category: 'Fiscal',
};

const tableOfContents = [
  { id: 'obligacion', title: '¿Quiénes están obligados?' },
  { id: 'informacion-necesaria', title: 'Información necesaria' },
  { id: 'e-firma', title: 'Firma Electrónica (e.firma)' },
  { id: 'recomendacion', title: 'Recomendación' },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const DeclaracionAnualPost = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [readingProgress, setReadingProgress] = useState(0);
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  const [showTableOfContents, setShowTableOfContents] = useState(true);

  useEffect(() => {
    const PAGE_URL = 'https://felixreyescontadores.com.mx/blog/declaracion-anual';
    const PAGE_TITLE = 'Declaración Anual de Personas Físicas 2026 | Félix Reyes Contadores';
    const PAGE_DESC = '¿Debes presentar tu Declaración Anual? Conoce quiénes están obligados, qué documentos necesitas y cómo cumplir antes del 30 de abril de 2026.';
    const PAGE_IMAGE = 'https://felixreyescontadores.com.mx/declaracion-anual.webp';

    document.title = PAGE_TITLE;

    const setMeta = (name: string, content: string, prop = false) => {
      const attr = prop ? 'property' : 'name';
      let el = document.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement;
      if (!el) { el = document.createElement('meta'); el.setAttribute(attr, name); document.head.appendChild(el); }
      el.setAttribute('content', content);
    };
    setMeta('description', PAGE_DESC);
    setMeta('keywords', 'declaración anual personas físicas, declaración anual 2026, SAT México, obligaciones fiscales, e.firma, deducciones personales, contador Cuernavaca');
    setMeta('og:title', PAGE_TITLE, true);
    setMeta('og:description', PAGE_DESC, true);
    setMeta('og:image', PAGE_IMAGE, true);
    setMeta('og:image:width', '1200', true);
    setMeta('og:image:height', '630', true);
    setMeta('og:url', PAGE_URL, true);
    setMeta('og:type', 'article', true);
    setMeta('og:locale', 'es_MX', true);
    setMeta('article:published_time', '2026-04-09', true);
    setMeta('article:author', 'Félix Reyes Contadores', true);
    setMeta('article:section', 'Fiscal', true);
    setMeta('twitter:title', PAGE_TITLE);
    setMeta('twitter:description', PAGE_DESC);
    setMeta('twitter:image', PAGE_IMAGE);

    // Canonical
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonical) { canonical = document.createElement('link'); canonical.setAttribute('rel', 'canonical'); document.head.appendChild(canonical); }
    const prevCanonical = canonical.href;
    canonical.setAttribute('href', PAGE_URL);

    // Schema.org Article JSON-LD
    const schema = document.createElement('script');
    schema.type = 'application/ld+json';
    schema.id = 'article-schema';
    schema.text = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Article',
      'headline': 'Declaración Anual de Personas Físicas 2026',
      'description': PAGE_DESC,
      'image': PAGE_IMAGE,
      'datePublished': '2026-04-09',
      'dateModified': '2026-04-09',
      'author': { '@type': 'Organization', 'name': 'Félix Reyes Contadores', 'url': 'https://felixreyescontadores.com.mx' },
      'publisher': { '@type': 'Organization', 'name': 'Félix Reyes Contadores', 'logo': { '@type': 'ImageObject', 'url': 'https://felixreyescontadores.com.mx/favicon.png' } },
      'mainEntityOfPage': { '@type': 'WebPage', '@id': PAGE_URL },
      'inLanguage': 'es-MX',
      'keywords': 'declaración anual personas físicas, SAT 2026, obligaciones fiscales, e.firma, deducciones personales'
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

      // Detectar si llegamos al footer
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

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
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

          {/* Menú móvil deslizable */}
          <motion.aside
            initial={false}
            animate={{ x: isMobileMenuOpen ? 0 : -320 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="fixed left-0 top-0 bottom-0 w-80 bg-background border-r border-border z-40 lg:hidden overflow-y-auto pt-24"
          >
            <div className="px-6 py-8">
              <h3 className="text-lg font-serif font-bold text-foreground mb-4">Contenido</h3>
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
          </motion.aside>

          {/* Contenido principal */}
          <main className="lg:col-span-9">
            {/* Navegación */}
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.5 }}
              className="mb-8"
            >
              <Link
                to="/blog"
                className="inline-flex items-center text-primary hover:text-primary/80 transition-colors font-medium"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Volver al blog
              </Link>
            </motion.div>

            {/* Encabezado del artículo */}
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mb-8"
            >
              <div className="flex items-center gap-3 mb-4 text-sm text-muted-foreground">
                <span>{post.date}</span>
                <span>•</span>
                <span>{post.readTime}</span>
                <span>•</span>
                <span className="bg-primary/10 text-primary px-2 py-0.5 rounded-full font-medium">
                  {post.category}
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6 leading-tight">
                {post.title}
              </h1>
            </motion.div>

            {/* Imagen de portada (placeholder hasta tener la imagen) */}
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-10"
            >
              <img
                src="/declaracion-anual.webp"
                alt="Declaración Anual de Personas Físicas"
                className="w-full h-auto max-h-[450px] object-cover rounded-xl shadow-lg"
              />
            </motion.div>

            {/* Introducción */}
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.5, delay: 0.3 }}
              className="prose prose-lg max-w-none mb-12"
            >
              <p className="text-lg text-foreground/90 leading-relaxed border-l-4 border-primary pl-5 py-2 bg-primary/5 rounded-r-lg">
                Una de las obligaciones fiscales más importantes del año es la <strong>Declaración Anual de Personas Físicas</strong>, la cual debe presentarse a más tardar el <strong>30 de abril del año en curso</strong>.
              </p>
            </motion.div>

            <div className="space-y-12">

              {/* Sección 1: Obligados */}
              <section id="obligacion" className="scroll-mt-32">
                <motion.div
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <h2 className="text-3xl font-serif font-bold text-primary mb-2 scroll-mt-32">
                    ¿Quiénes están obligados a presentarla?
                  </h2>
                  <div className="w-16 h-1 bg-primary/40 rounded mb-6" />

                  <p className="text-foreground/80 leading-relaxed mb-6">
                    No todos los contribuyentes están obligados, pero sí deben presentarla aquellos que se encuentren en alguno de los siguientes supuestos:
                  </p>

                  <div className="grid gap-3">
                    {[
                      'Percibió ingresos mayores a $400,000.00 en todo el año.',
                      'Trabajó para dos o más patrones durante 2025 (aunque no haya sido al mismo tiempo).',
                      'Dejó de trabajar antes del 31 de diciembre de 2025.',
                      'Recibió ingresos por honorarios (servicios profesionales).',
                      'Obtuvo ingresos por arrendamiento de bienes inmuebles (rentas).',
                      'Realizó la venta de un bien inmueble (casa, terreno, etc.).',
                      'Percibió ingresos por actividad empresarial o plataformas digitales.',
                      'Recibió intereses (bancarios o financieros), especialmente si exceden los límites establecidos.',
                      'Obtuvo ingresos por dividendos.',
                      'Recibió ingresos del extranjero o cualquier otro tipo de ingreso adicional a su sueldo.',
                    ].map((item, i) => (
                      <motion.div
                        key={i}
                        variants={fadeInUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: i * 0.05 }}
                        className="flex items-start gap-3 p-4 bg-muted/50 rounded-lg border border-border hover:border-primary/30 hover:bg-primary/5 transition-colors"
                      >
                        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-white text-xs font-bold flex items-center justify-center mt-0.5">
                          {i + 1}
                        </span>
                        <p className="text-foreground/85 text-sm leading-relaxed">{item}</p>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </section>

              {/* Sección 2: Información necesaria */}
              <section id="informacion-necesaria" className="scroll-mt-32">
                <motion.div
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <h2 className="text-3xl font-serif font-bold text-primary mb-2 scroll-mt-32">
                    Información necesaria para la declaración
                  </h2>
                  <div className="w-16 h-1 bg-primary/40 rounded mb-6" />

                  <p className="text-foreground/80 leading-relaxed mb-6">
                    Para poder elaborar correctamente la declaración anual, es importante contar con la siguiente información:
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4">
                    {[
                      {
                        icon: '📄',
                        titulo: 'Constancias de ingresos',
                        desc: 'Sueldos, honorarios, arrendamiento, etc.',
                      },
                      {
                        icon: '🧾',
                        titulo: 'CFDIs de deducciones personales',
                        desc: 'Gastos médicos, dentales, hospitalarios, seguros de gastos médicos, colegiaturas, intereses hipotecarios, donativos, entre otros.',
                      },
                      {
                        icon: '🏦',
                        titulo: 'Estados de cuenta bancarios',
                        desc: 'De todas las cuentas activas durante el ejercicio fiscal.',
                      },
                      {
                        icon: '🏠',
                        titulo: 'Información de créditos hipotecarios',
                        desc: 'En caso de contar con uno.',
                      },
                      {
                        icon: '🪪',
                        titulo: 'RFC y datos fiscales',
                        desc: 'Asegúrate de que estén actualizados ante el SAT.',
                      },
                      {
                        icon: '🔐',
                        titulo: 'Contraseñas y e.firma',
                        desc: 'Contraseña del SAT y, de preferencia, su firma electrónica (e.firma) vigente.',
                      },
                    ].map((item, i) => (
                      <motion.div
                        key={i}
                        variants={fadeInUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: i * 0.07 }}
                        className="flex gap-4 p-4 bg-background rounded-lg border border-border shadow-sm hover:shadow-md hover:border-primary/30 transition-all"
                      >
                        <span className="text-2xl flex-shrink-0">{item.icon}</span>
                        <div>
                          <p className="font-semibold text-primary/90 text-sm mb-1">{item.titulo}</p>
                          <p className="text-foreground/70 text-sm leading-relaxed">{item.desc}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </section>

              {/* Sección 3: e.firma */}
              <section id="e-firma" className="scroll-mt-32">
                <motion.div
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <h2 className="text-3xl font-serif font-bold text-primary mb-2 scroll-mt-32">
                    Firma Electrónica (e.firma)
                  </h2>
                  <div className="w-16 h-1 bg-primary/40 rounded mb-6" />

                  <div className="p-6 bg-amber-50 border border-amber-200 rounded-xl flex gap-4 items-start">
                    <span className="text-3xl flex-shrink-0">⚠️</span>
                    <div>
                      <p className="font-semibold text-amber-800 mb-2">Atención</p>
                      <p className="text-amber-700 leading-relaxed">
                        Si no se cuenta con la firma electrónica (<strong>e.firma</strong>), deberá tramitarse lo antes posible mediante cita en el SAT, ya que es una herramienta <strong>indispensable</strong> para cumplir adecuadamente con esta obligación.
                      </p>
                    </div>
                  </div>
                </motion.div>
              </section>

              {/* Sección 4: Recomendación */}
              <section id="recomendacion" className="scroll-mt-32">
                <motion.div
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <h2 className="text-3xl font-serif font-bold text-primary mb-2 scroll-mt-32">
                    Recomendación
                  </h2>
                  <div className="w-16 h-1 bg-primary/40 rounded mb-6" />

                  <div className="p-6 bg-primary/5 border border-primary/20 rounded-xl flex gap-4 items-start">
                    <span className="text-3xl flex-shrink-0">💡</span>
                    <p className="text-foreground/85 leading-relaxed">
                      Se recomienda ampliamente acercarse con su <strong>contador público</strong>, ya que una correcta revisión de la información no solo ayuda a cumplir con la autoridad, sino también a <strong>optimizar su carga fiscal</strong> o <strong>recuperar saldos a favor</strong>.
                    </p>
                  </div>

                  <div className="mt-8 p-6 bg-primary text-white rounded-xl text-center">
                    <p className="text-lg font-serif font-semibold mb-2">
                      ¿Necesitas ayuda con tu Declaración Anual?
                    </p>
                    <p className="text-white/80 text-sm mb-4">
                      En Félix Reyes Contadores te orientamos en todo el proceso.
                    </p>
                    <Link
                      to="/#contacto"
                      className="inline-block bg-white text-primary font-semibold px-6 py-3 rounded-lg hover:bg-white/90 transition-colors"
                    >
                      Solicitar consulta
                    </Link>
                  </div>
                </motion.div>
              </section>

            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default DeclaracionAnualPost;
