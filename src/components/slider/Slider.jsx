import React from 'react'
import { nextSlide, prevSlide, dotSlide } from '../../feature/slices/sliderSlice'
import { useDispatch, useSelector } from 'react-redux'
import { sliderData } from '../../assets/data/dummyData'


const Slider = () => {

  const slideIndex = useSelector((state) => state.slider.value)
  console.log('slideIndex', slideIndex);
  const dispatch = useDispatch()

  return (
    <div className='relative pb-4'>
      <div className="">
        {sliderData.map((item, index) => {
          return (
            <div className={parseInt(item.id) === slideIndex ? 'opacity-100 duration-700 ease-in-out scale-100' : 'opacity-0 duration-700 ease-in-out scale-95'} key={item.id}>
              <div className="">
                {parseInt(item.id) === slideIndex && (
                  <img src={item.img} alt="shoes" className='h-[850px] w-full' />
                )}
              </div>
              <div className="">
                <p className='text-white text-4xl font-inter font-bold tracking-normal leading-none'>{parseInt(item.id) === slideIndex && item.text}</p>
              </div>
            </div>
          )
        })}
      </div>
      <div className="flex absolute bottom-10 left-[45%]">
        {sliderData.map((dot,index)=>{
          return(
            <div className="mr-4" key={index}>
              <div className={index === slideIndex ?'bg-green-300 rounded-full p-4 cursor-pointer' :'bg-white rounded-full p-4 cursor-pointer'}></div>
            </div>
          )
        })}
      </div>
      <button onClick={() => dispatch(nextSlide(slideIndex + 1))}>Next</button>
      <button onClick={() => dispatch(prevSlide(slideIndex - 1))}>Prev</button>
    </div>
  )
}

export default Slider