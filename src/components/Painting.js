import defaultImage from './default.jpg';



export default function Painting(props) { 
  const {imageUrl = defaultImage, title, author = 'no name', profileUrl,  price} = props
return <div>
  <img src={imageUrl} alt={title} width="480" />
  <h2>{title}</h2>
  <p>Автор: <a href={profileUrl}></a>{author}</p>
  <p>Цена: {price} кредитов</p>
  <p>Доступность: заканчивается или есть в наличии</p>
  <button type="button">Добавить в корзину</button>
</div>
};