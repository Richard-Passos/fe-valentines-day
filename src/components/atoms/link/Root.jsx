'use client';

import { Anchor } from '@mantine/core';
import { forwardRef } from 'react';

import { isExternalUrl } from '@/utils';

import Link from './Unstyled';

const AtomsLink = ({ href, ...props }, ref) => {
  const isExternal = isExternalUrl(href);

  const externalLinkProps = { rel: 'noreferrer', target: '_blank' };

  return (
    <Anchor
      component={Link}
      href={href}
      ref={ref}
      {...(isExternal && externalLinkProps)}
      {...props}
    />
  );
};

export default forwardRef(AtomsLink);
