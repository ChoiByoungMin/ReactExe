// import AppBar from '@mui/material/AppBar';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
import '../App.css';
import { AppBar, Toolbar, Typography } from '@mui/material';
import CarList from './components/CarList';

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
            <CarList/>
        </div>
    )
}

export default MainApp;
