// Para agregar un recurso, copia un bloque, cambia el id y los textos.
// Todo el contenido es de ejemplo: reemplázalo por el real.

export const STAGES = ["Tu perfil", "Tu CV", "La entrevista"] as const;
export type Stage = (typeof STAGES)[number];
export type ResourceType = "Guía" | "Plantilla" | "Checklist" | "Video";
export type Plan = "Gratis" | "Premium";

export interface Resource {
  id: number;
  title: string;
  description: string;
  type: ResourceType;
  plan: Plan;
  stage: Stage;
  minutes: number;
}

export const PREMIUM_PRICE = "S/ 25 al mes"; // supuesto de precio del equipo

export const STAGE_INFO: Record<Stage, string> = {
  "Tu perfil": "Aprende a contar quién eres y qué puedes aportar.",
  "Tu CV": "Arma un CV claro aunque tengas poca experiencia.",
  "La entrevista": "Practica las preguntas y llega con seguridad.",
};

// Lo que incluye cada tipo de recurso (texto de ejemplo para la página de detalle)
export const INCLUDES: Record<ResourceType, string[]> = {
  Guía: ["Pasos explicados con ejemplos", "Errores comunes que debes evitar", "Un ejercicio para practicar"],
  Plantilla: ["Formato listo para editar", "Un ejemplo completo ya lleno", "Consejos para cada sección"],
  Checklist: ["Lista para marcar paso a paso", "Qué revisar antes y después", "Versión para imprimir"],
  Video: ["Entrevista grabada completa", "Comentarios de un especialista", "Puntos de mejora al final"],
};

export const resources: Resource[] = [
  { id: 1, title: "Cómo presentar tu perfil sin experiencia", description: "Una estructura de tres partes para contar quién eres, qué has hecho y qué buscas, aunque aún no tengas trabajos previos.", type: "Guía", plan: "Gratis", stage: "Tu perfil", minutes: 8 },
  { id: 2, title: "Plantilla de CV para universitarios", description: "Formato de una página con secciones claras para estudiantes de últimos ciclos.", type: "Plantilla", plan: "Gratis", stage: "Tu CV", minutes: 5 },
  { id: 3, title: "Checklist para el día de tu entrevista", description: "Lo que debes revisar antes, durante y después de la entrevista.", type: "Checklist", plan: "Gratis", stage: "La entrevista", minutes: 3 },
  { id: 4, title: "Las preguntas más comunes y cómo responderlas", description: "Respuestas modelo y errores frecuentes en entrevistas para un primer empleo.", type: "Guía", plan: "Premium", stage: "La entrevista", minutes: 20 },
  { id: 5, title: "Cómo contar tus proyectos académicos", description: "Convierte trabajos de clase en experiencia que un reclutador entienda.", type: "Plantilla", plan: "Premium", stage: "Tu CV", minutes: 12 },
  { id: 6, title: "Simulacro de entrevista con comentarios", description: "Una entrevista grabada con observaciones de un especialista, para que veas qué mejorar.", type: "Video", plan: "Premium", stage: "La entrevista", minutes: 25 },
];
