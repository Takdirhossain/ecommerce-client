import "./product.css"
export default function Products({ row }) {
    return (
        <div>
            {
                row ? <>
                    <div className='productbycolumn'>
                        <div className="card card-compact w-96 bg-base-100 shadow-xl">
                            <figure><img className='w-2/4' src="https://static-01.daraz.com.bd/p/ad22cd991466c979d3fb737a888fa05b.jpg" alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">Shoes!</h2>
                                <p>If a dog chews shoes whose shoes does he choose?</p>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-primary">Buy Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
                    :
                    <>
                        <div className='columnwrapper'>
                            <div className="productcolumndetails">
                                <img className='columnimg' src="https://static-01.daraz.com.bd/p/ad22cd991466c979d3fb737a888fa05b.jpg" alt="" />
                                <div className="mr-20">
                                    <h2 className="text-2xl font-bold">This is product title </h2>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur sequi pariatur dolore aspernatur consequatur, eligendi ipsa, aut magni placeat modi reiciendis ullam. Ex velit adipisci aliquam! Voluptas natus nihil quisquam?</p>
                                </div>
                            </div>
                            <div className="mr-20">
                                <h2 className="text-2xl text-[#F85606]">450TK</h2>
                                <p><s>980</s> 50%</p>
                            </div>
                        </div>
                    </>
            }
        </div>
    )
}
