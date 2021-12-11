import {
  Hover,
  HoverParams,
  MarkupContent,
  MarkupKind,
  TextDocuments,
} from 'vscode-languageserver';
import { TextDocument } from 'vscode-languageserver-textdocument';
import { getCommand } from '../utils';
import { HoverItem, hoverItems } from './hover-items';

function buildMarkupContent(hoverItem: HoverItem): MarkupContent {
  const { value } = hoverItem;

  return {
    kind: MarkupKind.Markdown,
    value,
  };
}

export function handleHover(
  documents: TextDocuments<TextDocument>,
  params: HoverParams
): Hover | undefined {
  const document = documents.get(params.textDocument.uri);
  if (!document) {
    return;
  }

  // parse the command string from the hovered line
  const command = getCommand(document, params.position);

  // return the hover information for the command
  const hoverItem = hoverItems.find(({ commands }) =>
    commands.includes(command)
  );
  if (!hoverItem) {
    return;
  }

  const contents = buildMarkupContent(hoverItem);
  return {
    contents,
  };
}
