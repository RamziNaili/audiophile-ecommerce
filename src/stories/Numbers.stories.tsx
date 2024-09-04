import { ComponentProps } from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Numbers } from "../components/Numbers";

type StoryProps = ComponentProps<typeof Numbers>;

const meta: Meta<StoryProps> = {
  component: Numbers,
};

export default meta;

type Story = StoryObj<StoryProps>;

export const Default: Story = {
  args: {},
  render: ({ ...args }) => <Numbers {...args} />,
};
