import { useTranslations } from 'next-intl';
import { forwardRef } from 'react';

import { Icon } from '@/components/atoms';
import { Action } from '@/components/molecules';

const OrganismsLogo = (props, ref) => {
  const t = useTranslations('personalInfo.logo');

  return (
    <Action
      aria-label={t('label')}
      href='/'
      isIconOnly
      ref={ref}
      size='xl'
      variant='transparent'
      {...props}
    >
      <Icon
        className='size-9/10'
        src={t('icon')}
      />
    </Action>
  );
};

export default forwardRef(OrganismsLogo);
