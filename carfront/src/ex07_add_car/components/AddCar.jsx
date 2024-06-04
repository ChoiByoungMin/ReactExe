import React, {useState} from "react";
import { Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material";
import { Button, TextField, Stack} from '@mui/material';

function AddCar(props){
    const [open, setOpen] = useState(false);    //추가 대화상자 열림 여부
    const [car, setCar] = useState({            //자동차 정보 입력
        brand:'',
        model:'',
        color:'',
        year:'',
        price:''
    });
    // 입력 모달창 열림
    const handleClickOpen = () => {
        setOpen(true);
    };
    // 입력 모달창 닫힘
    const handleClose = () => {
        setOpen(false);
    };
    // 모달창 내에서 자동차 정보 입력시, 해당 필드 정보 갱신
    const handleChange = (event) => {
        setCar({...car, [event.target.name]: event.target.value});
    }

    return(

        <div>
            <button onClick={handleClickOpen}>New Car</button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>New Car</DialogTitle>
                <DialogContent>
                    <Stack spacing={2} mt={1}>
                        <input placeholder="Brand" name="brand"
                            value={car.brand} onChange={handleChange}/>
                            <br/>
                        <input placeholder="Model" name="model"
                            value={car.model} onChange={handleChange}/>
                            <br/>
                        <input placeholder="Color" name="color"
                            value={car.color} onChange={handleChange}/>
                            <br/>
                        <input placeholder="Year" name="year"
                            value={car.year} onChange={handleChange}/>
                            <br/>
                        <input placeholder="Price" name="price"
                            value={car.price} onChange={handleChange}/>
                            <br/>
                    </Stack>
                </DialogContent>
                <DialogActions>
                    <button onClick={handleClose}>Cancel</button>
                    <button>Save</button>        
                </DialogActions>
            </Dialog>
        </div>
    )

}

export default AddCar;