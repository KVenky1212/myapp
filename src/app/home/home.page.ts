import { Component, OnInit } from '@angular/core';
import { ServicesPage } from '../services/services.page'
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  photos: any;
  filteredImages: any[] = [];
  images: any[] = [];

  constructor(private picsumService: ServicesPage, private navCtrl: NavController, private router: Router) {}

  ngOnInit() {
    this.loadPhotos();
  }

  loadPhotos() {
    this.picsumService.getPhotos().subscribe(
      (data) => {
        this.images = data;
        this.filteredImages = data;
        console.log(data, "photos")
      },
      (error) => {
        console.error('Error fetching photos', error);
      }
    );
  }

  searchImage(imageId: string) {
    console.log(imageId);
  
    if (!imageId) {
      // If the search box is empty, show all images
      this.filteredImages = this.images;
    } else {
      // Filter images based on the entered imageId
      this.filteredImages = this.images.filter((image) => image.id.includes(imageId));
    }
  }
  

  showImageInfo(imageId: string) {
    // Implement logic to show image information (popup or new page)
    // You can use Ionic modal or navigate to a new page
    console.log('Show information for image with ID:', imageId);
  }
  showDetails(details: any) {
    this.router.navigate(['/image-details'], {
      queryParams: { details: JSON.stringify(details) },
    });
  }
}
