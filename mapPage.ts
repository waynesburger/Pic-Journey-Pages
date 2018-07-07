import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
//import { Geolocation } from '@ionic-native/geolocation'
import { TakePhoto } from '../cameraPage/cameraPage';
import { AlbumPage } from '../albumPage/albumPage';

declare var google: any;

@Component({
    selector: 'page-map',
    templateUrl: 'mapPage.html'
})

export class MapPage{
    @ViewChild('mapRef') mapContainer: ElementRef;
    thisMap: any;
    goToCamera = TakePhoto;
    goToAlbum = AlbumPage;

    constructor(public navCtrl: NavController, public platform: Platform) { 
        platform.ready().then(()=>{ 
          this.mapSetup(); 
        });
    }

    mapSetup(){
        let mapOptions = {
          center: new google.maps.LatLng(0, 0),
          zoom: 10,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        }
    
        this.thisMap = new google.maps.Map(this.mapContainer.nativeElement, mapOptions)
    }

}