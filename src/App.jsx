import React from 'react'
import Pestañas from './components/Pestañas'
import './App.css';

const App = () => {
    const Tabs = [
        { titulo: "Tab 1", contenido: "Tab 1 content is showing here" },
        { titulo: "Tab 2", contenido: "Tab 2 content is showing here" },
        { titulo: "Tab 3", contenido: "Tab 3 content is showing here" }
    ];

    return (
        <Pestañas Tabs={Tabs} />
    );
}

export default App;