const Checkbox = ({ label, isChecked, onChange, value }) => <div>
  <input className="h-4 w-4 focus:outline-none mt-1 float-left mr-2" type="checkbox" value={value} onChange={onChange} id={value} />
  <label className="cursor-pointer" htmlFor={value}>
    {label}
  </label>
</div>

export default Checkbox;
