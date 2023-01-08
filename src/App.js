import React, {useState} from 'react'
import './index.css'
import Button from 'react-bootstrap/Button'

const App = () => {
  const [row, setRow] = useState(0);
  const [column, setColumn] = useState(0);
  const [chess, setChess] = useState([]);

  const black = {
    width:"100px",
    height:"100px",
    backgroundColor:'black'
  }
  const white = {
    width:"100px",
    height:"100px",
    backgroundColor:'white',
    boxShadow:`0px 10px 10px rgba(0,0,0,0.1)`
  }
  const chessBox = {
    width:100*8,
    display:'flex',
    flexWrap:'wrap',
    marginTop:"20px",
    boxShadow:`0px 10px 10px rgba(0,0,0,0.1)`
  }

  const makeChessBoard = ()=>{
    let arr = [];
    let position = [];
    console.log("row", parseInt(row)+1)
    console.log("column", parseInt(column)+1)
    if(parseInt(row) >= 0 && parseInt(row) < 8 && parseInt(column) >= 0 && parseInt(column) < 8){
      position.push([parseInt(row)+2, parseInt(column)+1,]);
      position.push([parseInt(row)+2, parseInt(column)-1]);
      position.push([parseInt(row)-2, parseInt(column)+1]);
      position.push([parseInt(row)-2, parseInt(column)-1]);
      position.push([parseInt(row)+1, parseInt(column)+2]);
      position.push([parseInt(row)-1, parseInt(column)+2]);
      position.push([parseInt(row)+1, parseInt(column)-2]);
      position.push([parseInt(row)-1, parseInt(column)-2]);
    }
    console.log(position)
    for (let i=0;i<8;i++){
      for (let j=0;j<8;j++){
        let temp = [];
        let pos = [i, j];
        const exist = position.find(element => {
            console.log(element)
            if(element[0] === pos[0] && element[1] === pos[1]){
                return true;
            }else{
                return false;
            }
            
        })
        if(exist){
          temp.push(<div style={black}></div>);
        }else{
          temp.push(<div style={white}></div>)
        }
      arr.push(temp);
    }
  }
    setChess(arr);
  }

  return (
    <div className='chess'>
      
      <div>
        <h2>
          <span>Knight Moves</span> 
        </h2>
        <input type="number" placeholder='Enter the Row' onChange={(e)=>setRow(parseInt(e.target.value))} />
        <input type="number" placeholder='Enter the Column' onChange={(e)=>setColumn(parseInt(e.target.value))} />
        <Button onClick = {makeChessBoard}variant="primary">Check</Button>
      </div>

      <section style={chessBox}>
        {chess}
      </section>

    </div>
  )
}

export default App