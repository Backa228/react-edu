import './App.css'
import Product from './Product.jsx'
import Gallery from './Gallery.jsx'
import MailBox from './MailBox.jsx'
import Item from './Item.jsx'
import List from './List.jsx'
import Alert from './Alert.jsx'
import { BiAccessibility } from "react-icons/bi"
import Card from './Card.jsx'
// import CustomButton from './Button.jsx'
import Button from './Button.jsx'
import Fruits from './Fruits.jsx'
import { useState } from "react"
import ButtonEffect from './ButtonEffect.jsx'
import Timer from './Timer.jsx'
import LoginForm from './LoginForm.jsx'
import SearchBar from './SearchBar.jsx'
import LangSwitcher from './LangSwitcher.jsx'
import FeedbackForm from './FeedbackForm.jsx'

export default function App() {
    const [click, setClicks] = useState(0)
    const handleClick = () => {
      setClicks(click + 1)
    }
  const [showTimer, setShowTimer] = useState(true)

  // const handleLogin = (userData) => {
  //   console.log(userData)
  // }

  const [lang, setLang] = useState("ua")

  const [coffeeSize, setCoffeeSize] = useState("md");

  const handleSizeChange = (evt) => {
    setCoffeeSize(evt.target.value);
  };

  const [hasAccepted, setHasAccepted] = useState(false)

  const handleAcceptChange = (evt) => {
    setHasAccepted(evt.target.checked)
  }

  return (
    <>
      <FeedbackForm/>
      <div>
      <label>
          <input type="checkbox" name="terms" checked={hasAccepted} onChange={handleAcceptChange} /> 
				I accept terms and conditions
      </label>
      <button type="button" disabled={!hasAccepted}>Proceed</button>
    </div>
      <h1>Select coffee size</h1>
      <label>
        <input type="radio" name="coffeeSize" value="sm" checked={coffeeSize == "sm"} onChange={handleSizeChange} />
        Small
      </label>
      <label>
        <input type="radio" name="coffeeSize" value="md" checked={coffeeSize == "md"} onChange={handleSizeChange}/>
        Meduim
      </label>
      <label>
        <input type="radio" name="coffeeSize" value="lg" checked={coffeeSize == "lg"} onChange={handleSizeChange}/>
        Large
      </label>
      <LangSwitcher value={lang} onSelect={setLang} /> 
      <SearchBar />
      <div>
        <h1>Login to your account</h1>
        {/* <LoginForm onLogin={handleLogin}/> */}
        <LoginForm />
      </div>
      <Timer />
      <button onClick={() => setShowTimer((prev) => !prev)}>
        {showTimer ? "Приховати таймер" : "Показати таймер"}
      </button>
      {showTimer && <Timer />}
      <ButtonEffect/>
      <Fruits />
      <Button value={click} onUpdate={handleClick} />
      <Button value={click} onUpdate={handleClick} />
      {/* <CustomButton message="lalalalalallalalalala">Play music</CustomButton>
      <CustomButton message="Uploading your data...">Upload data</CustomButton> */}
      <h1>Products</h1>
      <Product
        name="Cookie"
        imgURL="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8_ilu8h3E7s0yQIVXKB_8XN-u1q8ZRvYWvg&s"
        price={50}
      />
      <Product
        name="Pizza"
        imgURL="https://www.allrecipes.com/thmb/aefJMDXKqs42oAP71dQuYf_-Qdc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/6776_Pizza-Dough_ddmfs_4x3_1724-fd91f26e0bd6400a9e89c6866336532b.jpg"
        price={100}
      />
      <Product
        name="Ice Cream"
        imgURL="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/recipe-image-legacy-id-560491_11-8342908.jpg?resize=768,574"
        price={75}
      />
      <Product
        name="Pasta"
        // imgURL="https://cdn.apartmenttherapy.info/image/upload/f_jpg,q_auto:eco,c_fill,g_auto,w_1500,ar_1:1/k%2FPhoto%2FRecipes%2F2023-01-Caramelized-Tomato-Paste-Pasta%2F06-CARAMELIZED-TOMATO-PASTE-PASTA-039"
        price={125}
      />
      <Product />
      <Gallery
        name="Марія Склодовська-Кюрі (Maria Skłodowska-Curie)"
        imgId="szV5sdG"
        profession="фізик та хімік"
        countAward={4}
        awards="(Нобелівська премія з фізики, Нобелівська премія з хімії, Медаль Дейві, Медаль Маттеуччі)"
        discover="полоній (хімічний елемент)"
      />
      <Gallery
        name="Кацуко Сарухаші (Katsuko Saruhashi)"
        imgId="YfeOqp2"
        profession="геохімік"
        countAward={2}
        awards="(Премія Міяке з геохімії, Премія Танака)"
        discover="метод вимірювання вмісту діоксиду карбону в морській воді"
      />
      <MailBox
        username="Andrii"
        messages={["Hello", "Bye", "How are you?"]}
      />
      <MailBox
        username="Andrii"
        messages={{}}
      />
          <section>
      <h1>Список речей для пакування Саллі Райд(Sally Ride)</h1>
      <ul>
        <Item 
          isPacked={true} 
          name="Космічний костюм" 
        />
        <Item 
          isPacked={true} 
          name="Шолом із золотим листям" 
        />
        <Item 
          isPacked={false} 
          name="Фото Тем О'Шонессі(Tam O'Shaughnessy)" 
        />
      </ul>
      </section>
      <List/>
      <Alert
        variant="warning"
        text="Please update your email!" />
      <Alert
        variant="error"
        text="There was an error during transaction!" />
      <Alert
        variant="success"
        text="Payment received, thank you for your purchase!"
        elevated/>
      <Alert
        variant="info"
        text="Payment received, thank you for your purchase!"
        outlined/>
      <Alert
        variant="info"
        text="Payment received, thank you for your purchase!"
        elevated
        outlined/>
      <BiAccessibility className='icon-car' size={64} />

      <Card>
        <h1>Title</h1>
        <ul>
          <li>First</li>
          <li>Second</li>
        </ul>
      </Card>
    </>
  )
}