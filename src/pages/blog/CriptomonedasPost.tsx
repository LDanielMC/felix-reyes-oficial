import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
// import { Link } from 'react-router-dom'; // Assuming Link is available in your project setup

// Mock Link component for standalone functionality
const Link = ({ to, children, className }) => (
  <a href={to} className={className}>
    {children}
  </a>
);


const post = {
  title: 'Criptomonedas: Regulación y Aspectos Fiscales',
  date: '22 de septiembre, 2025',
  readTime: '12 min de lectura',
  category: 'Fiscal',
};

const CriptomonedasPost = () => {
  return (
    <div className="min-h-screen bg-white pt-24 md:pt-32 font-sans">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link
            to="/blog"
            className="inline-flex items-center text-sm font-medium text-primary hover:text-primary/90 mb-8 transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Volver al blog
          </Link>

          <div className="mb-8">
            <span className="inline-block px-3 py-1 text-sm font-sans font-semibold text-primary bg-primary/10 rounded-full mb-4">
              {post.category}
            </span>
            <h1 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">
              {post.title}
            </h1>
            <div className="flex items-center text-sm text-gray-500">
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
              src="/criptomonedas.webp" 
              alt="Regulación de Criptomonedas"
              className="w-full h-auto max-h-[450px] object-cover rounded-xl shadow-lg"
            />
          </motion.div>

          <div className="prose prose-lg max-w-none text-gray-800">
            <p className="leading-relaxed">Una criptomoneda es un <strong>activo digital</strong> único que sólo puede ser transferido en forma electrónica. Se utiliza como medio de pago o intercambio o bien, puede venderse; para fines de seguridad y evitar que sea corrompida, su estructura está basada en códigos encriptados (criptografía), razón por la cual se le llama criptomoneda.</p>
            <p className="leading-relaxed">A continuación, algunos ejemplos de activos digitales y sus abreviaturas:</p>
            <ul className="list-disc pl-6 space-y-1 my-4 columns-2 sm:columns-3">
              <li>BITCOIN – BTC</li>
              <li>ETHEREUM – ETH</li>
              <li>RIPPLE – XRP</li>
              <li>BITCOIN CASH – BCH</li>
              <li>LITECOIN – LTC</li>
              <li>EOS – EOS</li>
              <li>BINANCE COIN – BNB</li>
              <li>BITCOIN SV - BSV</li>
              <li>STELLAR – XLM</li>
              <li>MONERO – XMR</li>
              <li>CARDANO – ADA</li>
              <li>TRON – TRX</li>
              <li>IOTA – MIOTA</li>
              <li>DASH – DASH</li>
              <li>TEZOS – XTZ</li>
              <li>ETHEREUM CLASSIC – ETC</li>
              <li>NEO – NEO</li>
              <li>COSMOS – ATOM</li>
              <li>NEM – XEM</li>
              <li>ONTOLOGY – ONT</li>
              <li>ZCASH – ZEC</li>
              <li>DOGECOIN – DOGE</li>
              <li>VECHAIN – VET</li>
              <li>DECRED – DCR</li>
              <li>QTUM – QTUM</li>
              <li>V SYSTEMS – VSYS</li>
            </ul>

            <h3 className="text-2xl font-serif font-bold text-gray-900 mt-12 mb-4">Fundamento Legal: Prevención para el lavado de dinero</h3>
            <p className="leading-relaxed">La Ley Federal para la Prevención e Identificación de Operaciones con Recursos de Procedencia Ilícita (LFPIORPI) menciona que se entenderán como <strong>Actividades Vulnerables</strong> y, por lo tanto, objeto de identificación, las siguientes:</p>
            <p className="leading-relaxed">El ofrecimiento habitual y profesional de <strong>intercambio de activos virtuales</strong> por parte de sujetos <strong>distintos a las Entidades Financieras</strong>, que se lleven a cabo a través de <strong>plataformas electrónicas, digitales o similares</strong>, que administren u operen, facilitando o realizando operaciones de <strong>compra o venta</strong> de dichos activos propiedad de sus clientes o bien, provean medios para custodiar, almacenar, o transferir <strong>activos virtuales distintos a los reconocidos por el Banco de México</strong> en términos de la Ley para Regular las Instituciones de Tecnología Financiera (Fintech). Esto incluye las operaciones que se realicen con ciudadanos mexicanos desde otra jurisdicción.</p>
            <p className="leading-relaxed">Se entenderá como <strong>activo virtual</strong> toda representación de valor registrada electrónicamente y utilizada entre el público como <strong>medio de pago</strong> para todo tipo de actos jurídicos, <strong>cuya transferencia únicamente puede llevarse a cabo a través de medios electrónicos.</strong> En ningún caso se entenderá como activo virtual la <strong>moneda de curso legal</strong> en territorio nacional, <strong>las divisas</strong> ni cualquier otro activo denominado en moneda de curso legal o divisas.</p>
            <h4 className="text-xl font-serif font-bold text-gray-900 mt-6 mb-2">Objeto de Aviso ante la SHCP</h4>
            <p className="leading-relaxed">Serán objeto de aviso ante la Secretaría De Hacienda y Crédito Público (SHCP) en los siguientes casos:</p>
            <ul className="list-disc pl-6 space-y-2 my-4">
                <li>Cuando el <strong>monto de la operación de compra o venta</strong> que realice el cliente sea por una cantidad <strong>igual o superior</strong> al equivalente a <strong>210 veces el valor diario de la UMA</strong> ($23,759.00 pesos vigentes en el año 2025).</li>
                <li>Cuando las operaciones den lugar al <strong>cobro de una contraprestación</strong> por el servicio brindado, y que ésta sea por una cantidad <strong>igual o superior</strong> al equivalente a <strong>4 veces el valor diario de la UMA</strong> ($452.56 pesos vigentes en el año 2025).</li>
            </ul>
            <p className="leading-relaxed">Aquellos que realicen las Actividades Vulnerables deberán <strong>obtener, mantener y poner a disposición</strong> de las autoridades competentes, la <strong>información precisa</strong> sobre las operaciones con activos virtuales del originante, receptor y beneficiario controlador, según sea el caso.</p>

            <h3 className="text-2xl font-serif font-bold text-gray-900 mt-12 mb-4">Aspecto Fiscal</h3>
            <p className="leading-relaxed">No existen regulaciones precisas que definan lo que ha de considerarse como criptomoneda para efectos fiscales ni cuáles serían las disposiciones específicas en materia del ISR e IVA, sin embargo, la recomendación es aplicar lo siguiente:</p>
            
            <h4 className="text-xl font-serif font-bold text-gray-900 mt-6 mb-2">Impuesto Sobre la Renta (ISR)</h4>
            <ul className="list-disc pl-6 space-y-2 my-4">
              <li><strong>Personas Físicas:</strong> Para personas físicas que obtengan ingresos por la enajenación de criptomonedas, los considerarán percibidos en el monto en que, al momento de obtenerlos, incrementen su patrimonio.</li>
              <li><strong>Personas Morales:</strong> Si bien la Ley del ISR no define "ingreso", se considera como tal cualquier cantidad que modifique positivamente el haber patrimonial. El término es amplio e incluyente, por lo tanto, las Personas Morales que obtengan un incremento en su patrimonio derivado de la enajenación de criptomonedas deberán considerarlo como ingreso acumulable.</li>
            </ul>

            <h4 className="text-xl font-serif font-bold text-gray-900 mt-6 mb-2">Impuesto al Valor Agregado (IVA)</h4>
            <p className="leading-relaxed">En la <strong>Unión Europea</strong>, el Tribunal de Justicia señaló que las operaciones con la criptomoneda bitcoin se encuentran <strong>exentas</strong> del IVA, ya que consisten en un intercambio de divisas tradicionales por unidades de la divisa virtual.</p>
            <p className="leading-relaxed">En <strong>México</strong>, una sala del Tribunal de Justicia ha adoptado una postura similar, declarando que el <strong>intercambio de divisas</strong> tradicionales por unidades de la divisa virtual «bitcoin», y viceversa, <strong>constituyen operaciones exentas del IVA</strong>.</p>

            <blockquote className="border-l-4 border-red-500 pl-4 italic text-gray-600 my-8">
              <h4 className="font-bold text-red-600 not-italic">Riesgos Asociados</h4>
              <p>El Banco de México (banco central) ha declarado que existen diversos riesgos asociados con los activos virtuales. Advierte que estos se han caracterizado por ser <strong>volátiles</strong>, <strong>costosos</strong> para celebrar transacciones y <strong>difícilmente estables</strong>; también menciona que pueden existir riesgos derivados de la complejidad de la tecnología que los sustenta. Por tal razón, recomienda mantener una “sana distancia” respecto del uso de los activos virtuales.</p>
            </blockquote>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200">
            <h3 className="text-lg font-serif font-semibold text-gray-900 mb-4">
              ¿Necesitas asesoría personalizada?
            </h3>
            <p className="text-gray-600 mb-6">
              Nuestros expertos están listos para ayudarte con cualquier duda sobre criptomonedas y otros temas contables.
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

export default CriptomonedasPost;
