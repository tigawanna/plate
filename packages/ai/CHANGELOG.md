# @platejs/ai

## 50.0.0

### Major Changes

- [#4587](https://github.com/udecode/plate/pull/4587) by [@felixfeng33](https://github.com/felixfeng33) – Added **AI Comment** functionality to provide AI-powered text feedback and suggestions.And upgrade to AI SDK 5.

  ### New Features:

  - **AI Comment Integration**: New utilities for AI-generated comments on selected text

    - `aiCommentToRange()` - Convert AI comments to text ranges with proper block mapping
    - `findTextRangeInBlock()` - Find text ranges within blocks for accurate comment positioning

  - **Enhanced AI Chat**: Improved chat functionality with comment support

    - New `toolName` property in chat helpers for tracking AI tools
    - Support for AI comment prompts in chat submissions
    - Added `mode`, `toolName` params to `submitAIChat`
    - New `toolName` plugin option.

  - **Text Matching**: Advanced text matching algorithms
    - Longest Common Subsequence (LCS) algorithm for fuzzy text matching
    - Support for multi-block text selection and comment ranges
    - Accurate text position tracking across block boundaries

  ### Example:

  ```typescript
  // Convert AI comment to text range
  const range = aiCommentToRange(editor, {
    blockId: 'block-1',
    content: 'Selected text',
    comment: 'Consider adding more detail here',
  });
  ```

  ### Breaking Changes:

  - `streamInsertChunk` has been moved from `@platejs/ai` to `@platejs/ai/react`.
  - `getEditorPrompt` has been moved from `@platejs/ai/react` to `@platejs/ai`.
  - `getMarkdown` has been moved from `@platejs/ai/react` to `@platejs/ai`.
  - `promptTemplate` and `systemTemplate` have been removed. They are now used directly in `api/ai/command/route.ts`.
  - The placeholder `{selection}` has been renamed to `{blockSelection}`.

## 49.2.15

### Patch Changes

- [#4577](https://github.com/udecode/plate/pull/4577) by [@felixfeng33](https://github.com/felixfeng33) – Fix `replaceSelectionAIChat` when selecting whole code block.

## 49.2.14

### Patch Changes

- [#4572](https://github.com/udecode/plate/pull/4572) by [@felixfeng33](https://github.com/felixfeng33) – Fix deserialize incomplete mdx tag with line breaks.

## 49.2.4

## 49.2.1

### Patch Changes

- [#4518](https://github.com/udecode/plate/pull/4518) by [@felixfeng33](https://github.com/felixfeng33) – ### AI Streaming Improvements

  **@platejs/ai:**

  - Fixed empty paragraph removal logic in `streamInsertChunk` to only remove true empty paragraphs (no text content)
  - Enhanced streaming support for tables and columns with proper chunk insertion
  - Fixed interface name typo: `SteamInsertChunkOptions` → `StreamInsertChunkOptions`
  - Improved markdown streaming with better handling of incomplete patterns

  **@platejs/layout:**

  - Added streaming support for columns in `withColumn`
  - Fixed column width calculations to handle edge cases

  **@platejs/markdown:**

  - Enhanced column deserialization with proper attribute parsing
  - Added support for column groups in markdown rules
  - Improved attribute parsing in `customMdxDeserialize`

## 49.1.12

## 49.1.11

## 49.1.10

## 49.1.9

## 49.1.8

## 49.1.6

## 49.0.17

## 49.0.15

## 49.0.14

## 49.0.12

### Patch Changes

- [#4416](https://github.com/udecode/plate/pull/4416) by [@zbeyens](https://github.com/zbeyens) –
  - Fixed AI streaming compatibility with markdown serialization changes. Streaming functions now explicitly set `preserveEmptyParagraphs: false` to prevent zero-width space interference during real-time streaming operations.

## 49.0.7

## 49.0.1

## 49.0.0

### Major Changes

- [#4327](https://github.com/udecode/plate/pull/4327) by [@zbeyens](https://github.com/zbeyens) –

  - Copilot API method changes:
    - `editor.api.copilot.accept` is now `editor.tf.copilot.accept`.
    - `editor.api.copilot.acceptNextWord` is now `editor.tf.copilot.acceptNextWord`.
    - `editor.api.copilot.reset` is now `editor.api.copilot.reject`.
  - Removed Default Shortcuts for Copilot:
    - Only `accept` (Tab) and `reject` (Escape) shortcuts are included by default for `CopilotPlugin`.
    - `acceptNextWord` and `triggerSuggestion` shortcuts must now be configured manually using the `shortcuts` field when configuring the plugin.
    - Example:
      ```tsx
      CopilotPlugin.configure({
        // ... other options
        shortcuts: {
          acceptNextWord: {
            keys: 'mod+right',
          },
          triggerSuggestion: {
            keys: 'ctrl+space',
          },
        },
      });
      ```

- [#4327](https://github.com/udecode/plate/pull/4327) by [@zbeyens](https://github.com/zbeyens) –
  - Renamed all `@udecode/plate-*` packages to `@platejs/*`. Replace `@udecode/plate-` with `@platejs/` in your code.

# @udecode/plate-ai

## 48.0.5

## 48.0.2

### Patch Changes

- [#4288](https://github.com/udecode/plate/pull/4288) by [@felixfeng33](https://github.com/felixfeng33) – Fix test case and missing import

## 48.0.0

## 47.4.2

### Patch Changes

- [#4275](https://github.com/udecode/plate/pull/4275) by [@felixfeng33](https://github.com/felixfeng33) – Fix streaming indent list.

## 47.4.1

### Patch Changes

- [#4269](https://github.com/udecode/plate/pull/4269) by [@felixfeng33](https://github.com/felixfeng33) – deprecate `experimental_lastTextId` use `api.aiChat.node({stream:true})` instead

## 47.3.1

### Patch Changes

- [#4267](https://github.com/udecode/plate/pull/4267) by [@zbeyens](https://github.com/zbeyens) – Update deps

## 47.2.6

## 47.2.5

### Patch Changes

- [#4252](https://github.com/udecode/plate/pull/4252) by [@felixfeng33](https://github.com/felixfeng33) – Add `experimental_lastTextId` to support ai indicator.

## 47.2.4

## 47.2.3

### Patch Changes

- [`f4996e3`](https://github.com/udecode/plate/commit/f4996e3c3e606cb1dc0f6f66dc54364330a1655a) by [@felixfeng33](https://github.com/felixfeng33) – Use `withScrolling` when streaming.

## 47.2.2

## 47.2.1

## 47.2.0

### Patch Changes

- [#4236](https://github.com/udecode/plate/pull/4236) by [@felixfeng33](https://github.com/felixfeng33) – use `withoutMdx` option for filtering out.

## 47.1.2

## 47.1.1

## 47.1.0

### Minor Changes

- [#4213](https://github.com/udecode/plate/pull/4213) by [@felixfeng33](https://github.com/felixfeng33) –

  - New `streamInsertChunk` to solve [#4040](https://github.com/udecode/plate/issues/4040) issue where streaming multiple paragraphs was not possible
  - New `aiChat.rf.removeAnchorAIChat` to remove the AI anchor element after streaming is complete without redo/undo issues

## 47.0.8

## 47.0.7

## 47.0.6

## 47.0.5

## 47.0.4

## 47.0.3

## 47.0.1

## 47.0.0

### Patch Changes

- [#4174](https://github.com/udecode/plate/pull/4174) by [@felixfeng33](https://github.com/felixfeng33) – Replace `serializeMdNodes` with `serializeMd(editor, { value: nodes })`

## 46.0.8

## 46.0.4

## 46.0.3

## 45.1.0

## 45.0.6

## 45.0.4

## 44.0.3

### Patch Changes

- [#4070](https://github.com/udecode/plate/pull/4070) by [@supersimple33](https://github.com/supersimple33) – fix: ai chat loading

## 44.0.0

## 43.0.5

### Patch Changes

- [#4038](https://github.com/udecode/plate/pull/4038) by [@yf-yang](https://github.com/yf-yang) – Update types and docs of `aboveNodes` and `belowNodes`

## 43.0.0

### Minor Changes

- [#4019](https://github.com/udecode/plate/pull/4019) by [@zbeyens](https://github.com/zbeyens) – Upgrade dependencies to latest

## 42.2.4

### Patch Changes

- [#4012](https://github.com/udecode/plate/pull/4012) by [@zbeyens](https://github.com/zbeyens) – Fix overrideEditor insertText missing options

## 42.2.3

## 42.2.0

### Patch Changes

- [#3989](https://github.com/udecode/plate/pull/3989) by [@zbeyens](https://github.com/zbeyens) – Fix replaceSelection, insertBelow

## 42.1.0

### Minor Changes

- [#3980](https://github.com/udecode/plate/pull/3980) by [@zbeyens](https://github.com/zbeyens) –

  - `useAIChatEditor`: add `editor` as first parameter:

  ```tsx
  const aiEditor = usePlateEditor({ plugins });
  useAIChatEditor(aiEditor, content);
  ```

## 42.0.3

### Patch Changes

- [#3952](https://github.com/udecode/plate/pull/3952) by [@zbeyens](https://github.com/zbeyens) – Breaking changes (experimental):

  - `AIChatPlugin`: Remove `createAIEditor` option
  - Fix `editor.tf.replaceSelection`:
    - Improved single block selection case with full range check
    - Fixed text properties inheritance when replacing selection
    - In block selection mode, select the replaced blocks
  - Add `useAIChatEditor`: Creates an editor, registers in the AI chat plugin, and deserializes the
    content into `editor.children` with block-level memoization.

## 42.0.2

### Patch Changes

- [#3955](https://github.com/udecode/plate/pull/3955) by [@doctormarty](https://github.com/doctormarty) – Resolved the “Cannot assign to read only property ‘0’” error by creating a new array for the fragment instead of mutating it.

## 42.0.0

### Major Changes

- [#3920](https://github.com/udecode/plate/pull/3920) by [@zbeyens](https://github.com/zbeyens) – AI plugins are now experimental: pin the dependency to avoid breaking changes. No breaking changes for this release.

## 41.0.14

## 41.0.8

## 41.0.6

## 41.0.1

### Patch Changes

- [#3874](https://github.com/udecode/plate/pull/3874) by [@felixfeng33](https://github.com/felixfeng33) – Fix editor type using `SlateEditor` instead of `PlateEditor`.

## 41.0.0

### Minor Changes

- [#3868](https://github.com/udecode/plate/pull/3868) by [@zbeyens](https://github.com/zbeyens) –
  - `api.aiChat.replaceSelection()` – new option `format: 'none' | 'single' | 'all'`
    - `'single'` (default):
      - Single block: Applies block's formatting to inserted content
      - Multiple blocks: Preserves source formatting
    - `'all'`: Forces first block's formatting on all inserted blocks
    - `'none'`: Preserves source formatting completely

## 40.3.2

### Patch Changes

- [#3848](https://github.com/udecode/plate/pull/3848) by [@wststone](https://github.com/wststone) – `submitAIChat`: add `ChatRequestOptions` options

## 40.2.9

## 40.2.2

## 40.1.0

## 40.0.5

## 40.0.4

## 40.0.0

### Major Changes

- [#3744](https://github.com/udecode/plate/pull/3744) by [@zbeyens](https://github.com/zbeyens) –
  - Remove `scrollContainerSelector` option in favor of `useEditorContainerRef`

### Patch Changes

- [#3744](https://github.com/udecode/plate/pull/3744) by [@zbeyens](https://github.com/zbeyens) –
  - `CopilotPlugin`: reset on mouse down
  - `CopilotPlugin`: auto trigger only on selection change

## 39.3.7

## 39.3.6

## 39.3.5

## 39.3.0

### Patch Changes

- [#3708](https://github.com/udecode/plate/pull/3708) by [@felixfeng33](https://github.com/felixfeng33) – Missing export

## 39.2.19

### Patch Changes

- [#3690](https://github.com/udecode/plate/pull/3690) by [@felixfeng33](https://github.com/felixfeng33) – Copilot: `getNextWord` when handle the case with mixed Chinese and English text.

## 39.2.16

### Patch Changes

- [#3681](https://github.com/udecode/plate/pull/3681) by [@felixfeng33](https://github.com/felixfeng33) – Copilot:
  - Fix the issue where `getNextWord` returns the entire sentence in Chinese/Korean/Japanese.
  - When entering two characters using IME, the suggestion text should not be lost.

## 39.2.13

### Patch Changes

- [#3469](https://github.com/udecode/plate/pull/3469) by [@felixfeng33](https://github.com/felixfeng33) – First stable version

## 39.2.12

## 39.2.10

### Patch Changes

- [`6477c29b42449bebc62225d91927642ac7062032`](https://github.com/udecode/plate/commit/6477c29b42449bebc62225d91927642ac7062032) by [@zbeyens](https://github.com/zbeyens) – fix

## 39.2.9

### Patch Changes

- [`19b3ac707586600c348314abb8c5c8f70c09b50e`](https://github.com/udecode/plate/commit/19b3ac707586600c348314abb8c5c8f70c09b50e) by [@zbeyens](https://github.com/zbeyens) – fix lib

## 39.2.8

### Patch Changes

- [`1953d4173ce99b111c707a4efbe53a73bd99c823`](https://github.com/udecode/plate/commit/1953d4173ce99b111c707a4efbe53a73bd99c823) by [@zbeyens](https://github.com/zbeyens) – fix

## 39.2.7

### Patch Changes

- [`6a2b3af07b2e14a7906e838dbd843fe3490fd82c`](https://github.com/udecode/plate/commit/6a2b3af07b2e14a7906e838dbd843fe3490fd82c) by [@zbeyens](https://github.com/zbeyens) – Fix undo after accept

## 39.2.6

### Patch Changes

- [`b5dfdc1c3f4cb760685b61e3925e82ff894cf4ab`](https://github.com/udecode/plate/commit/b5dfdc1c3f4cb760685b61e3925e82ff894cf4ab) by [@zbeyens](https://github.com/zbeyens) – fix accept + undo

## 39.2.5

### Patch Changes

- [`fbf96019bcec698be20f3ab00c645edcd7a2db15`](https://github.com/udecode/plate/commit/fbf96019bcec698be20f3ab00c645edcd7a2db15) by [@zbeyens](https://github.com/zbeyens) – Fix undo on submit and reload

## 39.2.3

## 39.2.2

### Patch Changes

- [`b6ab2cf4ef9ecad4ccc54b6626d571f8c51c6cff`](https://github.com/udecode/plate/commit/b6ab2cf4ef9ecad4ccc54b6626d571f8c51c6cff) by [@zbeyens](https://github.com/zbeyens) – Fix insert mode

## 39.2.1

### Patch Changes

- [`a17b84f1aa09ac5bcc019823b5d0dfea581ada57`](https://github.com/udecode/plate/commit/a17b84f1aa09ac5bcc019823b5d0dfea581ada57) by [@zbeyens](https://github.com/zbeyens) – Fix lodash imports

## 39.2.0

### Minor Changes

- [#3644](https://github.com/udecode/plate/pull/3644) by [@felixfeng33](https://github.com/felixfeng33) – Add `AIPlugin`, `CopilotPlugin`

## 39.1.5

## 39.1.4

### Patch Changes

- [#3616](https://github.com/udecode/plate/pull/3616) by [@zbeyens](https://github.com/zbeyens) – WIP

## 39.1.2

## 39.1.0

### Minor Changes

- [#3604](https://github.com/udecode/plate/pull/3604) by [@felixfeng33](https://github.com/felixfeng33) – Release package
