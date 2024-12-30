/** @jsx jsxt */

import { jsxt } from '@udecode/plate-test-utils';

import type { TEditor } from '../interfaces';

import { findNode } from './findNode';

jsxt;

describe('when the cursor is in a list item paragraph', () => {
  const input = (
    <editor>
      <hul>
        <hli>
          <hp>
            1
            <cursor />
          </hp>
        </hli>
      </hul>
    </editor>
  ) as any as TEditor;

  const _listNode = (
    <hul>
      <hli>
        <hp>
          1
          <cursor />
        </hp>
      </hli>
    </hul>
  ) as any;

  const _listItemNode = (
    <hli>
      <hp>
        1
        <cursor />
      </hp>
    </hli>
  ) as any;

  it('should be', () => {
    const res = findNode(input, { match: { type: 'p' } });

    expect(res).toEqual([{ children: [{ text: '1' }], type: 'p' }, [0, 0, 0]]);
  });
});

describe('when the cursor is not in a list item and a path is provided instead', () => {
  const input = (
    <editor>
      <hul>
        <hli>
          <hp>1</hp>
        </hli>
      </hul>
      <hp>
        2<cursor />
      </hp>
    </editor>
  ) as any as TEditor;

  const _listNode = (
    <hul>
      <hli>
        <hp>
          1
          <cursor />
        </hp>
      </hli>
    </hul>
  ) as any;

  const _listItemNode = (
    <hli>
      <hp>
        1
        <cursor />
      </hp>
    </hli>
  ) as any;

  it('should be', () => {
    const res = findNode(input, { at: [0, 0, 0, 0], match: { type: 'p' } });

    expect(res).toEqual([{ children: [{ text: '1' }], type: 'p' }, [0, 0, 0]]);
  });
});
