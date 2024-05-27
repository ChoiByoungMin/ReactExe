import React, {useState} from 'react';
import TemperatureInput from './TemperatureInput';

function Calculator(props){

    // 자식들이 공유하는 상태 변수
    const [temperature, setTemperature] = useState('');     // 온도
    const [scale, setScale] = useState('c');                // 섭씨(c)/화씨(f)

    const toCelsius = (fah) => ((fah - 32) * 5) / 9;        // 화씨 to 섭씨
    const toFahrenheit = (cel) => (cel * 9) / 5 + 32;       // 섭씨 to 화씨

    // temp : 온도
    // convert : 변환함수
    const tryConvert = (temp, convert) => {
        // 실수로 변환
        const input = parseFloat(temp);
        if(Number.isNaN(input))
            return "";
        // 변환작업
        const output = convert(input);
        // 반올림
        const rounded = Math.round(output * 1000) / 1000;
        // 문자열로 변환
        return rounded.toString();
    }

    const handleCelsiusChange = (temp) => {
        setTemperature(temp);
        setScale("c");
    }
    const handleFahrenheitChange = (temp) => {
        setTemperature(temp);
        setScale("f");
    }

    // scale은 현재 입력된 값이 f냐 c냐
    const celsius = scale==="f" ? tryConvert(temperature, toCelsius) : temperature;
    const fahrenheit = scale==="c" ? tryConvert(temperature, toFahrenheit) : temperature;

    return (
        <div>
            <TemperatureInput 
                scale="c"
                temperature={celsius}
                onTemperatureChange={handleCelsiusChange}
            />
            <TemperatureInput            
                scale="f"
                temperature={fahrenheit}
                onTemperatureChange={handleFahrenheitChange}
            />
        </div>
    );
}

export default Calculator;