import { LogManager } from '@idl/logger';
import { IDL_INDEX_OPTIONS, IDLIndex } from '@idl/parsing/index';
import { SyntaxProblems } from '@idl/parsing/problem-codes';

IDL_INDEX_OPTIONS.IS_TEST = true;

describe(`[auto generated] With lambda functions`, () => {
  it(`[auto generated] do not extract or check variables`, async () => {
    // create index
    const index = new IDLIndex(
      new LogManager({
        alert: () => {
          // do nothing
        },
      }),
      0
    );

    // test code to extract tokens from
    const code = [
      `; main level`,
      `compile_opt idl2`,
      `!null = lambda(n:n le 3 || min(n mod [2:fix(sqrt(n))]))`,
      `end`,
    ];

    // extract tokens
    const tokenized = await index.getParsedProCode('not-real', code, {
      postProcess: true,
    });

    // define expected tokens
    const expected: SyntaxProblems = [];

    // verify results
    expect(
      tokenized.parseProblems.concat(tokenized.postProcessProblems)
    ).toEqual(expected);
  });
});
