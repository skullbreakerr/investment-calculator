import moneyBagImg from '../assets/investment-calculator-logo.png';
export default function Header(){
    return(
    <header id='header'>
        <img src={moneyBagImg} alt="Image with Money Bag!!"/>
        <h1>Investment Calculator</h1>
    </header>
    )
}