import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { Linkedin } from "lucide-react";

// Estructura de datos para los miembros del equipo
const teamMembers = [
  {
    name: "Félix Reyes",
    role: "Socio Fundador / Estratega Fiscal",
    quote: "Mi misión es transformar la complejidad fiscal en tranquilidad y crecimiento para cada uno de nuestros clientes.",
    // Reemplazar con una foto de Félix Reyes de la carpeta "Fotos página web"
    // que lo muestre en un entorno de trabajo, si está disponible.
    // Si no hay una foto específica de él, usar una representativa del equipo trabajando.
    image: "https://photos.google.com/u/0/albums?hl=es",
    linkedin: "https://www.linkedin.com/in/felixreyes/",
  },
  {
    name: "Laura Mendoza",
    role: "Gerente de Contabilidad Corporativa",
    quote: "La precisión en la contabilidad es la base para tomar decisiones empresariales audaces y seguras.",
    // Reemplazar con una foto de Laura Mendoza de la carpeta "Fotos página web"
    // que la muestre en un entorno de trabajo, si está disponible.
    // Si no hay una foto específica de ella, usar una representativa del equipo trabajando.
    image: "https://photos.google.com/u/0/albums?hl=es",
    linkedin: "https://www.linkedin.com/in/lauramendoza/",
  },
  {
    name: "Carlos Jiménez",
    role: "Especialista en Auditoría y Cumplimiento",
    quote: "Garantizo la integridad financiera de tu empresa, protegiendo tus activos y tu reputación.",
    // Reemplazar con una foto de Carlos Jiménez de la carpeta "Fotos página web"
    // que lo muestre en un entorno de trabajo, si está disponible.
    // Si no hay una foto específica de él, usar una representativa del equipo trabajando.
    image: "https://photos.google.com/u/0/albums?hl=es",
    linkedin: "https://www.linkedin.com/in/carlosjimenez/",
  },
  {
    name: "Sofía Navarro",
    role: "Asesora Financiera para Particulares",
    quote: "Ayudo a las personas a construir un futuro financiero sólido, un plan a la vez.",
    // Reemplazar con una foto de Sofía Navarro de la carpeta "Fotos página web"
    // que la muestre en un un entorno de trabajo, si está disponible.
    // Si no hay una foto específica de ella, usar una representativa del equipo trabajando.
    image: "https://photos.google.com/u/0/albums?hl=es",
    linkedin: "https://www.linkedin.com/in/sofianavarro/",
  },
];

export const MeetTheTeam = () => {
  return (
    <section className="w-full section-padding bg-background dark:bg-muted/50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-foreground">
            Conoce a Nuestros Expertos
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            Detrás de cada estrategia exitosa, hay un equipo de profesionales apasionados y dedicados a tu éxito financiero.
          </p>
        </div>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {teamMembers.map((member, index) => (
              <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                <div className="p-1 h-full">
                  {/* Mantenemos card-elegant para la consistencia visual */}
                  <div className="card-elegant h-full flex flex-col text-center">
                    <div className="relative mb-4">
                      {/* Aquí se usarán las URL de las imágenes de la carpeta */}
                      <img
                        src={member.image}
                        alt={`Foto de ${member.name}`}
                        className="w-full h-80 object-cover rounded-t-lg"
                      />
                    </div>
                    <div className="flex flex-col flex-grow p-6 pt-0">
                      <h3 className="text-2xl font-bold text-primary">{member.name}</h3>
                      <p className="font-semibold text-accent mb-3">{member.role}</p>

                      {/* Cita que capta la atención */}
                      <blockquote className="flex-grow text-muted-foreground text-sm border-l-2 border-border pl-4 italic my-4 text-left">
                        {member.quote}
                      </blockquote>

                      {/* Enlace a LinkedIn para credibilidad */}
                      <div className="mt-auto pt-4">
                        <a
                          href={member.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-block text-muted-foreground transition-colors hover:text-primary"
                          aria-label={`Perfil de LinkedIn de ${member.name}`}
                        >
                          <Linkedin className="h-6 w-6" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute left-[-20px] top-1/2 -translate-y-1/2 z-10 hidden lg:flex" />
          <CarouselNext className="absolute right-[-20px] top-1/2 -translate-y-1/2 z-10 hidden lg:flex" />
        </Carousel>
      </div>
    </section>
  );
};