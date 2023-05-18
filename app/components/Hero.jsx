import Image from 'next/image';
import Vector1 from '../../public/Vector.svg'
import Vector2 from '../../public/Group 559.svg'
import Pict from '../../public/image 91.png'

export default function Hero(){
    return (
        <section className="hero">
          <div className='vector1'>
            <Image src={Vector1} alt='Vector1' className='vector1__img'/>
          </div>
          <div className="container">
            <h2 className='typing'>welcome to the future</h2>
            <h1>Tomorrow’s digest</h1>
            <p>Step into the future of news! Our website is a hub for trailblazers, innovators, and forward-thinkers who crave information that's fresh, dynamic, and thought-provoking. With exclusive stories, groundbreaking perspectives, and a sleek interface that matches our visionary approach, we deliver the most exciting and impactful news on the planet. Join us and experience the future of journalism today!</p>
          </div>
          <div className='picture'>
            <Image src={Pict} alt='picture' className='picture__img' />
          </div>
          <div className='vector2'>
            <Image src={Vector2} alt='Vector2' className='vector2__img'/>
          </div>
        </section>
    )
}