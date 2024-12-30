import type { TText } from '@udecode/slate';

import type {
  AnyPluginConfig,
  PluginConfig,
  TRenderLeafProps,
} from '../../lib';
import type { PlateRenderNodeProps } from './PlateRenderNodeProps';

/** Leaf props passed by Plate */
export type PlateRenderLeafProps<
  N extends TText = TText,
  C extends AnyPluginConfig = PluginConfig,
> = PlateRenderNodeProps<C> & TRenderLeafProps<N>;
