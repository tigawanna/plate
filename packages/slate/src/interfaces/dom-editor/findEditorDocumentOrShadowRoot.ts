import { DOMEditor } from 'slate-dom';

import type { TEditor } from '../editor';

export const findEditorDocumentOrShadowRoot = (editor: TEditor) => {
  try {
    return DOMEditor.findDocumentOrShadowRoot(editor as any);
  } catch (error) {}
};
