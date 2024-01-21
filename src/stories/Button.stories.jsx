import  Button  from "../components/Button/Button";

export default {
    title: 'Example/Button',
    component: Button,
    argTypes: { handleClick: { action: 'clicked' }},
}

const Template = (props) => <Button {...props} />;

export const Primary = Template.bind({});

Primary.args = {
    primary: true,
    label: 'Button test',
    style: 'pointer desktop_radius_100 border_none blue_600_bg desktop_padding_100_top desktop_padding_100_bottom desktop_padding_400_left desktop_padding_400_right white paragraph_XL',
}

