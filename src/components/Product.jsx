export default function Product({
  name = "Loading image",
  imgURL = "https://cdn.lifehacker.ru/wp-content/uploads/2011/11/15-tips-faster-windows-boot-0-e1322478432828.jpg",
  price = 999
}) {
  return (
    <div>
      <h2>{name}</h2>
      <img src={imgURL} width="150px" alt={name} />
      <p className="text">{price} Є</p>
    </div>
  )
}

function sum(a, b = 4) {
  console.log(a + b)
}
sum(2)
sum(2, 5)