const SingleProduct = ({card, handleCart}) => {
  const {title, description,image, price} = card;
  return (
    <div>
      <div className=" bg-base-300  p-10 h-[500px] flex flex-col items-center gap-4">
        <figure><img className="w-36 text-center" src={image} alt="Shoes" /></figure>
        <div className="text-center space-y-3">
          <h2 className="line-clamp-1">{title}</h2>
          <p className="text-clip line-clamp-2">{description}</p>
          <div className="flex items-center justify-between">
            <p>{price}</p>
            <button onClick={()=>handleCart(card)} className="btn btn-primary">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;