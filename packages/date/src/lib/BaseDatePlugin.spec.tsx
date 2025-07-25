/** @jsx jsxt */

import type { PlateEditor } from 'platejs/react';

import { jsxt } from '@platejs/test-utils';

import { createPlateTestEditor } from '../../../core/src/react/__tests__/createPlateTestEditor';
import { BaseDatePlugin } from './BaseDatePlugin';

jsxt;

describe('On keydown', () => {
  it('inline date should not be selected on keydown arrow right', async () => {
    const input = (
      <editor>
        <hp>
          <htext>test</htext>
          <cursor />
          <hdate date="2024-01-01">
            <htext />
          </hdate>
          <htext>test</htext>
        </hp>
      </editor>
    ) as any as PlateEditor;

    const output = (
      <editor>
        <hp>
          <htext>test</htext>
          <hdate date="2024-01-01">
            <htext />
          </hdate>
          <cursor />
          <htext>test</htext>
        </hp>
      </editor>
    ) as any as PlateEditor;

    const [editor, { triggerKeyboardEvent }] = await createPlateTestEditor({
      plugins: [BaseDatePlugin],
      selection: input.selection,
      value: input.children,
    });

    await triggerKeyboardEvent('ArrowRight');

    expect(editor.selection).toEqual(output.selection);
  });

  it('inline date should not be selected on keydown arrow left', async () => {
    const input = (
      <editor>
        <hp>
          <htext>test</htext>
          <hdate date="2024-01-01">
            <htext />
          </hdate>
          <cursor />
          <htext>test</htext>
        </hp>
      </editor>
    ) as any as PlateEditor;

    const output = (
      <editor>
        <hp>
          <htext>test</htext>
          <cursor />
          <hdate date="2024-01-01">
            <htext />
          </hdate>
          <htext>test</htext>
        </hp>
      </editor>
    ) as any as PlateEditor;

    const [editor, { triggerKeyboardEvent }] = await createPlateTestEditor({
      plugins: [BaseDatePlugin],
      selection: input.selection,
      value: input.children,
    });

    await triggerKeyboardEvent('ArrowLeft');

    expect(editor.selection).toEqual(output.selection);
  });

  it('inline date should not be selected When two inline dates are adjacent', async () => {
    const input = (
      <editor>
        <hp>
          <htext>test</htext>
          <cursor />
          <hdate date="2024-01-01">
            <htext />
          </hdate>
          <htext />
          <hdate date="2024-01-01">
            <htext />
          </hdate>
          <htext>test</htext>
        </hp>
      </editor>
    ) as any as PlateEditor;

    const output = (
      <editor>
        <hp>
          <htext>test</htext>
          <hdate date="2024-01-01">
            <htext />
          </hdate>
          <cursor />
          <htext />
          <hdate date="2024-01-01">
            <htext />
          </hdate>
          <htext />
          <htext>test</htext>
        </hp>
      </editor>
    ) as any as PlateEditor;

    const [editor, { triggerKeyboardEvent }] = await createPlateTestEditor({
      plugins: [BaseDatePlugin],
      selection: input.selection,
      value: input.children,
    });

    await triggerKeyboardEvent('ArrowRight');

    expect(editor.selection).toEqual(output.selection);
  });
});
