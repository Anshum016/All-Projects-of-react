import { useEffect, useState } from "react"




export default function RandomColor() {
    const [typeOfColor, settypeOfColor] = useState('hex');
    const [Color, setColor] = useState('#000000')


    function randomColorUtility(length) {
        return Math.floor(Math.random() * length)
    }
    function handleCreateRandomHexColor() {
        const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
        let hexColor = "#";

        for (let i = 0; i < 6; i++) {
            hexColor += hex[randomColorUtility(hex.length)]
        }
        setColor(hexColor);
    }
    
    function handleCreateRandomrgbColor() {
        const r = randomColorUtility(256)
        const g = randomColorUtility(256)
        const b = randomColorUtility(256)

        setColor(`rgb(${r}, ${g}, ${b})`);
    }
    useEffect(()=>{
        if(typeOfColor=== 'rgb')handleCreateRandomrgbColor()
        else handleCreateRandomHexColor();
    },[typeOfColor]);
    return (
        <div style={{
            width: '100vw',
            height: '100vh',
            background: Color,

        }}>
            <button onClick={() => settypeOfColor('hex')}>Create HEX Color</button>
            <button onClick={() => settypeOfColor('rgb')}>Create RGB Color</button>
            <button onClick={typeOfColor === 'hex' ? handleCreateRandomHexColor : handleCreateRandomrgbColor}>Generate Random Color</button>
       
        </div>
    );

}