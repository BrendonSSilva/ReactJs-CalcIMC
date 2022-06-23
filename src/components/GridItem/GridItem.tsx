import { Level } from "../../helpers/imc";
import s from './GridItem.module.css';
import upImage from '../../assets/up.png'
import downImage from '../../assets/down.png'

type Props = {
    item: Level,

}

export const GridItem = ({ item }: Props) => {
    return (
        <div className={s.main} style={{ backgroundColor: item.color }}>
            <div className={s.gridIcon}>
                <img src={item.icon === 'up' ? upImage : downImage} width='40' />
            </div>
            <div className={s.gridTitle}>{item.title}</div>
            {item.yourImc && 
            <div className={s.yourImc}>
                Seu IMC é de {item.yourImc}
            </div>
            }
            <div className={s.gridInfo}>
                <>
                IMC está entre <strong>{item.imc[0]}</strong> e <strong>{item.imc[1]}</strong>
                </>
            </div>
        </div>
    )
}