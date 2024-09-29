'use client';
import { AIPlugin } from '@udecode/plate-ai/react';
import { type PlateEditor, ParagraphPlugin } from '@udecode/plate-core/react';
import { serializeMdNodes } from '@udecode/plate-markdown';
import { getEndPoint, setSelection, withMerging } from '@udecode/slate';
import { focusEditor } from '@udecode/slate-react';
import { insertEmptyElement } from '@udecode/slate-utils';
import { Path } from 'slate';

import {
  ACTION_SUGGESTION_CLOSE,
  ACTION_SUGGESTION_CONTINUE_WRITE,
  ACTION_SUGGESTION_DONE,
  ACTION_SUGGESTION_MAKE_LONGER,
  ACTION_SUGGESTION_TRY_AGAIN,
} from '@/registry/default/plate-ui/ai-actions';
import { streamInsertText } from '@/registry/default/plate-ui/stream';
import {
  getBlockSelectedEntries,
  getFirstBlockSelectedNode,
} from '@/registry/default/plate-ui/utils';

import type { ActionHandlerOptions } from './useActionHandler';

export const defaultSuggestionActionHandler = (
  editor: PlateEditor,
  { group: _, value }: ActionHandlerOptions
) => {
  switch (value) {
    case ACTION_SUGGESTION_CONTINUE_WRITE: {
      const entries = getBlockSelectedEntries(editor);
      const nodes = Array.from(entries, (entry) => entry[0]);

      if (!nodes) return;

      const md = serializeMdNodes(nodes as any);

      const curPath = editor.getOptions(AIPlugin).curNodeEntry?.[1];

      const newLine = Path.next(curPath!);
      withMerging(editor, () => {
        insertEmptyElement(editor, ParagraphPlugin.key, {
          at: newLine,
          select: true,
        });
      });

      setTimeout(() => {
        void streamInsertText(editor, {
          prompt: `continue write the following article in 3-5 sentences: ${md}`,
          startWritingPath: newLine,
        });
      }, 0);

      break;
    }
    case ACTION_SUGGESTION_MAKE_LONGER: {
      const first = getFirstBlockSelectedNode(editor);

      editor.setOptions(AIPlugin, { openEditorId: null });
      editor.undo();
      editor.history.redos.pop();

      setTimeout(() => {
        const lastGenerate = editor.getOptions(AIPlugin).lastGenerate;
        editor.setOptions(AIPlugin, { openEditorId: editor.id });
        void streamInsertText(editor, {
          prompt: `make longer with the following article ${lastGenerate}`,
          startWritingPath: first[1],
        });
      }, 0);

      break;
    }
    // BUG: first block focus
    case ACTION_SUGGESTION_DONE: {
      editor.getApi(AIPlugin).ai.hide();
      clearBlockSelected(editor);
      const curNodeEntry = editor.getOptions(AIPlugin).curNodeEntry;

      // set selection to last point
      if (curNodeEntry) {
        const endPoint = getEndPoint(editor, curNodeEntry[1]);
        setSelection(editor, { anchor: endPoint, focus: endPoint });
        setTimeout(() => {
          focusEditor(editor);
        }, 0);
      }

      break;
    }
    // TODO:
    case ACTION_SUGGESTION_CLOSE: {
      editor.getApi(AIPlugin).ai.hide();
      clearBlockSelected(editor);
      setTimeout(() => {
        // set selection to last point
        focusEditor(editor);
      }, 0);

      break;
    }
    case ACTION_SUGGESTION_TRY_AGAIN: {
      const first = getFirstBlockSelectedNode(editor);
      editor.undo();
      editor.history.redos.pop();

      setTimeout(() => {
        const lastPrompt = editor.getOptions(AIPlugin).lastPrompt;

        void streamInsertText(editor, {
          prompt: lastPrompt!,
          startWritingPath: (first as any)[1],
        });
      }, 0);

      break;
    }
  }
};

export const clearBlockSelected = (editor: PlateEditor) => {
  const { blockSelectionStore } = editor as any;

  if (blockSelectionStore) {
    blockSelectionStore.set.resetSelectedIds();
  }
};
