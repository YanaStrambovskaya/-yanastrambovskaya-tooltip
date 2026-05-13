import type { Meta, StoryObj } from "@storybook/react-vite";
import { Tooltip } from "./Tooltip";

const meta: Meta<typeof Tooltip> = {
  title: "Components/Tooltip",
  component: Tooltip,
  argTypes: {
    children: {
      control: false,
      table: {
        disable: true,
      },
    },
    placement: {
      control: { type: "select" },
      options: ["top", "bottom", "left", "right"],
    },
    offset: {
      control: { type: "number" },
    },
    bgColor: {
      control: { type: "color" },
    },
    textColor: {
      control: { type: "color" },
    },
    maxWidth: {
      control: { type: "number" },
    },
    isControlledOpen: {
      control: { type: "boolean" },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Tooltip>;

export const Default: Story = {
  args: {
    placement: "top",
    offset: 10,
    bgColor: "#333333",
    textColor: "#ffffff",
    maxWidth: 150,
  },
  render: (args) => (
    <div style={{ padding: 120 }}>
      <Tooltip {...args}>
        <Tooltip.Trigger>
          <button className="button" type="button">
            Hover me
          </button>
        </Tooltip.Trigger>

        <Tooltip.Content>Tooltip text</Tooltip.Content>
      </Tooltip>
    </div>
  ),
};
