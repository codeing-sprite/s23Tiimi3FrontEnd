export default function Product({item}) {

    return (
      <div className="product">
        <img src="../images/208645545_max.jpg" width={'197px'}></img>
        <h2>{item.name}</h2>
      </div>
    )
  }