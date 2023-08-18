import { IParsed } from '@idl/parsing/syntax-tree';
import {
  SemanticTokenModifiers,
  SemanticTokens,
  SemanticTokensBuilder,
  SemanticTokenTypes,
} from 'vscode-languageserver';

import {
  SEMANTIC_TOKEN_MODIFIER_INDEX_LOOKUP,
  SEMANTIC_TOKEN_TYPE_INDEX_LOOKUP,
} from './semantic-tokens-config.interface';

/**
 * Returns semantic tokens from parsed code
 */
export function GetSemanticTokens(parsed: IParsed): SemanticTokens {
  /**
   * Combine all variable lookups
   */
  const allVars = Object.values(parsed.local.func)
    .concat(Object.values(parsed.local.pro))
    .concat(parsed.local.main);

  /**
   * Create a semantic token builder
   */
  const builder = new SemanticTokensBuilder();

  /**
   * track semantic tokens
   */
  let tokens: number[][] = [];

  // process all of our variables
  for (let i = 0; i < allVars.length; i++) {
    /**
     * Get these local variables
     */
    const local = Object.values(allVars[i]);

    // process all of our variables
    const vars = Object.values(local);
    for (let j = 0; j < vars.length; j++) {
      // check for static class
      if (vars[j].meta.isStaticClass) {
        /**
         * Get all positions that the variable is used
         */
        const positions = vars[j].meta.usage;

        // set highlighting at position
        for (let z = 0; z < positions.length; z++) {
          console.log(positions[z]);
          // we use -1 as a position when not in our notebook cell
          if (positions[z][0] === -1) {
            continue;
          }

          tokens.push([
            positions[z][0],
            positions[z][1],
            positions[z][2],
            SEMANTIC_TOKEN_TYPE_INDEX_LOOKUP[SemanticTokenTypes.class],
            SEMANTIC_TOKEN_MODIFIER_INDEX_LOOKUP[
              SemanticTokenModifiers.definition
            ],
          ]);
        }
      }
    }
  }

  /**
   * Sort semantic tokens by line and start position on that line
   *
   * If we dont do this, the highlighting doesnt show up right because of the
   * stupid and idiotic format for semantic tokens
   */
  tokens = tokens.sort(([a, b], [c, d]) => a - c || b - d);

  // add all tokens to the builder
  for (let i = 0; i < tokens.length; i++) {
    builder.push(
      tokens[i][0],
      tokens[i][1],
      tokens[i][2],
      tokens[i][3],
      tokens[i][4]
    );
  }

  return {
    // resultId: parsed.checksum,
    data: builder.build().data,
  };
}
