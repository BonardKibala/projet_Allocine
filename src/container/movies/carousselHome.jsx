import  React  from  'react';
import  Carousel  from  'semantic-ui-carousel-react';
import FirstBlock from './firstBlock';
import FirstBlock1 from './firstBlock1';
import FirstBlock2 from './firstBlock2';
const CarousselHome = ()=>{
    let  elements  = [
		{
			render:()=>{
				return <FirstBlock/>
			}
		},
		{
			render:()=>{
				return <FirstBlock1/>
			}
	    },
        {
			render:()=>{
				return <FirstBlock2/>
			}
	    },
	]
	return (
		<div>
			<Carousel
				elements  =  {  elements  }
				duration  ={3000}
				animation  ='scale'
				showNextPrev  =  {false}
				showIndicators  ={false}
			/>
		</div>
	)
}
export default CarousselHome;