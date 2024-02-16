import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

export default function SimplePaper() {
    return (
        <Box>
            <Box
                sx={{
                    flexDirection: 'row',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
            >
                <Paper elevation={20} sx={{ m: 20, width: 350, height: 500, backgroundColor: '#efd4b4', position: 'relative' }}>
                    <Typography variant="h4" sx={{ mb: 2, position: 'absolute', top: '-10%', left: '50%', transform: 'translate(-50%, -50%)', fontWeight: 700, fontFamily: 'Monospace' }}>List 1</Typography>
                </Paper>

                <Paper elevation={20} sx={{ m: 20, width: 350, height: 500, backgroundColor: '#efd4b4', position: 'relative' }}>
                    <Typography variant="h4" sx={{ mb: 2, position: 'absolute', top: '-10%', left: '50%', transform: 'translate(-50%, -50%)', fontWeight: 700, fontFamily: 'Monospace' }}>List 2</Typography>
                </Paper>

                <Paper elevation={20} sx={{ m: 20, width: 350, height: 500, backgroundColor: '#efd4b4', position: 'relative' }}>
                    <Typography variant="h4" sx={{ mb: 2, position: 'absolute', top: '-10%', left: '50%', transform: 'translate(-50%, -50%)', fontWeight: 700, fontFamily: 'Monospace' }}>List 3</Typography>
                </Paper>
            </Box>
        </Box>
    );
}
