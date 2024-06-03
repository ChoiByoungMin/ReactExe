import React, {useEffect, useState} from 'react';
import { SERVER_URL } from './constants';

function CarList(){
    // 서버로부터 전체 car목록을 받아와서 저장
    const [cars, setCars] = useState([]);

    // 시작하면 1번 서버에 요청
    useEffect(() => {
        fetch(SERVER_URL + 'api/cars')
        .then(response => response.json())
        .then(data => setCars(data._embedded.cars))
        .catch(err=>console.error(err));
    }, []);

    return (
        <div>
            <table>
                <tbody>
                    {
                        cars.map((car, index) => 
                            <tr key={index}>
                                <td>{car.brand}</td>
                                <td>{car.model}</td>
                                <td>{car.color}</td>
                                <td>{car.year}</td>
                                <td>{car.price}</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}

export default CarList;