import Content from 'Content/fonts/page.md';
import { withHead } from 'Components/common/Head';
import withRenderers from '../../common/markdown/withRenderers';

const Fonts = () => withRenderers(Content);

export default withHead(Fonts, {
  title: 'style: Fonts',
});
