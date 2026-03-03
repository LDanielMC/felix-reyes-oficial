import { ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import { useState, PropsWithChildren } from "react";

/* ============================
   Stagger utilities
============================ */
export const StaggerContainer = ({
  children,
  delay = 0,
  className = "",
}: PropsWithChildren<{ delay?: number; className?: string }>) => (
  <motion.div
    className={className}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.2 }}
    transition={{ staggerChildren: delay }}
  >
    {children}
  </motion.div>
);

export const StaggerItem = ({ children }: PropsWithChildren) => {
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as const },
    },
  };
  return <motion.div variants={itemVariants}>{children}</motion.div>;
};

/* ============================
   Client Card
============================ */
export const ClientCard = ({
  name,
  logo,
  website,
}: {
  name: string;
  logo: string;
  website: string;
}) => {
  const [src, setSrc] = useState(logo);

  return (
    <StaggerItem>
      <motion.a
        href={website || "#"}
        target={website && website !== "#" ? "_blank" : undefined}
        rel={website && website !== "#" ? "noopener noreferrer" : undefined}
        className="group relative block h-36 rounded-2xl overflow-hidden border border-white/60 bg-white/70 shadow-[0_3px_10px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_20px_rgba(0,0,0,0.15)] transition-all duration-500 backdrop-blur-sm"
        whileHover={{
          y: -5,
          scale: 1.02,
          transition: { type: "spring", stiffness: 250, damping: 18 },
        }}
        aria-label={`Visitar sitio de ${name}`}
      >
        {/* Logo */}
        <img
          src={src}
          alt={`Logo de ${name}`}
          className="absolute inset-0 w-full h-full object-contain p-6 transition-all duration-500 ease-out group-hover:blur-[5px] group-hover:scale-110 group-hover:brightness-110"
          onError={() => setSrc("/logos/default.png")}
          loading="lazy"
        />

        {/* Overlay blanco translúcido con degradado y blur */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-white/60 to-white/20 backdrop-blur-[12px] border-t border-white/80 shadow-inner" />
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.35 }}
            className="absolute inset-0 flex flex-col items-center justify-center text-center px-3"
          >
            <p className="text-gray-800 font-semibold text-sm sm:text-base mb-1 leading-snug line-clamp-2">
              {name}
            </p>
            <ExternalLink className="w-4 h-4 text-gray-700/90 group-hover:scale-110 transition-transform duration-300" />
          </motion.div>
        </div>

        {/* Halo suave del borde en hover */}
        <motion.div
          className="absolute inset-0 rounded-2xl pointer-events-none"
          initial={{ opacity: 0 }}
          whileHover={{
            opacity: 1,
            boxShadow: "0 0 28px rgba(255,255,255,0.55)",
            transition: { duration: 0.35 },
          }}
        />
      </motion.a>
    </StaggerItem>
  );
};

/* ============================
   Portfolio + CTA
============================ */
export const ClientPortfolio = () => {
  // Orden exacto solicitado (Conexiones JC removido)
  const clients = [
    {
      id: 1,
      name: "TRUCK EXPRESS CIVAC SA DE CV",
      logo: "/logos/truck.webp",
      website:
        "https://aniq.org.mx/directorio/Transportistas/empresa-detalle.asp?id=316",
    },
    {
      id: 2,
      name: "INSTITUTO EDUCATIVO LAS FUENTES",
      logo: "/logos/las-fuentes.webp",
      website: "https://www.facebook.com/YoSoyTiburones/?locale=es_LA",
    },
    {
      id: 3,
      name: "FUNERARIA HISPANO MEXICANA",
      logo: "/logos/hispano.webp",
      website: "https://hispanomexicana.com/funeraria/",
    },
    {
      id: 4,
      name: "CONVERPET GROUP S A P I DE CV",
      logo: "/logos/converpet.webp",
      website: "https://www.converpet.com/",
    },
    {
      id: 5,
      name: "BIOFABRICA SIGLO XXI",
      logo: "/logos/biofabrica.webp",
      website: "https://biofabrica.com.mx/",
    },
    {
      id: 6,
      name: "FIDEICOMISO PARQUE CIENTIFICO Y TECNOLOGICO MORELOS",
      logo: "/logos/morelos-parque.webp",
      website: "https://parquecientificomorelos.com/",
    },
    {
      id: 7,
      name: "DIOCESIS DE CUERNAVACA, A.C.",
      logo: "/logos/diocesis.webp",
      website: "https://diocesisdecuernavaca.com/",
    },
    {
      id: 8,
      name: "ALARMAS DEL SUR SA DE CV",
      logo: "/logos/alertec.webp",
      website: "https://www.alertec.mx/",
    },
    {
      id: 9,
      name: "TSI EMPRESARIAL DE MEXICO SA DE CV",
      logo: "/logos/tsi-mexico.webp",
      website:
        "https://scempresarial.com.mx/",
    },
    {
      id: 10,
      name: "SUKI YOI S.A. DE C.V.",
      logo: "/logos/suki-yoi.webp",
      website: "https://www.facebook.com/yoooosivooooy/",
    },
  ];

  return (
    <section className="section-padding bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="container-custom">
        {/* Encabezado */}
        <StaggerContainer delay={0.12} className="text-center mb-12">
          <StaggerItem>
            <h2 className="text-4xl lg:text-5xl font-serif font-bold text-primary leading-tight">
              Empresas que Confían
              <span className="text-secondary block">
                en Nuestros Servicios
              </span>
            </h2>
          </StaggerItem>
          <StaggerItem>
            <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
              Trabajamos con empresas líderes de diversos sectores, brindando soluciones 
              contables y fiscales que impulsan su crecimiento y éxito empresarial.
            </p>
          </StaggerItem>
        </StaggerContainer>

        {/* Grid */}
        <StaggerContainer
          delay={0.06}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6"
        >
          {clients.map((c) => (
            <ClientCard
              key={c.id}
              name={c.name}
              logo={c.logo}
              website={c.website}
            />
          ))}
        </StaggerContainer>

        {/* --- Llamada a la Acción (CTA) --- */}
        <StaggerContainer className="mt-12">
          <StaggerItem>
            <motion.div
              className="card-elegant bg-gradient-to-r from-primary/5 to-secondary/5 border border-primary/20 rounded-2xl max-w-3xl mx-auto p-8 text-center shadow-[0_8px_24px_rgba(0,0,0,0.08)]"
              whileHover={{
                scale: 1.02,
                transition: { type: "spring", stiffness: 300, damping: 15 },
              }}
            >
              <h3 className="text-3xl font-serif font-bold text-primary mb-4">
                ¿Tu empresa será la siguiente?
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed text-lg">
                Únete a las empresas líderes que han confiado en nosotros para
                optimizar sus procesos contables y fiscales.
              </p>
              <motion.a
                href="#contacto"
                className="btn-primary inline-flex items-center space-x-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Solicitar Asesoría</span>
                <ExternalLink className="h-4 w-4" />
              </motion.a>
            </motion.div>
          </StaggerItem>
        </StaggerContainer>
      </div>
    </section>
  );
};
