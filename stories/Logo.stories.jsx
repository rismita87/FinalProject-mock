import React from "react";
import { Logo } from "./Logo";

export default {
  title: "Logo",
  component: Logo,
};
const Template = (args) => <Logo {...args} />;
export const Large = Template.bind({});
Large.args = {
  size: "large",
  label1: "KAOSPILOT",
  label2: "toolbox",
};
export const Medium = Template.bind({});
Medium.args = {
  size: "medium",
  label1: "KAOSPILOT",
  label2: "toolbox",
};

export const Small = Template.bind({});
Small.args = {
  size: "small",
  label1: "KAOSPILOT",
  label2: "toolbox",
};
