import React, { useState } from 'react'

const Pestañas = (props) => {
    const { Tabs } = props;
    const [tab, setTab] = useState(0);



    return (
        <div className="container">
                <div className="tab">
                    <ul>
                        {
                            Tabs.map((item, index) => {
                                return <li onClick={() => setTab(index)} key={index}><h2>{item.titulo}</h2></li>;
                            })
                        }
                    </ul>
                    <div className='content'>
                        <p>{Tabs[tab].contenido}</p>
                    </div>
                </div>
        </div>
    )
}

export default Pestañas;