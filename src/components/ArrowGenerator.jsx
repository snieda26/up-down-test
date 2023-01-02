import React, { useState, useEffect } from 'react';
import up from '../images/up.png'
import down from '../images/down.png'

import Select from 'react-select'

function ArrowDisplay() {
    const [arrow, setArrow] = useState('');
    const [timeframe, setTimeframe] = useState(600)
    const [cotir, setCotir] = useState("USD/EUR")

    const customStyles = {
        control: (base, state) => ({
            ...base,
            background: "#000E36",
            // Overwrittes the different states of border
            borderColor: "#fff",
            color: "blue",
            // Removes weird border around container
            // boxShadow: state.isFocused ? null : null,
            // "&:hover": {
            //     // Overwrittes the different states of border
            //     borderColor: state.isFocused ? "red" : "blue"
            // }


        })
    };

    const cotirs = [
        { value: '1', label: 'EUR/USD' },
        { value: '2', label: 'NZD/JPY' },
        { value: '3', label: 'AUDCAD' },
        { value: '4', label: 'GBP/USD' },
        { value: '5', label: 'USD/JPY' },
        { value: '6', label: 'CRIPTO IDX' },
    ]

    const timeframes = [
        { value: 600, label: '0 min' },
        { value: 60000, label: '1 min' },
        { value: 120000, label: '2 mins' },
        { value: 180000, label: '3 mins' },
        { value: 300000, label: '5 min' },
        { value: 600000, label: '10 mins' },
        { value: 1800000, label: '30 mins' },
        { value: 3600000, label: '60 mins' },
    ]

    useEffect(() => {
        const interval = setInterval(() => {
            const arrows = ['⬆', '⬇'];
            const randomIndex = Math.floor(Math.random() * arrows.length);
            console.log(randomIndex)
            setArrow(arrows[randomIndex]);
        }, timeframe);

        return () => clearInterval(interval);
    }, [timeframe]);

    return (
        <div className="arrows__container">
            {/* {arrow} */}

            <div style={{ marginBottom: '30px', width: "100px", marginLeft: "65px" }}>
                <Select components={{ DropdownIndicator: () => null, IndicatorSeparator: () => null }} options={cotirs} styles={{
                    control: (base) => ({
                        ...base, backgroundColor: '#000E36', border: "2x solid #fff !important",
                        boxShadow: "0 !important",
                        "&:hover": {
                            border: "2x solid #fff !important",
                        }
                    }),
                    singleValue: (base) => ({ ...base, color: 'white' })
                }} />
            </div>

            <div className="arrows">
                <img className={`up ${arrow === '⬆' ? 'active' : ''}`} src={up} alt="up" />
                <img className={`down ${arrow === '⬇' ? 'active' : ''}`} src={down} alt="down" />
            </div>


            <div style={{ marginTop: '50px', width: "100px", marginLeft: "65px" }}>
                <Select defaultValue="1min " onChange={(e) => setTimeframe(e.value)} components={{ DropdownIndicator: () => null, IndicatorSeparator: () => null }} options={timeframes} styles={{
                    control: (base) => ({
                        ...base, backgroundColor: '#000E36', border: "2x solid #fff !important",
                        boxShadow: "0 !important",
                        "&:hover": {
                            border: "2x solid #fff !important",
                        }
                    }),
                    singleValue: (base) => ({ ...base, color: 'white' })
                }} />
            </div>
            {/* {arrow === '⬆' ? <img src={up} /> : <img src={down} />} */}
        </div>
    );
}


export default ArrowDisplay;

