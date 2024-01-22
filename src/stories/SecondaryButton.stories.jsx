import SecondaryButton from "../components/SecondaryButton";

export default {
    title: 'Example/SecondaryButton',
    component: SecondaryButton,
    argTypes: { handleClick: { action: 'clicked' }},
}

const Template = (props) => <SecondaryButton {...props} />;

export const Primary = Template.bind({});

Primary.args = {
    primary: true,
    label: 'Secondary button',
    style: {},
    size: 'XL'
}