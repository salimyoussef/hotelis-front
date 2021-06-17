import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-hotel-details',
  templateUrl: './hotel-details.component.html',
  styleUrls: ['./hotel-details.component.css']
})
export class HotelDetailsComponent implements OnInit {

  hotel: any;
  selectedSlide: number = 0;

  constructor(private http: HttpClient,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.http.get('http://localhost:3000/hotel/' + this.route.snapshot.paramMap.get('id')).subscribe((hotel) => {
      this.hotel = hotel;
    });
  }

}
