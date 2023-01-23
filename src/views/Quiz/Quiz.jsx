import './Quiz.css'
import React, { useState, useEffect } from 'react'
import { getQuestions } from '../../services/QuizService'
import FilterButtons from '../../components/FilterButtons/FilterButtons'
import QuizQuestion from '../../components/QuizQuestion/QuizQuestion'

const Quiz = () => {   
    const [question, setQuestion] = useState({})
    const [loading, setLoading] = useState('false')
    const [seeSolution, setSeeSolution] = useState(false)
    const [category, setCategory] = useState('')
    const [allCategories, setAllCategories] = useState()
    const [previousQuestion, setPreviousQuestion] = useState()

    useEffect(() => {
        getQuestions()
            .then(questions => {
                setLoading(false)
                const randomQuestion = questions[Math.floor(Math.random() * (questions.length - 0) + 0)]
                setQuestion({...randomQuestion})

                const categories = []
                questions.forEach(question => {
                    if (!categories.includes(question.category)) {
                        categories.push(question.category)
                    }
                })

                setAllCategories(categories)
            })
            .catch(error => console.error(error))
        setCategory('All')
    }, [])

    const nextQuestion = () => {
        setPreviousQuestion(question)

        getQuestions()
            .then(questions => {
                if (category === 'All') {
                    const randomQuestion = questions[Math.floor(Math.random() * (questions.length - 0) + 0)]
                    setSeeSolution(false)
                    
                    if (seeSolution) {
                        setTimeout(() => {
                            setQuestion({...randomQuestion})
                        }, 140);
                    } else {
                        setQuestion({...randomQuestion})
                    } 

                } else {
                    const filteredQuestions = [...questions].filter(question => question.category === category)
                    const randomQuestion = filteredQuestions[Math.floor(Math.random() * (filteredQuestions.length - 0) + 0)]
                    setSeeSolution(false)
                    
                    if (seeSolution) {
                        setTimeout(() => {
                            setQuestion({...randomQuestion})
                        }, 140);
                    } else {
                        setQuestion({...randomQuestion})
                    } 
                }
            })
    }

    const toggleSolution = () => {
        setSeeSolution(seeSolution === false ? true : false)

    }

    const filterQuestions = (selectedCategory) => {
            setCategory(selectedCategory)
    }

    return (

        <>
        <h1 className="intro">Quizplomatic</h1>
        <div className="Quiz">
            {loading ? <p>Loading...</p> :  
            <>
            <div className="FilterButtons-quiz">
                <FilterButtons filterQuestions={filterQuestions} category={category} allCategories={allCategories} />
            </div>

            {/* <QuizQuestion previousQuestion={previousQuestion} seeSolutionÇ={seeSolution} question={question}/> */}

                <div>
                    <div  className="question-card">
                    {/* {previousQuestion &&
                        
                            <div key={Math.random()} className={`question-card-inner previous-question`}>
                                <div className="question-card-front">
                                    <h3 className="question-title-quiz">{previousQuestion.title}</h3>
                                </div>

                                <div className="question-card-back">
                                    <h3 className="question-title-quiz">{previousQuestion.solution}</h3>
                                </div>
                            </div>
                    } */}

                        <div className={`question-card-inner new-question ${seeSolution ? "flip" : ""}`}>
                            <div className="question-card-front">
                                <h3 className="question-title-quiz">{question.title}</h3>
                            </div>

                            <div className="question-card-back">
                                <h3 className="question-title-quiz">{question.solution}</h3>
                            </div>
                        </div>
                    </div>
                <p className="category">Category: {question.category}</p>
                <div className="your-answer">
                    <label htmlFor="answer">Your answer:</label>
                    <input type="text" className="answer-input" name="answer" id="" />
                </div>
                </div>
                

            

            <div className="buttons">
                <button className='solution-button' onClick={toggleSolution}>See {!seeSolution ? 'solution' : 'question'}</button>
                <button className='solution-button' onClick={nextQuestion}>Next question</button>
            </div>

            </>
            }
        </div>
        </>
    )
}

export default Quiz