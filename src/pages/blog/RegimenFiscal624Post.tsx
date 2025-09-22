import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const post = {
  title: 'Régimen Fiscal 624: Coordinados',
  date: '25 de agosto, 2025',
  readTime: '7 min de lectura',
  category: 'Fiscal',
};

const RegimenFiscal624Post = () => {
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
              <span>agosto, 2025</span>
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
              src="/regimen.webp" 
              alt="Autotransporte de carga federal"
              className="w-full h-auto max-h-[450px] object-cover rounded-xl shadow-lg"
            />
          </motion.div>

          <div className="prose prose-lg max-w-none text-foreground font-sans">
            <p className="leading-relaxed">Se consideran coordinados a las personas morales que administran y operan activos fijos o activos fijos y terrenos. Aquellos que estén relacionados directamente con la actividad del autotransporte terrestre de carga o de pasajeros y cuyos integrantes realicen exclusivamente actividades de autotransporte terrestre de carga o pasajeros o complementarias a dichas actividades y tengan activos fijos o activos fijos y terrenos, relacionados directamente con dichas actividades.</p>
            
            <h3 className="text-2xl font-serif font-bold text-foreground mt-8 mb-4">¿Pueden ser transportista las Personas Morales en Régimen Simplificado de Confianza?</h3>
            <p className="leading-relaxed">Sí, siempre y cuando cumplan con las obligaciones fiscales respecto al Impuesto Sobre la Renta (ISR) conforme al régimen; las personas morales residentes en México únicamente constituidas por personas físicas, cuyos ingresos totales en el ejercicio inmediato anterior no excedan de la cantidad de 35 millones de pesos o las personas morales residentes en México únicamente constituidas por personas físicas que inicien operaciones y que estimen que sus ingresos totales no excederán de la cantidad referida.</p>

            <h3 className="text-2xl font-serif font-bold text-foreground mt-8 mb-4">Regímenes para registrarse en el SAT</h3>
            <ul className="list-disc pl-6 space-y-2 my-4">
              <li>Coordinado Administrador</li>
              <li>Coordinado por cuenta propia como sociedad - PM</li>
              <li>Integrante cumple a través de coordinado - PF / PM</li>
              <li>Integrante cumple por cuenta propia - PF / PM</li>
              <li>Régimen general de ley - PM</li>
              <li>Personas físicas con Régimen Simplificado de Confianza aunque para ésta no aplica estímulos fiscales</li>
            </ul>

            <h3 className="text-2xl font-serif font-bold text-foreground mt-8 mb-4">¿Cuáles son los requisitos para ser Régimen de Coordinados?</h3>
            <ol className="list-decimal pl-6 space-y-2 my-4">
                <li>Ser persona moral</li>
                <li>Tener integrantes que realicen exclusivamente actividades de autotransporte</li>
            </ol>

            <h3 className="text-2xl font-serif font-bold text-foreground mt-8 mb-4">¿Los Coordinados están obligados a retener IVA?</h3>
            <p className="leading-relaxed">Sí, las Personas Morales están obligados a efectuar la retención del IVA a personas físicas o morales cuando:</p>
            <ul className="list-disc pl-6 space-y-2 my-4">
                <li>Reciban servicios de autotransporte terrestre de bienes.</li>
                <li>Por servicio de grúas.</li>
            </ul>
            <p className="leading-relaxed">En ambas situaciones es procedente la retención del 4%. Sin embargo, cuando se trata de servicios de mensajería y paquetería NO se encuentran sujetos a la retención del IVA.</p>

            <h3 className="text-2xl font-serif font-bold text-foreground mt-8 mb-4">Estímulos Fiscales</h3>
            <p className="leading-relaxed">¿Qué estímulos fiscales aplican para Sector de Autotransporte Terrestre de Carga Federal - Autotransporte Terrestre Foráneo de Pasaje y Turismo - Autotransporte Terrestre de Carga de Materiales y Autotransporte Terrestre de Pasajeros Urbano y Suburbano?</p>
            <p className="leading-relaxed">Los estímulos fiscales considerados en la Resolución de Facilidades Administrativas (RFA) son:</p>
            <ol className="list-decimal pl-6 space-y-2 my-4">
              <li>Podrán optar por enterar el 7.5% por concepto de retenciones del ISR, correspondiente a los pagos efectivamente realizados a operadores, macheteros y maniobristas, en lugar de aplicar las disposiciones correspondientes al pago de salarios.</li>
              <li>Podrán deducir hasta el equivalente al 8% de los ingresos propios de su actividad, sin exceder de $1,000,000.00 (un millón de pesos 00/100 M.N.) durante el ejercicio, sin la necesidad de contar con documentación que reúna requisitos fiscales.</li>
              <li>Podrán deducir los pagos por consumo de combustible que se realicen con medios distintos a cheque nominativo de la cuenta del contribuyente; tarjeta de crédito, de débito o de servicios, o monederos electrónicos autorizados por el SAT, siempre que estos no excedan el 15% del total de los pagos efectuados por consumo de combustible para realizar su actividad.</li>
              <li>Podrán efectuar el acreditamiento del estímulo fiscal de combustible Diesel:
                <ul className="list-[lower-alpha] pl-6 mt-2">
                  <li>Contra el ISR propio causado en el mismo ejercicio en que se importe o adquiera el combustible;</li>
                  <li>Contra los pagos provisionales;</li>
                  <li>Contra el ISR anual;</li>
                  <li>Contra las retenciones del ISR efectuadas a terceros en el mismo ejercicio.</li>
                </ul>
              </li>
            </ol>
          </div>

          <div className="mt-12 pt-8 border-t border-border">
            <h3 className="text-lg font-serif font-semibold text-foreground mb-4">
              ¿Necesitas asesoría personalizada?
            </h3>
            <p className="font-sans text-muted-foreground mb-6">
              Nuestros expertos están listos para ayudarte con cualquier duda sobre el Régimen de Coordinados y otros temas contables.
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

export default RegimenFiscal624Post;
