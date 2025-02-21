import '../assets/css/Header.css'
import { Box, Typography } from "@mui/material";

function Header() {
    return ( 
        <header className="header">
            <Box color='secondary'>
                <Typography variant="h1" color='secondary'>
                    Far Away
                </Typography>
            </Box>
        </header>
     );
}

export default Header;