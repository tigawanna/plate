import type { InsertNodesOptions, SlateEditor } from '@udecode/plate-common';

import {
  BaseImagePlugin,
  BaseMediaEmbedPlugin,
  insertImage,
  insertMediaEmbed,
} from '../..';

export interface InsertMediaOptions extends InsertNodesOptions {
  /**
   * Default onClick is getting the image url by calling this promise before
   * inserting the image.
   */
  getUrl?: () => Promise<string>;

  type?: string;
}

export const insertMedia = async <E extends SlateEditor>(
  editor: E,
  {
    getUrl,
    type = editor.getType(BaseImagePlugin),
    ...options
  }: InsertMediaOptions = {}
) => {
  const url = getUrl
    ? await getUrl()
    : window.prompt(
        `Enter the URL of the ${
          type === BaseImagePlugin.key
            ? BaseImagePlugin.key
            : BaseMediaEmbedPlugin.key
        }`
      );

  if (!url) return;
  if (type === editor.getType(BaseImagePlugin)) {
    insertImage(editor, url, options);
  } else {
    insertMediaEmbed(editor, { url }, options);
  }
};
