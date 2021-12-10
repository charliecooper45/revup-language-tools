import { TextDocument, Position } from 'vscode-languageserver-textdocument';

function getCurrentLine(document: TextDocument, line: number): string {
  return document.getText({
    start: { line, character: 0 },
    end: { line, character: Number.MAX_SAFE_INTEGER },
  });
}

export function getFirstWord(
  document: TextDocument,
  position: Position
): string {
  const currentLine = getCurrentLine(document, position.line);
  return currentLine.split(' ')[0]?.trim();
}
