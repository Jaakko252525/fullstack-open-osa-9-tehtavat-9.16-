












// importing api services
import { createDiaries } from '../services/api'

// importing useState
import { useState } from 'react'
//importing components
import Alert from './Alert' 

const NewDiary = () => {

    // states for diary elements
    const [id, setId] = useState('59')
    const [date, setDate] = useState('')
    const [weather, setWeather] = useState('sunny')
    const [visibility, setVisibility] = useState('good')
    const [comment, setComment] = useState('hey')

    // error state
    const [error, setError] = useState('')

    // submit that makes POST
    const submit = async (event: React.FormEvent<HTMLFormElement>) => {
        //event.preventDefault()
        event.preventDefault()
        // making object
        const diaryObject = {
            id: parseInt(id),
            date: date,
            weather: weather,
            visibility: visibility,
            comment: comment
        }


        // if weather or visiblity not correct
        enum Weather {
            Sunny = 'sunny',
            Rainy = 'rainy',
            Cloudy = 'cloudy',
            Stormy = 'stormy',
            Windy = 'windy',
          }
          
        enum Visibility {
            Great = 'great',
            Good = 'good',
            Ok = 'ok',
            Poor = 'poor',
          }

        if (!(diaryObject.weather in Weather)) {
            // setError that renders Alert component
            setError('weather')
        }
        else if (!(diaryObject.visibility in Visibility)) {
            setError('visibility')
        }

        console.log('making POST req')
        // POST
        await createDiaries(diaryObject)

        console.log('POST req succesfull')
    }


    return (
        <div>
            <div>
                <Alert errorProp={error} />
            </div>
            <form onSubmit={submit} >
                Id: <input
                value={id}
                onChange={(event) => setId(event.target.value)} 
                />
                <br/>

                Date: <input
                type='date'
                value={date}
                onChange={(event) => setDate(event.target.value)} 
                />
                <br/>

                Weather: sunny<input
                id='1'
                type='radio'
                name='weather'
                value={weather}
                onChange={(event) => setWeather('sunny')} 
                />
                rainy<input
                id='2'
                type='radio'
                name='sunny'
                value={weather}
                onChange={(event) => setWeather('rainy')} 
                />
                Cloudy<input
                id='3'
                type='radio'
                name='cloudy'
                value={weather}
                onChange={(event) => setWeather('cloudy')} 
                />
                Stormy<input
                id='4'
                type='radio'
                name='Stormy'
                value={weather}
                onChange={(event) => setWeather('Stormy')} 
                />
                <br/>

                Visibility: <input
                value={visibility}
                onChange={(event) => setVisibility(event.target.value)} 
                />
                <br/>


                Comment: <input
                value={comment}
                onChange={(event) => setComment(event.target.value)} 
                />
                <button type='submit'>add</button>
            </form>
        </div>
    )
}



export default NewDiary





