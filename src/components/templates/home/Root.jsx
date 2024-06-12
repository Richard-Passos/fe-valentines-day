import { useTranslations } from 'next-intl';

import Blocks from '@/components/organisms/blocks';
import { normCompName, translationKeys } from '@/utils';

const TemplatesHome = ({ namespace }) => {
  const t = useTranslations(namespace);

  return translationKeys(t, 'blocks').map((key) => {
    const Block = Blocks[normCompName(key)];

    if (!Block) return null;

    return (
      <Block
        key={key}
        namespace={`${namespace}.blocks.${key}`}
      />
    );
  });
};

export default TemplatesHome;
