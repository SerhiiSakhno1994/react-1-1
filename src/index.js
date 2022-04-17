import ReactDom from 'react-dom';
import App from './App';





// const elem1 = <span>Привет</span>;
// const elem2 =<span>мир</span>;
  

// const jsxElem = (
//   <div>
//     {elem1}
//     {elem2}
//   </div>
// );

// console.log(jsxElem);

// const data = paintings[0];
// const data2 = paintings[1];






// const painting1 = (
//   <div>
//   <img src={data.url} alt={data.title} width="480" />
//   <h2>{data.title}</h2>
//   <p>Автор: <a href={data.author.url}></a>{data.author.tag}</p>
//   <p>Цена: {data.price} кредитов</p>
//   <p>Доступность: заканчивается или есть в наличии</p>
//   <button type="button">Добавить в корзину</button>
// </div>
// );
// const painting2 = (
//   <div>
//   <img src={data2.url} alt={data2.title} width="480" />
//   <h2>{data2.title}</h2>
//   <p>Автор: <a href={data2.author.url}></a>{data2.author.tag}</p>
//   <p>Цена: {data2.price} кредитов</p>
//   <p>Доступность: заканчивается или есть в наличии</p>
//   <button type="button">Добавить в корзину</button>
// </div>
// );




// const els = (
//   <div>
//     {painting1}
//     {painting2}
//   </div>
// );







ReactDom.render(<App />, document.querySelector('#root'));