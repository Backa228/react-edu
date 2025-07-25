import { use, useId, useState } from 'react'

const LangSwitcher = ({value, onSelect}) => {
    const selectId = useId();
  
    return (
      <div>
        <label htmlFor={selectId}>Choose language</label>
        <select id={selectId} value={value} onChange={(evt) => onSelect(evt.target.value)}>
          <option value="en">English</option>
          <option value="ua">Ukrainian</option>
          <option value="pl">Polish</option>
        </select>
      </div>
    );
};
  
export default LangSwitcher;