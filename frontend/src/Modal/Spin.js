import * as React from 'react';
import Box from '@mui/material/Box';
//import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import "../App.css";
// import WheelComponent from 'react-wheel-of-prizes';
import { usePocketHook } from "../hook/pocketProvider";
import { BigFrame4Modal } from '../Containers/BigFrame';
// import {Wheel} from 'react-custom-roulette';



const style = {
  display:"flex",
  flexDirection: "column",
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: '#FFEDE9',
//   border: '2px solid #000',
  outline: 'none',
  boxShadow: 24,
  justifyContent: "center",
  alignItems: "center",
  p: 4,
  border: "1px solid #BA905F",
  boxSizing: "border-box",
  boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
  borderRadius: "49px",
};



export default function Spin({open, handleClose}) {
    
    const { pocket, saveRestaurant, deleteRestaurant } = usePocketHook();

    // useEffect(() => {
        
    // }, [])

    // const data = [
    //     { option: "0", style: { backgroundColor: "green", textColor: "white" } },
    //     { option: "1", style: { backgroundColor: "red", textColor: "white" } },
    //     { option: "3", style: { backgroundColor: "blue", textColor: "white" } },
    //     { option: "4", style: { backgroundColor: "pink", textColor: "white" } },
    //     { option: "5", style: { backgroundColor: "orrange", textColor: "white" } },
    //     { option: "6", style: { backgroundColor: "gray", textColor: "white" } },
    //     { option: "7", style: { backgroundColor: "black", textColor: "white" } },
    //     { option: "8", style: { backgroundColor: "red", textColor: "white" } }
    //   ];
    // const [x, sx] = React.useState(false);
    
    // function stopSpin(e) {
    //     console.log("stoppppppppp", e);
    //     sx(false);
    // }
    
    return (
        <div>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              {/* <Wheel
                prizeNumber={3}
                mustStartSpinning={x}
                data={data}
                backgroundColors={["#3e3e3e", "#df3428"]}
                textColors={["#ffffff"]}
                onStopSpinning={stopSpin}
                radiusLineWidth={2}
                outerBorderWidth={2}
              /> */}
              <Typography id="modal-modal-title" variant="h6" component="h2" color={"#BA905F"} style={{display: "flex", alignSelf:"start" }}>
                Let's choose this!
              </Typography>

              <BigFrame4Modal id={1}></BigFrame4Modal>

            </Box>
            
          </Modal>
        </div>
    );
}
