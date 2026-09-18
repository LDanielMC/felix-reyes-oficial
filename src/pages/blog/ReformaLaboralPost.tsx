import { motion } from 'framer-motion';
import { ArrowLeft, ChevronUp, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const post = {
  title: 'Reforma a la Ley Federal del Trabajo 2026',
  date: '9 de mayo, 2026',
  readTime: '8 min de lectura',
  category: 'Laboral',
};

const tableOfContents = [
  { id: 'jornada-laboral', title: 'Reducción de jornada laboral' },
  { id: 'horas-extraordinarias', title: 'Horas extraordinarias' },
  { id: 'registros-electronicos', title: 'Registros electrónicos' },
  { id: 'conclusion', title: 'Conclusión' },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const ReformaLaboralPost = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [readingProgress, setReadingProgress] = useState(0);
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  const [showTableOfContents, setShowTableOfContents] = useState(true);

  useEffect(() => {
    const PAGE_URL = 'https://felixreyescontadores.com.mx/blog/reforma-laboral-2026';
    const PAGE_TITLE = 'Reforma a la Ley Federal del Trabajo 2026 | Félix Reyes Contadores';
    const PAGE_DESC = 'Análisis de la reforma laboral publicada el 1 de mayo de 2026: reducción gradual de jornada a 40 horas semanales, control de horas extras y registros electrónicos obligatorios.';
    const PAGE_IMAGE = 'https://felixreyescontadores.com.mx/reforma-laboral.webp';

    document.title = PAGE_TITLE;

    const setMeta = (name: string, content: string, prop = false) => {
      const attr = prop ? 'property' : 'name';
      let el = document.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement;
      if (!el) { el = document.createElement('meta'); el.setAttribute(attr, name); document.head.appendChild(el); }
      el.setAttribute('content', content);
    };
    setMeta('description', PAGE_DESC);
    setMeta('keywords', 'reforma laboral 2026, jornada 40 horas, Ley Federal del Trabajo, horas extraordinarias, registros electrónicos laborales, reducción jornada México, contador Cuernavaca');
    setMeta('og:title', PAGE_TITLE, true);
    setMeta('og:description', PAGE_DESC, true);
    setMeta('og:image', PAGE_IMAGE, true);
    setMeta('og:image:width', '1200', true);
    setMeta('og:image:height', '630', true);
    setMeta('og:url', PAGE_URL, true);
    setMeta('og:type', 'article', true);
    setMeta('og:locale', 'es_MX', true);
    setMeta('article:published_time', '2026-05-09', true);
    setMeta('article:author', 'Félix Reyes Contadores', true);
    setMeta('article:section', 'Laboral', true);
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
      'headline': 'Reforma a la Ley Federal del Trabajo 2026',
      'description': PAGE_DESC,
      'image': PAGE_IMAGE,
      'datePublished': '2026-05-09',
      'dateModified': '2026-05-09',
      'author': { '@type': 'Organization', 'name': 'Félix Reyes Contadores', 'url': 'https://felixreyescontadores.com.mx' },
      'publisher': { '@type': 'Organization', 'name': 'Félix Reyes Contadores', 'logo': { '@type': 'ImageObject', 'url': 'https://felixreyescontadores.com.mx/favicon.png' } },
      'mainEntityOfPage': { '@type': 'WebPage', '@id': PAGE_URL },
      'inLanguage': 'es-MX',
      'keywords': 'reforma laboral 2026, jornada 40 horas, Ley Federal del Trabajo, horas extraordinarias, registros electrónicos'
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
                <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground leading-tight mb-6">
                  Reforma a la Ley Federal del Trabajo
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                  La reforma <strong>publicada</strong> en el Diario Oficial de la Federación el <strong>1 de mayo de 2026</strong> modifica diversos artículos de la Ley Federal del Trabajo en materia de reducción de jornada laboral, control de horarios y regulación de horas extraordinarias.
                </p>
                <img
                  src="/reforma-laboral.webp"
                  alt="Reforma a la Ley Federal del Trabajo 2026"
                  className="w-full h-auto max-h-[450px] object-cover rounded-xl shadow-lg"
                />
              </div>

              <div className="prose prose-lg max-w-none">

                {/* Sección 1 */}
                <motion.section
                  id="jornada-laboral"
                  className="scroll-mt-32 mb-12"
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <h2 className="text-3xl font-serif font-bold text-foreground mb-6 scroll-mt-32">
                    Reducción de jornada laboral
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    La reforma tiene como finalidad disminuir gradualmente la jornada máxima semanal hasta llegar a 40 horas semanales en el año 2030. La duración máxima de la jornada ordinaria semanal será implementada de manera progresiva conforme al siguiente calendario:
                  </p>

                  <div className="overflow-x-auto mb-8">
                    <table className="w-full border-collapse rounded-lg overflow-hidden shadow-sm">
                      <thead>
                        <tr className="bg-primary text-white">
                          <th className="px-6 py-4 text-center font-semibold">Año</th>
                          <th className="px-6 py-4 text-center font-semibold">Jornada Laboral</th>
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          { year: '2026', hours: '48' },
                          { year: '2027', hours: '46' },
                          { year: '2028', hours: '44' },
                          { year: '2029', hours: '42' },
                          { year: '2030', hours: '40' },
                        ].map((row, i) => (
                          <tr key={row.year} className={i % 2 === 0 ? 'bg-muted/40' : 'bg-background'}>
                            <td className="px-6 py-4 font-semibold text-center text-foreground">{row.year}</td>
                            <td className="px-6 py-4 text-center text-muted-foreground">{row.hours}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <p className="text-muted-foreground leading-relaxed mb-4">
                    La reforma establece expresamente que la reducción de horas laborales no podrá utilizarse como fundamento para disminuir salarios, prestaciones o derechos laborales previamente adquiridos por los trabajadores.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Las jornadas máximas diarias continúan siendo de 8 horas para jornada diurna, 7 horas para jornada nocturna y 7.5 horas para jornada mixta.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Se incorpora la posibilidad de distribuir la jornada laboral de común acuerdo entre patrón y trabajador, permitiendo reorganizar horarios y esquemas operativos siempre que se respeten los límites legales establecidos por la Ley Federal del Trabajo.
                  </p>
                </motion.section>

                {/* Sección 2 */}
                <motion.section
                  id="horas-extraordinarias"
                  className="scroll-mt-32 mb-12"
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <h2 className="text-3xl font-serif font-bold text-foreground mb-6 scroll-mt-32">
                    Horas extraordinarias
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    La reforma incorpora modificaciones relevantes tanto en los límites permitidos como en los mecanismos de control, supervisión y fiscalización por parte de las autoridades laborales. El <strong>objetivo principal</strong> de esta modificación consiste en <strong>evitar</strong> que la reducción progresiva de la jornada semanal sea sustituida indebidamente mediante esquemas permanentes de <strong>tiempo extraordinario</strong>.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    La Ley Federal del Trabajo mantiene el criterio general de que las <strong>horas extraordinarias</strong> únicamente podrán laborarse cuando existan circunstancias especiales, cargas extraordinarias de trabajo o necesidades temporales de operación que justifiquen prolongar la jornada ordinaria. En consecuencia, las horas extras no deben convertirse en una práctica habitual o permanente dentro de los centros de trabajo.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    La reforma establece expresamente que las primeras horas extraordinarias deberán pagarse con un 100% adicional sobre el salario correspondiente a las horas normales de trabajo, es decir, al doble. Sin embargo, ahora se incorpora una regulación más estricta respecto de los límites máximos permitidos semanalmente, los cuales <strong>disminuirán</strong> progresivamente conforme avance la implementación de la nueva jornada laboral reducida.
                  </p>

                  <p className="text-muted-foreground leading-relaxed mb-4">
                    De manera gradual, el límite máximo de horas extraordinarias semanales será restringido hasta alcanzar un máximo de 12 horas semanales en el año 2030:
                  </p>

                  <div className="overflow-x-auto mb-8">
                    <table className="w-full border-collapse rounded-lg overflow-hidden shadow-sm">
                      <thead>
                        <tr className="bg-primary text-white">
                          <th className="px-6 py-4 text-center font-semibold">Año</th>
                          <th className="px-6 py-4 text-center font-semibold">Horas Extras</th>
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          { year: '2026', hours: '9' },
                          { year: '2027', hours: '9' },
                          { year: '2028', hours: '10' },
                          { year: '2029', hours: '11' },
                          { year: '2030', hours: '12' },
                        ].map((row, i) => (
                          <tr key={row.year} className={i % 2 === 0 ? 'bg-muted/40' : 'bg-background'}>
                            <td className="px-6 py-4 font-semibold text-center text-foreground">{row.year}</td>
                            <td className="px-6 py-4 text-center text-muted-foreground">{row.hours}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Lo anterior obligará a las empresas a replantear esquemas de operación, distribución de cargas laborales, turnos y contratación de personal adicional para evitar exceder los límites legales permitidos.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Asimismo, la reforma fortalece las disposiciones relativas al <strong>pago triple</strong> de las horas extraordinarias excedentes. En caso de que el patrón exceda los límites establecidos por la Ley Federal del Trabajo, <strong>las horas adicionales deberán cubrirse con un 200% adicional sobre el salario ordinario</strong>, es decir, al triple. Este incremento representa un impacto económico considerable para los patrones que mantengan esquemas operativos dependientes de jornadas excesivas.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Además del impacto financiero, el incumplimiento de las disposiciones relativas al tiempo extraordinario podrá generar contingencias laborales importantes, incluyendo:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-6 ml-4">
                    <li>Reclamaciones individuales o colectivas por diferencias salariales.</li>
                    <li>Imposición de multas administrativas.</li>
                    <li>Inspecciones extraordinarias por parte de la Secretaría del Trabajo y Previsión Social.</li>
                    <li>Observaciones derivadas de auditorías laborales y fiscales.</li>
                  </ul>
                  <p className="text-muted-foreground leading-relaxed">
                    La reforma también establece que la suma de jornada ordinaria y extraordinaria no podrá exceder en ningún caso de 12 horas efectivas de trabajo por día, fortaleciendo con ello los principios constitucionales relacionados con el derecho al descanso, la salud ocupacional y la seguridad laboral de los trabajadores.
                  </p>
                </motion.section>

                {/* Sección 3 */}
                <motion.section
                  id="registros-electronicos"
                  className="scroll-mt-32 mb-12"
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <h2 className="text-3xl font-serif font-bold text-foreground mb-6 scroll-mt-32">
                    Registros electrónicos
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Uno de los cambios más relevantes consiste en la <strong>obligación patronal de llevar registros electrónicos</strong> precisos sobre las jornadas laborales y las horas extraordinarias efectivamente laboradas por cada trabajador. Dichos registros deberán conservarse para efectos de inspección y tendrán valor probatorio pleno cuando exista acuerdo respecto del sistema utilizado.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    En términos prácticos, esta obligación implica que las empresas deberán implementar controles tecnológicos confiables capaces de acreditar horarios de entrada, salida, pausas, autorizaciones de tiempo extraordinario y duración efectiva de las jornadas laborales. <strong>La ausencia de controles adecuados podría generar presunciones en contra del patrón en procedimientos laborales</strong>.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    La reforma mantiene el derecho de los trabajadores a disfrutar de un día de descanso con goce íntegro de salario por cada seis días laborados. Asimismo, se conserva la obligación patronal de cubrir una prima dominical mínima del 25% cuando los trabajadores presten servicios en domingo.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Adicionalmente, se incorporan sanciones económicas importantes para los patrones que incumplan con la obligación de llevar registros electrónicos de jornada, estableciendo multas que podrán oscilar entre 250 y 5,000 UMA.
                  </p>
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
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Desde un punto de vista operativo y empresarial, esta reforma obligará a las empresas a revisar contratos individuales de trabajo, reglamentos interiores, sistemas de control de asistencia, políticas de horas extraordinarias, esquemas de turnos y costos laborales.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    La reducción progresiva de la jornada laboral implicará un incremento indirecto en el costo de mano de obra, debido a que el trabajador laborará menos horas sin reducción salarial, situación que obligará a muchas empresas a optimizar procesos operativos o incrementar personal para mantener niveles de productividad.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Desde una perspectiva empresarial y financiera, la reforma implicará un incremento indirecto en los costos laborales debido a la combinación de diversos factores, tales como el pago doble o triple de horas extraordinarias, mayores cuotas obrero-patronales derivadas del salario integrado, necesidad de contratación adicional de personal y rediseño operativo de horarios y turnos.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Por lo anterior, resulta recomendable que las empresas revisen y actualicen sus contratos individuales de trabajo, reglamentos interiores, políticas internas de control de asistencia y sistemas de autorización de tiempo extraordinario, a efecto de reducir contingencias laborales y garantizar el cumplimiento de la nueva regulación derivada de la reforma laboral de 2026.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    La reforma laboral publicada el 1 de mayo de 2026 representa uno de los cambios más relevantes en materia laboral de los últimos años, al establecer la transición gradual hacia una jornada máxima de 40 horas semanales, fortalecer los mecanismos de control y supervisión laboral y aumentar las obligaciones patronales relacionadas con el registro y control de jornadas de trabajo.
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
                    ¿Necesitas asesoría sobre la reforma laboral?
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    En Félix Reyes Contadores te ayudamos a adaptar tu empresa al nuevo marco legal. Contáctanos para una consulta personalizada.
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

export default ReformaLaboralPost;
