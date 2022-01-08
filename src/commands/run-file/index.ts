import * as fs from 'fs';
import { Terminal, window } from 'vscode';
import { getWorkspacePath } from '../utils';

let terminal: Terminal;
const terminalName = 'revup';

export async function runFileHandler() {
  const workspacePath = getWorkspacePath();

  try {
    const revupFiles = fs
      .readdirSync(workspacePath)
      .filter((file) => file.endsWith('.rev'));
    if (revupFiles.length === 0) {
      window.showErrorMessage('No revup files found in workspace.');
      return;
    }

    const revupFile = await window.showQuickPick(revupFiles);
    if (!revupFile) {
      return;
    }

    if (!terminal) {
      terminal = window.createTerminal(terminalName);
    }
    terminal.show();
    terminal.sendText(`revup -r ${revupFile}`);
  } catch (err) {
    window.showErrorMessage('Error running revup file');
  }
}

// it's possible the user closes the terminal we're using
window.onDidCloseTerminal(function (closedTerminal) {
  if (closedTerminal.name === terminalName) {
    terminal = null;
  }
});
