import React from 'react';
import {useContext} from 'react';
import {RoomContext} from '../context';
import Title from '../components/Title';
import 'bootstrap/dist/css/agency.min.css';


const getUnique=(items,value)=>{
    return [...new Set(items.map(item=>item[value]))]
}
export default function RoomFilter({rooms}) {

    const context= useContext(RoomContext);
    const {
        handleChange,
        categorie,
        capacity,
        price,
        minPrice,
        maxPrice,
        minSize,
        maxSize,
        parking,
        hotesses}=context;

        //get unique categorie
let categories=getUnique(rooms,'categorie');

// add all
categories=['all',...categories];
//map to jsx
categories=categories.map((item,index)=>{
    return  <option value={item} key={index}>{item}</option>
});

let people=getUnique(rooms,'capacity');
people=people.map((item,index)=>{
    return <option  key={index} value={item}>{item}</option>

})

  return <section className="filter-container">
      <Title title="search Packages"/>
      <form className="filter-form">
          {/*select categorie */}
          <div className="form-group">
              <label htmlFor="categorie">
                  Categories
              </label>
              <select name="categorie" id="categorie" value={categorie} className="form-control" onChange={handleChange}>
                 {categories}
              </select>
              
          </div>

          {/* end select categorie */}
           {/*guests */}
           <div className="form-group">
              <label htmlFor="capacity">
                  Places
              </label>
              <select name="capacity" id="capacity" value={capacity} className="form-control" onChange={handleChange}>
                 {people}
              </select>
              
          </div>

          {/* end guests */}

          {/* room price */}

            <div className="form-group">
                <label htmlFor="price">
                    Prix CFA {price}
                </label>
                <input type="range" name="price" min={minPrice} max={maxPrice} id="price" 
                value={price} onChange={handleChange} className="form-control" />
            </div>

          {/* end room price */}

          {/*room size */}
          <div className="form-group">
                <label htmlFor="size">
                    Room size 
                </label>
                <div  className="size-inputs" >
                     <input type="number" name="minSize"  id="size" 
                         value={minSize} onChange={handleChange} className="size-input" />

                     <input type="number" name="maxSize"  id="size" 
                         value={maxSize} onChange={handleChange} className="size-input" />
                </div>
            </div>

          {/*end room size */}

          {/* extras */}

            <div className="form-group">
                <div className="single-extra">
                    <input type="checkbox"
                    name="parking" 
                    id="parking" 
                    checked={parking}
                    onChange={handleChange} />
                    <label htmlFor="parking">Parking</label>
                </div>

                <div className="single-extra">
                    <input type="checkbox"
                    name="hotesses" 
                    id="hotesses" 
                    checked={hotesses}
                    onChange={handleChange} />
                    <label htmlFor="hotesses">Hotesses</label>
                </div>


            </div>
          {/* end extras */}
      </form>
  </section>
}
