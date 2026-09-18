import { motion } from 'framer-motion';
import { ArrowLeft, ChevronUp, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const post = {
  title: 'Nuevo Buzón Tributario Estatal de Morelos',
  date: '7 de agosto, 2026',
  readTime: '6 min de lectura',
  category: 'Fiscal',
};

const tableOfContents = [
  { id: 'que-es', title: '¿Qué es el Buzón Tributario Estatal?' },
  { id: 'quienes', title: '¿Quiénes deben utilizarlo?' },
  { id: 'como-ingresar', title: '¿Cómo se ingresa?' },
  { id: 'documentos', title: '¿Qué documentos podrá recibir?' },
  { id: 'cuidado', title: '¡Mucho cuidado!' },
  { id: 'beneficios', title: 'Beneficios' },
  { id: 'recomendaciones', title: 'Recomendaciones' },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const BuzonTributarioPost = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [readingProgress, setReadingProgress] = useState(0);
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  const [showTableOfContents, setShowTableOfContents] = useState(true);

  useEffect(() => {
    const PAGE_URL = 'https://felixreyescontadores.com.mx/blog/buzon-tributario-estatal-morelos';
    const PAGE_TITLE = 'Nuevo Buzón Tributario Estatal de Morelos | Félix Reyes Contadores';
    const PAGE_DESC = 'El Gobierno del Estado de Morelos puso en operación el Buzón Tributario Estatal: notificaciones con plena validez jurídica para contribuyentes inscritos en el Registro Estatal.';
    const PAGE_IMAGE = 'https://felixreyescontadores.com.mx/buzon-tributario.webp';

    document.title = PAGE_TITLE;

    const setMeta = (name: string, content: string, prop = false) => {
      const attr = prop ? 'property' : 'name';
      let el = document.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement;
      if (!el) { el = document.createElement('meta'); el.setAttribute(attr, name); document.head.appendChild(el); }
      el.setAttribute('content', content);
    };
    setMeta('description', PAGE_DESC);
    setMeta('keywords', 'buzón tributario estatal Morelos, Secretaría de Administración y Finanzas Morelos, notificaciones fiscales Morelos, Registro Estatal de Contribuyentes, obligaciones fiscales estatales, Félix Reyes Contadores');
    setMeta('og:title', PAGE_TITLE, true);
    setMeta('og:description', PAGE_DESC, true);
    setMeta('og:image', PAGE_IMAGE, true);
    setMeta('og:image:width', '1200', true);
    setMeta('og:image:height', '630', true);
    setMeta('og:url', PAGE_URL, true);
    setMeta('og:type', 'article', true);
    setMeta('og:locale', 'es_MX', true);
    setMeta('article:published_time', '2026-08-07', true);
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
      'headline': 'Nuevo Buzón Tributario Estatal de Morelos',
      'description': PAGE_DESC,
      'image': PAGE_IMAGE,
      'datePublished': '2026-08-07',
      'dateModified': '2026-08-07',
      'author': { '@type': 'Organization', 'name': 'Félix Reyes Contadores', 'url': 'https://felixreyescontadores.com.mx' },
      'publisher': { '@type': 'Organization', 'name': 'Félix Reyes Contadores', 'logo': { '@type': 'ImageObject', 'url': 'https://felixreyescontadores.com.mx/favicon.png' } },
      'mainEntityOfPage': { '@type': 'WebPage', '@id': PAGE_URL },
      'inLanguage': 'es-MX',
      'keywords': 'buzón tributario Morelos, notificaciones fiscales, Registro Estatal de Contribuyentes, SAF Morelos'
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
                <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground leading-tight mb-6">
                  Nuevo Buzón Tributario Estatal del Gobierno del Estado de Morelos
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                  El Gobierno del Estado de Morelos, a través de la <strong>Secretaría de Administración y Finanzas</strong>, puso en operación el Buzón Tributario Estatal, una nueva plataforma electrónica que será el medio oficial de comunicación entre la autoridad fiscal estatal y los contribuyentes inscritos en el Registro Estatal de Contribuyentes.
                </p>
                <img
                  src="/buzon-tributario.webp"
                  alt="Nuevo Buzón Tributario Estatal del Gobierno del Estado de Morelos"
                  className="w-full h-auto max-h-[500px] object-cover rounded-xl shadow-lg"
                />
              </div>

              <div className="prose prose-lg max-w-none">

                {/* ¿Qué es? */}
                <motion.section
                  id="que-es"
                  className="scroll-mt-32 mb-12"
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <h2 className="text-3xl font-serif font-bold text-foreground mb-6 scroll-mt-32">
                    ¿Qué es el Buzón Tributario Estatal?
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Es un sistema electrónico mediante el cual la autoridad fiscal estatal podrá:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-6 ml-4">
                    <li>Notificar requerimientos de información.</li>
                    <li>Enviar resoluciones y actos administrativos.</li>
                    <li>Comunicar avisos relacionados con obligaciones fiscales estatales.</li>
                    <li>Permitir el seguimiento de diversos trámites.</li>
                    <li>Obtener la Opinión de Cumplimiento de Obligaciones Fiscales Estatales de forma digital.</li>
                  </ul>
                  <div className="bg-primary/5 border-l-4 border-primary rounded-r-lg p-4">
                    <p className="text-muted-foreground font-medium">
                      Es importante conocer su funcionamiento, ya que las notificaciones realizadas por este medio tienen <strong>plena validez jurídica</strong>.
                    </p>
                  </div>
                </motion.section>

                {/* ¿Quiénes? */}
                <motion.section
                  id="quienes"
                  className="scroll-mt-32 mb-12"
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <h2 className="text-3xl font-serif font-bold text-foreground mb-6 scroll-mt-32">
                    ¿Quiénes deben utilizarlo?
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    El buzón está dirigido a las <strong>personas físicas y morales inscritas en el Registro Estatal de Contribuyentes de Morelos</strong>, quienes cuentan con un buzón asignado y deben habilitar sus medios de contacto para recibir comunicaciones oficiales.
                  </p>
                </motion.section>

                {/* ¿Cómo ingresar? */}
                <motion.section
                  id="como-ingresar"
                  className="scroll-mt-32 mb-12"
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <h2 className="text-3xl font-serif font-bold text-foreground mb-6 scroll-mt-32">
                    ¿Cómo se ingresa?
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    El acceso se realiza mediante:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-6 ml-4">
                    <li>e.firma (Firma Electrónica), o</li>
                    <li>los mecanismos de autenticación habilitados por la Secretaría de Administración y Finanzas.</li>
                  </ul>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Una vez dentro del sistema, es indispensable registrar y mantener actualizados:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                    <li>Correo electrónico</li>
                    <li>Número de teléfono celular</li>
                  </ul>
                </motion.section>

                {/* Documentos */}
                <motion.section
                  id="documentos"
                  className="scroll-mt-32 mb-12"
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <h2 className="text-3xl font-serif font-bold text-foreground mb-6 scroll-mt-32">
                    ¿Qué tipo de documentos podrá recibir?
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Entre otros:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                    <li>Requerimientos de información.</li>
                    <li>Resoluciones administrativas.</li>
                    <li>Créditos fiscales.</li>
                    <li>Avisos oficiales.</li>
                    <li>Comunicaciones relacionadas con impuestos estatales.</li>
                    <li>Opiniones de cumplimiento.</li>
                  </ul>
                </motion.section>

                {/* Mucho cuidado */}
                <motion.section
                  id="cuidado"
                  className="scroll-mt-32 mb-12"
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <h2 className="text-3xl font-serif font-bold text-foreground mb-6 scroll-mt-32">
                    ¡Mucho cuidado!
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Uno de los aspectos más importantes es que <strong>no abrir el buzón no impide que la notificación sea válida</strong>.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Conforme al Código Fiscal para el Estado de Morelos, una vez transcurridos los plazos legales, las notificaciones realizadas a través del buzón surten efectos jurídicos, aun cuando el contribuyente no haya ingresado a consultarlas. El portal oficial indica que esto ocurre al <strong>cuarto día hábil</strong> contado a partir del envío del mensaje, una vez cumplidos los requisitos legales.
                  </p>
                  <div className="bg-destructive/10 border-l-4 border-destructive rounded-r-lg p-4">
                    <p className="text-foreground font-semibold">
                      En otras palabras: ignorar el buzón no evita que comiencen a correr los plazos para atender un requerimiento o ejercer un medio de defensa.
                    </p>
                  </div>
                </motion.section>

                {/* Beneficios */}
                <motion.section
                  id="beneficios"
                  className="scroll-mt-32 mb-12"
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <h2 className="text-3xl font-serif font-bold text-foreground mb-6 scroll-mt-32">
                    Beneficios
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Además de cumplir con una obligación administrativa, el sistema ofrece diversas ventajas:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                    <li>Disponible las 24 horas del día.</li>
                    <li>Evita traslados a oficinas recaudadoras.</li>
                    <li>Permite consultar el historial de notificaciones.</li>
                    <li>Mayor rapidez en los trámites.</li>
                    <li>Seguridad jurídica mediante firma electrónica.</li>
                    <li>Obtención inmediata de la Opinión de Cumplimiento Fiscal Estatal.</li>
                  </ul>
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
                    En Félix Reyes Contadores recomendamos:
                  </h2>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-6 ml-4">
                    <li>Activar el Buzón Tributario Estatal lo antes posible.</li>
                    <li>Verificar que el correo electrónico y el número celular registrados sean correctos.</li>
                    <li>Revisarlo periódicamente.</li>
                    <li>Informarnos de inmediato si reciben cualquier requerimiento o notificación, para analizarla y atenderla oportunamente.</li>
                  </ul>
                  <div className="bg-primary/5 border-l-4 border-primary rounded-r-lg p-4">
                    <p className="text-muted-foreground font-medium">
                      La atención dentro de los plazos legales puede evitar multas, recargos y procedimientos administrativos innecesarios.
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
                    ¿Recibiste una notificación en tu Buzón Tributario Estatal?
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    En Félix Reyes Contadores te ayudamos a interpretar y atender cualquier requerimiento o resolución fiscal estatal dentro de los plazos legales. Contáctanos para una consulta personalizada.
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

export default BuzonTributarioPost;
