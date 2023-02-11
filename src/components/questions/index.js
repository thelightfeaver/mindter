import './style.css'

export default function Questions({ question = "", answers = [] , handleClick = () => {}}) {
    return <div className='box'>
        <section className='question'>
            <h1>{question}</h1>
        </section>
        <section className='answers'>
            {
                answers.map(x=> <button onClick={(x)=>handleClick(x.target.value)}>{x}</button>)
            }
        </section>
    </div>
}
