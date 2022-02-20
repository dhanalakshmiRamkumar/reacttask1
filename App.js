import Plans from './Plans'
import './App.css';

function App() {
  const plan =[
    {
      name: 'Free',
      price: 0,
      features: [
        {name: 'Single User',enabled: true},
        {name: '5GB Storage',enabled: true},
        {name: 'Unlimited Public Projects',enabled: true},
        {name: 'Community Access',enabled: true},
        {name: 'Unlimited Private Projects',enabled: false},
        {name: 'Dedicated Phone Support',enabled: false},
        {name: 'Free Subdomain',enabled: false},
        {name: 'Monthly Status Reports',enabled: false},
        
      ],
    },
    {
      name: 'Plus',
      price: 9,
      features: [
        {name: 'Single User',enabled: true},
        {name: '5GB Storage',enabled: true},
        {name: 'Unlimited Public Projects',enabled: true},
        {name: 'Community Access',enabled: true},
        {name: 'Unlimited Private Projects',enabled: true},
        {name: 'Dedicated Phone Support',enabled: true},
        {name: 'Free Subdomain',enabled: true},
        {name: 'Monthly Status Reports',enabled: false},
        
      ],
    },
    {
      name: 'PRO',
      price: 49,
      features: [
        {name: 'Single User',enabled: true},
        {name: '5GB Storage',enabled: true},
        {name: 'Unlimited Public Projects',enabled: true},
        {name: 'Community Access',enabled: true},
        {name: 'Unlimited Private Projects',enabled: true},
        {name: 'Dedicated Phone Support',enabled: true},
        {name: 'Free Subdomain',enabled: true},
        {name: 'Monthly Status Reports',enabled: true},
        
      ],
    },
  ];

  return (
    
//     <section class="pricing py-5">
//     {/* <div class="container"> */}
//     {/* {plan.map((data) => <Plans data={data} />)} */}
//       {/* <div class="row">
     
//       </d    <Plans />
// iv>
//     </div> */}
//   </section>
  <section class="pricing py-5">
    <div class="container">
      <div class="row">
        {
          plan.map((plans,index)=>{
            return     <Plans key={index} name={plans.name} price={plans.price} features={plans.features} />
          })
        }
   
      </div>
    </div>
  </section>
      );
}

export default App;
