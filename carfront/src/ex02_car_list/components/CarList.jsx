import React, {useEffect, useState} from 'react';

function CarList(){
    // 서버로부터 전체 car목록을 받아와서 저장
    const [cars, setCars] = useState([]);

    // 시작하면 1번 서버에 요청
    useEffect(() => {
        fetch('http://localhost:12000/api/cars')
        .then(response => response.json())
        .then(data => setCars(data._embedded.cars))
        .catch(err=>console.error(err));
    }, []);

    /*
    useEffect(() => {
        fetch('http://localhost:12000/api/cars')
        .then(response => {
            // 헤더를 포함한 전체 정보
            console.log(response);
            return response.json();     // json만 다음으로 넘겨줌
        })
        .then(data => {
            // json object가 넘어왔으니까 계층대로 원하는 데이터 추출
            console.log(data);
            return setCars(data._embedded.cars)
        })
        .catch(err => console.error(err));
    }, []);
    */

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