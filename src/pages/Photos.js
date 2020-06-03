import React, { useContext } from "react";
import Image from '../components/Images'
import { getClass } from '../utils'
import { Context } from '../Context'


const Photos = () => {
  const { allPhotos } = useContext(Context);
  const images = allPhotos.map((image, index) => {
   return (<Image key={image.id} img={image} className={getClass(index)} />)
  })
  


  return <main className="photos"> {images}</main>;

}
export default Photos;