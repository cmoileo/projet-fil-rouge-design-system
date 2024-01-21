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
    radius: '5px',
}

