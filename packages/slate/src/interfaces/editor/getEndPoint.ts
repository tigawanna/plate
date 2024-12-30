import { Editor } from 'slate';

import type { At } from '../../types/At';
import type { TEditor } from './TEditor';

import { getAt } from '../../utils/getAt';

export const getEndPoint = (editor: TEditor, at: At) => {
  try {
    return Editor.end(editor as any, getAt(editor, at)!);
  } catch {}
};
