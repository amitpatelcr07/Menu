import './DisplayMenu.css'
function DisplayMenu({category,desc,id,img,price,title}){
       console.log(category);
    return <>
      <div key={id}>
        <img src={img} alt={title} className="photo" />
        <h4>{title}</h4>
        <p className='price'>$ {price}</p>
        <p>{desc}</p>
      </div>
    </>
}

export default DisplayMenu;