import { RevupCommand } from '../types';

export interface HoverItem {
  command: RevupCommand;
  value: string;
}

export const hoverItems: HoverItem[] = [
  {
    command: RevupCommand.PUBLISH,
    value: [
      '```',
      'publish . -> <package>',
      '```',
      '---',
      'Publishes the package.',
      '- \\<package>: the returned package',
    ].join('\n'),
  },
  {
    command: RevupCommand.RESET,
    value: [
      '```',
      'reset',
      '```',
      '---',
      'Clears the resim data directory and resets the environment.',
    ].join('\n'),
  },
  {
    command: RevupCommand.SHOW_CONFIGS,
    value: [
      '```',
      'show-configs',
      '```',
      '---',
      'Prints the default account, current epoch and nonce.',
    ].join('\n'),
  },
];
