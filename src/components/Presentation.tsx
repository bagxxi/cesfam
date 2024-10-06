import React from 'react';
import { Card, CardContent } from './ui/card';
import { Building2, Users, ClipboardCheck, BarChart3, Award, Clock, ThumbsUp, Target, Phone, MapPin, Facebook, Instagram, Youtube } from 'lucide-react';

const Presentation = () => {
  const slides = [
    {
      id: 1,
      title: "Optimización de Procesos Administrativos",
      subtitle: "CESFAM Violeta Parra Sandoval",
      content: (
        <div className="flex flex-col items-center justify-center h-full">
          <div className="absolute top-4 right-4">
            <img src="../src/assets/inacap.png" alt="Logo INACAP" className="h-8" />
          </div>
          <Building2 size={64} className="text-blue-500 mb-4" />
          <p className="text-lg text-gray-600 mt-4">Administración AVAN01/AVA_06/V</p>
          <p className="text-md text-gray-600">Profesor: Cristian Roberto Wiegand Mejías</p>
          <p className="text-sm text-gray-500 mt-2">Gabriel Balbontín U.</p>
        </div>
      )
    },
    {
      id: 2,
      title: "Contexto y Desafío",
      content: (
        <div className="grid grid-cols-2 gap-4">
          <div className="absolute top-4 right-4">
            <img src="../src/assets/inacap.png"  alt="Logo INACAP" className="h-8" />
          </div>
          <Card className="p-4">
            <CardContent>
              <Users className="h-8 w-8 text-blue-500 mb-2" />
              <h3 className="font-semibold mb-2">Cobertura</h3>
              <p className="text-sm">3 unidades vecinales + 2 CECOSF dependientes</p>
            </CardContent>
          </Card>
          <Card className="p-4">
            <CardContent>
              <ClipboardCheck className="h-8 w-8 text-green-500 mb-2" />
              <h3 className="font-semibold mb-2">Desafíos</h3>
              <ul className="text-sm list-disc pl-4">
                <li>Alto volumen de pacientes</li>
                <li>Múltiples programas</li>
                <li>Recursos limitados</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      )
    },
    {
      id: 3,
      title: "Áreas Funcionales Clave",
      content: (
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div className="absolute top-4 right-4">
            <img src="../src/assets/inacap.png"  alt="Logo INACAP" className="h-8" />
          </div>
          <div>
            <ul className="space-y-2">
              <li className="flex items-center"><div className="w-6 h-6 rounded-full bg-blue-500 text-white flex items-center justify-center mr-2">1</div>Dirección y Subdirección</li>
              <li className="flex items-center"><div className="w-6 h-6 rounded-full bg-blue-500 text-white flex items-center justify-center mr-2">2</div>Secretaría</li>
              <li className="flex items-center"><div className="w-6 h-6 rounded-full bg-blue-500 text-white flex items-center justify-center mr-2">3</div>Coordinación SAPU</li>
              <li className="flex items-center"><div className="w-6 h-6 rounded-full bg-blue-500 text-white flex items-center justify-center mr-2">4</div>Comités especializados</li>
              <li className="flex items-center"><div className="w-6 h-6 rounded-full bg-blue-500 text-white flex items-center justify-center mr-2">5</div>Encargados de programas</li>
            </ul>
          </div>
          <div>
            <ul className="space-y-2">
              <li className="flex items-center"><div className="w-6 h-6 rounded-full bg-blue-500 text-white flex items-center justify-center mr-2">6</div>Jefaturas de Sector</li>
              <li className="flex items-center"><div className="w-6 h-6 rounded-full bg-blue-500 text-white flex items-center justify-center mr-2">7</div>Equipos de salud</li>
              <li className="flex items-center"><div className="w-6 h-6 rounded-full bg-blue-500 text-white flex items-center justify-center mr-2">8</div>SOME</li>
              <li className="flex items-center"><div className="w-6 h-6 rounded-full bg-blue-500 text-white flex items-center justify-center mr-2">9</div>Informática</li>
              <li className="flex items-center"><div className="w-6 h-6 rounded-full bg-blue-500 text-white flex items-center justify-center mr-2">10</div>Servicios de apoyo</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: 4,
      title: "Procesos Administrativos",
      content: (
        <div className="grid grid-cols-2 gap-4">
          <div className="absolute top-4 right-4">
            <img src="../src/assets/inacap.png"  alt="Logo INACAP" className="h-8" />
          </div>
          <Card className="p-4">
            <CardContent>
              <h3 className="font-semibold mb-2">Planificación</h3>
              <ul className="text-sm list-disc pl-4">
                <li>Objetivos alineados con metas nacionales</li>
                <li>Planes específicos por área</li>
                <li>Indicadores de gestión</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="p-4">
            <CardContent>
              <h3 className="font-semibold mb-2">Organización</h3>
              <ul className="text-sm list-disc pl-4">
                <li>División por sectores geográficos</li>
                <li>Equipos multidisciplinarios</li>
                <li>Sistema de derivación eficiente</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="p-4">
            <CardContent>
              <h3 className="font-semibold mb-2">Dirección</h3>
              <ul className="text-sm list-disc pl-4">
                <li>Liderazgo basado en datos</li>
                <li>Comunicación fluida entre niveles</li>
                <li>Capacitación continua</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="p-4">
            <CardContent>
              <h3 className="font-semibold mb-2">Control</h3>
              <ul className="text-sm list-disc pl-4">
                <li>Monitoreo mediante indicadores clave</li>
                <li>Evaluación periódica de resultados</li>
                <li>Ajustes basados en retroalimentación</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      )
    },
    {
      id: 5,
      title: "Indicadores de Gestión",
      content: (
        <div className="grid grid-cols-3 gap-4">
          <div className="absolute top-4 right-4">
            <img src="../src/assets/inacap.png"  alt="Logo INACAP" className="h-8" />
          </div>
          <Card className="p-4">
            <CardContent className="flex flex-col items-center">
              <Clock className="h-8 w-8 text-blue-500 mb-2" />
              <h3 className="font-semibold text-center mb-2">Tiempo de Espera</h3>
              <p className="text-sm text-center">Promedio de espera para atención</p>
            </CardContent>
          </Card>
          <Card className="p-4">
            <CardContent className="flex flex-col items-center">
              <ThumbsUp className="h-8 w-8 text-green-500 mb-2" />
              <h3 className="font-semibold text-center mb-2">Satisfacción</h3>
              <p className="text-sm text-center">Índice de satisfacción usuarios</p>
            </CardContent>
          </Card>
          <Card className="p-4">
            <CardContent className="flex flex-col items-center">
              <Target className="h-8 w-8 text-red-500 mb-2" />
              <h3 className="font-semibold text-center mb-2">Cumplimiento</h3>
              <p className="text-sm text-center">Metas sanitarias alcanzadas</p>
            </CardContent>
          </Card>
        </div>
      )
    },
    {
      id: 6,
      title: "Testimonio de Usuario",
      content: (
        <div className="p-6 bg-gray-100 rounded-lg">
          <div className="absolute top-4 right-4">
            <img src="../src/assets/inacap.png" alt="Logo INACAP" className="h-8" />
          </div>
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-white text-2xl mb-4">
              MV
            </div>
            <blockquote className="text-lg italic text-gray-700 mb-4">
              "Antes, tenía que estar a las seis y media de la mañana en el consultorio para pedir una hora, con todo el peligro que eso tiene, además del frío. Ahora, puedo llamar, puedo pedir horas por internet, es mucho más fácil. Además, atienden tan bien, conozco a gente que vive en otras comunas pero no se han cambiado del consultorio"
            </blockquote>
            <p className="font-semibold">Myriam V., usuaria Unidad Vecinal 31-50</p>
          </div>
        </div>
      )
    },
    {
      id: 7,
      title: "Llamado a la Acción",
      content: (
        <div className="grid grid-cols-3 gap-4">
          <div className="absolute top-4 right-4">
            <img src="../src/assets/inacap.png"  alt="Logo INACAP" className="h-8" />
          </div>
          <Card className="p-4">
            <CardContent className="flex flex-col items-center">
              <Users className="h-8 w-8 text-blue-500 mb-2" />
              <h3 className="font-semibold text-center mb-2">Únete a Nuestra Comunidad</h3>
              <p className="text-sm text-center">Sé parte de una atención de salud integral y de calidad</p>
            </CardContent>
          </Card>
          <Card className="p-4">
            <CardContent className="flex flex-col items-center">
              <ClipboardCheck className="h-8 w-8 text-green-500 mb-2" />
              <h3 className="font-semibold text-center mb-2">Agenda tu Hora</h3>
              <p className="text-sm text-center">Sistema de agendamiento fácil y eficiente</p>
            </CardContent>
          </Card>
          <Card className="p-4">
            <CardContent className="flex flex-col items-center">
              <Award className="h-8 w-8 text-yellow-500 mb-2" />
              <h3 className="font-semibold text-center mb-2">Conoce Nuestros Servicios</h3>
              <p className="text-sm text-center">Descubre todos los programas disponibles</p>
            </CardContent>
          </Card>
        </div>
      )
    },
    {
      id: 8,
      title: "Conclusión y Próximos Pasos",
      content: (
        <div className="space-y-4">
           <div className="absolute top-4 right-4">
            <img src="../src/assets/inacap.png" alt="Logo INACAP" className="h-8" />
          </div>
          <p className="text-lg font-semibold text-center mb-4">La gestión administrativa efectiva es clave para la salud comunitaria</p>
          <div className="grid grid-cols-3 gap-4">
            <Card className="p-4">
              <CardContent className="text-center">
                <h3 className="font-semibold mb-2">Conocer</h3>
                <p className="text-sm">Explora nuestro modelo de gestión</p>
              </CardContent>
            </Card>
            <Card className="p-4">
              <CardContent className="text-center">
                <h3 className="font-semibold mb-2">Implementar</h3>
                <p className="text-sm">Adopta indicadores de gestión</p>
              </CardContent>
            </Card>
            <Card className="p-4">
              <CardContent className="text-center">
                <h3 className="font-semibold mb-2">Contactar</h3>
                <p className="text-sm">Comparte experiencias y mejores prácticas</p>
              </CardContent>
            </Card>
          </div>
        </div>
      )
    },
    {
      id: 9,
      title: "Contáctanos",
      content: (
        <div className="grid grid-cols-2 gap-4">
          <div className="absolute top-4 right-4">
            <img src="../src/assets/inacap.png" alt="Logo INACAP" className="h-8" />
          </div>
          <div>
            <h3 className="font-semibold mb-4">Información de Contacto</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-blue-500" />
                <span>233523300</span>
              </li>
              <li className="flex items-center">
                <MapPin className="h-5 w-5 mr-2 text-blue-500" />
                <span>Av. Travesía 7447, Pudahuel</span>
              </li>
              <li className="flex items-center">
                <Facebook className="h-5 w-5 mr-2 text-blue-500" />
                <a href="https://www.facebook.com/pages/Cesfam-Violeta-Parra/928101113997979" className="text-blue-500">Facebook</a>
              </li>
              <li className="flex items-center">
                <Instagram className="h-5 w-5 mr-2 text-blue-500" />
                <a href="https://www.instagram.com/cesfam_violetaparra/" className="text-blue-500">Instagram</a>
              </li>
              <li className="flex items-center">
                <Youtube className="h-5 w-5 mr-2 text-blue-500" />
                <a href="https://www.youtube.com/channel/UC-xS3bVgxXwgdIVMwu8Zz-g" className="text-blue-500">YouTube</a>
              </li>
            </ul>
          </div>
          <div className="flex justify-center items-center">
          <img src="../src/assets/cesfam.jpg" alt="CESFAM Violeta Parra" className="rounded-lg" />
          </div>
        </div>
      )
    },
    {
      id: 10,
      title: "¡Gracias!",
      content: (
        <div className="flex flex-col items-center">
          <div className="w-full flex justify-between items-center mb-6">
            <img src="../src/assets/inacap.png" alt="Logo INACAP" className="h-12" />
            <img src="../src/assets/codep.png" alt="Logo CODEP" className="h-12" />
          </div>
          <img src="../src/assets/cesfam.jpg" alt="CESFAM Violeta Parra" className="rounded-lg mb-6" />
          <p className="text-lg text-center text-gray-600">Tu salud es nuestra prioridad</p>
        </div>
      )
    }
  ];

  return (
    <div className="space-y-8">
      {slides.map((slide) => (
        <div key={slide.id} className="p-6 bg-white rounded-lg shadow-lg relative">
          <h2 className="text-2xl font-bold mb-4 text-blue-600">{slide.title}</h2>
          {slide.subtitle && <h3 className="text-xl mb-4 text-gray-600">{slide.subtitle}</h3>}
          {slide.content}
        </div>
      ))}
    </div>
  );
};

export default Presentation;