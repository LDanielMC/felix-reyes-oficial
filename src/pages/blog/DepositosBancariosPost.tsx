import { motion } from 'framer-motion';
import { ArrowLeft, ChevronUp, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const post = {
  title: 'Reformas fiscales 2026: Información complementaria',
  date: '3 de marzo, 2026',
  readTime: '8 min de lectura',
  category: 'Fiscal',
};

const tableOfContents = [
  { id: 'planteamiento', title: 'Presunción de Ingresos por Depósitos Bancarios' },
  { id: 'tasas-retencion-isr', title: 'Tasas de Retención de ISR sobre Intereses' },
  { id: 'modificaciones-ieps', title: 'Modificaciones a las Tasas del IEPS' },
  { id: 'repatriacion-capitales', title: 'Estímulos de Repatriación de Capitales 2026' },
  { id: 'cfdi-falsos', title: 'CFDI Falsos o Apócrifos' },
  { id: 'big-data-ml', title: 'Herramientas de Big Data y Machine Learning' },
  { id: 'plataformas-digitales', title: 'Régimen de Plataformas Digitales' },
];

const DepositosBancariosPost = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [readingProgress, setReadingProgress] = useState(0);
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  const [showTableOfContents, setShowTableOfContents] = useState(true);

  useEffect(() => {
    const PAGE_URL = 'https://felixreyescontadores.com.mx/blog/depositos-bancarios';
    const PAGE_TITLE = 'Reformas Fiscales 2026: Información Complementaria | Félix Reyes Contadores';
    const PAGE_DESC = 'Depósitos bancarios, tasas de retención ISR, modificaciones IEPS, repatriación de capitales, CFDI falsos y herramientas de Big Data en las reformas fiscales 2026.';
    const PAGE_IMAGE = 'https://felixreyescontadores.com.mx/reformasfiscales.webp';

    document.title = PAGE_TITLE;
    const setMeta = (name: string, content: string, prop = false) => {
      const attr = prop ? 'property' : 'name';
      let el = document.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement;
      if (!el) { el = document.createElement('meta'); el.setAttribute(attr, name); document.head.appendChild(el); }
      el.setAttribute('content', content);
    };
    setMeta('description', PAGE_DESC);
    setMeta('keywords', 'depósitos bancarios SAT, tasas retención ISR 2026, CFDI falsos, IEPS 2026, repatriación capitales, plataformas digitales impuestos, Big Data SAT, contador Cuernavaca');
    setMeta('og:title', PAGE_TITLE, true);
    setMeta('og:description', PAGE_DESC, true);
    setMeta('og:image', PAGE_IMAGE, true);
    setMeta('og:image:width', '1200', true);
    setMeta('og:image:height', '630', true);
    setMeta('og:url', PAGE_URL, true);
    setMeta('og:type', 'article', true);
    setMeta('og:locale', 'es_MX', true);
    setMeta('article:published_time', '2026-03-03', true);
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
      'headline': 'Reformas Fiscales 2026: Información Complementaria',
      'description': PAGE_DESC,
      'image': PAGE_IMAGE,
      'datePublished': '2026-03-03',
      'dateModified': '2026-03-03',
      'author': { '@type': 'Organization', 'name': 'Félix Reyes Contadores', 'url': 'https://felixreyescontadores.com.mx' },
      'publisher': { '@type': 'Organization', 'name': 'Félix Reyes Contadores', 'logo': { '@type': 'ImageObject', 'url': 'https://felixreyescontadores.com.mx/favicon.png' } },
      'mainEntityOfPage': { '@type': 'WebPage', '@id': PAGE_URL },
      'inLanguage': 'es-MX',
      'keywords': 'depósitos bancarios SAT, CFDI falsos, IEPS 2026, repatriación capitales, Big Data fiscal'
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

      {/* Botón flotante volver arriba */}
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

      {/* Botón móvil para tabla de contenidos - Mejorado */}
      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="fixed bottom-8 left-4 z-40 lg:hidden p-4 bg-primary text-white rounded-full shadow-2xl hover:bg-primary/90 transition-all hover:scale-110 active:scale-95"
        aria-label="Tabla de contenidos"
      >
        {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      {/* Navegación entre secciones - Móvil */}
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

      {/* Overlay móvil */}
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

          {/* Tabla de contenidos - Móvil deslizable */}
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
          <div className="lg:col-span-9">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link
            to="/blog"
            className="inline-flex items-center text-sm font-sans font-medium text-primary hover:text-primary/80 mb-8 transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Volver al blog
          </Link>

          <div className="mb-8">
            <span className="inline-block px-3 py-1 text-sm font-sans font-semibold text-primary bg-primary/10 rounded-full mb-4">
              {post.category}
            </span>
            <h1 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
              {post.title}
            </h1>
            <div className="flex items-center text-sm font-sans text-muted-foreground">
              <span>{post.date}</span>
              <span className="mx-2">•</span>
              <span>{post.readTime}</span>
            </div>
          </div>

          <motion.div 
            className="my-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <img 
              src="/reformasfiscales.webp" 
              alt="Reformas fiscales 2026: Información complementaria"
              className="w-full h-auto max-h-[450px] object-cover rounded-xl shadow-lg"
            />
          </motion.div>

          <div className="prose prose-lg max-w-none text-foreground font-sans">
            
            <div className="border-t-2 border-primary mt-8 pt-8"></div>

            <h2 id="planteamiento" className="text-3xl font-serif font-bold text-primary mb-6 scroll-mt-32">PRESUNCIÓN DE INGRESOS POR DEPÓSITOS BANCARIOS</h2>
            
            <h3 className="text-2xl font-serif font-bold text-primary/90 mt-8 mb-4">PLANTEAMIENTO</h3>
            <p className="leading-relaxed">
              Derivado de la Reforma Fiscal 2026, ha surgido la interpretación de que la autoridad fiscal podrá presumir ingresos acumulables cuando la suma de depósitos bancarios exceda de $2,028,610.00.
            </p>
            <p className="leading-relaxed">
              Se analiza si dicho monto constituye un límite "libre" de fiscalización cuando no se está inscrito en el Registro Federal de Contribuyentes.
            </p>

            <h3 className="text-2xl font-serif font-bold text-primary/90 mt-8 mb-4">FUNDAMENTO LEGAL</h3>
            
            <h4 className="text-xl font-serif font-bold text-foreground mt-6 mb-3">Artículo 59, fracción III del Código Fiscal de la Federación:</h4>
            <p className="leading-relaxed">
              La autoridad podrá presumir que los depósitos en cuentas bancarias que no estén registrados en la contabilidad del contribuyente constituyen ingresos acumulables, salvo prueba en contrario.
            </p>

            <h4 className="text-xl font-serif font-bold text-foreground mt-6 mb-3">Artículo 27 del Código Fiscal de la Federación:</h4>
            <p className="leading-relaxed">
              Establece la obligación de inscribirse en el RFC cuando se realicen actividades económicas o se obtengan ingresos.
            </p>

            <h3 className="text-2xl font-serif font-bold text-primary/90 mt-8 mb-4">ANÁLISIS TÉCNICO</h3>
            <ol className="list-decimal pl-6 space-y-2 my-4">
              <li>La presunción de ingresos no depende exclusivamente del monto de $2,028,610.00.</li>
              <li>Dicho monto no constituye una exención ni un "margen libre" para realizar depósitos.</li>
              <li>La autoridad puede ejercer facultades de comprobación aun cuando no se rebase dicho umbral.</li>
              <li>La presunción admite prueba en contrario, siempre que se demuestre documentalmente el origen de los recursos.</li>
            </ol>

            <h3 className="text-2xl font-serif font-bold text-primary/90 mt-8 mb-4">IMPLICACIONES DE NO ESTAR INSCRITO EN EL RFC</h3>
            <p className="leading-relaxed">
              Cuando una persona no se encuentra inscrita en el RFC y recibe depósitos bancarios derivados de actividades económicas:
            </p>
            <ul className="list-disc pl-6 space-y-2 my-4">
              <li>Puede configurarse omisión de inscripción</li>
              <li>Puede determinarse ISR omitido.</li>
              <li>Pueden imponerse multas y recargos.</li>
              <li>Puede iniciarse procedimiento de discrepancia fiscal (en caso de persona física).</li>
            </ul>

            <h3 className="text-2xl font-serif font-bold text-primary/90 mt-8 mb-4">CONCLUSIÓN</h3>
            <p className="leading-relaxed">
              No existe en la legislación fiscal una "zona libre" de depósitos hasta $2,028,610.00.
            </p>
            <p className="leading-relaxed">
              El monto referido funciona como parámetro de referencia o indicador de riesgo, pero no limita ni impide las facultades de fiscalización del SAT.
            </p>
            <p className="leading-relaxed">
              La determinación de ingresos acumulables dependerá del origen del recurso, la habitualidad, la materialidad de las operaciones y la obligación legal de tributar.
            </p>
            <p className="leading-relaxed">
              Se recomienda formalizar situación fiscal, contar con documentación comprobatoria suficiente y mantener adecuada trazabilidad financiera.
            </p>

            <div className="border-t-2 border-primary mt-16 pt-8"></div>

            <h2 id="tasas-retencion-isr" className="text-3xl font-serif font-bold text-primary mt-12 mb-6 scroll-mt-32">TASAS DE RETENCIÓN DE ISR SOBRE INTERESES</h2>
            <h3 className="text-2xl font-serif font-bold text-primary/90 mt-8 mb-4">EJERCICIOS 2022-2026</h3>

            <h4 className="text-xl font-serif font-bold text-foreground mt-6 mb-3">MARCO GENERAL</h4>
            <p className="leading-relaxed">
              Las instituciones del sistema financiero (bancos, casas de bolsa y demás intermediarios) realizan una retención anual de ISR sobre el capital que genera intereses, misma que funciona como pago provisional y no como impuesto definitivo. Dicha retención se establece cada año en la Ley de Ingresos de la Federación.
            </p>

            <h4 className="text-xl font-serif font-bold text-foreground mt-6 mb-3">TASAS DE RETENCIÓN ANUAL (2022–2026)</h4>
            <div className="overflow-x-auto my-6 -mx-4 px-4 md:mx-0 md:px-0">
              <div className="inline-block min-w-full align-middle">
              <div className="overflow-hidden shadow-sm ring-1 ring-border rounded-lg">
              <table className="min-w-full border-collapse border border-border">
                <thead className="bg-primary/10">
                  <tr>
                    <th className="border border-border px-4 py-2 text-left font-semibold">Ejercicio</th>
                    <th className="border border-border px-4 py-2 text-left font-semibold">Tasa Anual de Retención</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td className="border border-border px-4 py-2">2022</td><td className="border border-border px-4 py-2">0.08%</td></tr>
                  <tr><td className="border border-border px-4 py-2">2023</td><td className="border border-border px-4 py-2">0.15%</td></tr>
                  <tr><td className="border border-border px-4 py-2">2024</td><td className="border border-border px-4 py-2">0.50%</td></tr>
                  <tr><td className="border border-border px-4 py-2">2025</td><td className="border border-border px-4 py-2">0.50%</td></tr>
                  <tr><td className="border border-border px-4 py-2">2026</td><td className="border border-border px-4 py-2">0.90%</td></tr>
                </tbody>
              </table>
              </div>
              </div>
            </div>

            <h4 className="text-xl font-serif font-bold text-foreground mt-6 mb-3">RETENCIÓN</h4>
            <p className="leading-relaxed">
              La retención se calcula sobre el capital invertido (saldo promedio) y no directamente sobre el interés generado. Generalmente se prorratea de forma diaria conforme a la siguiente lógica:
            </p>
            <ul className="list-disc pl-6 space-y-2 my-4">
              <li>Retención del periodo ≈ Capital promedio × Tasa anual ÷ 365 × Número de días del periodo</li>
            </ul>
            <p className="leading-relaxed">
              Al cierre del ejercicio, la persona física determina el ISR anual sobre el interés real (interés nominal menos inflación) y acredita las retenciones efectuadas.
            </p>

            <h4 className="text-xl font-serif font-bold text-foreground mt-6 mb-3">Ejemplo Comparativo (Capital promedio anual: $1,000,000)</h4>
            <ul className="list-disc pl-6 space-y-2 my-4">
              <li>2022: $800.00</li>
              <li>2023: $1,500.00</li>
              <li>2024: $5,000.00</li>
              <li>2025: $5,000.00</li>
              <li>2026: $9,000.00</li>
            </ul>

            <h4 className="text-xl font-serif font-bold text-foreground mt-6 mb-3">ANÁLISIS DE TENDENCIA</h4>
            <p className="leading-relaxed">
              Entre 2022 y 2026 se observa un incremento significativo en la tasa de retención. Partiendo de 0.08% en 2022, la tasa aumentó progresivamente hasta alcanzar 0.90% en 2026. Esto implica una mayor retención provisional durante el ejercicio fiscal, lo que impacta la liquidez del inversionista y puede generar saldos a favor en la declaración anual, dependiendo del interés real determinado.
            </p>

            <h4 className="text-xl font-serif font-bold text-foreground mt-6 mb-3">CONCLUSIÓN</h4>
            <p className="leading-relaxed">
              La tendencia al alza en las tasas de retención sobre intereses refleja un mayor anticipo de ISR durante el ejercicio fiscal. Es fundamental que los contribuyentes consideren este efecto en su planeación financiera y fiscal, particularmente en escenarios de inversiones de alto monto o portafolios diversificados.
            </p>

            <div className="border-t-2 border-primary mt-16 pt-8"></div>

            <h2 id="modificaciones-ieps" className="text-3xl font-serif font-bold text-primary mt-12 mb-6 scroll-mt-32">MODIFICACIONES A LAS TASAS DEL IEPS</h2>
            <h3 className="text-2xl font-serif font-bold text-primary/90 mt-8 mb-4">TABLA COMPARATIVA 2025 vs 2026</h3>
            <p className="leading-relaxed">
              Se presenta la tabla comparativa de las principales modificaciones a las tasas del Impuesto Especial sobre Producción y Servicios (IEPS) derivadas de la Reforma Fiscal 2026, comparando las tasas vigentes en 2025 contra las nuevas tasas aplicables a partir del 1° de enero de 2026.
            </p>

            <div className="overflow-x-auto my-6 -mx-4 px-4 md:mx-0 md:px-0">
              <div className="inline-block min-w-full align-middle">
              <div className="overflow-hidden shadow-sm ring-1 ring-border rounded-lg">
              <table className="min-w-full border-collapse border border-border text-sm">
                <thead className="bg-primary/10">
                  <tr>
                    <th className="border border-border px-4 py-2 text-left font-semibold">Concepto</th>
                    <th className="border border-border px-4 py-2 text-left font-semibold">Tasa 2025</th>
                    <th className="border border-border px-4 py-2 text-left font-semibold">Tasa 2026</th>
                    <th className="border border-border px-4 py-2 text-left font-semibold">Tipo de Modificación</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-border px-4 py-2">Cigarros y tabacos labrados</td>
                    <td className="border border-border px-4 py-2">160%</td>
                    <td className="border border-border px-4 py-2">200%</td>
                    <td className="border border-border px-4 py-2">Incremento tasa ad valorem</td>
                  </tr>
                  <tr>
                    <td className="border border-border px-4 py-2">Puros hechos a mano</td>
                    <td className="border border-border px-4 py-2">30.4%</td>
                    <td className="border border-border px-4 py-2">32%</td>
                    <td className="border border-border px-4 py-2">Incremento tasa ad valorem</td>
                  </tr>
                  <tr>
                    <td className="border border-border px-4 py-2">Productos con nicotina (pouches)</td>
                    <td className="border border-border px-4 py-2">No contemplado</td>
                    <td className="border border-border px-4 py-2">200%</td>
                    <td className="border border-border px-4 py-2">Nueva incorporación</td>
                  </tr>
                  <tr>
                    <td className="border border-border px-4 py-2">Bebidas saborizadas (cuota por litro)</td>
                    <td className="border border-border px-4 py-2">$1.6451</td>
                    <td className="border border-border px-4 py-2">$3.0818</td>
                    <td className="border border-border px-4 py-2">Incremento cuota específica</td>
                  </tr>
                  <tr>
                    <td className="border border-border px-4 py-2">Juegos con apuestas y sorteos</td>
                    <td className="border border-border px-4 py-2">30%</td>
                    <td className="border border-border px-4 py-2">50%</td>
                    <td className="border border-border px-4 py-2">Incremento tasa ad valorem</td>
                  </tr>
                  <tr>
                    <td className="border border-border px-4 py-2">Videojuegos con contenido violento</td>
                    <td className="border border-border px-4 py-2">No gravado IEPS</td>
                    <td className="border border-border px-4 py-2">8% (decreto)</td>
                    <td className="border border-border px-4 py-2">Nueva tasa IEPS</td>
                  </tr>
                </tbody>
              </table>
              </div>
              </div>
            </div>

            <h4 className="text-xl font-serif font-bold text-foreground mt-6 mb-3">NOTAS TÉCNICAS</h4>
            <ul className="list-disc pl-6 space-y-2 my-4">
              <li>Los incrementos buscan fortalecer la recaudación y desincentivar el consumo de productos considerados nocivos.</li>
              <li>La cuota específica por litro en bebidas saborizadas prácticamente se duplica.</li>
              <li>Las nuevas tasas entran en vigor el 1° de enero de 2026.</li>
              <li>Es recomendable revisar contratos, listas de precios y sistemas de facturación para asegurar la correcta aplicación del impuesto.</li>
              <li>Se establece un decreto para aplicar IEPS a videojuegos con contenido violento, sujeto a criterios de clasificación que emita la autoridad.</li>
            </ul>

            <div className="border-t-2 border-primary mt-16 pt-8"></div>

            <h2 id="repatriacion-capitales" className="text-3xl font-serif font-bold text-primary mt-12 mb-6 scroll-mt-32">ESTÍMULOS DE REPATRIACIÓN DE CAPITALES 2026</h2>

            <h3 className="text-2xl font-serif font-bold text-primary/90 mt-8 mb-4">MARCO GENERAL</h3>
            <p className="leading-relaxed">
              La Ley de Ingresos de la Federación para el ejercicio fiscal 2026 establece un estímulo fiscal en materia de repatriación de capitales, mediante el cual los contribuyentes que retornen o ingresen al país recursos mantenidos en el extranjero podrán optar por el pago de un Impuesto Sobre la Renta (ISR) definitivo a una tasa fija del 15%, sin derecho a deducción alguna.
            </p>

            <h3 className="text-2xl font-serif font-bold text-primary/90 mt-8 mb-4">BASE GRAVABLE</h3>
            <p className="leading-relaxed">
              La tasa del 15% se aplica sobre el monto total de los recursos que efectivamente se retornen o ingresen al país, es decir, sobre el importe bruto repatriado.
            </p>
            <p className="leading-relaxed">No se permite:</p>
            <ol className="list-[lower-alpha] pl-6 space-y-2 my-4">
              <li>Disminuir costos o gastos.</li>
              <li>Aplicar deducciones.</li>
              <li>Determinar utilidad fiscal.</li>
              <li>Limitar la base únicamente a la ganancia cambiaria.</li>
            </ol>

            <p className="leading-relaxed">
              En consecuencia, el impuesto no se calcula sobre la diferencia entre el tipo de cambio vigente al momento en que los recursos fueron enviados al extranjero y el tipo de cambio vigente al momento del retorno, sino sobre la totalidad del importe que ingresa a México, convertido a moneda nacional al tipo de cambio aplicable en la fecha de retorno.
            </p>

            <h3 className="text-2xl font-serif font-bold text-primary/90 mt-8 mb-4">NATURALEZA DEL IMPUESTO</h3>
            <p className="leading-relaxed">El ISR pagado bajo este esquema tiene carácter definitivo, por lo que:</p>
            <ul className="list-disc pl-6 space-y-2 my-4">
              <li>No se acumula a los demás ingresos del contribuyente.</li>
              <li>No genera derecho a acreditamientos posteriores.</li>
              <li>No permite deducciones adicionales.</li>
            </ul>

            <h3 className="text-2xl font-serif font-bold text-primary/90 mt-8 mb-4">CONSIDERACIONES ADICIONALES</h3>
            <p className="leading-relaxed">
              Para acceder al estímulo, deberán cumplirse los requisitos establecidos en la Ley de Ingresos y en las disposiciones de carácter general que emita el Servicio de Administración Tributaria, incluyendo el destino de los recursos a inversiones productivas en el país y su permanencia durante el plazo que establezca la normatividad aplicable.
            </p>

            <h3 className="text-2xl font-serif font-bold text-foreground mt-8 mb-4">CONCLUSIÓN</h3>
            <p className="leading-relaxed">
              La base del impuesto del 15% corresponde al monto total repatriado y no únicamente a la ganancia cambiaria derivada de la variación en el tipo de cambio.
            </p>
            <p className="leading-relaxed">
              Se recomienda realizar un análisis previo del impacto financiero antes de optar por el estímulo, considerando que la base gravable no permite disminuciones ni ajustes.
            </p>

            <div className="border-t-2 border-primary mt-16 pt-8"></div>

            <h2 id="cfdi-falsos" className="text-3xl font-serif font-bold text-primary mt-12 mb-6 scroll-mt-32">CFDI FALSOS O APÓCRIFOS EN MÉXICO</h2>

            <p className="leading-relaxed">
              Existen distintos supuestos en los que un CFDI puede considerarse falso, apócrifo o derivado de una operación inexistente, aun cuando no provenga directamente de una Empresa que Factura Operaciones Simuladas (EFOS).
            </p>
            <p className="leading-relaxed">
              Fundamento legal principal: Artículo 69-B del Código Fiscal de la Federación.
            </p>

            <h3 className="text-2xl font-serif font-bold text-primary/90 mt-8 mb-4">SUPUESTOS PRINCIPALES</h3>

            <h4 className="text-xl font-serif font-bold text-foreground mt-6 mb-3">1. CFDI derivados de EFOS</h4>
            <ul className="list-disc pl-6 space-y-2 my-4">
              <li>El emisor se encuentra en listado definitivo del SAT.</li>
              <li>No acredita activos, personal o infraestructura.</li>
              <li>No demuestra materialidad de operaciones.</li>
            </ul>
            <p className="leading-relaxed">
              En estos casos el CFDI fue timbrado válidamente, pero la operación es inexistente.
            </p>

            <h4 className="text-xl font-serif font-bold text-foreground mt-6 mb-3">2. CFDI apócrifos o irregulares (sin EFOS)</h4>
            <ul className="list-disc pl-6 space-y-2 my-4">
              <li><strong>CFDI clonados:</strong> uso indebido de RFC real y UUID inexistente.</li>
              <li><strong>CFDI alterados:</strong> modificación posterior del XML.</li>
              <li><strong>CFDI no timbrados:</strong> solo existe PDF sin respaldo en SAT.</li>
              <li><strong>CFDI cancelados sin validación del receptor.</strong></li>
            </ul>

            <h3 className="text-2xl font-serif font-bold text-primary/90 mt-8 mb-4">PROCEDIMIENTO PARA VALIDAR UN CFDI</h3>

            <p className="leading-relaxed"><strong>Paso 1.</strong> Verificar en el portal del SAT:</p>
            <ul className="list-disc pl-6 space-y-2 my-4">
              <li>RFC emisor</li>
              <li>RFC receptor</li>
              <li>UUID</li>
              <li>Importe</li>
              <li>Estatus: VIGENTE</li>
            </ul>

            <p className="leading-relaxed"><strong>Paso 2.</strong> Descargar XML directamente del portal del SAT y no confiar únicamente en el PDF.</p>

            <p className="leading-relaxed"><strong>Paso 3.</strong> Revisar listas del artículo 69-B (presuntos y definitivos).</p>

            <p className="leading-relaxed"><strong>Paso 4.</strong> Acreditar materialidad de la operación mediante:</p>
            <ul className="list-disc pl-6 space-y-2 my-4">
              <li>Contrato</li>
              <li>Cotización</li>
              <li>Evidencia de entrega o prestación del servicio</li>
              <li>Transferencia bancaria</li>
              <li>Correspondencia comercial</li>
              <li>Reportes, fotografías o bitácoras según corresponda</li>
            </ul>

            <h3 className="text-2xl font-serif font-bold text-primary/90 mt-8 mb-4">RIESGOS FISCALES</h3>
            <ul className="list-disc pl-6 space-y-2 my-4">
              <li>No deducibilidad en ISR.</li>
              <li>No acreditamiento de IVA</li>
              <li>Determinación de créditos fiscales.</li>
              <li>Multas conforme a los artículos 81 y 82 del CFF.</li>
              <li>Posible responsabilidad penal conforme al artículo 113 Bis del CFF.</li>
            </ul>

            <h3 className="text-2xl font-serif font-bold text-primary/90 mt-8 mb-4">CONCLUSIÓN</h3>
            <p className="leading-relaxed">
              El hecho de que un CFDI esté timbrado no garantiza la materialidad ni la deducibilidad de la operación. La autoridad fiscal actualmente verifica no solo la existencia formal del comprobante, sino la sustancia económica y la realidad de la operación.
            </p>

            <div className="border-t-2 border-primary mt-16 pt-8"></div>

            <h2 id="big-data-ml" className="text-3xl font-serif font-bold text-primary mt-12 mb-6 scroll-mt-32">HERRAMIENTAS DE BIG DATA, MACHINE LEARNING Y ANÁLISIS GEOESPACIAL</h2>

            <h3 className="text-2xl font-serif font-bold text-primary/90 mt-8 mb-4">BIG DATA</h3>
            <p className="leading-relaxed">
              Big Data se refiere al conjunto de tecnologías que permiten procesar, almacenar y analizar volúmenes masivos de información que no pueden ser manejados con herramientas tradicionales. Se caracteriza por las siguientes dimensiones:
            </p>
            <ul className="list-disc pl-6 space-y-2 my-4">
              <li><strong>Volumen:</strong> Grandes cantidades de datos.</li>
              <li><strong>Velocidad:</strong> Procesamiento en tiempo real.</li>
              <li><strong>Variedad:</strong> Diferentes tipos de datos (CFDI, estados de cuenta, declaraciones, geolocalización).</li>
              <li><strong>Veracidad:</strong> Calidad y confiabilidad de los datos.</li>
              <li><strong>Valor:</strong> Utilidad estratégica de la información.</li>
            </ul>
            <p className="leading-relaxed">
              En materia fiscal, permite analizar millones de comprobantes fiscales digitales (CFDI), cruzar información bancaria y detectar patrones de evasión o simulación.
            </p>

            <h3 className="text-2xl font-serif font-bold text-primary/90 mt-8 mb-4">MACHINE LEARNING</h3>
            <p className="leading-relaxed">
              Machine Learning es una rama de la inteligencia artificial que permite a los sistemas aprender automáticamente a partir de datos históricos y detectar patrones sin necesidad de reglas previamente programadas. Sus principales aplicaciones incluyen:
            </p>
            <ul className="list-disc pl-6 space-y-2 my-4">
              <li>Clasificación de contribuyentes según nivel de riesgo.</li>
              <li>Detección de anomalías.</li>
              <li>Modelos predictivos de incumplimiento fiscal.</li>
            </ul>
            <p className="leading-relaxed">
              En fiscalización, permite identificar probabilidades de evasión, detectar redes de empresas que simulan operaciones y analizar la materialidad de las transacciones.
            </p>

            <h3 className="text-2xl font-serif font-bold text-primary/90 mt-8 mb-4">ANÁLISIS GEOESPACIAL</h3>
            <p className="leading-relaxed">
              El análisis geoespacial consiste en el estudio de datos vinculados a una ubicación geográfica específica, utilizando mapas digitales, coordenadas GPS y sistemas de información territorial. Permite:
            </p>
            <ul className="list-disc pl-6 space-y-2 my-4">
              <li>Detectar domicilios fiscales inexistentes.</li>
              <li>Identificar concentraciones atípicas de contribuyentes en una misma dirección.</li>
              <li>Analizar coherencia entre logística, transporte y facturación.</li>
              <li>Detectar operaciones territorialmente inconsistentes.</li>
            </ul>

            <h3 className="text-2xl font-serif font-bold text-primary/90 mt-8 mb-4">CONCLUSIÓN</h3>
            <p className="leading-relaxed">
              Estas herramientas tecnológicas permiten a las autoridades fiscales realizar análisis masivos, predictivos y territoriales, fortaleciendo la detección de operaciones simuladas, la verificación de la materialidad y la identificación de riesgos fiscales.
            </p>
            <p className="leading-relaxed">
              Su uso es cada vez más relevante en el contexto de las reformas fiscales recientes, donde la autoridad cuenta con mayores capacidades tecnológicas para el cruce de información y la fiscalización integral.
            </p>

            <div className="border-t-2 border-primary mt-16 pt-8"></div>

            <h2 id="plataformas-digitales" className="text-3xl font-serif font-bold text-primary mt-12 mb-6 scroll-mt-32">RÉGIMEN DE PLATAFORMAS DIGITALES EN MÉXICO</h2>
            <h3 className="text-2xl font-serif font-bold text-primary/90 mt-8 mb-4">Reforma Fiscal y Miscelánea Fiscal 2026</h3>

            <h4 className="text-xl font-serif font-bold text-foreground mt-6 mb-3">ORIGEN DEL RÉGIMEN</h4>
            <p className="leading-relaxed">
              El Régimen de Plataformas Digitales entra en vigor el 1 de junio de 2020, derivado de reformas a la Ley del Impuesto sobre la Renta (LISR) y a la Ley del IVA. Se incorporan los artículos 113-A al 113-D de la LISR, aplicables exclusivamente a personas físicas.
            </p>

            <h4 className="text-xl font-serif font-bold text-foreground mt-6 mb-3">PERSONAS FÍSICAS</h4>
            <p className="leading-relaxed">
              Aplica a personas físicas que obtienen ingresos por la enajenación de bienes, prestación de servicios u otorgamiento del uso o goce temporal de bienes a través de plataformas digitales.
            </p>

            <div className="overflow-x-auto my-6 -mx-4 px-4 md:mx-0 md:px-0">
              <div className="inline-block min-w-full align-middle">
              <div className="overflow-hidden shadow-sm ring-1 ring-border rounded-lg">
              <table className="min-w-full border-collapse border border-border text-sm">
                <thead className="bg-primary/10">
                  <tr>
                    <th className="border border-border px-4 py-2 text-left font-semibold" rowSpan={2}>PERSONAS FÍSICAS</th>
                    <th className="border border-border px-4 py-2 text-center font-semibold" colSpan={2}>Con RFC</th>
                    <th className="border border-border px-4 py-2 text-center font-semibold" colSpan={2}>Sin RFC</th>
                  </tr>
                  <tr>
                    <th className="border border-border px-4 py-2 text-center font-semibold">ISR</th>
                    <th className="border border-border px-4 py-2 text-center font-semibold">IVA</th>
                    <th className="border border-border px-4 py-2 text-center font-semibold">ISR</th>
                    <th className="border border-border px-4 py-2 text-center font-semibold">IVA</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-border px-4 py-2">Servicio de Hospedaje a través de plataformas (airbnb, booking)</td>
                    <td className="border border-border px-4 py-2 text-center">4.0%</td>
                    <td className="border border-border px-4 py-2 text-center">8%</td>
                    <td className="border border-border px-4 py-2 text-center">20%</td>
                    <td className="border border-border px-4 py-2 text-center">16%</td>
                  </tr>
                  <tr>
                    <td className="border border-border px-4 py-2">Enajenación de Bienes y prestación de servicio (Amazon, mercado libre)</td>
                    <td className="border border-border px-4 py-2 text-center">2.5%</td>
                    <td className="border border-border px-4 py-2 text-center">8%</td>
                    <td className="border border-border px-4 py-2 text-center">20%</td>
                    <td className="border border-border px-4 py-2 text-center">16%</td>
                  </tr>
                  <tr>
                    <td className="border border-border px-4 py-2">Prestación de servicios de transporte terrestre de pasajeros y de entrega de bienes (uber, didi, bla bla car)</td>
                    <td className="border border-border px-4 py-2 text-center">2.1%</td>
                    <td className="border border-border px-4 py-2 text-center">8%</td>
                    <td className="border border-border px-4 py-2 text-center">20%</td>
                    <td className="border border-border px-4 py-2 text-center">16%</td>
                  </tr>
                </tbody>
              </table>
              </div>
              </div>
            </div>

            <h4 className="text-xl font-serif font-bold text-foreground mt-6 mb-3">Retenciones cuando SÍ proporcionan RFC</h4>
            <ul className="list-disc pl-6 space-y-2 my-4">
              <li>ISR: 2.5% sobre el ingreso bruto pagado por la plataforma.</li>
              <li>IVA: 8% de retención sobre el precio de venta cobrado al cliente.</li>
            </ul>
            <p className="leading-relaxed">
              El ISR retenido se considera pago provisional acreditable y el IVA retenido se acredita en declaración mensual.
            </p>

            <h4 className="text-xl font-serif font-bold text-foreground mt-6 mb-3">Retenciones cuando NO proporcionan RFC</h4>
            <ul className="list-disc pl-6 space-y-2 my-4">
              <li>ISR: 5% sobre el ingreso bruto pagado por la plataforma.</li>
              <li>IVA: 8% de retención sobre el precio de venta cobrado al cliente.</li>
            </ul>
            <p className="leading-relaxed">
              La mayor retención de ISR tiene como finalidad incentivar el registro correcto ante el RFC.
            </p>

            <h4 className="text-xl font-serif font-bold text-foreground mt-6 mb-3">¿Cuándo se considera comercio a través de plataformas digitales?</h4>
            <p className="leading-relaxed">
              Existe comercio en plataformas digitales cuando la plataforma intermedia la operación, procesa el pago, centraliza el cobro y efectúa retenciones. Si solo se usa como medio publicitario y el cobro se realiza directamente, no aplica el régimen.
            </p>

            <h4 className="text-xl font-serif font-bold text-foreground mt-6 mb-3">PERSONAS MORALES</h4>
            <p className="leading-relaxed">
              Las personas morales no tributan en el régimen especial de plataformas digitales; continúan bajo el Régimen General de la LISR (Título II).
            </p>

            <div className="overflow-x-auto my-6 -mx-4 px-4 md:mx-0 md:px-0">
              <div className="inline-block min-w-full align-middle">
              <div className="overflow-hidden shadow-sm ring-1 ring-border rounded-lg">
              <table className="min-w-full border-collapse border border-border text-sm">
                <thead className="bg-primary/10">
                  <tr>
                    <th className="border border-border px-4 py-2 text-left font-semibold" rowSpan={2}>PERSONAS MORALES</th>
                    <th className="border border-border px-4 py-2 text-center font-semibold" colSpan={2}>Con RFC</th>
                    <th className="border border-border px-4 py-2 text-center font-semibold" colSpan={2}>Sin RFC</th>
                  </tr>
                  <tr>
                    <th className="border border-border px-4 py-2 text-center font-semibold">ISR</th>
                    <th className="border border-border px-4 py-2 text-center font-semibold">IVA</th>
                    <th className="border border-border px-4 py-2 text-center font-semibold">ISR</th>
                    <th className="border border-border px-4 py-2 text-center font-semibold">IVA</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-border px-4 py-2">Servicio de Hospedaje a través de plataformas (airbnb, booking)</td>
                    <td className="border border-border px-4 py-2 text-center">2.5%</td>
                    <td className="border border-border px-4 py-2 text-center">8%</td>
                    <td className="border border-border px-4 py-2 text-center">20%</td>
                    <td className="border border-border px-4 py-2 text-center">16%</td>
                  </tr>
                  <tr>
                    <td className="border border-border px-4 py-2">Enajenación de Bienes y prestación de servicio (Amazon, mercado libre)</td>
                    <td className="border border-border px-4 py-2 text-center">2.5%</td>
                    <td className="border border-border px-4 py-2 text-center">8%</td>
                    <td className="border border-border px-4 py-2 text-center">20%</td>
                    <td className="border border-border px-4 py-2 text-center">16%</td>
                  </tr>
                  <tr>
                    <td className="border border-border px-4 py-2">Prestación de servicios de transporte terrestre de pasajeros y de entrega de bienes (uber, didi, bla bla car)</td>
                    <td className="border border-border px-4 py-2 text-center">2.5%</td>
                    <td className="border border-border px-4 py-2 text-center">8%</td>
                    <td className="border border-border px-4 py-2 text-center">20%</td>
                    <td className="border border-border px-4 py-2 text-center">16%</td>
                  </tr>
                </tbody>
              </table>
              </div>
              </div>
            </div>

            <p className="leading-relaxed">
              Sin embargo, la Miscelánea Fiscal 2026 establece retenciones cuando la plataforma intermedia y centraliza el pago.
            </p>
            <ul className="list-disc pl-6 space-y-2 my-4">
              <li>ISR: Retención del 2.5% sobre el ingreso bruto pagado a la persona moral, considerado pago provisional acreditable contra su ISR propio.</li>
              <li>IVA: Retención del 8% cuando la plataforma cobra directamente al consumidor final.</li>
            </ul>

            <h4 className="text-xl font-serif font-bold text-foreground mt-6 mb-3">Ejemplo práctico – Persona Moral</h4>
            <ul className="list-disc pl-6 space-y-2 my-4">
              <li>Venta por plataforma: $200,000</li>
              <li>ISR retenido (2.5%): $5,000</li>
              <li>IVA trasladado (16%): $32,000</li>
              <li>IVA retenido (8% sobre base): $16,000</li>
            </ul>
            <p className="leading-relaxed">
              La persona moral acumula el ingreso total, acredita el ISR retenido y acredita el IVA retenido en su declaración mensual.
            </p>

            <h4 className="text-xl font-serif font-bold text-foreground mt-6 mb-3">Ejemplo práctico – Persona Física con RFC</h4>
            <ul className="list-disc pl-6 space-y-2 my-4">
              <li>Venta por plataforma: $100,000</li>
              <li>ISR retenido (2.5%): $2,500</li>
              <li>IVA trasladado (16%): $16,000</li>
              <li>IVA retenido (8%): $8,000</li>
            </ul>

            <h4 className="text-xl font-serif font-bold text-foreground mt-6 mb-3">Ejemplo práctico – Persona Física sin RFC</h4>
            <ul className="list-disc pl-6 space-y-2 my-4">
              <li>Venta por plataforma: $100,000</li>
              <li>ISR retenido (20%): $5,000</li>
              <li>IVA trasladado (16%): $16,000</li>
              <li>IVA retenido (8%): $8,000</li>
            </ul>

            <h4 className="text-xl font-serif font-bold text-foreground mt-6 mb-3">DIFERENCIAS CLAVE ENTRE PERSONAS FÍSICAS Y MORALES</h4>

            <p className="leading-relaxed"><strong>Personas Físicas:</strong></p>
            <ul className="list-disc pl-6 space-y-2 my-4">
              <li>Régimen especial (113-A a 113-D LISR).</li>
              <li>ISR 2.5% con RFC / 20% sin RFC.</li>
              <li>IVA 8% retenido.</li>
            </ul>

            <p className="leading-relaxed"><strong>Personas Morales:</strong></p>
            <ul className="list-disc pl-6 space-y-2 my-4">
              <li>No están en régimen especial.</li>
              <li>Retención ISR 2.5% acreditable.</li>
              <li>IVA 8% retenido.</li>
              <li>Determinan ISR sobre utilidad fiscal.</li>
            </ul>

            <h4 className="text-xl font-serif font-bold text-foreground mt-6 mb-3">CONCLUSIÓN</h4>
            <p className="leading-relaxed">
              El régimen de plataformas digitales fue diseñado para personas físicas; sin embargo, la Reforma Fiscal 2026 y la Miscelánea Fiscal fortalecen el esquema de retenciones para personas físicas y morales cuando existe intermediación digital con centralización de pagos. Las retenciones constituyen pagos provisionales acreditables y no modifican el régimen fiscal general.
            </p>

          </div>

          <div className="mt-12 pt-8 border-t border-border">
            <h3 className="text-lg font-serif font-semibold text-foreground mb-4">
              ¿Necesitas asesoría personalizada?
            </h3>
            <p className="font-sans text-muted-foreground mb-6">
              Nuestros expertos están listos para ayudarte con cualquier duda sobre depósitos bancarios y otros temas fiscales.
            </p>
            <Link
              to="/contacto"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-sans font-medium rounded-md text-white bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-colors"
            >
              Contáctanos
            </Link>
          </div>
        </motion.div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default DepositosBancariosPost;
