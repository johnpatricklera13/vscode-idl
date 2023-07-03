import { Parser } from '@idl/parser';
import { SyntaxProblems } from '@idl/parsing/problem-codes';
import { SyntaxTree } from '@idl/parsing/syntax-tree';

describe(`[auto generated] Correctly identify pointer dereferencing`, () => {
  it(`[auto generated] after structure properties`, () => {
    // test code to extract tokens from
    const code = [`a = {prop: *ptr}`];

    // extract tokens
    const tokenized = Parser(code);

    // define expected syntax tree
    const expectedTree: SyntaxTree = [
      {
        type: '1',
        name: '85',
        pos: [0, 0, 1],
        match: ['a'],
        idx: 0,
        scope: [],
        parseProblems: [],
      },
      {
        type: '0',
        name: '3',
        pos: [0, 2, 1],
        match: ['='],
        idx: 1,
        scope: [],
        parseProblems: [],
        end: { pos: [0, 16, 0], match: [''] },
        kids: [
          {
            type: '0',
            name: '77',
            pos: [0, 4, 1],
            match: ['{'],
            idx: 0,
            scope: ['3'],
            parseProblems: [],
            end: { pos: [0, 15, 1], match: ['}'] },
            kids: [
              {
                type: '0',
                name: '81',
                pos: [0, 5, 5],
                match: ['prop:', 'prop'],
                idx: 0,
                scope: ['3', '77'],
                parseProblems: [],
                end: { pos: [0, 15, 0], match: [''] },
                kids: [
                  {
                    type: '0',
                    name: '63',
                    pos: [0, 11, 1],
                    match: ['*'],
                    idx: 0,
                    scope: ['3', '77', '81'],
                    parseProblems: [],
                    end: { pos: [0, 15, 0], match: [''] },
                    kids: [
                      {
                        type: '1',
                        name: '85',
                        pos: [0, 12, 3],
                        match: ['ptr'],
                        idx: 0,
                        scope: ['3', '77', '81', '63'],
                        parseProblems: [],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ];

    // verify results
    expect(tokenized.tree).toEqual(expectedTree);

    // define expected problems
    const expectedProblems: SyntaxProblems = [];

    // verify results
    expect(
      tokenized.parseProblems.concat(tokenized.postProcessProblems)
    ).toEqual(expectedProblems);
  });

  it(`[auto generated] after indexed structure properties`, () => {
    // test code to extract tokens from
    const code = [`a = var.(*thing)`];

    // extract tokens
    const tokenized = Parser(code);

    // define expected syntax tree
    const expectedTree: SyntaxTree = [
      {
        type: '1',
        name: '85',
        pos: [0, 0, 1],
        match: ['a'],
        idx: 0,
        scope: [],
        parseProblems: [],
      },
      {
        type: '0',
        name: '3',
        pos: [0, 2, 1],
        match: ['='],
        idx: 1,
        scope: [],
        parseProblems: [],
        end: { pos: [0, 16, 0], match: [''] },
        kids: [
          {
            type: '1',
            name: '85',
            pos: [0, 4, 3],
            match: ['var'],
            idx: 0,
            scope: ['3'],
            parseProblems: [],
          },
          {
            type: '0',
            name: '78',
            pos: [0, 7, 2],
            match: ['.('],
            idx: 1,
            scope: ['3'],
            parseProblems: [],
            end: { pos: [0, 15, 1], match: [')'] },
            kids: [
              {
                type: '0',
                name: '63',
                pos: [0, 9, 1],
                match: ['*'],
                idx: 0,
                scope: ['3', '78'],
                parseProblems: [],
                end: { pos: [0, 15, 0], match: [''] },
                kids: [
                  {
                    type: '1',
                    name: '85',
                    pos: [0, 10, 5],
                    match: ['thing'],
                    idx: 0,
                    scope: ['3', '78', '63'],
                    parseProblems: [],
                  },
                ],
              },
            ],
          },
        ],
      },
    ];

    // verify results
    expect(tokenized.tree).toEqual(expectedTree);

    // define expected problems
    const expectedProblems: SyntaxProblems = [];

    // verify results
    expect(
      tokenized.parseProblems.concat(tokenized.postProcessProblems)
    ).toEqual(expectedProblems);
  });
});