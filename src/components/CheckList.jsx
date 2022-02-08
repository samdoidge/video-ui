import Checkbox from "./Checkbox";

const CheckList = ({ items, onChange }) => <div className="h-28 overflow-y-auto">
    {items.map(item => <Checkbox key={item.value} label={item.label} onChange={onChange} value={item.value} />)}
</div>

export default CheckList;
