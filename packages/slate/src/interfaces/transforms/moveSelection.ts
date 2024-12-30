import type { SelectionMoveOptions } from 'slate/dist/interfaces/transforms/selection';

import { Transforms } from 'slate';

import type { TEditor } from '../editor/TEditor';

export const moveSelection = (
  editor: TEditor,
  options?: SelectionMoveOptions
) => {
  Transforms.move(editor as any, options);
};
