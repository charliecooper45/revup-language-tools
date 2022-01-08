import { workspace } from 'vscode';

export function getWorkspacePath(): string {
  return workspace.workspaceFolders[0].uri.fsPath;
}
