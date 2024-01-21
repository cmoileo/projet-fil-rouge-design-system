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
    style: 'desktop_radius_full border_none blue_900 desktop_padding_400'
}

