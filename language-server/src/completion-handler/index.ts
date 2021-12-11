import { CompletionItem, CompletionItemKind } from 'vscode-languageserver';
import { RevupCommand } from '../types';

const completionItems: CompletionItem[] = [
  {
    label: '-e 1',
    kind: CompletionItemKind.Text,
    data: RevupCommand.EPOCH,
    detail: 'Increases or displays the current epoch.',
  },
  {
    label: 'new-account -> account pubkey',
    kind: CompletionItemKind.Text,
    data: RevupCommand.NEW_ACCOUNT,
    detail: 'Creates a new account.',
  },
  {
    label: 'publish . -> package',
    kind: CompletionItemKind.Text,
    data: RevupCommand.PUBLISH,
    detail: 'Publishes the package.',
  },
  {
    label: 'reset',
    kind: CompletionItemKind.Text,
    data: RevupCommand.RESET,
    detail: 'Clears resim data and resets the environment.',
  },
  {
    label: 'set-default-account $account $pubkey',
    kind: CompletionItemKind.Text,
    data: RevupCommand.SET_ACCOUNT,
    detail: 'Sets the default account.',
  },
  {
    label: 'show $address',
    kind: CompletionItemKind.Text,
    data: RevupCommand.SHOW,
    detail: 'Shows info about an address.',
  },
  {
    label: 'show-configs',
    kind: CompletionItemKind.Text,
    data: RevupCommand.SHOW_CONFIGS,
    detail: 'Prints the default account, epoch and nonce.',
  },
];

export function handleCompletion(): CompletionItem[] {
  return completionItems;
}

export function handleCompletionResolve(item: CompletionItem): CompletionItem {
  return completionItems.find(
    (completionItem) => completionItem.data === item.data
  )!;
}
