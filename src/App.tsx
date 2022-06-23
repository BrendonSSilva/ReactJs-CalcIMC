import s from './App.module.css'
import { useState } from 'react'
import { levels, calculate, Level } from './helpers/imc'
import { GridItem } from './components/GridItem'
import leftImg from './assets/leftarrow.png'
const App = () => {

  const [height, setHeight] = useState<number>(0)
  const [weight, setWeight] = useState<number>(0)
  const [show, setShow] = useState<Level | null>(null)

  const calc = () => {
    if (height && weight) {
      setShow(calculate(height, weight))
    } else {
      alert("Preencha todos os campos")
    }
  }

  const backBtn = ()=>{
    setHeight(0)
    setWeight(0)
    setShow(null)
  }

  return (
    <div className={s.main}>

      <div className={s.container}>
        <div className={s.leftSide}>
          <h1>Calcule o seu IMC</h1>
          <p>O IMC é reconhecido como padrão internacional para avaliar o grau de sobrepeso e obesidade. É calculado dividindo o peso (em kg) pela altura ao quadrado (em metros).</p>
          <div className={s.inputs}>
            <input type='number' placeholder="Digite sua altura"
              value={height > 0 ? height : ''} onChange={e => setHeight(parseFloat(e.target.value))} />
            <input type='number' placeholder="Digite seu peso"
              value={weight > 0 ? weight : ''} onChange={e => setWeight(parseFloat(e.target.value))} />
            <button className={s.btnCalc} onClick={calc}>Calcular</button>
          </div>
        </div>
        <div className={s.rightSide}>
          {!show &&
            <div className={s.grid}>
              {levels.map((item, key) => (
                <GridItem key={key} item={item} />
              ))}
            </div>
          }
          {show &&
            <div className={s.rightResult}>
              <div className={s.back} onClick={backBtn}>
                <img src={leftImg} width={25} />
              </div>
              <GridItem item={show} />
            </div>
          }
        </div>
      </div>
      <div className={s.cr}>
      <p>Projeto de estudo<br/> Por: <a href='https://github.com/BrendonSSilva' target='_blank'>Brendon S. da Silva</a></p>
      </div>
      
    </div>
  )
}

export default App