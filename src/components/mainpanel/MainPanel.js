import './MainPanel.css';
import Calendar from './calendar/Calendar';
import RHSPanel from './rhspanel/RHSPanel';

function MainPanel() {
    return (
        <div id='main-panel'>
            <Calendar />
            <RHSPanel />
        </div>
    );
}

export default MainPanel;
