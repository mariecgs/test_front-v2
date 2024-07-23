import type { Task } from '~/types/Task'

const generateID = (): number => Math.floor(Math.random() * 10000)

export const useApi = () => {
  return {
    categories: {
      get: () => Promise.resolve([
        { id: 1, name: 'Courses' },
        { id: 2, name: 'Ménage' },
        { id: 3, name: 'Organisation' },
        { id: 4, name: 'Santé' },
        { id: 5, name: 'Lecture' },
        { id: 6, name: 'Cuisine' },
        { id: 7, name: 'Travail' },
        { id: 8, name: 'Fitness' },
        { id: 9, name: 'Voyage' },
        { id: 10, name: 'Famille' },
        { id: 11, name: 'Social' },
        { id: 12, name: 'Bénévolat' },
        { id: 13, name: 'Réparation' },
        { id: 14, name: 'Artisanat' },
        { id: 15, name: 'Bien-être' },
        { id: 16, name: 'Loisir' },
        { id: 17, name: 'Réunion' },
      ]),
    },
    task: {
      post: (payload: any) => Promise.resolve({
        ...payload,
        id: generateID(),
        completed: false,
        createdAt: new Date(),
      }),
      put: (payload: any) => Promise.resolve(payload),
      delete: (payload: any) => Promise.resolve(payload.id),
      getAll: (): Promise<Task[]> => Promise.resolve([
        {
          id: 1,
          title: 'Faire les courses',
          description: 'Acheter des fruits, légumes, et du lait',
          completed: false,
          createdAt: new Date('2024-07-21T10:30:00'),
          categories: [1, 2],
        },
        {
          id: 2,
          title: 'Nettoyer la maison',
          completed: false,
          createdAt: new Date('2024-07-20T14:00:00'),
          categories: [2, 3],
        },
        {
          id: 3,
          title: 'Appeler le docteur',
          description: 'Prendre rendez-vous pour un bilan de santé',
          completed: true,
          createdAt: new Date('2024-07-19T09:00:00'),
          categories: [4],
        },
        {
          id: 4,
          title: 'Lire un livre',
          description: 'Commencer le nouveau roman de science-fiction',
          completed: false,
          createdAt: new Date('2024-07-18T16:30:00'),
          categories: [5],
        },
        {
          id: 5,
          title: 'Préparer le dîner',
          description: 'Cuisiner des pâtes à la carbonara',
          completed: false,
          createdAt: new Date('2024-07-17T18:45:00'),
          categories: [2, 6],
        },
        {
          id: 6,
          title: 'Envoyer un email au manager',
          description: 'Demander des informations sur le projet en cours',
          completed: true,
          createdAt: new Date('2024-07-16T11:15:00'),
          categories: [7],
        },
        {
          id: 7,
          title: 'Aller à la salle de sport',
          description: 'Faire une séance de cardio',
          completed: false,
          createdAt: new Date('2024-07-15T07:30:00'),
          categories: [8],
        },
        {
          id: 8,
          title: 'Planifier les vacances',
          description: 'Réserver les billets d\'avion et l\'hôtel',
          completed: false,
          createdAt: new Date('2024-07-14T13:00:00'),
          categories: [9],
        },
        {
          id: 9,
          title: 'Visiter la famille',
          description: 'Passer l\'après-midi chez les parents',
          completed: true,
          createdAt: new Date('2024-07-13T15:00:00'),
          categories: [10, 11],
        },
        {
          id: 10,
          title: 'Ranger le garage',
          description: 'Organiser les outils et nettoyer les étagères',
          completed: false,
          createdAt: new Date('2024-07-12T11:00:00'),
          categories: [2, 3],
        },
        {
          id: 11,
          title: 'Faire du bénévolat',
          description: 'Participer à la collecte de nourriture',
          completed: false,
          createdAt: new Date('2024-07-11T09:30:00'),
          categories: [12],
        },
        {
          id: 12,
          title: 'Réparer le vélo',
          description: 'Changer la chambre à air et graisser la chaîne',
          completed: true,
          createdAt: new Date('2024-07-10T10:15:00'),
          categories: [13],
        },
        {
          id: 13,
          title: 'Coudre un vêtement',
          description: 'Terminer la jupe commencée la semaine dernière',
          completed: false,
          createdAt: new Date('2024-07-09T14:45:00'),
          categories: [14],
        },
        {
          id: 14,
          title: 'Étudier un cours en ligne',
          description: 'Suivre le module sur le design UX',
          completed: true,
          createdAt: new Date('2024-07-08T17:00:00'),
          categories: [5, 7],
        },
        {
          id: 15,
          title: 'Méditer',
          description: 'Prendre 20 minutes pour se relaxer',
          completed: false,
          createdAt: new Date('2024-07-07T06:30:00'),
          categories: [15],
        },
        {
          id: 16,
          title: 'Faire un puzzle',
          description: 'Assembler le puzzle de 1000 pièces',
          completed: true,
          createdAt: new Date('2024-07-06T20:00:00'),
          categories: [16],
        },
        {
          id: 17,
          title: 'Participer à une réunion de travail',
          description: 'Discussion sur le projet de développement',
          completed: false,
          createdAt: new Date('2024-07-05T10:00:00'),
          categories: [7, 17],
        },
      ]),

    },
  }
}
