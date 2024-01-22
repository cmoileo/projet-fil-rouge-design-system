import FilterPill from "../components/FilterPill/FilterPill";

export default {
    title: 'Example/FilterPill',
    component: FilterPill,
    argTypes: { handleClick: { action: 'clicked' }},
}

const Template = (props) => <FilterPill {...props} />;

export const Primary = Template.bind({});

Primary.args = {
    primary: true,
    label: 'Secondary button',
    style: {},
    size: 'XL'
}