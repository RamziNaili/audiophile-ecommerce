import { ComponentProps } from 'react';
import { Button } from '../components/Button';
import { Meta, StoryObj } from '@storybook/react';

type StoryProps = ComponentProps<typeof Button> & {
  buttonText: string;
};

const meta: Meta<StoryProps> = {
  component: Button,
};

export default meta;

type Story = StoryObj<StoryProps>;

export const Full: Story = {
  args: {
    variant: 'full',
    buttonText: 'test',
  },
  render: ({ buttonText, ...args }) => <Button {...args}>{buttonText}</Button>,
};

export const Outline: Story = {
  args: {
    variant: 'outline',
    buttonText: 'test',
  },
  render: ({ buttonText, ...args }) => <Button {...args}>{buttonText}</Button>,
};

export const Ghost: Story = {
  args: {
    variant: 'ghost',
    buttonText: 'test',
  },
  render: ({ buttonText, ...args }) => <Button {...args}>{buttonText}</Button>,
};
