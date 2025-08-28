import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const BlogPost = () => {
  const { id } = useParams<{ id: string }>();

  // In a real app, you would fetch this data based on the id
  const post = {
    id: 'regimen-fiscal-624',
    title: 'Régimen Fiscal 624: Todo lo que necesitas saber',
    date: '28 de agosto, 2025',
    readTime: '5 min de lectura',
    category: 'Fiscal',
    content: [
      {
        type: 'paragraph',
        text: 'El Régimen Fiscal 624 está diseñado específicamente para el sector del autotransporte en México. Este régimen ofrece beneficios fiscales para las personas morales que cumplan con ciertos requisitos.'
      },
      {
        type: 'heading',
        text: '¿Quiénes son considerados coordinados?'
      },
      {
        type: 'paragraph',
        text: 'Se consideran coordinados a las personas morales que administran y operan activos fijos o activos fijos y terrenos relacionados directamente con la actividad del autotransporte terrestre de carga o de pasajeros. Esto aplica cuando los integrantes realizan exclusivamente actividades de autotransporte terrestre de carga o pasajeros o complementarias a dichas actividades.'
      },
      {
        type: 'heading',
        text: '¿Pueden ser transportistas las Personas Morales en Régimen Simplificado de Confianza?'
      },
      {
        type: 'paragraph',
        text: 'Sí, siempre y cuando cumplan con las obligaciones fiscales respecto al Impuesto Sobre la Renta (ISR) conforme al régimen. Aplicable para personas morales residentes en México únicamente constituidas por personas físicas, cuyos ingresos totales en el ejercicio inmediato anterior no excedan de 35 millones de pesos.'
      },
      {
        type: 'heading',
        text: 'Regímenes para registrarse en el SAT'
      },
      {
        type: 'list',
        items: [
          'Coordinado Administrador',
          'Coordinado por cuenta propia como sociedad - PM',
          'Integrante cumple a través de coordinado - PF / PM',
          'Integrante cumple por cuenta propia - PF / PM',
          'Régimen general de ley - PM',
          'Personas físicas con Régimen Simplificado de Confianza (aunque para ésta no aplican estímulos fiscales)'
        ]
      },
      {
        type: 'heading',
        text: 'Requisitos para ser Régimen de Coordinados'
      },
      {
        type: 'list',
        items: [
          'Ser persona moral',
          'Tener integrantes que realicen exclusivamente actividades de autotransporte'
        ]
      },
      {
        type: 'heading',
        text: 'Obligaciones de retención de IVA'
      },
      {
        type: 'paragraph',
        text: 'Las Personas Morales están obligadas a efectuar la retención del IVA (4%) cuando reciban servicios de autotransporte terrestre de bienes o por servicio de grúas. Cabe destacar que los servicios de mensajería y paquetería NO están sujetos a esta retención.'
      },
      {
        type: 'heading',
        text: 'Estímulos Fiscales para el Sector de Autotransporte'
      },
      {
        type: 'paragraph',
        text: 'Los estímulos fiscales considerados en la Resolución de Facilidades Administrativas (RFA) incluyen:'
      },
      {
        type: 'list',
        items: [
          'Opción de enterar el 7.5% por concepto de retenciones del ISR',
          'Deducción del 8% de los ingresos propios de la actividad (hasta $1,000,000 MXN)',
          'Deducción de pagos por consumo de combustible (hpto 15% del total)',
          'Acreditamiento del estímulo fiscal de combustible Diesel contra diversos conceptos'
        ]
      },
      {
        type: 'paragraph',
        text: 'Estos beneficios están diseñados para apoyar al sector del autotransporte y fomentar el cumplimiento fiscal.'
      }
    ]
  };

  const renderContent = () => {
    return post.content.map((item, index) => {
      switch (item.type) {
        case 'heading':
          return (
            <h3 key={index} className="text-xl font-semibold text-foreground mt-8 mb-4">
              {item.text}
            </h3>
          );
        case 'list':
          return (
            <ul key={index} className="list-disc pl-6 space-y-2 my-4">
              {item.items.map((listItem, i) => (
                <li key={i} className="text-muted-foreground">
                  {listItem}
                </li>
              ))}
            </ul>
          );
        default:
          return (
            <p key={index} className="text-muted-foreground leading-relaxed mb-4">
              {item.text}
            </p>
          );
      }
    });
  };

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
              {post.category}
            </span>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {post.title}
            </h1>
            <div className="flex items-center text-sm text-muted-foreground">
              <span>{post.date}</span>
              <span className="mx-2">•</span>
              <span>{post.readTime}</span>
            </div>
          </div>

          <div className="prose prose-lg max-w-none text-foreground">
            {renderContent()}
          </div>

          <div className="mt-12 pt-8 border-t border-border">
            <h3 className="text-lg font-semibold text-foreground mb-4">
              ¿Necesitas asesoría personalizada?
            </h3>
            <p className="text-muted-foreground mb-6">
              Nuestros expertos están listos para ayudarte con cualquier duda sobre el Régimen Fiscal 624 y otros temas contables.
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

export default BlogPost;
