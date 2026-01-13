import responses from './responses';

export type Command = {
  description: string;
  action: (setHistory?: any) => string | null;
};

export const commands: Record<string, Command> = {
  help: {
    description: 'List all available commands',
    action: () => {
      const commandList = Object.entries(commands)
        .map(([key, cmd]) => `${key.padEnd(12)} - ${cmd.description}`)
        .join('\n');
      return `Available commands:\n${commandList}`;
    },
  },
  about: {
    description: 'A quick summary of myself',
    action: () => responses.about,
  },
  projects: {
    description: 'A list of my portfolio projects',
    action: () => responses.projects,
  },
  contact: {
    description: 'My contact information',
    action: () => responses.contact,
  },
  skills: {
    description: 'A quick summary of my skills',
    action: () => responses.skills,
  },
  education: {
    description: 'Information about my education',
    action: () => responses.education,
  },
  hobbies: {
    description: 'A quick summary of my hobbies',
    action: () => responses.hobbies,
  },
  clear: {
    description: 'Clear the terminal screen',
    action: (setHistory: any) => {
      setHistory([]);
      return null;
    },
  },
  date: {
    description: 'Displays the current date and time',
    action: () => new Date().toLocaleString(),
  },
};

export type CommandKey = keyof typeof commands;
