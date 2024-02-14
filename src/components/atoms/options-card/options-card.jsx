import './options-card.scss'
const OptionsCard = () => {
    return (
        <div className="options-container">
            <select className='filter-select'>
                {JSON.parse(sessionStorage.getItem('options')).sortConfigs.map(config => <option value={config.key}>{config.title}</option>)}
            </select>
            <div className="face-list">
                {JSON.parse(sessionStorage.getItem('options')).facetList.map(facelist => <div className='face-chips'>{facelist.label}</div>)}
            </div>
        </div>
    )
}
export default OptionsCard