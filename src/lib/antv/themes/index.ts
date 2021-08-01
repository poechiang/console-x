import { registerTheme } from '@antv/g2';
import { darken } from './darken';
import { lighten } from './lighten';

registerTheme('darken', darken);
registerTheme('lighten', lighten);

export { darken, lighten };
