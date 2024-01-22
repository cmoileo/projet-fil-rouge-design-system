import  MainButton  from "../components/MainButton/MainButton";

export default {
    title: 'Example/MainButton',
    component: MainButton,
    argTypes: { handleClick: { action: 'clicked' }},
}

const Template = (props) => <MainButton {...props} />;

export const Primary = Template.bind({});

Primary.args = {
    primary: true,
    label: 'MainButton test',
    style: {},
    size: 'XL'
}