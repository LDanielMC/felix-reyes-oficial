import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
// This is a mock component. In a real app, you'd use the one from react-router-dom.
const Link = ({ to, children, className }) => (
  <a href={to} className={className}>
    {children}
  </a>
);

const post = {
  title: 'Régimen de Actividades Empresariales con ingresos a través de Plataformas Tecnológicas',
  date: '22 de septiembre, 2025',
  readTime: '11 min de lectura', // Updated read time
  category: 'Fiscal',
};

const PlataformasTecnologicasPost = () => {
  return (
    <div className="min-h-screen bg-background pt-24 md:pt-32">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
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
              <span>septiembre, 2025</span>
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
              src="/tecnologias.webp" 
              alt="Plataformas Tecnológicas"
              className="w-full h-auto max-h-[450px] object-cover rounded-xl shadow-lg"
            />
          </motion.div>

          <div className="prose prose-lg max-w-none text-foreground font-sans">
            <p className="leading-relaxed">Si eres <strong>Persona Física</strong> y obtienes <strong>ingresos</strong> por <strong>venta</strong>, <strong>prestación de servicios</strong> y/o <strong>renta</strong> a través de <strong>plataformas</strong> tecnológicas, <strong>aplicaciones</strong> informáticas y <strong>similares</strong>, debes estar inscrito en el régimen de <strong>Actividades Empresariales con ingresos a través de Plataformas Tecnológicas</strong>.</p>
            <p className="leading-relaxed">El impuesto mensual se pagará mediante la retención que efectuará la plataforma. Las retenciones deben ser <strong>sobre el total de los ingresos percibidos</strong> por dicha plataforma y serán de la siguiente manera:</p>
            <ul className="list-disc pl-6 space-y-2 my-4">
              <li><strong>Transporte terrestre de pasajeros y entrega de bienes (Uber, DiDi):</strong> la retención será del <strong>2.1% de ISR y 8% de IVA</strong>.</li>
              <li><strong>Hospedaje (Airbnb, Booking):</strong> la retención será de <strong>4% de ISR y 8% de IVA</strong>.</li>
              <li><strong>Venta de bienes y prestación de servicios (Amazon, Mercado Libre):</strong> la retención será de <strong>1% de ISR y 8% de IVA</strong>.</li>
            </ul>
            <p className="leading-relaxed">Aquellos inscritos en este régimen deberán cumplir obligaciones fiscales específicas considerando lo siguiente:</p>

            <h3 className="text-2xl font-serif font-bold text-foreground mt-8 mb-4">1. Ingresos mayores a $300,000.00</h3>
            <p className="leading-relaxed">Cuando los ingresos, incluyendo sueldos y salarios, actividad empresarial e intereses, sean <strong>mayores a $300,000.00</strong>, deberán:</p>
            <ul className="list-disc pl-6 space-y-2 my-4">
              <li>Presentar <strong>declaraciones mensuales</strong> a más tardar el día 17 del mes siguiente.</li>
              <li>Presentar <strong>declaración anual</strong> a más tardar el 30 de abril del año fiscal siguiente.</li>
              <li>Declarar mensualmente los ingresos de plataformas más otros ingresos recibidos directamente del usuario (si aplica). Las retenciones y pagos se tomarán como pagos provisionales.</li>
              <li>Declarar anualmente los ingresos totales y deducciones autorizadas, aplicando los pagos provisionales.</li>
              <li>Expedir <strong>facturas mensuales</strong> por ingresos directos al usuario (o al público en general si no la solicitan).</li>
              <li>Conservar los <strong>CFDI</strong> por las retenciones que hagan las plataformas.</li>
              <li>Las deducciones autorizadas son gastos indispensables para la actividad, deben cumplir requisitos de ley (no pagarse en efectivo y tener CFDI).</li>
            </ul>

            <h3 className="text-2xl font-serif font-bold text-foreground mt-8 mb-4">2. Ingresos menores a $300,000.00 (sin ingresos directos)</h3>
            <p className="leading-relaxed">Si los ingresos (incluyendo sueldos, salarios e intereses) son <strong>menores a $300,000.00</strong> y no se recibe dinero directamente del usuario:</p>
            <ul className="list-disc pl-6 space-y-2 my-4">
               <li><strong>No tendrán obligación</strong> de presentar declaraciones mensuales ni anuales, siempre y cuando presenten el aviso correspondiente ante el SAT. Las retenciones se considerarán como <strong>pagos definitivos</strong>.</li>
               <li>Deberán conservar los <strong>CFDI</strong> por las retenciones.</li>
               <li>Esta opción debe estar <strong>vigente al menos 5 años</strong> y es válida mientras no se rebase el límite de ingresos.</li>
            </ul>


            <h3 className="text-2xl font-serif font-bold text-foreground mt-8 mb-4">3. Ingresos menores a $300,000.00 (con ingresos directos)</h3>
            <p className="leading-relaxed">Si los ingresos son <strong>menores a $300,000.00</strong> y además de la plataforma se recibe dinero directamente de los usuarios (efectivo, terminal, etc.):</p>
             <ul className="list-disc pl-6 space-y-2 my-4">
                <li>Deberán presentar <strong>declaraciones mensuales</strong> sumando los ingresos de la plataforma más los ingresos directos. Los pagos se tomarán como <strong>pagos definitivos</strong>.</li>
                <li>Expedir <strong>facturas mensuales</strong> por los ingresos directos.</li>
                <li>Conservar los <strong>CFDI</strong> por las retenciones de las plataformas.</li>
            </ul>

            <blockquote className="border-l-4 border-primary pl-4 italic text-muted-foreground my-8">
              <strong>Importante:</strong> Si eres persona física y decides <strong>NO</strong> registrar tu RFC en la plataforma, esta <strong>está obligada</strong> a retenerte el <strong>20% de ISR y el 16% de IVA</strong>, lo que significa un pago de impuestos muy elevado.
            </blockquote>
          </div>

          <div className="mt-12 pt-8 border-t border-border">
            <h3 className="text-lg font-serif font-semibold text-foreground mb-4">
              ¿Necesitas asesoría personalizada?
            </h3>
            <p className="font-sans text-muted-foreground mb-6">
              Nuestros expertos están listos para ayudarte a navegar el régimen de plataformas tecnológicas.
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
  );
};

export default PlataformasTecnologicasPost;
