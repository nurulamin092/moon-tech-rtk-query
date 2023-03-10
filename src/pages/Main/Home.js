import React, { useEffect ,useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../../components/ProductCard";
import { useGetProductsQuery } from "../../features/api/apiSlice";
import { toggle, toggleBrand } from "../../features/filter/filterSlice";

const Home = () => {
  // const [products, setProducts] = useState([]);
  const dispatch = useDispatch();
  const filter = useSelector((state)=>state.filter);
  
  // const {products,isLoading} = useSelector((state)=>state.products);

  const {brands,stock} = filter;


  // useEffect(() => {
  //   fetch("http://localhost:4000/products")
  //   .then((res)=>res.json())
  //   .then((data)=>setProducts(data.data))

  // }, []);

  const {data,isLoading,isSuccess,isError,error} = useGetProductsQuery();

  const products = data?.data;

  const activeClass = "text-white  bg-indigo-500 border-white";

  if (isLoading) {
    return <p>Loading... </p>
    
  }
  
  if (isError) {
    return <p>Something is wrong</p>
  }
  

  return (
    <div className='max-w-7xl gap-14 mx-auto my-10'>
      <div className='mb-10 flex justify-end gap-5'>
        <button
        onClick={()=>dispatch(toggle())}
          className={`border px-3 py-2 rounded-full font-semibold ${stock?activeClass:null} `}
        >
          In Stock
        </button>
        <button  onClick={()=> dispatch (toggleBrand("amd"))} className={`border px-3 py-2 rounded-full font-semibold ${brands.includes("amd")?activeClass:null}`}>
          AMD
        </button>
        <button onClick={()=> dispatch(toggleBrand("intel"))} className={`border px-3 py-2 rounded-full font-semibold ${brands.includes("intel")?activeClass:null}`}>
          Intel
        </button>
        <button onClick={()=>dispatch(toggleBrand("apple"))} className={`border px-3 py-2 rounded-full font-semibold ${brands.includes("apple")? activeClass:null}`}>
          Apple
        </button>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14'>
            {
              products.map(
                (product)=><ProductCard product={product}/>
              )
            }
      </div>
    </div>
  );
};

export default Home;