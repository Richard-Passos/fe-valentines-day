import { useTranslations } from 'next-intl';
import { forwardRef } from 'react';

import { Text, Title } from '@/components/atoms';
import { HeartIcon } from '@/components/atoms/icon/icons';
import { Action } from '@/components/molecules';
import { cn } from '@/utils';

import Modal from './Modal';

const HEARTS_AMOUNT = 5;

const OrganismsBlocksLetter = ({ namespace, className, ...props }, ref) => {
  const t = useTranslations(namespace);

  return (
    <section
      className={cn(
        'relative flex min-h-svh w-full items-center justify-center xl:min-h-[min(100svh,theme(minHeight.bounds))]',
        className
      )}
      ref={ref}
      {...props}
    >
      <div className='w-9/10 max-w-80'>
        <div className='relative flex aspect-[3/2] w-full animate-[bounce_3s_linear_infinite] items-center justify-center rounded border-4 border-solid border-primary-filled bg-primary-filled-hover'>
          <section className='z-10 min-h-9/10 w-full animate-[bounce_3s_linear_infinite] rounded-md bg-red-1 p-md text-black shadow'>
            <div className='flex flex-col items-center justify-center border-2 border-dotted border-primary-filled-hover p-sm'>
              <Title
                className='text-center text-2xl font-semibold'
                order={1}
              >
                {t('title')}
              </Title>

              <Title
                className='text-center text-[2.5rem]/none font-semibold -tracking-wider text-red-filled'
                component={Text}
              >
                {t('name')}
              </Title>

              <HeartIcon className='mt-xs size-16 text-red-filled' />
            </div>
          </section>

          <div className='absolute z-10 flex w-full justify-around'>
            {[...Array(HEARTS_AMOUNT)].map((_, i) => (
              <HeartIcon
                className='inline-block size-8 animate-heart text-red-filled'
                key={i}
                style={{
                  '--idx': i,
                  animationDuration: `${Math.random() * (500 - 2500) + 2500}ms`
                }}
              />
            ))}
          </div>

          <span className='absolute aspect-square w-[70%] -translate-y-[47%] -rotate-45 rounded-tr-xl bg-primary-filled-hover' />

          <span className='absolute inset-0 z-10 translate-x-px bg-primary-filled-hover [clip-path:polygon(100%_0,100%_100%,0%_100%)]' />

          <span className='absolute inset-0 z-10 -translate-x-px bg-primary-filled [clip-path:polygon(0_0,100%_100%,0%_100%)]' />
        </div>

        <span className='mt-lg block aspect-[1/.1] w-full animate-scale rounded-[100%] bg-black opacity-25' />
      </div>

      <span className='absolute inset-y-0 -z-50 w-screen bg-red-2' />

      <Modal namespace={`${namespace}.modal`} />
    </section>
  );
};

export default forwardRef(OrganismsBlocksLetter);
