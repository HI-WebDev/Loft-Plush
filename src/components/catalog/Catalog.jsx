// import Produ ctCard from '../../helpers/Product Card/ProductCard';
import { IoSearchSharp } from "react-icons/io5";
import Helmet from '../../helpers/Helmet/Helmet';
import { useEffect, useState } from "react";
import products from '../../assets/Data/productsData';
import ProductCard from '../../helpers/Product Card/ProductCard';

import './catalog.css';
import Banner from "../../helpers/Banner/Banner";
const Catalog = () => {

    //get the select value
    const [select, setSelect] = useState("")
    const handleSelect = (e) => {
        const selectValue = e.target.value;
        setSelect(selectValue)
    }

    //get the search input value
    const [search, setSearch] = useState("")
    const handleSearch = (e) => {
        const searchValue = e.target.value;
        setSearch(searchValue);
    }

    //update select products 
    const [data, setData] = useState(products)
    useEffect(() => {

        if (select) {
            const selectProducts = products.filter((product) => product.category === select)
            return setData(selectProducts)
        }
        if (search) {
            const searchProducts = products.filter((product) => product.category.toLowerCase() === search.toLowerCase())
            return setData(searchProducts)
        }
        else {
            return setData(products)
        }
    }, [select, search])

    return (
        <>
            <Banner title="Catalog" location="catalog" />
            <Helmet title="catalog">
                <div className='catalog mt-5 mb-5'>
                    <div className="container">
                        <div className="row mb-5 d-flex justify-content-between align-items-center">
                            <div className="col-12 col-lg-3 mb-4 mb-lg-0">
                                <select className='categories text-capitalize ps-3 p-2 w-100' name="" id=""
                                    onChange={handleSelect} value={select}>
                                    <option className='text-capitalize' value="1">filter by category</option>
                                    <option value="lighting">lighting</option>
                                    <option value="Armchair">Armchair</option>
                                    <option value="Table">Table</option>
                                    <option value="bed sleep">bed sleep</option>
                                </select>
                            </div>
                            <div className="col-12 col-lg-9 d-flex justify-content-between justify-content-lg-end align-items-center">
                                <div className="col-3 col-lg-2 me-lg-4">
                                    <select className="sort ps-1 ps-md-3 p-2 w-100" name="" id="">
                                        <option value="1">Sort By</option>
                                        <option value="1">armchair</option>
                                        <option value="1">sleep bed</option>
                                    </select>
                                </div>
                                <div className="col-8 col-lg-7">
                                    <div className='form d-flex align-items-center w-100 '>
                                        <input type="text" className="search w-100 p-2 ps-3" name="search" id="" placeholder="Search"
                                            onChange={handleSearch} value={search} />
                                        <IoSearchSharp className='me-2 fs-5' />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            {data.map((product, index) => {
                                return (
                                    <div className="col-3" key={index}>
                                        <ProductCard product={product} />
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </Helmet>
        </>
    )
}

export default Catalog
