import {
  IDL_TYPE_LOOKUP,
  IDLTypeHelper,
  SerializeIDLType,
} from '@idl/types/core';

import {
  TASK_REGEX,
  TaskFunctionName,
} from '../../../helpers/task-function-name';
import { MarkdownInfo, RoutineMarkdown } from '../docs-to-markdown.interface';

/**
 * Gets syntax signature for a routine
 */
export function CreateRoutineSyntax(
  info: MarkdownInfo<RoutineMarkdown>
): string {
  /** Metadata for routine */
  const meta = info.meta;

  // initialize the call for syntax
  const syntax: string[] = [];

  /** Check if we have a function or not */
  const isFunction = 'returns' in meta;

  // split the name of our routine
  const splitName = info.name.split('::');

  // check if we are a function or not
  if (isFunction) {
    if (info.name.includes('::')) {
      syntax.push(`result = ${splitName[0]}.${splitName[1]}(`);
    } else {
      if (TASK_REGEX.test(info.name)) {
        syntax.push(`result = ${TaskFunctionName(info.name, "'")}`);
      } else {
        syntax.push(`result = ${info.name}(`);
      }
    }
  } else {
    if (info.name.includes('::')) {
      syntax.push(`${splitName[0]}.${splitName[1]}`);
    } else {
      syntax.push(info.name);
    }
  }

  // process args
  const argNames = Object.keys(meta.args);
  for (let i = 0; i < argNames.length; i++) {
    // add comma
    if (i === 0 && !isFunction) {
      syntax.push(',');
    } else {
      if (i > 0) {
        syntax.push(',');
      }
    }

    // get arg
    const arg = meta.args[argNames[i]];

    // skip if fake
    if (!arg.code) {
      continue;
    }

    // check how to display (depends on if required)
    if (arg.req) {
      syntax.push(` ${arg.display}`);
    } else {
      syntax.push(` [ ${arg.display} ]`);
    }
  }

  // process args
  const kwNames = Object.keys(meta.kws);
  for (let i = 0; i < kwNames.length; i++) {
    if (i === 0) {
      if (!isFunction || argNames.length > 0) {
        syntax.push(', $\n');
      }
    } else {
      syntax.push(`, $\n`);
    }

    // get keyword
    const kw = meta.kws[kwNames[i]];

    // skip if fake
    if (!kw.code) {
      continue;
    }

    // make our keyword syntax - special case if boolean/binary
    let kwSyntax: string;
    if (IDLTypeHelper.isType(kw?.type || [], IDL_TYPE_LOOKUP.BOOLEAN)) {
      kwSyntax = `/${kw.display}`;
    } else {
      kwSyntax = `${kw.display} = ${SerializeIDLType(kw?.type)}`;
    }

    // check how to display (depends on if required)
    if (kw.req) {
      syntax.push(` ${kwSyntax}`);
    } else {
      syntax.push(` [ ${kwSyntax} ]`);
    }
  }
  // check if we need to close our function syntax call
  if (isFunction && !TASK_REGEX.test(info.name)) {
    syntax.push(`)`);
  }

  return syntax.join('');
}
