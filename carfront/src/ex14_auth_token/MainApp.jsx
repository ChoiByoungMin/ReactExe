// import AppBar from '@mui/material/AppBar';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
import '../App.css';
import { AppBar, Toolbar, Typography } from '@mui/material';
import CarList from './components/CarList';
import  Login  from './components/Login';

function MainApp() {
    return (
        <div className="App">
            <AppBar position="static">
                <Toolbar>
                    <Typography variant='h6'>
                        Carshop
                    </Typography>
                </Toolbar>
            </AppBar>
            <Login/>
            {/* <CarList/> */}
        </div>
    )
}

export default MainApp;
