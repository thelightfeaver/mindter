import Questions from "../../components/questions"
import './style.css'
export default function Main() {

    const handleClick=(data)=>{
        alert(data)
    }
    
    return <div className="container">
        <Questions handleClick={handleClick} question="que hora es?" answers={['los ', 'jjij', 'jjjnjj', 'jkhjh']}/>
        </div>
}