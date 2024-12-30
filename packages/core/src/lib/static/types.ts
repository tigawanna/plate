import type { TElement, TText } from '@udecode/slate';
import type { AnyObject } from '@udecode/utils';

import type {
  AnyPluginConfig,
  PluginConfig,
  SlatePluginContext,
} from '../plugin';
import type { TRenderElementProps } from '../types/TRenderElementProps';
import type { TRenderLeafProps } from '../types/TRenderLeafProps';

export type SlateRenderElementProps<
  N extends TElement = TElement,
  C extends AnyPluginConfig = PluginConfig,
> = SlateRenderNodeProps<C> & TRenderElementProps<N>;

export type SlateRenderNodeProps<C extends AnyPluginConfig = PluginConfig> =
  SlatePluginContext<C> & {
    className?: string;

    /** @see {@link NodeProps} */
    nodeProps?: AnyObject;
  };

export type SlateRenderLeafProps<
  N extends TText = TText,
  C extends AnyPluginConfig = PluginConfig,
> = SlateRenderNodeProps<C> & TRenderLeafProps<N>;

export type BoxStaticProps = React.ComponentProps<'div'> & {
  as?: React.ElementType;
};

export type TextStaticProps = React.ComponentProps<'span'> & {
  as?: React.ElementType;
};
