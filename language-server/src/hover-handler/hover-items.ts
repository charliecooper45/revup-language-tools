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

function buildArgs(args: string[]): string[] {
  const mappedArgs = args.map((arg) => `\n${arg}`);
  return ['\nARGS:', ...mappedArgs];
}

function buildResponses(responses: string[]): string[] {
  const mappedResponses = responses.map((response) => `\n${response}`);
  return ['\nRESPONSES:', ...mappedResponses];
}

export const hoverItems: HoverItem[] = [
  {
    revupCommand: RevupCommand.CALL_FUNCTION,
    commands: ['call-function'],
    value: buildValue(
      [
        'call-function <package> <blueprint> <function> <args> -> <response>',
        'call-function <package> <blueprint> new <args> -> <resDef> <component>',
      ],
      [
        'Creates a new component (with new) or calls a function.',
        ...buildArgs([
          '```<package>```the blueprint package address',
          '```<blueprint>```the blueprint name',
          '```<function>```the function name/new',
          '```<args>```the arguments, e.g. "hello", "amount,resource" for Bucket, "#id1,#id2,..,resource_address" for NFT Bucket. (optional)',
        ]),
        ...buildResponses([
          '```<response>```the response (optional)',
          '```<resDef>```the resource definition address (new)',
          '```<component>```the component address (new)',
        ]),
      ]
    ),
  },
  {
    revupCommand: RevupCommand.CALL_METHOD,
    commands: ['call-method'],
    value: buildValue(
      ['call-method <component> <method> <args> -> <response>'],
      [
        'Calls a method on a component.',
        ...buildArgs([
          '```<component>```the component address',
          '```<method>```the method name',
          '```<args>```the arguments, e.g. "hello", "amount,resource" for Bucket, "#id1,#id2,..,resource_address" for NFT Bucket. (optional)',
        ]),
        ...buildResponses(['```<response>``` the response (optional)']),
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
        ...buildArgs(['```<increment>```value added to epoch (optional)']),
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
        ...buildResponses([
          '```<account>```the account address',
          "```<pubkey>```the account's public key",
        ]),
      ]
    ),
  },
  {
    revupCommand: RevupCommand.PUBLISH,
    commands: ['publish'],
    value: buildValue(
      ['publish . -> <package>'],
      [
        'Publishes the package.',
        ...buildResponses(['```<package>```the package address']),
      ]
    ),
  },
  {
    revupCommand: RevupCommand.RESET,
    commands: ['reset'],
    value: buildValue(['reset'], ['Resets the data directory.']),
  },
  {
    revupCommand: RevupCommand.SET_ACCOUNT,
    commands: ['set-default-account'],
    value: buildValue(
      ['set-default-account <account> <pubkey>'],
      [
        'Sets the default account.',
        ...buildArgs([
          "```<account>```the account's address",
          "```<pubkey>```the account's public key",
        ]),
      ]
    ),
  },
  {
    revupCommand: RevupCommand.SHOW,
    commands: ['show'],
    value: buildValue(
      ['show <address>'],
      [
        'Displays the content behind an address.',
        ...buildArgs(['```<address>```the address']),
      ]
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
