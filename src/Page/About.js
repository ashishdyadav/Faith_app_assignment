import React, { useEffect, useState } from 'react'
import "./About.css"

const About = () => {

  // const [data,setdata]=useState()
  const [data,setdata]=useState([])
  const [test,settest]=useState([])
  const [inst,setinst]=useState([])
  const [aboutinst,setaboutinst]=useState([])


  
  
  // console.log(data.title)
  // console.log(test.text)
  //  console.log(inst.name)
  //  console.log(aboutinst.html_content)



  // console.log(data.fee.amount)
  
  useEffect(()=>{
    fetch("http://localhost:3000/course").then((result)=>{
      result.json().then((res)=>{
        setdata(res)
        
    })
 })

},[])



useEffect(()=>{
  fetch("http://localhost:3000/testimonial").then((result)=>{
    result.json().then((res)=>{
    settest(res)
  
    })
 })

},[])


useEffect(()=>{
  fetch("http://localhost:3000/instructor").then((result)=>{
    result.json().then((res)=>{
    setinst(res)
    // console.log(data.fee)
  
    })
 })

},[])


useEffect(()=>{
  fetch("http://localhost:3000/about_instructor").then((result)=>{
    result.json().then((res)=>{
    setaboutinst(res)
    // console.log(data.fee)
  
    })
 })

},[])
  


  return (

    <div>
    {/* {
      data.map((val)=>{
        return(
          <div></div>
        )
      })
    } */}
      <div className='imgmain'>
        <div className='imgcontent'>
          <h3>{inst.name}</h3>
            <h1>{data.title}</h1>
        </div>
        <div className='register'>
            <h4>Course fees</h4>
            <h1><i class="fa-solid fa-indian-rupee-sign"></i>5000</h1>
            <h2>What's Includeed:</h2>
            <p><i class="fa-solid fa-tv"></i>  5 on-Demant Vedio</p>
            <p><i class="fa-solid fa-tv"></i>  Live sessions</p>
            <p><i class="fa-solid fa-message"></i>  Live Session With Nityanand Das</p>
            <p><i class="fa-solid fa-message"></i>  An Active Whatsapp community</p>
            <button>Register Today</button>

            {/* {data.fee.amount} */}
            {/* {data.inclusions.on_demand_videos} */}
          


        </div>
      </div>
      <div className='navbar'>
         {/* <ul>
            <li>ABOUT</li>
            <li>INSTRUCTION</li>
            <li>REVIEWS</li>
         </ul> */}

       <div>ABOUT</div>
       <div>INSTRUCTION</div>
       <div>REVIEWS</div>

      </div>
      <div className='Acp'>
        <h1>About the course</h1>
        <br/>
        <p>The International Society for Krishna Consciousness (ISKCON), otherwise known as the Hare Krishna movement, includes five hundred major centers, temples and rural communities, nearly one hundred affilated vegetarian restaurants, thousands of namahattas or local<br></br><br/> meeting groups, a wide variety of community projects, and millions of congregational members worldwide. Although less than fifty years on the global stage, ISKCON has expanded widely since its founding by His Divine Grace A. C. Bhaktivedanta Swami Prabhupāda in New York City in 1966.
           ISKCON belongs to the Gaudiya-Vaishnava sampradāya, a monotheistic tradition within the Vedic or Hindu culture. Philosophically it is based on the Sanskrit texts <br/><br/>Bhagavad-gītā and the Bhagavat Purana, or Srimad Bhagavatam. These are the historic texts of the devotional bhakti yoga tradition, which teaches that the ultimate goal for all living beings is to reawaken their love for God, or Lord Krishna, the “all-attractive one,,
        </p>
        <h1>What to except from the  course</h1>
        <p><i class="fa-solid fa-check"></i>Learn to mange your relationships</p>
        <p><i class="fa-solid fa-check"></i>Better communication</p>
        <p><i class="fa-solid fa-check"></i>Time Management</p>
        <p><i class="fa-solid fa-check"></i>Forgiveness</p>
        
        {/* data.what_to_expect.html_content */}


        <h1>Key topic covered</h1>
       <p><i class="fa-solid fa-check"></i>10 written and audio sessions guiding you in decoding the language of numbers so that you can easily receive their insights and messages.</p><br/>
       <p><i class="fa-solid fa-check"></i>Intuitive exercises and homework walk you through the energies and values of numbers and number sequences so you can become your own authority.</p><br/>
       <p><i class="fa-solid fa-check"></i>Handy reference to numerical meanings, so you can uncover your soul's gifts, challenges, lessons, and purpose – and receive spiritual guidance along your path.</p><br/>
       <p><i class="fa-solid fa-check"></i>Expert techniques for manifestation offer simple ways to use numbers to co-create with the universe.</p><br/>

        <p>The International Society for Krishna Consciousness (ISKCON), otherwise known as the Hare Krishna movement, includes five hundred major centers, temples and rural communities, nearly one hundred affilated vegetarian restaurants, thousands of namahattas or local<br></br><br/> meeting groups, a wide variety of community projects, and millions of congregational members worldwide. Although less than fifty years on the global stage, ISKCON has expanded widely since its founding by His Divine Grace A. C. Bhaktivedanta Swami Prabhupāda in New York City in 1966.
           ISKCON </p>
           <h1>About the instructor</h1>
      </div>
      <div className='abouttheinst'>
        <div className='img'>
        </div>
        <div className='img_cont'>
            <p>Many leading academics have highlighted ISKCON’s authenticity. Diana Eck, Professor of Comparative Religion and Indian Studies at Harvard University, describes the movement as “a tradition that commands a respected place in the religious life of humankind.” In the 1980s Dr. A. L. Basham, one of the world’s authorities on Indian history and culture, wrote of ISKCON that, “It arose out of next to nothing in less than twenty years and has become known all over the West. This, I feel, is a sign of the times and an important fact in the history of the Western world.”</p>
        </div>
        <div className='img_cont2'>
            <p>Members of ISKCON practice bhakti-yoga in their homes and also worship in temples. They also promote bhakti-yoga, or Krishna Consciousness, through festivals, the performing arts, yoga seminars, public chanting, and the distribution of the society’s literatures. ISKCON members have also opened hospitals, schools, colleges, eco-villages, free food distribution projects, and other institutions as a practical application of the path of devotional yoga.
            Members of ISKCON practice bhakti-yoga in their homes and also worship in temples. They also promote bhakti-yoga, or Krishna Consciousness, through festivals, the performing arts, yoga semi
            </p>
        </div>
      </div>
      <div className='Socialmedia'>
       <p id='face'><i class="fa-brands fa-facebook"></i>FACEBOOK</p>
       <p id='twit'><i class="fa-brands fa-twitter"></i>TWITTER</p>
       <p id='you'><i class="fa-brands fa-youtube"></i>YOUTUBE</p>
       <p id='insta'><i class="fa-brands fa-instagram"></i>INSTAGRAM</p>


      </div>
      <div className='slider'>
      <h1>{test.text}</h1>
         <div className='rev'>
          <div className='rev_img'></div>
          <div className='rev_cont'>
            <h3>{test.reviewer_name}</h3>
            <h3>{test.reviewer_designation}</h3>

          </div>
         </div>

      </div>
    </div>
  )
}

export default About
