import { RevupCommand } from '../types';

export interface HoverItem {
  command: RevupCommand;
  value: string;
}

export const hoverItems: HoverItem[] = [
  {
    command: RevupCommand.EPOCH,
    value: [
      '```',
      '-e <increment>',
      '```',
      '---',
      'Increases or displays the current epoch.',
      '- \\<increment>: value added to epoch (optional)',
    ].join('\n'),
  },
  {
    command: RevupCommand.NEW_ACCOUNT,
    value: [
      '```',
      'new-account -> <account> <pubkey>',
      '```',
      '---',
      'Creates a new account. Set as default account if the first account created.',
      '- \\<account>: the account address',
      "- \\<pubkey>: the account's public key",
    ].join('\n'),
  },
  {
    command: RevupCommand.PUBLISH,
    value: [
      '```',
      'publish . -> <package>',
      '```',
      '---',
      'Publishes the package.',
      '- \\<package>: the package',
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
    command: RevupCommand.SET_ACCOUNT,
    value: [
      '```',
      'set-default-account $account $pubkey',
      '```',
      '---',
      'Sets the default account.',
      "- \\$account: the account's address",
      "- \\$pubkey: the account's public key",
    ].join('\n'),
  },
  {
    command: RevupCommand.SHOW,
    value: [
      '```',
      'show $address',
      '```',
      '---',
      'Shows info about an address.',
      '- \\$address: the address',
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
