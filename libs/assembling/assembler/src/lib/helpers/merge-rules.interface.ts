import { TOKEN_NAMES } from '@idl/tokenizer';

/**
 * Tokens that we always have a space before
 */
export const ALWAYS_SPACE_BEFORE: { [key: string]: boolean } = {};
ALWAYS_SPACE_BEFORE[TOKEN_NAMES.COMMENT] = true;

// operators and other statements
ALWAYS_SPACE_BEFORE[TOKEN_NAMES.COLON] = true;
ALWAYS_SPACE_BEFORE[TOKEN_NAMES.OPERATOR_LOGICAL] = true;
ALWAYS_SPACE_BEFORE[TOKEN_NAMES.OPERATOR] = true;

/**
 * Tokens that we always have a space afterwards
 */
export const ALWAYS_SPACE_AFTER: { [key: string]: boolean } = {};

// routine definitions
ALWAYS_SPACE_AFTER[TOKEN_NAMES.ROUTINE_FUNCTION] = true;
ALWAYS_SPACE_AFTER[TOKEN_NAMES.ROUTINE_PROCEDURE] = true;

// control statements
ALWAYS_SPACE_AFTER[TOKEN_NAMES.CONTROL_COMPILE_OPT] = true;
ALWAYS_SPACE_AFTER[TOKEN_NAMES.CONTROL_COMMON] = true;
ALWAYS_SPACE_AFTER[TOKEN_NAMES.CONTROL_FORWARD_FUNCTION] = true;

// logical statements
ALWAYS_SPACE_AFTER[TOKEN_NAMES.LOGICAL_CASE_SWITCH_THEN] = true;
ALWAYS_SPACE_AFTER[TOKEN_NAMES.LOGICAL_EXPRESSION] = true;
ALWAYS_SPACE_AFTER[TOKEN_NAMES.LOGICAL_EXPRESSION_DEFAULT] = true;

// operators and other statements
ALWAYS_SPACE_AFTER[TOKEN_NAMES.COMMA] = true;
ALWAYS_SPACE_AFTER[TOKEN_NAMES.COLON] = true;
ALWAYS_SPACE_AFTER[TOKEN_NAMES.OPERATOR_LOGICAL] = true;
ALWAYS_SPACE_AFTER[TOKEN_NAMES.OPERATOR] = true;

// structures
ALWAYS_SPACE_AFTER[TOKEN_NAMES.STRUCTURE_PROPERTY] = true;

// if we have a docs example where we start with a prompt
ALWAYS_SPACE_AFTER[TOKEN_NAMES.PROMPT] = true;

/**
 * Tokens that we never put spaces after, higher priority compared to above
 */
export const NEVER_SPACE_AFTER: { [key: string]: boolean } = {};
NEVER_SPACE_AFTER[TOKEN_NAMES.PARENTHESES] = true;
NEVER_SPACE_AFTER[TOKEN_NAMES.BRACKET] = true;
NEVER_SPACE_AFTER[TOKEN_NAMES.CALL_FUNCTION] = true;
NEVER_SPACE_AFTER[TOKEN_NAMES.CALL_FUNCTION_METHOD] = true;
NEVER_SPACE_AFTER[TOKEN_NAMES.CALL_LAMBDA_FUNCTION] = true;
NEVER_SPACE_AFTER[TOKEN_NAMES.OPERATOR_POINTER] = true;
NEVER_SPACE_AFTER[TOKEN_NAMES.OPERATOR_INDEXING] = true;

/**
 * Special override tokens that will always have spaces that overrides any other logic
 */
export const FORCED_SPACES_AROUND: { [key: string]: boolean } = {};
FORCED_SPACES_AROUND[TOKEN_NAMES.LINE_CONTINUATION] = true;
FORCED_SPACES_AROUND[TOKEN_NAMES.LINE_CONTINUATION_BASIC] = true;
FORCED_SPACES_AROUND[TOKEN_NAMES.LINE_SEPARATION] = true;
FORCED_SPACES_AROUND[TOKEN_NAMES.LINE_SEPARATION_BASIC] = true;
FORCED_SPACES_AROUND[TOKEN_NAMES.ASSIGNMENT] = true;
FORCED_SPACES_AROUND[TOKEN_NAMES.LOGICAL_TERNARY_THEN] = true;
FORCED_SPACES_AROUND[TOKEN_NAMES.LOGICAL_TERNARY_ELSE] = true;

// block
FORCED_SPACES_AROUND[TOKEN_NAMES.BLOCK] = true;

// logic
FORCED_SPACES_AROUND[TOKEN_NAMES.LOGICAL_IF] = true;
FORCED_SPACES_AROUND[TOKEN_NAMES.LOGICAL_THEN] = true;
FORCED_SPACES_AROUND[TOKEN_NAMES.LOGICAL_ELSE] = true;
FORCED_SPACES_AROUND[TOKEN_NAMES.LOGICAL_CASE] = true;
FORCED_SPACES_AROUND[TOKEN_NAMES.LOGICAL_SWITCH] = true;
FORCED_SPACES_AROUND[TOKEN_NAMES.LOGICAL_OF] = true;

// loops
FORCED_SPACES_AROUND[TOKEN_NAMES.LOOP_FOR] = true;
FORCED_SPACES_AROUND[TOKEN_NAMES.LOOP_FOREACH] = true;
FORCED_SPACES_AROUND[TOKEN_NAMES.LOOP_WHILE] = true;
FORCED_SPACES_AROUND[TOKEN_NAMES.LOOP_DO] = true;
FORCED_SPACES_AROUND[TOKEN_NAMES.LOOP_REPEAT] = true;
FORCED_SPACES_AROUND[TOKEN_NAMES.LOOP_UNTIL] = true;

/**
 * Token names that should have the spacing of all direct children be preserved and not edited
 */
export const PRESERVE_SPACES: { [key: string]: boolean } = {};
PRESERVE_SPACES[TOKEN_NAMES.QUOTE_DOUBLE] = true;
PRESERVE_SPACES[TOKEN_NAMES.QUOTE_SINGLE] = true;
PRESERVE_SPACES[TOKEN_NAMES.STRING_TEMPLATE_STRING] = true;
PRESERVE_SPACES[TOKEN_NAMES.LINE_SEPARATION] = true;
PRESERVE_SPACES[TOKEN_NAMES.LINE_SEPARATION_BASIC] = true;
PRESERVE_SPACES[TOKEN_NAMES.STRING_TEMPLATE_EXPRESSION] = true;

/**
 * Tokens that we don't indent when we are inside of them
 */
export const DONT_INDENT_INSIDE_OF: { [key: string]: boolean } = {};
DONT_INDENT_INSIDE_OF[TOKEN_NAMES.STRING_TEMPLATE_LITERAL] = true;
