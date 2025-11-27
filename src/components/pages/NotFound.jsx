import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export const NotFound = () => {
    const navigate = useNavigate()
    useEffect(() => {
        const timer = setTimeout(() => {
            navigate('/', {replace: true})
        }, 3000)
        return() => clearTimeout(timer)
    }, [navigate])
    
    return (
        <div>
            <h2>Сторінку не знайдено, повертаємося на головну...</h2>
        </div>
    )
}