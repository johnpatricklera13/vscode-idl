import { Assembler } from '@idl/assembler';
import { LogManager } from '@idl/logger';
import { GetTokenNames } from '@idl/parser';
import { IDL_INDEX_OPTIONS, IDLIndex } from '@idl/parsing/index';
import { SyntaxProblems } from '@idl/parsing/problem-codes';

IDL_INDEX_OPTIONS.IS_TEST = true;

describe(`[auto generated] Verify adjusting indent adjusts spacing`, () => {
  it(`[auto generated] set indent to 3`, async () => {
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
      `pro mypro`,
      `  compile_opt idl2`,
      ``,
      `  ; double quote`,
      `  a = "something"`,
      ``,
      `  ; double quote with single quote`,
      `  a = "'"`,
      ``,
      `  ; escaped double quote`,
      `  a = "escaped""formatting"`,
      `end`,
    ];

    // extract tokens
    const tokenized = await index.getParsedProCode('my_file.pro', code, {
      postProcess: true,
    });

    // extract token names
    const tokenizedNames = GetTokenNames(tokenized);

    // format code
    const formatted = Assembler(tokenized, {
      formatter: 'fiddle',
      tabWidth: 3,
      style: { quotes: 'single' },
      autoFix: false,
    });

    // verify formatting
    if (formatted === undefined) {
      expect(formatted).toEqual(undefined);
    } else {
      // define expected problems
      const expectedFormatting: string[] = [
        `pro mypro`,
        `   compile_opt idl2`,
        ``,
        `   ; double quote`,
        `   a = 'something'`,
        ``,
        `   ; double quote with single quote`,
        `   a = "'"`,
        ``,
        `   ; escaped double quote`,
        `   a = 'escaped"formatting'`,
        `end`,
      ];

      // verify formatting
      expect(formatted.split(`\n`)).toEqual(expectedFormatting);

      // parse formatted code
      const reParsed = await index.getParsedProCode('my_file.pro', formatted, {
        postProcess: true,
      });

      // make sure the syntax trees are the same as they were before
      expect(GetTokenNames(reParsed)).toEqual(tokenizedNames);
    }

    // define expected problems
    const expectedProblems: SyntaxProblems = [];

    // verify problems
    expect(
      tokenized.parseProblems.concat(tokenized.postProcessProblems)
    ).toEqual(expectedProblems);
  });
});
