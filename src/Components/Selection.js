import FighterList from './FighterList'
import {useState} from 'react'
import '../Styles/Selection.css'

const Selection = () => {
    const [selectOption, setSelectOption] = useState("")

    const handleChange = (e) => {
        setSelectOption(e.target.value)
        
      }

    return (
        <div className="top10">
          <div className="selectBar">
            <label className="labelBar" name="weight-class">Select a Weightclass to see top 10 in that divison</label>
          <select value={selectOption} onChange={handleChange}>
            <option>Select Weightclass</option>
            <option value="Flyweight">Flyweight</option>
            <option value="Bantamweight">Bantamweight</option>
            <option value="Featherweight">Featherweight</option>
            <option value="Lightweight">Lightweight</option>
            <option value="Welterweight">Welterweight</option>
            <option value="Middleweight">Middleweight</option>
            <option value="Light Heavyweight">Light Heavyweight</option>
            <option value="Heavyweight">Heavyweight</option>
          </select>
          </div>
          <div className="fighterList">
          <FighterList weightclass={selectOption} />
          </div>
        </div>
    )
}


export default Selection