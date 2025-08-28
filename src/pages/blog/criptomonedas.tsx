import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const CriptomonedasPost = () => {
  return (
    <div className="min-h-screen bg-background pt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link
            to="/blog"
            className="inline-flex items-center text-sm font-medium text-primary hover:text-primary/80 mb-8 transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Volver al blog
          </Link>

          <div className="mb-8">
            <span className="inline-block px-3 py-1 text-sm font-semibold text-primary bg-primary/10 rounded-full mb-4">
              Fiscal
            </span>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Criptomonedas: Guía Completa sobre su Regulación y Aspectos Fiscales
            </h1>
            <div className="flex items-center text-sm text-muted-foreground">
              <span>28 de agosto, 2025</span>
              <span className="mx-2">•</span>
              <span>7 min de lectura</span>
            </div>
          </div>

          <div className="prose prose-lg max-w-none text-foreground">
            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">¿Qué son las criptomonedas?</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Una criptomoneda es un activo digital único que sólo puede ser transferido en forma electrónica. 
              Se utiliza como medio de pago o intercambio o bien, puede venderse; para fines de seguridad y evitar 
              que sea corrompida, su estructura está basada en códigos encriptados (criptografía), razón por 
              la cual se le llama criptomoneda.
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">Principales criptomonedas</h3>
            <p className="text-muted-foreground mb-4">
              A continuación, algunos ejemplos de activos digitales y sus abreviaturas:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {[
                'BITCOIN – BTC',
                'ETHEREUM – ETH',
                'RIPPLE – XRP',
                'BITCOIN CASH – BCH',
                'LITECOIN – LTC',
                'EOS – EOS',
                'BINANCE COIN – BNB',
                'BITCOIN SV - BSV',
                'STELLAR – XLM',
                'MONERO – XMR',
                'CARDANO – ADA',
                'TRON – TRX',
                'IOTA – MIOTA',
                'DASH – DASH',
                'TEZOS – XTZ',
                'ETHEREUM CLASSIC – ETC',
                'NEO – NEO',
                'COSMOS – ATOM',
                'NEM – XEM',
                'ONTOLOGY – ONT',
                'ZCASH – ZEC',
                'DOGECOIN – DOGE',
                'VECHAIN – VET',
                'DECRED – DCR',
                'QTUM – QTUM',
                'V SYSTEMS – VSYS'
              ].map((crypto, index) => (
                <div key={index} className="flex items-center p-3 bg-muted/30 rounded-lg">
                  <span className="text-foreground font-medium">{crypto}</span>
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-semibold text-foreground mt-12 mb-4">Fundamento Legal</h2>
            <h3 className="text-xl font-semibold text-foreground mt-6 mb-4">Prevención para el lavado de dinero</h3>
            <p className="text-muted-foreground mb-4">
              La Ley Federal para la Prevención e Identificación de Operaciones con Recursos de Procedencia Ilícita (LFPIORPI) 
              menciona que se entenderán como Actividades Vulnerables y, por lo tanto, objeto de identificación las siguientes:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li className="text-muted-foreground">
                El ofrecimiento habitual y profesional de intercambio de activos virtuales por parte de sujetos distintos a las 
                Entidades Financieras, que se lleven a cabo a través de plataformas electrónicas, digitales o similares, que 
                administren u operen, facilitando o realizando operaciones de compra o venta de dichos activos propiedad de sus 
                clientes o bien, provean medios para custodiar, almacenar, o transferir activos virtuales distintos a los reconocidos 
                por el Banco de México en términos de la Ley para Regular las Instituciones de Tecnología Financiera (Fintech). 
                Incluidas las operaciones que se realicen con ciudadanos mexicanos desde otra jurisdicción.
              </li>
            </ul>

            <p className="text-muted-foreground mb-6">
              Se entenderá como activo virtual toda representación de valor registrada electrónicamente y utilizada entre el público 
              como medio de pago para todo tipo de actos jurídicos, cuya transferencia únicamente puede llevarse a cabo a través de 
              medios electrónicos. En ningún caso se entenderá como activo virtual la moneda de curso legal en territorio nacional, 
              las divisas ni cualquier otro activo denominado en moneda de curso legal o divisas.
            </p>

            <p className="text-muted-foreground font-semibold mb-4">
              Serán objeto de aviso ante la Secretaría De Hacienda y Crédito Público (SHCP):
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li className="text-muted-foreground">
                Cuando el monto de la operación de compra o venta que realice el cliente de quien realice la actividad vulnerable 
                sea por una cantidad igual o superior al equivalente a doscientas diez veces el valor diario de la UMA ($23,759.00 
                pesos vigentes en el año 2025).
              </li>
              <li className="text-muted-foreground">
                Cuando las operaciones den lugar al cobro de una contraprestación por el servicio brindado, independientemente de su 
                denominación y que ésta sea por una cantidad igual o superior al equivalente a cuatro veces el valor diario de la UMA 
                ($452.56 pesos vigentes en el año 2025).
              </li>
            </ul>

            <p className="text-muted-foreground mb-6">
              Aquellos que realicen las Actividades Vulnerables deberán obtener, mantener y poner a disposición de las autoridades 
              competentes, la información precisa sobre las operaciones con activos virtuales del originante, receptor y beneficiario 
              controlador, según sea el caso.
            </p>

            <h2 className="text-2xl font-semibold text-foreground mt-12 mb-4">Aspecto Fiscal</h2>
            <h3 className="text-xl font-semibold text-foreground mt-6 mb-4">Impuesto Sobre la Renta (ISR)</h3>
            <p className="text-muted-foreground mb-4">
              No existen regulaciones precisas que definan lo que ha de considerarse como criptomoneda para efectos fiscales ni cuáles 
              serían las disposiciones específicas en materia del ISR e IVA, sin embargo, la recomendación es aplicar lo siguiente:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li className="text-muted-foreground">
                Para personas físicas que obtengan ingresos por la enajenación de criptomonedas los considerarán percibidos en el monto 
                en que al momento de obtenerlos incrementen su patrimonio.
              </li>
              <li className="text-muted-foreground">
                Personas morales: Si bien la Ley del Impuesto sobre la Renta no define el término "ingreso", se considerará como tal, 
                cualquier cantidad que modifique positivamente el haber patrimonial de una persona. Ahora bien, para delimitar ese concepto 
                debe apuntarse que el ingreso puede recibirse de muchas formas, una de ellas es el incremento al patrimonio que origine 
                la enajenación de Criptomonedas. La Ley de Impuesto sobre la Renta considera que el término ingreso es de carácter 
                amplio e incluyente de todos los conceptos que modifiquen positivamente el patrimonio del contribuyente; por lo tanto, 
                las Personas Morales que obtengan un incremento en su patrimonio que se derive de la enajenación de Criptomonedas deberán 
                considerarse como ingresos.
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">Impuesto al Valor Agregado (IVA)</h3>
            <p className="text-muted-foreground mb-4">
              Unión Europea; el Tribunal de Justicia señaló que aquellas operaciones con la criptomoneda bitcoin, se encuentran exentas 
              del Impuesto al Valor Agregado (IVA), ya que consisten en un intercambio de divisas tradicionales por unidades de la divisa 
              virtual (bitcoin).
            </p>
            <p className="text-muted-foreground mb-6">
              El Tribunal de Justicia en México (Sala Quinta) declara:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li className="text-muted-foreground">
                El intercambio de divisas tradicionales por unidades de la divisa virtual «bitcoin», y viceversa, constituyen operaciones 
                exentas del IVA.
              </li>
            </ul>

            <h2 className="text-2xl font-semibold text-foreground mt-12 mb-4">Riesgos Asociados</h2>
            <p className="text-muted-foreground mb-6">
              El Banco de México (banco central) ha declarado que existen diversos riesgos asociados con los activos virtuales. Advierte 
              que estos se han caracterizado por ser volátiles, costosos para celebrar transacciones y difícilmente estables; también 
              menciona que pueden existir riesgos derivados de la complejidad de la tecnología que los sustenta. Por tal razón, recomienda 
              mantener una "sana distancia" respecto del uso de los activos virtuales.
            </p>
          </div>

          <div className="mt-12 pt-8 border-t border-border">
            <h3 className="text-lg font-semibold text-foreground mb-4">
              ¿Necesitas asesoría sobre criptomonedas y su regulación fiscal?
            </h3>
            <p className="text-muted-foreground mb-6">
              Nuestros expertos están listos para ayudarte a navegar por el complejo mundo de las criptomonedas y cumplir con todas las 
              obligaciones fiscales correspondientes.
            </p>
            <Link
              to="/contacto"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-colors"
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
