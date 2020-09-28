/************
 * GRAPHICS *
 ************/
function requireFiles(r) {
  r.keys().forEach(r);
}
// require images
requireFiles(require.context('./img/', true, /(svg|png|jpg)$/));

/*************
 * CSS RESET *
 *************/
import 'biscuit-components/_biscuit-reset.scss';

/**********
 * BLOCKS *
 **********/
/* To control the CSS cascade and inheritance while importing blocks into the project, all blocks divided into two main groups:

   1. **Parent blocks** (these blocks usually, although it's not obligatory, serve as parent containers for "Child blocks")
   2. **Child blocks** (usually, you don't put anything inside these blocks, except text. Being imported last, rules in these blocks may override rules declared earlier in "Parent blocks")

**Don't change the order of blocks!** Although, all blocks are self-sufficient and don't rely on cascade and inheritance, in some rare cases reordering of their imports may break minor details like link color or font-size, so to be safe try to maintain the current blocks' order. If you don't need a block in your bundle, comment it out, don't delete it from this file, you might need it in the future */

/***************** Redefinition level 'blocks.biscuit-lib' *******************/

// Parent blocks

import 'biscuit-components/text/_text.scss';

import 'biscuit-components/heading/_heading.scss';

import 'biscuit-components/list/_list.scss';

import 'biscuit-components/btn/_btn.scss';
import 'biscuit-components/btn/btn.js';

import 'biscuit-components/link/_link.scss';

import 'biscuit-components/pagination/_pagination.scss';

import 'biscuit-components/comment/_comment.scss';

import 'biscuit-components/grid-forms/_grid-forms.scss';

// Child blocks

import 'biscuit-components/img-raster/_img-raster.scss';

import 'biscuit-components/tooltip/_tooltip.scss';

import 'biscuit-components/icons/_icons.scss';
requireFiles(
  require.context('biscuit-components/icons/', true, /(svg|png|jpg)$/)
);

import 'biscuit-components/breadcrumb/_breadcrumb.scss';

import 'biscuit-components/badge/_badge.scss';

import 'biscuit-components/blockquote/_blockquote.scss';

import 'biscuit-components/code/_code.scss';

import 'biscuit-components/hr/_hr.scss';

import 'biscuit-components/label/_label.scss';

import 'biscuit-components/embed/_embed.scss';

import 'biscuit-components/table/_table.scss';

import 'biscuit-components/loader/_loader.scss';

import 'biscuit-components/control/_control.scss';
// delete this : requireFiles(require.context('.blocks.biscuit-libb/control', true, /(svg|png|jpg)$/));

import 'biscuit-components/form-group/_form-group.scss';

import 'biscuit-components/nav/_nav.scss';
import 'biscuit-components/nav/nav.js';

import 'biscuit-components/nav-fixed/_nav-fixed.scss';

import 'biscuit-components/select/_select.scss';

import 'biscuit-components/accordion/_accordion.scss';
import 'biscuit-components/accordion/accordion.js';

/***************** Redefinition level 'blocks' *******************/

// Project-specific blocks

import './blocks/page/_page.scss';
import './blocks/page/page.js';

import './blocks/grid-page-layout1/_grid-page-layout1.scss';

import './blocks/grid-page-layout2/_grid-page-layout2.scss';

import './blocks/img-svg/_img-svg.scss';

import './blocks/grid-gallery/_grid-gallery.scss';

import './blocks/grid-auto-col/_grid-auto-col.scss';

import './blocks/main/_main.scss';

import './blocks/header/_header.scss';

import './blocks/footer/_footer.scss';

import './blocks/fullscreen-bg/_fullscreen-bg.scss';

// import 'biscuit-blocks-lib/btn/_btn.scss';
