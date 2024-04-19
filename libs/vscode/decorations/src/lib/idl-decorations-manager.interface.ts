import { IDLCodeCoverage } from '@idl/idl';
import { GetExtensionPath } from '@idl/shared';
import * as vscode from 'vscode';

/** When resetting decorations, what do we reset for? */
export type IDLDecorationsResetFlag = 'all' | 'pro' | 'notebook';

/**
 * VSCode debug diagnostic collection
 */
export const DEBUG_DIAGNOSTIC_COLLECTION =
  vscode.languages.createDiagnosticCollection('idl-debug');

/**
 * Data structure for file decorations
 */
export interface IDecorationLookup {
  [key: string]: vscode.DecorationOptions[];
}

/**
 * Data structure for code coverage
 */
export interface ICodeCoverageLookup {
  [key: string]: IDLCodeCoverage;
}

/**
 * Data structure for stack trace
 */
export interface IStackTraceLookup {
  [key: string]: number[];
}

/**
 * Decorate stack trace lines
 *
 * From: https://github.com/ryanluker/vscode-coverage-gutters/blob/master/package.json#L47-L76
 */
export const STACK_TRACE_DECORATION =
  vscode.window.createTextEditorDecorationType({
    backgroundColor: 'rgba(163, 149, 0, 0.4)',
    gutterIconPath: GetExtensionPath(
      'extension/images/dark/debug-stackframe.svg'
    ),
    light: {
      backgroundColor: 'rgba(255, 235, 0, 0.2)',
      gutterIconPath: GetExtensionPath(
        'extension/images/light/debug-stackframe.svg'
      ),
    },
  });

/**
 * Decorate problem lines
 *
 * From: https://github.com/ryanluker/vscode-coverage-gutters/blob/master/package.json#L47-L76
 */
export const SYNTAX_ERROR_DECORATION =
  vscode.window.createTextEditorDecorationType({
    backgroundColor: 'rgba(163, 0, 0, 0.4)',
    light: {
      backgroundColor: 'rgba(255, 0, 0, 0.2)',
    },
  });

/**
 * Code coverage decorations for lines that have been executed and lines that have not
 *
 * From: https://github.com/ryanluker/vscode-coverage-gutters/blob/master/package.json#L47-L76
 */
export const CODE_COVERAGE_DECORATIONS = {
  NOT_EXECUTED: vscode.window.createTextEditorDecorationType({
    backgroundColor: 'rgba(163, 0, 0, 0.4)',
    light: {
      backgroundColor: 'rgba(255, 0, 0, 0.2)',
    },
  }),
  EXECUTED: vscode.window.createTextEditorDecorationType({
    backgroundColor: 'rgba(0, 122, 30, 0.4)',
    light: {
      backgroundColor: 'rgba(255, 235, 0, 0.2)',
    },
  }),
};
