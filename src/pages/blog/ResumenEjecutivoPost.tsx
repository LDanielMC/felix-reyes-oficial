import { motion } from 'framer-motion';
import { ArrowLeft, ChevronUp, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const post = {
  title: 'Reformas Fiscales 2026: Resumen Ejecutivo',
  date: '4 de marzo, 2026',
  readTime: '15 min de lectura',
  category: 'Fiscal',
};

const tableOfContents = [
  { id: 'objetivo', title: 'Objetivo' },
  { id: 'introduccion', title: 'Introducción' },
  { id: 'fiscalizacion', title: 'Fiscalización y Sanciones' },
  { id: 'requisitos-deduccion', title: 'Requisitos Obligatorios para la Deducción de Gastos' },
  { id: 'verificacion', title: 'Verificación de Proveedores y Materialidad' },
  { id: 'due-diligence', title: 'Due Diligence' },
  { id: 'plataformas', title: 'Plataformas Digitales' },
  { id: 'resico', title: 'RESICO' },
  { id: 'impuesto-cedular', title: 'Impuesto Cedular en Morelos' },
];

const ResumenEjecutivoPost = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [readingProgress, setReadingProgress] = useState(0);
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  const [showTableOfContents, setShowTableOfContents] = useState(true);

  useEffect(() => {
    const PAGE_URL = 'https://felixreyescontadores.com.mx/blog/resumen-ejecutivo';
    const PAGE_TITLE = 'Reformas Fiscales 2026: Resumen Ejecutivo | Félix Reyes Contadores';
    const PAGE_DESC = 'Panorama completo de las reformas fiscales 2026 en México: fiscalización, CFDI, due diligence, plataformas digitales, RESICO e impuesto cedular en Morelos.';
    const PAGE_IMAGE = 'https://felixreyescontadores.com.mx/reformasfiscales2.webp';

    document.title = PAGE_TITLE;
    const setMeta = (name: string, content: string, prop = false) => {
      const attr = prop ? 'property' : 'name';
      let el = document.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement;
      if (!el) { el = document.createElement('meta'); el.setAttribute(attr, name); document.head.appendChild(el); }
      el.setAttribute('content', content);
    };
    setMeta('description', PAGE_DESC);
    setMeta('keywords', 'reformas fiscales 2026, CFDI 2026, RESICO 2026, fiscalización SAT, due diligence fiscal, plataformas digitales impuestos, impuesto cedular Morelos, contador Cuernavaca');
    setMeta('og:title', PAGE_TITLE, true);
    setMeta('og:description', PAGE_DESC, true);
    setMeta('og:image', PAGE_IMAGE, true);
    setMeta('og:image:width', '1200', true);
    setMeta('og:image:height', '630', true);
    setMeta('og:url', PAGE_URL, true);
    setMeta('og:type', 'article', true);
    setMeta('og:locale', 'es_MX', true);
    setMeta('article:published_time', '2026-03-04', true);
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
      'headline': 'Reformas Fiscales 2026: Resumen Ejecutivo',
      'description': PAGE_DESC,
      'image': PAGE_IMAGE,
      'datePublished': '2026-03-04',
      'dateModified': '2026-03-04',
      'author': { '@type': 'Organization', 'name': 'Félix Reyes Contadores', 'url': 'https://felixreyescontadores.com.mx' },
      'publisher': { '@type': 'Organization', 'name': 'Félix Reyes Contadores', 'logo': { '@type': 'ImageObject', 'url': 'https://felixreyescontadores.com.mx/favicon.png' } },
      'mainEntityOfPage': { '@type': 'WebPage', '@id': PAGE_URL },
      'inLanguage': 'es-MX',
      'keywords': 'reformas fiscales 2026, CFDI, RESICO, fiscalización SAT, due diligence, plataformas digitales'
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

      // Detectar si llegamos al footer (footer típicamente está en los últimos 800px)
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
            <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
              <time>{post.date}</time>
              <span>•</span>
              <span>{post.readTime}</span>
              <span>•</span>
              <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium">
                {post.category}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
              {post.title}
            </h1>
          </div>

          <motion.div 
            className="my-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <img 
              src="/reformasfiscales2.webp" 
              alt="Reformas Fiscales 2026: Resumen Ejecutivo"
              className="w-full h-auto max-h-[450px] object-cover rounded-xl shadow-lg"
            />
          </motion.div>

          <div className="prose prose-lg max-w-none text-foreground font-sans">
            
            <div className="border-t-2 border-primary mt-8 pt-8"></div>

            <h2 id="objetivo" className="text-3xl font-serif font-bold text-primary mb-6 scroll-mt-32">OBJETIVO</h2>
            <p className="leading-relaxed">
              Ofrecer un panorama general respecto a las principales reformas fiscales aplicables al ejercicio 2026, a fin de contar con información clara que permita tomar decisiones adecuadas y realizar los ajustes necesarios conforme a la normatividad vigente.
            </p>

            <div className="border-t-2 border-primary mt-12 pt-8"></div>

            <h2 id="introduccion" className="text-3xl font-serif font-bold text-primary mb-6 scroll-mt-32">INTRODUCCIÓN</h2>
            <p className="leading-relaxed">
              El Paquete Económico 2026 incluye modificaciones a diversas leyes fiscales con el objetivo de fortalecer la recaudación, ampliar la base de contribuyentes y reforzar la fiscalización. Dichas reformas fortalecen el marco tributario y pueden impactar directamente en el cumplimiento de las obligaciones fiscales, así como en la planeación financiera y contable de las operaciones.
            </p>

            <div className="border-t-2 border-primary mt-12 pt-8"></div>

            <h2 id="fiscalizacion" className="text-3xl font-serif font-bold text-primary mb-6 scroll-mt-32">FISCALIZACIÓN Y SANCIONES</h2>
            
            <h3 className="text-2xl font-serif font-bold text-primary/90 mt-8 mb-4">RFC</h3>
            
            <h4 className="text-xl font-serif font-bold text-foreground mt-6 mb-3">Negociación a la inscripción al RFC</h4>
            <p className="leading-relaxed">
              La autoridad podrá negar la inscripción de personas morales en el RFC cuando se detecte que su representante legal, socio, accionista o quien tenga el control efectivo de la moral:
            </p>
            <ul className="list-disc pl-6 space-y-2 my-4">
              <li>Tenga el CSD restringido temporalmente.</li>
              <li>Se encuentre en el supuesto de presunción de inexistencia de operaciones.</li>
              <li>No haya corregido su situación fiscal.</li>
            </ul>

            <h4 className="text-xl font-serif font-bold text-foreground mt-6 mb-3">Solicitud de constancia de situación fiscal para facturar</h4>
            <p className="leading-relaxed">
              Se considera infracción condicionar la emisión del CFDI a la presentación de la constancia de situación fiscal. Asimismo, será infracción emitir CFDI asentando el RFC de una persona distinta a quien adquiere el bien o servicio.
            </p>

            <div className="bg-primary/10 border-l-4 border-primary p-6 my-6 rounded-r-lg">
              <h4 className="text-lg font-serif font-bold text-foreground mb-4">Guía para obtener tu Cédula de Identificación Fiscal (CIF) - En línea</h4>
              <ol className="list-decimal pl-6 space-y-2">
                <li>Ingresa a: www.sat.gob.mx</li>
                <li>Da clic en "Trámites del RFC"</li>
                <li>Selecciona "Obtén tu Cédula de Identificación Fiscal"</li>
                <li>Inicia sesión con alguna de las siguientes opciones:
                  <ul className="list-disc pl-6 mt-2 space-y-1">
                    <li>RFC y contraseña</li>
                    <li>E.firma</li>
                  </ul>
                </li>
                <li>Descarga el archivo en PDF</li>
              </ol>
            </div>

            <h4 className="text-xl font-serif font-bold text-foreground mt-6 mb-3">Presunción de ingresos en personas no inscritas</h4>
            <p className="leading-relaxed">
              Se presumirá que los depósitos bancarios de personas no inscritas en el RFC o no obligadas a llevar contabilidad, cuya suma exceda $2,028,610.00 en un ejercicio fiscal, son ingresos por los que se deben pagar contribuciones.
            </p>

            <h4 className="text-xl font-serif font-bold text-foreground mt-6 mb-3">Retención sobre intereses</h4>
            <p className="leading-relaxed">
              La tasa de retención sobre intereses pagados por instituciones financieras aumenta del 0.50 % al 0.90 %.
            </p>

            <h4 className="text-xl font-serif font-bold text-foreground mt-6 mb-3">Impuestos especiales (IEPS)</h4>
            <p className="leading-relaxed">
              Se incrementan las tasas aplicables al tabaco, bebidas saborizadas, apuestas, sorteos y videojuegos con contenido violento, extremo o para adultos, con el objetivo de desincentivar consumos considerados nocivos y aumentar la recaudación.
            </p>

            <div className="overflow-x-auto my-6">
              <div className="inline-block min-w-full align-middle">
                <div className="overflow-hidden shadow-md rounded-lg border border-border">
                  <table className="min-w-full divide-y divide-border">
                    <thead className="bg-muted">
                      <tr>
                        <th className="px-4 py-3 text-left text-xs font-medium text-foreground uppercase tracking-wider">Concepto</th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-foreground uppercase tracking-wider">Tasa 2025</th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-foreground uppercase tracking-wider">Tasa 2026</th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-foreground uppercase tracking-wider">Tipo de Modificación</th>
                      </tr>
                    </thead>
                    <tbody className="bg-background divide-y divide-border">
                      <tr>
                        <td className="px-4 py-3 text-sm">Cigarros y Tabacos</td>
                        <td className="px-4 py-3 text-sm">160%</td>
                        <td className="px-4 py-3 text-sm font-semibold text-primary">200%</td>
                        <td className="px-4 py-3 text-sm">Incremento tasa ad valorem</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 text-sm">Puros hechos a mano</td>
                        <td className="px-4 py-3 text-sm">30.4%</td>
                        <td className="px-4 py-3 text-sm font-semibold text-primary">32%</td>
                        <td className="px-4 py-3 text-sm">Incremento tasa ad valorem</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 text-sm">Productos con nicotina</td>
                        <td className="px-4 py-3 text-sm">No contemplado</td>
                        <td className="px-4 py-3 text-sm font-semibold text-primary">200%</td>
                        <td className="px-4 py-3 text-sm">Nueva incorporación</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 text-sm">Bebidas saborizadas (cuota por litro)</td>
                        <td className="px-4 py-3 text-sm">$1.6451</td>
                        <td className="px-4 py-3 text-sm font-semibold text-primary">$3.0818</td>
                        <td className="px-4 py-3 text-sm">Incremento cuota específica</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 text-sm">Juegos con apuestas y sorteos</td>
                        <td className="px-4 py-3 text-sm">30%</td>
                        <td className="px-4 py-3 text-sm font-semibold text-primary">50%</td>
                        <td className="px-4 py-3 text-sm">Incremento tasa ad valorem</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 text-sm">Videojuegos con contenido violento</td>
                        <td className="px-4 py-3 text-sm">No gravado IEPS</td>
                        <td className="px-4 py-3 text-sm font-semibold text-primary">8% (decreto)</td>
                        <td className="px-4 py-3 text-sm">Nueva tasa IEPS</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <h4 className="text-xl font-serif font-bold text-foreground mt-6 mb-3">Regularización fiscal y repatriación de capitales</h4>
            <p className="leading-relaxed">
              Se establece un beneficio para personas físicas y morales que hayan obtenido recursos de procedencia lícita mantenidos en el extranjero hasta el 8 de septiembre de 2025. El impuesto se calculará aplicando una tasa del 15 %, sin deducción alguna, sobre el monto total que se retorne o ingrese al país. Los recursos deberán retornar a México a más tardar el 31 de diciembre de 2026.
            </p>
            <p className="leading-relaxed">
              Los recursos deberán invertirse y permanecer invertidos por al menos 3 años en:
            </p>
            <ul className="list-disc pl-6 space-y-2 my-4">
              <li>Adquisición de bienes nuevos o activo fijo.</li>
              <li>Adquisición de terrenos y construcciones en México.</li>
              <li>Investigación, capacitación, innovación y desarrollo tecnológico.</li>
              <li>Pago de pasivos a favor de la Federación.</li>
              <li>Pago de contribuciones, sueldos, carreteras, agua u hospitales.</li>
            </ul>
            <p className="text-sm italic text-muted-foreground">*No aplica a personas del Régimen Simplificado de Confianza.</p>

            <h4 className="text-xl font-serif font-bold text-foreground mt-6 mb-3">Fiscalización estricta del SAT</h4>
            <p className="leading-relaxed">
              El SAT amplía sus facultades de auditoría, incluyendo revisiones electrónicas más rápidas, cruces automáticos de información y la posibilidad de solicitar evidencia adicional. Asimismo, incrementa el uso de bases de datos bancarias, laborales y aduaneras para identificar inconsistencias fiscales.
            </p>

            <h4 className="text-xl font-serif font-bold text-foreground mt-6 mb-3">Cancelación de sellos digitales</h4>
            <p className="leading-relaxed">
              El SAT podrá suspender o cancelar los sellos digitales por omisión en la presentación de declaraciones, uso de CFDI irregulares o discrepancias significativas entre lo facturado y lo declarado. Sin sellos digitales, una empresa no puede emitir facturas, lo que paraliza sus operaciones.
            </p>

            <h3 className="text-2xl font-serif font-bold text-primary/90 mt-8 mb-4">CFDI Irregular vs CFDI Falso</h3>
            
            <div className="overflow-x-auto my-6">
              <div className="inline-block min-w-full align-middle">
                <div className="overflow-hidden shadow-md rounded-lg border border-border">
                  <table className="min-w-full divide-y divide-border">
                    <thead className="bg-muted">
                      <tr>
                        <th className="px-4 py-3 text-left text-xs font-medium text-foreground uppercase tracking-wider">CFDI Irregular</th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-foreground uppercase tracking-wider">CFDI Falso</th>
                      </tr>
                    </thead>
                    <tbody className="bg-background divide-y divide-border">
                      <tr>
                        <td className="px-4 py-3 text-sm">Factura que sí corresponde a una operación real, pero tiene algún problema en su forma o en su información.</td>
                        <td className="px-4 py-3 text-sm">Factura que ampara una operación que nunca ocurrió.</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 text-sm">
                          <ul className="list-disc pl-4 space-y-1">
                            <li>Datos fiscales incorrectos.</li>
                            <li>Descripción muy genérica.</li>
                            <li>Régimen fiscal equivocado.</li>
                            <li>Error en el uso del CFDI.</li>
                            <li>Se emitió fuera de tiempo.</li>
                          </ul>
                        </td>
                        <td className="px-4 py-3 text-sm">
                          <ul className="list-disc pl-4 space-y-1">
                            <li>No hubo servicio.</li>
                            <li>No hubo venta real.</li>
                            <li>No hubo entrega de bienes.</li>
                            <li>Solo se emitió el comprobante para simular un gasto o ingreso.</li>
                          </ul>
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 text-sm font-semibold text-green-600">Puede corregirse.</td>
                        <td className="px-4 py-3 text-sm font-semibold text-red-600">Puede generar consecuencias graves.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <p className="leading-relaxed">
              Para que un CFDI (factura electrónica) sea válido en 2026, debe cumplir con los estándares de la versión 4.0 y los requisitos establecidos por el SAT en el Código Fiscal de la Federación (CFF).
            </p>

            <h4 className="text-xl font-serif font-bold text-foreground mt-6 mb-3">1. Datos obligatorios del receptor (Tus datos)</h4>
            <p className="leading-relaxed">
              Es fundamental que la información coincida exactamente con tu Constancia de Situación Fiscal:
            </p>
            <ul className="list-disc pl-6 space-y-2 my-4">
              <li><strong>RFC:</strong> Debe estar escrito correctamente.</li>
              <li><strong>Nombre o Razón Social:</strong> Debe escribirse en mayúsculas y sin el régimen societario (ej. "EMPRESA" en lugar de "EMPRESA S.A. DE C.V.").</li>
              <li><strong>Código Postal:</strong> Correspondiente al domicilio fiscal registrado. Si se tiene más de un local o establecimiento, se deberá señalar el domicilio del local o establecimiento en el que se expidan las Facturas.</li>
              <li><strong>Régimen Fiscal:</strong> Debe ser el que te corresponde según tu actividad.</li>
              <li><strong>Uso de CFDI:</strong> Debe ser coherente con el gasto (ej. G01 Adquisición de mercancías, G03 Gastos en general, G02 Devoluciones, descuentos o bonificaciones, I03 Equipo de transporte, I04 Equipo de cómputo y accesorios, D01 Honorarios médicos, D04 Donativos, D10 Colegiaturas, CP01 Pagos, CN01 Nómina, etc.).</li>
            </ul>

            <h4 className="text-xl font-serif font-bold text-foreground mt-6 mb-3">2. Datos de la operación</h4>
            <ul className="list-disc pl-6 space-y-2 my-4">
              <li><strong>Clave de Producto o Servicio:</strong> Debe usar las claves vigentes del catálogo del SAT que describan fielmente el bien o servicio. *Nota: El SAT pone a tu disposición una herramienta en la que podrás identificar la clave del Producto o Servicio que deseas facturar, la liga para acceder a la herramienta es: http://pys.sat.gob.mx/PyS/catPyS.aspx</li>
              <li><strong>Método de Pago:</strong> PUE (Pago en una sola exhibición) o PPD (Pago en parcialidades o diferido).</li>
              <li><strong>Forma de Pago:</strong> Si el monto excede los $2,000 MXN, el pago no puede ser en efectivo; debe ser mediante transferencia, cheque, tarjeta de crédito o débito.</li>
              <li><strong>Desglose de Impuestos:</strong> Debe separar el IVA, IEPS o retenciones según corresponda</li>
            </ul>

            <h4 className="text-xl font-serif font-bold text-foreground mt-6 mb-3">3. Requisitos de fondo (Novedades 2026)</h4>
            <p className="leading-relaxed">A partir de la Reforma Fiscal 2026, el SAT enfatiza la materialidad:</p>
            <ul className="list-disc pl-6 space-y-2 my-4">
              <li><strong>Operaciones Reales:</strong> El CFDI debe amparar actos jurídicos existentes y verídicos para evitar ser considerado como "factura falsa".</li>
              <li><strong>Estricta Indispensabilidad:</strong> El gasto debe ser necesario para generar tus ingresos (excepto en deducciones personales para personas físicas).</li>
              <li><strong>Complemento de Pago:</strong> Si la factura se emitió como PPD, es obligatorio contar con el Recibo Electrónico de Pago (REP) para poder deducirla.</li>
              <li><strong>Validación de Emisor:</strong> El proveedor no debe figurar en la lista del artículo 69-B del Código Fiscal de la Federación (EFOS).</li>
              <li><strong>Registro Contable:</strong> El gasto debe estar correctamente registrado en la contabilidad.</li>
            </ul>

            <div className="bg-primary/10 border-l-4 border-primary p-6 my-6 rounded-r-lg">
              <h4 className="text-lg font-serif font-bold text-foreground mb-4">Guía para la verificación de CFDI's</h4>
              <p className="font-semibold mb-2">En línea (Portal oficial del SAT):</p>
              <ol className="list-decimal pl-6 space-y-2">
                <li>Ingresa a: https://verificacfdi.facturaelectronica.sat.gob.mx/</li>
                <li>Captura los siguientes datos del CFDI:
                  <ul className="list-disc pl-6 mt-2 space-y-1">
                    <li>Folio Fiscal (UUID)</li>
                    <li>RFC del emisor</li>
                    <li>RFC del receptor</li>
                  </ul>
                </li>
                <li>Da clic en "Verificar CFDI".</li>
                <li>Revisa que el resultado indique:
                  <ul className="list-disc pl-6 mt-2 space-y-1">
                    <li>Estado: Vigente</li>
                    <li>No aparezca como cancelado</li>
                  </ul>
                </li>
                <li>Guarda o imprime el resultado como respaldo.</li>
              </ol>
              <p className="text-sm italic mt-4">* Nota importante: el folio fiscal (UUID) se encuentra en la parte superior del PDF o dentro del archivo XML de la factura.</p>
            </div>

            <h4 className="text-xl font-serif font-bold text-foreground mt-6 mb-3">CFDI falsos y sanciones penales</h4>
            <p className="leading-relaxed">
              Se endurecen las penas por emitir o utilizar CFDI falsos. Se sancionará penalmente a quien, por sí o por interpósita persona, expida, enajene, compre, adquiera o dé efectos fiscales a comprobantes fiscales falsos. Las sanciones van de 2 a 9 años de prisión e incluso pueden implicar prisión preventiva oficiosa. Se amplía la responsabilidad solidaria de administradores, representantes legales y contadores.
            </p>

            <h4 className="text-xl font-serif font-bold text-foreground mt-6 mb-3">Nuevas multas y sanciones administrativas</h4>
            <p className="leading-relaxed">
              Las multas por no emitir CFDI o por hacerlo de manera incorrecta aumentan hasta en un 40 %. En caso de reincidencia, las sanciones podrán incrementarse. Asimismo, la omisión de declaraciones se penaliza de forma más severa.
            </p>

            <h4 className="text-xl font-serif font-bold text-foreground mt-6 mb-3">Uso de tecnología para auditorías</h4>
            <p className="leading-relaxed">
              Se establece un procedimiento especial para visitas domiciliarias cuyo objetivo es verificar que los CFDI amparen operaciones existentes y verdaderas.
            </p>
            <p className="leading-relaxed">
              Estas visitas no se limitan únicamente al domicilio fiscal registrado, sino que pueden realizarse en establecimientos, sucursales, bodegas, almacenes o incluso puestos fijos o semifijos en la vía pública; es decir, en cualquier lugar donde se desarrollen las actividades que amparen los CFDI.
            </p>
            <p className="leading-relaxed">
              El SAT incorpora herramientas de Big Data, machine learning y análisis geoespacial, para detectar irregularidades en tiempo real. Esto permite auditorías más rápidas y precisas, basadas en patrones de comportamiento fiscal. Los visitadores podrán tomar fotografías, grabar audios o videos como evidencia.
            </p>

            <h4 className="text-xl font-serif font-bold text-foreground mt-6 mb-3">Combate a la evasión y operaciones simuladas</h4>
            <p className="leading-relaxed">
              La reforma fortalece la detección de EFOS (Empresas que Facturan Operaciones Simuladas) y EDOS (Empresas que Deducen Operaciones Simuladas). Se empleará inteligencia de datos para identificar redes de empresas fantasma y se ampliará la responsabilidad a socios y administradores.
            </p>

            <h4 className="text-xl font-serif font-bold text-foreground mt-6 mb-3">Impacto para contribuyentes y empresas</h4>
            <p className="leading-relaxed">
              Las auditorías serán más frecuentes cuando existan diferencias entre ingresos, gastos y flujos bancarios. Resulta indispensable fortalecer la evidencia documental, verificar a los proveedores y mantener actualizado el domicilio fiscal. Contadores y administradores enfrentarán una mayor responsabilidad administrativa y penal.
            </p>

            <div className="border-t-2 border-primary mt-12 pt-8"></div>

            <h2 id="requisitos-deduccion" className="text-3xl font-serif font-bold text-primary mb-6 scroll-mt-32">REQUISITOS OBLIGATORIOS PARA LA DEDUCCIÓN DE GASTOS</h2>
            <p className="leading-relaxed">
              La deducción de gastos se encuentra condicionada a la plena demostración de la materialidad de las operaciones. NO basta con contar con el CFDI correspondiente; será necesario acreditar que el servicio fue efectivamente prestado o que el bien fue realmente adquirido, mediante documentación y evidencia suficiente que soporte la razón de negocio de cada transacción.
            </p>
            <p className="leading-relaxed">
              Será obligatorio que todas las operaciones realizadas con proveedores cuenten, como mínimo, con los siguientes elementos de soporte:
            </p>
            <ol className="list-decimal pl-6 space-y-2 my-4">
              <li>Contrato o documento que formalice la operación.</li>
              <li>Orden de compra o solicitud del servicio.</li>
              <li>Comprobantes de entrega de bienes o evidencia de la prestación del servicio.</li>
              <li>Factura con descripción amplia y detallada del concepto.</li>
              <li>Evidencia de comunicación comercial.</li>
              <li>Documentación corporativa, fiscal y operativa del proveedor que acredite su existencia, capacidad material, técnica y humana para prestar el servicio.</li>
            </ol>
            <p className="leading-relaxed">
              La falta de esta información puede generar riesgos fiscales relevantes, tales como el rechazo de deducciones, determinación de créditos fiscales, imposición de multas, actualización y recargos, así como la posible configuración de operaciones inexistentes.
            </p>

            <h3 className="text-2xl font-serif font-bold text-primary/90 mt-8 mb-4">Fundamento legal:</h3>
            <ul className="list-disc pl-6 space-y-2 my-4">
              <li>Artículo 27, fracción I de la Ley del Impuesto sobre la Renta (LISR), el cual establece que las deducciones autorizadas deberán ser estrictamente indispensables para los fines de la actividad del contribuyente.</li>
              <li>Artículo 27, fracción III de la LISR, que exige que los gastos estén debidamente amparados con comprobantes fiscales y registrados en la contabilidad.</li>
              <li>Artículo 28 del Código Fiscal de la Federación (CFF), que obliga a los contribuyentes a llevar contabilidad y conservar la documentación comprobatoria que acredite sus operaciones.</li>
              <li>Artículo 29 y 29-A del CFF, relativos a los requisitos de los Comprobantes Fiscales Digitales por Internet (CFDI).</li>
              <li>Artículo 5, fracción II de la LISR y el criterio reiterado de la autoridad fiscal respecto a la "razón de negocio", mediante el cual se debe acreditar que la operación tiene una justificación económica real.</li>
              <li>Artículo 69-B del CFF, referente a la presunción de inexistencia de operaciones cuando no se pueda demostrar la materialidad de éstas.</li>
            </ul>

            <h3 className="text-2xl font-serif font-bold text-primary/90 mt-8 mb-4">Recomendación:</h3>
            <p className="leading-relaxed">
              Implementación de controles internos para asegurar que la documentación se recabe de manera previa o simultánea a la contratación de cualquier proveedor.
            </p>

            <div className="border-t-2 border-primary mt-12 pt-8"></div>

            <h2 id="verificacion" className="text-3xl font-serif font-bold text-primary mb-6 scroll-mt-32">VERIFICACIÓN DE PROVEEDORES Y MATERIALIDAD</h2>
            <p className="leading-relaxed">
              La Reforma Fiscal 2026 refuerza de manera estricta la obligación de los contribuyentes de verificar que sus proveedores cuenten con domicilio fiscal localizado, capacidad operativa real, personal, activos e infraestructura suficiente.
            </p>
            <p className="leading-relaxed">
              Cuando un proveedor es considerado inexistente (EFOS), las deducciones del cliente (EDOS) se eliminan automáticamente, salvo que este demuestre la materialidad de la operación.
            </p>

            <motion.div 
              className="my-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <img 
                src="/imagen1.webp" 
                alt="Esquema EFOS y EDOS"
                className="w-full h-auto max-h-[400px] object-contain rounded-xl shadow-lg"
              />
            </motion.div>

            <motion.div 
              className="my-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <img 
                src="/imagen2.webp" 
                alt="Materialidad de operaciones"
                className="w-full h-auto max-h-[400px] object-contain rounded-xl shadow-lg"
              />
            </motion.div>

            <h3 className="text-2xl font-serif font-bold text-primary/90 mt-8 mb-4">Domicilio fiscal localizado</h3>
            <p className="leading-relaxed">
              El SAT puede presumir la inexistencia de operaciones cuando el proveedor no es localizado en su domicilio fiscal, ya sea porque el inmueble no existe, no hay actividad económica, la actividad no coincide con la declarada o no se notificó el cambio de domicilio.
            </p>

            <h3 className="text-2xl font-serif font-bold text-primary/90 mt-8 mb-4">Acreditación de trabajadores, activos y capacidad operativa</h3>
            <p className="leading-relaxed">
              Los proveedores deberán demostrar que cuentan con personal registrado ante el IMSS, activos físicos, maquinaria, vehículos, tecnología e infraestructura acorde con el servicio o bien ofrecido.
            </p>

            <h3 className="text-2xl font-serif font-bold text-primary/90 mt-8 mb-4">Presunción de inexistencia (EFOS)</h3>
            <p className="leading-relaxed">
              Si el proveedor no acredita estos elementos, el SAT podrá clasificarlo como EFOS y, en consecuencia, los CFDI emitidos se considerarán, por regla general, como operaciones inexistentes.
            </p>

            <h3 className="text-2xl font-serif font-bold text-primary/90 mt-8 mb-4">Efectos para el contribuyente (EDOS)</h3>
            <p className="leading-relaxed">
              Cuando un proveedor es considerado EFOS, el cliente pierde automáticamente la deducción del gasto y el acreditamiento del IVA, salvo que logre acreditar la materialidad de la operación.
            </p>

            <h3 className="text-2xl font-serif font-bold text-primary/90 mt-8 mb-4">Demostración de la materialidad</h3>
            <p className="leading-relaxed">
              Para conservar la deducción, el contribuyente deberá demostrar que el bien o servicio se prestó efectivamente, mediante contratos, entregables, evidencia fotográfica, correos electrónicos, comprobantes de pago, inventarios, reportes y demás documentación que acredite la existencia real de la operación.
            </p>

            <h3 className="text-2xl font-serif font-bold text-primary/90 mt-8 mb-4">Obligación de verificación de proveedores</h3>
            <p className="leading-relaxed">
              La reforma impone una obligación práctica de due diligence, mediante la cual las empresas deben verificar que:
            </p>
            <ul className="list-disc pl-6 space-y-2 my-4">
              <li>Los proveedores estén debidamente localizados.</li>
              <li>Cuenten con personal y activos suficientes.</li>
              <li>La actividad económica coincida con el servicio prestado.</li>
              <li>No se encuentren en listas negras del SAT.</li>
            </ul>

            <h3 className="text-2xl font-serif font-bold text-primary/90 mt-8 mb-4">Consecuencias por incumplimiento</h3>
            <p className="leading-relaxed">
              La deducción improcedente puede generar créditos fiscales, multas, recargos y, en casos graves, responsabilidad penal por defraudación fiscal.
            </p>

            <div className="border-t-2 border-primary mt-12 pt-8"></div>

            <h2 id="due-diligence" className="text-3xl font-serif font-bold text-primary mb-6 scroll-mt-32">DUE DILIGENCE</h2>
            <p className="leading-relaxed">
              El Due diligence (debida diligencia) es un proceso sistemático, estructurado y documentado de investigación, análisis y verificación integral de una empresa. Es una auditoría preventiva profunda que permite tomar decisiones informadas antes de una operación relevante o como mecanismo permanente de control interno.
            </p>

            <h3 className="text-2xl font-serif font-bold text-primary/90 mt-8 mb-4">Componentes:</h3>
            <ul className="list-disc pl-6 space-y-2 my-4">
              <li><strong>Legal:</strong> Acta constitutiva y modificaciones, poderes notariales vigentes, libros corporativos, contratos relevantes (arrendamiento, prestación de servicios, financiamiento). Litigios activos o potenciales, cumplimiento de obligaciones societarias, beneficiario controlador, propiedad intelectual, permisos y licencias.</li>
              <li><strong>Fiscal:</strong> Declaraciones mensuales y anuales, pagos provisionales, CFDI emitidos y recibidos, materialidad de operaciones, razón de negocios, proveedores listados en 69-B CFF, retenciones efectuadas, conciliación contable-fiscal, opinión de cumplimiento, créditos fiscales, esquemas reportables, cumplimiento RESICO (si aplica).</li>
              <li><strong>Financiero:</strong> Estados financieros, flujo de efectivo real, pasivos ocultos, deuda bancaria, cuentas por cobrar incobrables, provisiones insuficientes, inventarios reales, capital de trabajo, rentabilidad estructural.</li>
              <li><strong>Laboral:</strong> Contratos laborales, IMSS e Infonavit, PTU, antigüedades reales, juicios laborales, subcontratación, cumplimiento REPSE, riesgo de sustitución patronal.</li>
              <li><strong>Operativo:</strong> Procesos internos, controles administrativos, dependencia de clientes clave, concentración de ingresos, sistemas contables, riesgos de fraude.</li>
            </ul>

            <h3 className="text-2xl font-serif font-bold text-primary/90 mt-8 mb-4">En el contexto actual de reformas fiscales 2026:</h3>
            <ul className="list-disc pl-6 space-y-2 my-4">
              <li>Puede servir como blindaje profesional.</li>
              <li>Permite documentar que el asesor actuó con debida diligencia.</li>
              <li>Reduce riesgo de responsabilidad compartida.</li>
              <li>Sustenta la existencia de materialidad.</li>
              <li>Permite emitir opiniones técnicas sustentadas.</li>
            </ul>

            <h3 className="text-2xl font-serif font-bold text-primary/90 mt-8 mb-4">Objetivos:</h3>
            <ul className="list-disc pl-6 space-y-2 my-4">
              <li>Evaluar su situación legal, fiscal, financiera, laboral y operativa.</li>
              <li>Identificar contingencias ocultas o riesgos potenciales.</li>
              <li>Validar la veracidad de la información presentada.</li>
              <li>Determinar el valor real y el nivel de cumplimiento normativo.</li>
              <li>Reducir responsabilidad futura de socios, inversionistas y asesores.</li>
            </ul>

            <h3 className="text-2xl font-serif font-bold text-primary/90 mt-8 mb-4">Entregables:</h3>
            <ol className="list-decimal pl-6 space-y-2 my-4">
              <li>Informe ejecutivo de riesgos.</li>
              <li>Matriz de contingencias clasificadas: Alta, media o baja</li>
              <li>Recomendaciones correctivas.</li>
              <li>Impacto económico estimado.</li>
              <li>Checklist de cumplimiento.</li>
              <li>Carta de revelación de información.</li>
              <li>Cláusula de deslinde para asesores (si aplica).</li>
            </ol>

            <h3 className="text-2xl font-serif font-bold text-primary/90 mt-8 mb-4">Beneficios Estratégicos:</h3>
            <ul className="list-disc pl-6 space-y-2 my-4">
              <li>Reduce riesgos fiscales y legales</li>
              <li>Incrementa valor de la empresa</li>
              <li>Facilita venta o inversión</li>
              <li>Mejora control interno</li>
              <li>Previene sanciones</li>
              <li>Genera confianza ante terceros</li>
              <li>Protege al contador externo</li>
            </ul>

            <p className="leading-relaxed font-semibold mt-6">
              El Due Diligence se convierte en una herramienta esencial de cumplimiento y defensa fiscal.
            </p>

            <h3 className="text-2xl font-serif font-bold text-primary/90 mt-8 mb-4">Recomendaciones Generales de Verificación de Proveedores y Materialidad:</h3>
            <ul className="list-disc pl-6 space-y-2 my-4">
              <li>Verificar que todos los CFDI amparen operaciones reales y con sustancia económica.</li>
              <li>Implementar protocolos que acrediten la existencia de las operaciones, como videos, fotografías, contratos, entregables y correcta descripción del concepto del CFDI.</li>
              <li>Emitir correctamente los CFDI con método de pago PUE o PPD, según corresponda. Si el comprobante no se paga o cobra en el mes, debe emitirse con método PPD y, al momento del pago, contar con el complemento de pago.</li>
              <li>La omisión de tres o más declaraciones puede derivar en la restricción del CSD; procura mantenerte al día con tus obligaciones fiscales.</li>
            </ul>

            <div className="border-t-2 border-primary mt-12 pt-8"></div>

            <h2 id="plataformas" className="text-3xl font-serif font-bold text-primary mb-6 scroll-mt-32">PLATAFORMAS DIGITALES</h2>
            <p className="leading-relaxed">
              Se introducen modificaciones relevantes en el régimen fiscal aplicable a las plataformas digitales que intermedian en la venta de bienes y prestación de servicios. La reforma amplía el esquema de retenciones e incorpora de manera expresa a las personas morales como sujetos obligados a retención por parte de dichas plataformas.
            </p>
            <p className="leading-relaxed">
              Uno de los cambios más relevantes consiste en la imposición de retenciones obligatorias de ISR e IVA a las personas morales que obtengan ingresos a través de plataformas digitales.
            </p>

            <h3 className="text-2xl font-serif font-bold text-primary/90 mt-8 mb-4">PERSONAS FÍSICAS</h3>
            <div className="overflow-x-auto my-6">
              <div className="inline-block min-w-full align-middle">
                <div className="overflow-hidden shadow-md rounded-lg border border-border">
                  <table className="min-w-full divide-y divide-border">
                    <thead className="bg-muted">
                      <tr>
                        <th className="px-4 py-3 text-left text-xs font-medium text-foreground uppercase tracking-wider" rowSpan={2}>Servicio</th>
                        <th className="px-4 py-3 text-center text-xs font-medium text-foreground uppercase tracking-wider" colSpan={2}>Con RFC</th>
                        <th className="px-4 py-3 text-center text-xs font-medium text-foreground uppercase tracking-wider" colSpan={2}>Sin RFC</th>
                      </tr>
                      <tr>
                        <th className="px-4 py-3 text-left text-xs font-medium text-foreground uppercase tracking-wider">ISR</th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-foreground uppercase tracking-wider">IVA</th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-foreground uppercase tracking-wider">ISR</th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-foreground uppercase tracking-wider">IVA</th>
                      </tr>
                    </thead>
                    <tbody className="bg-background divide-y divide-border">
                      <tr>
                        <td className="px-4 py-3 text-sm">Servicio de Hospedaje a través de plataformas (airbnb, booking)</td>
                        <td className="px-4 py-3 text-sm font-semibold text-primary">4.0%</td>
                        <td className="px-4 py-3 text-sm font-semibold text-primary">8%</td>
                        <td className="px-4 py-3 text-sm font-semibold text-red-600">20%</td>
                        <td className="px-4 py-3 text-sm font-semibold text-red-600">16%</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 text-sm">Enajenación de Bienes y prestación de servicio (Amazon, Mercado Libre)</td>
                        <td className="px-4 py-3 text-sm font-semibold text-primary">2.5%</td>
                        <td className="px-4 py-3 text-sm font-semibold text-primary">8%</td>
                        <td className="px-4 py-3 text-sm font-semibold text-red-600">20%</td>
                        <td className="px-4 py-3 text-sm font-semibold text-red-600">16%</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 text-sm">Prestación de servicios de transporte terrestre de pasajeros y de entrega de bienes (uber, didi, bla bla car)</td>
                        <td className="px-4 py-3 text-sm font-semibold text-primary">2.1%</td>
                        <td className="px-4 py-3 text-sm font-semibold text-primary">8%</td>
                        <td className="px-4 py-3 text-sm font-semibold text-red-600">20%</td>
                        <td className="px-4 py-3 text-sm font-semibold text-red-600">16%</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-serif font-bold text-primary/90 mt-8 mb-4">PERSONAS MORALES</h3>
            <div className="overflow-x-auto my-6">
              <div className="inline-block min-w-full align-middle">
                <div className="overflow-hidden shadow-md rounded-lg border border-border">
                  <table className="min-w-full divide-y divide-border">
                    <thead className="bg-muted">
                      <tr>
                        <th className="px-4 py-3 text-left text-xs font-medium text-foreground uppercase tracking-wider" rowSpan={2}>Servicio</th>
                        <th className="px-4 py-3 text-center text-xs font-medium text-foreground uppercase tracking-wider" colSpan={2}>Con RFC</th>
                        <th className="px-4 py-3 text-center text-xs font-medium text-foreground uppercase tracking-wider" colSpan={2}>Sin RFC</th>
                      </tr>
                      <tr>
                        <th className="px-4 py-3 text-left text-xs font-medium text-foreground uppercase tracking-wider">ISR</th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-foreground uppercase tracking-wider">IVA</th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-foreground uppercase tracking-wider">ISR</th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-foreground uppercase tracking-wider">IVA</th>
                      </tr>
                    </thead>
                    <tbody className="bg-background divide-y divide-border">
                      <tr>
                        <td className="px-4 py-3 text-sm">Servicio de Hospedaje a través de plataformas (airbnb, booking)</td>
                        <td className="px-4 py-3 text-sm font-semibold text-primary">2.5%</td>
                        <td className="px-4 py-3 text-sm font-semibold text-primary">8%</td>
                        <td className="px-4 py-3 text-sm font-semibold text-red-600">20%</td>
                        <td className="px-4 py-3 text-sm font-semibold text-red-600">16%</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 text-sm">Enajenación de Bienes y prestación de servicio (Amazon, Mercado Libre)</td>
                        <td className="px-4 py-3 text-sm font-semibold text-primary">2.5%</td>
                        <td className="px-4 py-3 text-sm font-semibold text-primary">8%</td>
                        <td className="px-4 py-3 text-sm font-semibold text-red-600">20%</td>
                        <td className="px-4 py-3 text-sm font-semibold text-red-600">16%</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 text-sm">Prestación de servicios de transporte terrestre de pasajeros y de entrega de bienes (uber, didi, bla bla car)</td>
                        <td className="px-4 py-3 text-sm font-semibold text-primary">2.5%</td>
                        <td className="px-4 py-3 text-sm font-semibold text-primary">8%</td>
                        <td className="px-4 py-3 text-sm font-semibold text-red-600">20%</td>
                        <td className="px-4 py-3 text-sm font-semibold text-red-600">16%</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <p className="leading-relaxed">
              Las retenciones efectuadas por la plataforma podrán acreditarse contra pagos provisionales o contra el impuesto anual correspondiente. Sin embargo, el incremento en los porcentajes de retención impacta directamente en el flujo de efectivo de las personas morales que operan en el ecosistema digital.
            </p>
            <p className="leading-relaxed">
              Adicionalmente, se fortalecen las obligaciones de información de las plataformas digitales ante el SAT, incluyendo reportes periódicos de operaciones, emisión de comprobantes fiscales por las retenciones realizadas y mayores responsabilidades en caso de incumplimiento. Estas disposiciones refuerzan el control fiscal sobre el comercio digital y amplían la base de fiscalización.
            </p>

            <div className="border-t-2 border-primary mt-12 pt-8"></div>

            <h2 id="resico" className="text-3xl font-serif font-bold text-primary mb-6 scroll-mt-32">RESICO</h2>
            <p className="leading-relaxed">
              El régimen no desaparece. Continúa como una opción para facilitar el cumplimiento fiscal y promover la formalidad. Se mantiene como un régimen con ISR bajo y cálculo simplificado; sin embargo, en 2026 deja de ser un régimen de baja fiscalización. El control será permanente, automático y riguroso, por lo que el cumplimiento puntual de las obligaciones fiscales resulta indispensable.
            </p>

            <h3 className="text-2xl font-serif font-bold text-primary/90 mt-8 mb-4">Límites de ingresos:</h3>
            <p className="leading-relaxed">Se conservan los topes máximos:</p>
            <ul className="list-disc pl-6 space-y-2 my-4">
              <li>Personas físicas: hasta $3,500,000.</li>
              <li>Personas morales: hasta $35,000,000.</li>
            </ul>
            <p className="leading-relaxed">Al rebasar estos montos, la salida del régimen es automática.</p>

            <h3 className="text-2xl font-serif font-bold text-primary/90 mt-8 mb-4">Endurecimiento de las reglas de permanencia</h3>
            <p className="leading-relaxed">
              La autoridad fiscal podrá excluir automáticamente del RESICO a los contribuyentes que:
            </p>
            <ul className="list-disc pl-6 space-y-2 my-4">
              <li>Omitan tres pagos mensuales dentro de un mismo ejercicio fiscal (las omisiones pueden ser discontinuas, por ejemplo: abril, julio y noviembre).</li>
              <li>En casos específicos, omitan la presentación de la declaración anual, como en los supuestos de:
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>RESICO + copropiedad</li>
                  <li>RESICO + sueldos y salarios</li>
                  <li>RESICO + intereses</li>
                </ul>
              </li>
              <li>Presenten diferencias entre los CFDI emitidos y lo declarado.</li>
              <li>Utilicen comprobantes fiscales de proveedores catalogados como EFOS</li>
              <li>Presenten discrepancias fiscales graves.</li>
            </ul>

            <h3 className="text-2xl font-serif font-bold text-primary/90 mt-8 mb-4">Control mediante CFDI</h3>
            <p className="leading-relaxed">
              El cálculo de impuesto dependerá principalmente de los CFDI emitidos y cobrados, así como de los depósitos bancarios. El control por parte del SAT será prácticamente en tiempo REAL.
            </p>

            <h3 className="text-2xl font-serif font-bold text-primary/90 mt-8 mb-4">Proveedores inexistentes</h3>
            <p className="leading-relaxed">
              Cuando un contribuyente del RESICO deduzca gastos de proveedores inexistentes o no localizados, perderá las deducciones correspondientes y podrá ser excluido del régimen, salvo que demuestre la materialidad de la operación.
            </p>

            <h3 className="text-2xl font-serif font-bold text-primary/90 mt-8 mb-4">Cancelación de sellos digitales</h3>
            <p className="leading-relaxed">
              La cancelación de los sellos digitales (CSD) se aplicará de manera más rápida ante omisiones, uso de CFDI irregulares o problemas relacionados con el domicilio fiscal (cuando no aparezca como localizado), lo que puede paralizar completamente la operación del contribuyente.
            </p>

            <div className="border-t-2 border-primary mt-12 pt-8"></div>

            <h2 id="impuesto-cedular" className="text-3xl font-serif font-bold text-primary mb-6 scroll-mt-32">IMPUESTO CEDULAR POR EL OTORGAMIENTO DEL USO O GOCE TEMPORAL Y VENTA DE BIENES INMUEBLES EN MORELOS</h2>
            <p className="leading-relaxed">
              Impuesto que recae exclusivamente en personas físicas residentes o no residentes en Morelos que obtengan ingresos por arrendamiento o subarrendamiento y venta de bienes inmuebles localizados en Morelos. Se crea y entra en vigor a partir del 01 de enero de 2026.
            </p>
            <p className="leading-relaxed">
              La tasa aplicable es del 3% calculada sobre los ingresos gravables conforme a la mecánica prevista en la ley local. Al ser un impuesto de naturaleza local y cedular NO sustituye ni acredita impuestos federales. La autoridad estatal es la facultada para emitir reglas de carácter general respecto a la forma de declaración, pago y, en su caso, retención.
            </p>
            <p className="leading-relaxed">
              En el caso del otorgamiento del uso o goce temporal de bienes inmuebles cuando la persona física arrienda a una persona moral, el porcentaje de retención aplicable es del 1.5 % sobre el ingreso correspondiente.
            </p>
            <p className="leading-relaxed">
              Tratándose de enajenación de bienes inmuebles, la tasa es del 3% sobre el monto gravable, siendo las notarías públicas quienes tienen la obligación de efectuar la retención y entero del impuesto correspondiente.
            </p>

            <h3 className="text-2xl font-serif font-bold text-primary/90 mt-8 mb-4">Recomendaciones:</h3>
            <ul className="list-disc pl-6 space-y-2 my-4">
              <li>Identificar si usted (Persona física) obtiene ingresos por renta/subarrendamiento de inmuebles en Morelos.</li>
              <li>Revisar deducciones y documentación soporte.</li>
              <li>Verificar mecanismos de declaración/pago que implemente la Secretaría de Hacienda del Estado y, en su caso, retenciones aplicables.</li>
              <li>Ajustar el flujo de efectivo para contemplar el impuesto local adicional al ISR e IVA.</li>
            </ul>

            <h3 className="text-2xl font-serif font-bold text-primary/90 mt-8 mb-4">RESICO</h3>
            <p className="leading-relaxed">
              El hecho de tributar en RESICO no exime al contribuyente del pago del impuesto cedular estatal. El impuesto cedular incrementa la carga fiscal efectiva total y debe contemplarse en la planeación financiera del contribuyente.
            </p>

            <h3 className="text-2xl font-serif font-bold text-primary/90 mt-8 mb-4">Mecánica práctica:</h3>
            <ul className="list-disc pl-6 space-y-2 my-4">
              <li><strong>ISR federal:</strong> Pago mensual aplicando la tasa correspondiente sobre los ingresos efectivamente cobrados, sin deducciones (tasa máxima del 2.5%).</li>
              <li><strong>IVA (cuando aplique):</strong> Traslado y entero del IVA en arrendamiento gravado, con exenciones conforme a la Ley del IVA.</li>
              <li><strong>Impuesto cedular estatal (Morelos):</strong> Pago del 3% adicional conforme a la ley local, sin acreditamiento contra ISR o IVA.</li>
            </ul>

            <h3 className="text-2xl font-serif font-bold text-primary/90 mt-8 mb-4">Recomendaciones:</h3>
            <ul className="list-disc pl-6 space-y-2 my-4">
              <li>Identificar ingresos sujetos al impuesto.</li>
              <li>Separar control fiscal federal y estatal.</li>
              <li>Revisar reglas administrativas locales.</li>
              <li>Evaluar impacto en rentabilidad.</li>
            </ul>

          </div>

          <div className="mt-16 p-8 bg-muted rounded-lg">
            <h3 className="text-2xl font-serif font-bold text-foreground mb-4">
              ¿Necesitas asesoría personalizada?
            </h3>
            <p className="text-muted-foreground mb-6">
              Nuestros expertos están listos para ayudarte con las reformas fiscales 2026.
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

export default ResumenEjecutivoPost;
