import type { JSHandle } from '@playwright/test';
import type { getNode, toDOMNode } from '@udecode/plate-common';
import type { PlateEditor } from '@udecode/plate-common/react';

export interface TPlatePlaywrightAdapter {
  EDITABLE_TO_EDITOR: WeakMap<HTMLElement, PlateEditor>;
  getNode: typeof getNode;
  toDOMNode: typeof toDOMNode;
}

export type EditorHandle<E extends PlateEditor = PlateEditor> = JSHandle<E>;
