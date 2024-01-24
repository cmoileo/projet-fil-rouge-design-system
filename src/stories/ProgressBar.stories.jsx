import ProgressBar from "../components/ProgressBar/progressBar";

export default {
    title: 'Example/ProgressBar',
    component: ProgressBar,
    argTypes: { handleClick: { action: 'clicked' }},
}

const Template = (props) => <ProgressBar {...props} />;

export const Primary = Template.bind({});
Primary.args = {
    primary: true,
    pt: '50',
    style: {},
    size: 'XL'
}