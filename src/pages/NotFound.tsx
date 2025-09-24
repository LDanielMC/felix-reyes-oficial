import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { Home, ArrowLeft, Search, FileQuestion } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5 flex items-center justify-center px-4">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'easeInOut'
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"
          animate={{
            scale: [0.8, 1.1, 0.8],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            delay: 2,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'easeInOut'
          }}
        />
      </div>

      <div className="relative z-10 max-w-2xl mx-auto text-center">
        {/* Animated 404 number */}
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-8"
        >
          <motion.div
            animate={{
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="inline-block"
          >
            <FileQuestion className="w-24 h-24 mx-auto text-primary mb-4" />
          </motion.div>
          <h1 className="text-8xl md:text-9xl font-bold text-primary font-serif mb-4">
            404
          </h1>
        </motion.div>

        {/* Main content */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-6"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground font-serif">
            Página No Encontrada
          </h2>

          <p className="text-xl text-muted-foreground max-w-lg mx-auto leading-relaxed">
            Lo sentimos, la página que estás buscando no existe o ha sido movida.
            No te preocupes, ¡estamos aquí para ayudarte!
          </p>

          {/* Search suggestion */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 max-w-md mx-auto"
          >
            <Search className="w-8 h-8 text-primary mx-auto mb-3" />
            <p className="text-sm text-muted-foreground mb-4">
              ¿Buscas información sobre nuestros servicios contables?
            </p>
            <Link
              to="/servicios"
              className="inline-flex items-center px-4 py-2 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors text-sm"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Ver Servicios
            </Link>
          </motion.div>
        </motion.div>

        {/* Action buttons */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mt-12"
        >
          <Link
            to="/"
            className="inline-flex items-center justify-center px-8 py-3 bg-secondary text-secondary-foreground rounded-xl font-semibold hover:bg-secondary/90 transition-all duration-300 hover:shadow-lg hover:shadow-secondary/20"
          >
            <Home className="w-5 h-5 mr-2" />
            Ir al Inicio
          </Link>

          <Link
            to="/contacto"
            className="inline-flex items-center justify-center px-8 py-3 border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-xl font-semibold transition-all duration-300"
          >
            Contactar Soporte
          </Link>
        </motion.div>

        {/* Footer message */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-sm text-muted-foreground mt-12"
        >
          Si crees que esto es un error, por favor{' '}
          <Link to="/contacto" className="text-primary hover:underline font-medium">
            contáctanos
          </Link>
        </motion.p>
      </div>
    </div>
  );
};

export default NotFound;
