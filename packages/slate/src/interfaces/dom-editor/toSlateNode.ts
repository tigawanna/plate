import type { DOMNode } from 'slate-dom';

import { DOMEditor } from 'slate-dom';

import type { TEditor } from '../editor';
import type { TNode } from '../node';

export const toSlateNode = (editor: TEditor, domNode: DOMNode) => {
  try {
    return DOMEditor.toSlateNode(editor as any, domNode) as TNode;
  } catch (error) {}
};
