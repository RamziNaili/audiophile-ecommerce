import { ComponentProps } from "react";
import { Input } from "../components/Input";
import { Meta, StoryObj } from "@storybook/react";

type StoryProps = ComponentProps<typeof Input> & {
  placeholder: string;
  label: string;
};

const meta: Meta<StoryProps> = {
  component: Input,
};

export default meta;

type Story = StoryObj<StoryProps>;

export const Default: Story = {
  args: {
    placeholder: "test",
    label: "test",
  },
  render: ({ placeholder, label, ...args }) => (
    <Input {...args} placeholder={placeholder} label={label} />
  ),
};
