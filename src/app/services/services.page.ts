import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-services',
  templateUrl: './services.page.html',
  styleUrls: ['./services.page.scss'],
})
export class ServicesPage implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  private apiUrl = 'https://picsum.photos/v2/list';


  getPhotos(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

}
