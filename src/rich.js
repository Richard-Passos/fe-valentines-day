import { Link, Text } from '@/components/atoms';
import { List } from '@/components/molecules';

const rich = {
  p: (chunks) => <Text>{chunks}</Text>,
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
  ),
  a: (chunks) => <Link>{chunks}</Link>,
  ul: (chunks) => (
    <List.Root
      className='my-sm pl-md'
      type='unordered'
    >
      {chunks}
    </List.Root>
  ),
  ol: (chunks) => (
    <List.Root
      className='my-sm pl-md'
      type='ordered'
    >
      {chunks}
    </List.Root>
  ),
  li: (chunks) => <List.Item>{chunks}</List.Item>
};

export default rich;
export { rich };
