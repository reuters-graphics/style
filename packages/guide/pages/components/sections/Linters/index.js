import Content from 'Content/linters/page.md';
import { withHead } from 'Components/common/Head';
import withRenderers from '../../common/markdown/withRenderers';

const Linters = () => withRenderers(Content);

export default withHead(Linters, {
  title: 'style: Linters',
});
