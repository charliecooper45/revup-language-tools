import { RevupCommand } from '../types';

export interface HoverItem {
  revupCommand: RevupCommand;
  commands: string[];
  value: string;
}

function buildValue(titles: string[], body: string[]): string {
  const mappedTitles = titles
    .map((title) => {
      return ['```', title, '```'];
    })
    .flat();
  return [...mappedTitles, '---', ...body].join('\n');
}

export const hoverItems: HoverItem[] = [
  {
    revupCommand: RevupCommand.CALL_METHOD,
    commands: ['call-method'],
    value: buildValue(
      ['call-method <component> <method> <args> -> <response>'],
      [
        'Calls a method on a component.',
        '- \\<component> the component',
        '- \\<method> the method to call',
        '- \\<args> the args (optional)',
        '- \\<response> the response (optional)',
      ]
    ),
  },
  {
    revupCommand: RevupCommand.CALL_FUNCTION,
    commands: ['call-function'],
    value: buildValue(
      [
        'call-function <package> <blueprint> <function> <args> -> <response>',
        'call-function <package> <blueprint> new <args> -> <resDef> <component>',
      ],
      [
        'Creates a new component (with new) or calls a function on a blueprint.',
        '- \\<package> the package',
        '- \\<blueprint> the blueprint',
        '- \\<function> the function/new',
        '- \\<args> the args (optional)',
        '- \\<response> the response (optional)',
        '- \\<resDef> the resource definition (new)',
        '- \\<component> the component (new)',
      ]
    ),
  },
  {
    revupCommand: RevupCommand.EPOCH,
    commands: ['-e', 'epoch'],
    value: buildValue(
      ['epoch <increment>'],
      [
        'Increases or displays the current epoch.',
        '- \\<increment> value added to epoch (optional)',
      ]
    ),
  },
  {
    revupCommand: RevupCommand.NEW_ACCOUNT,
    commands: ['new-account'],
    value: buildValue(
      ['new-account -> <account> <pubkey>'],
      [
        'Creates a new account. Set as default account if the first account created.',
        '- \\<account> the account',
        "- \\<pubkey> the account's public key",
      ]
    ),
  },
  {
    revupCommand: RevupCommand.PUBLISH,
    commands: ['publish'],
    value: buildValue(
      ['publish . -> <package>'],
      ['Publishes the package.', '- \\<package> the package']
    ),
  },
  {
    revupCommand: RevupCommand.RESET,
    commands: ['reset'],
    value: buildValue(
      ['reset'],
      ['Clears the resim data directory and resets the environment.']
    ),
  },
  {
    revupCommand: RevupCommand.SET_ACCOUNT,
    commands: ['set-default-account'],
    value: buildValue(
      ['set-default-account <account> <pubkey>'],
      [
        'Sets the default account.',
        '- \\<account> the account',
        "- \\<pubkey> the account's public key",
      ]
    ),
  },
  {
    revupCommand: RevupCommand.SHOW,
    commands: ['show'],
    value: buildValue(
      ['show <address>'],
      ['Shows info about an address.', '- \\<address> the address']
    ),
  },
  {
    revupCommand: RevupCommand.SHOW_CONFIGS,
    commands: ['show-configs'],
    value: buildValue(
      ['show-configs'],
      ['Prints the default account, current epoch and nonce.']
    ),
  },
];
