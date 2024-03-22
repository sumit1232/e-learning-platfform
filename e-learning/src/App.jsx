import Header from './Header'
import Offers from './Offers'
import Aboutus from './Aboutus'
import Course from './Course'
import CourseList from './CourseList'
import Contactus from './Contactus'
import QnA from './QandA'
import Integrate from './Integrate'
import PlanandPrice from './PlanandPrice'
import Goals from './Goals'
import Footer from './Footer'
import Feedback from './Feedback' 

import './App.css'
import feedBack from './Feedback'


function App() {
 

  return (
   <>
   <Header></Header>
   <Offers></Offers>
   <Course></Course>
   {/* <CourseList></CourseList> */}
<Goals></Goals>
   <PlanandPrice></PlanandPrice>
   {/* <Aboutus></Aboutus> */}
   {/* <Contactus></Contactus> */}
   {/* <QnA></QnA> */}
   <Feedback />
   {/* <Integrate></Integrate> */}
   <Footer></Footer>
  
   
   <h1>First</h1>
   <about />
   </>
  )
}

export default App
