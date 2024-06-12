import { useTranslations } from 'next-intl';
import { forwardRef } from 'react';

import { Text } from '@/components/atoms';
import { Action, Modal } from '@/components/molecules';

const OrganismsBlocksLetterModal = (
  { namespace, triggerProps = {}, contentProps = {}, ...props },
  ref
) => {
  const t = useTranslations(namespace);

  return (
    <Modal.Root
      centered
      ref={ref}
      size='lg'
      trigger={
        <Modal.Trigger
          asChild
          {...triggerProps}
        >
          <Action
            className='absolute'
            color='red'
            size='md'
          >
            {t('trigger.label')}
          </Action>
        </Modal.Trigger>
      }
      {...props}
    >
      <Modal.Content
        {...contentProps}
        closeProps={{
          'aria-label': t('close.label'),
          ...contentProps.closeProps
        }}
        title={t('title')}
      >
        {t.rich('description', {
          p: (chunks) => (
            <Text className='mt-sm text-lg first:mt-0 dark:font-light'>
              {chunks}
            </Text>
          ),
          strong: (chunks) => (
            <Text
              className='inline font-bold'
              component='strong'
            >
              {chunks}
            </Text>
          ),
          italic: (chunks) => (
            <Text
              className='inline italic'
              component='italic'
            >
              {chunks}
            </Text>
          )
        })}
      </Modal.Content>
    </Modal.Root>
  );
};

export default forwardRef(OrganismsBlocksLetterModal);
