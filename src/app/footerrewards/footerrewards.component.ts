import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footerrewards',
  templateUrl: './footerrewards.component.html',
  styleUrls: ['./footerrewards.component.scss']
})
export class FooterrewardsComponent implements OnInit {
  servicePartner:number = 0;
  pincode:number = 0;
  vehiclesMobiles:number = 0;
  SubscribedCustomers:number = 0;

  // service partner
  servicePartnerstop: any = setInterval(()=>{
    this.servicePartner++;
    if(this.servicePartner == 5000)
    {
      clearInterval(this.servicePartnerstop);
    }
  }, 0.1)

  // Pin Code
  pincodeStop: any = setInterval(()=>{
    this.pincode++;
    if(this.pincode == 16650)
    {
      clearInterval(this.pincodeStop);
    }
  }, 0.1)

  // vehiclesMobiles
  vehiclesMobilesStop: any = setInterval(()=>{
    this.vehiclesMobiles++;
    if(this.vehiclesMobiles == 1000000)
    {
      clearInterval(this.vehiclesMobilesStop);
    }
  }, 0.1)

  // vehiclesMobiles
  SubscribedCustomersStop: any = setInterval(()=>{
    this.SubscribedCustomers++;
    if(this.vehiclesMobiles == 1000000)
    {
      clearInterval(this.SubscribedCustomersStop);
    }
  }, 0.1)

  constructor() { }

  ngOnInit(): void {
  }

}
