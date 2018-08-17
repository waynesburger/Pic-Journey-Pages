import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation'
import { TakePhoto } from '../cameraPage/cameraPage';

declare var google: any;

@Component({
    selector: 'page-view-images',
    templateUrl: 'viewImagePage.html'
})
export class ImagesPage {
    goToCamera = TakePhoto;
    
    ViewMode: any;
    @ViewChild('mapRef') mapContainer: ElementRef;
    map: any;
    userLoc: any;

    constructor(public navCtrl: NavController, public geoloc: Geolocation, public plat: Platform){
        this.ViewMode = 'mapMode';

        this.initialMapSetup();
    }

    initialMapSetup(){
        this.plat.ready().then(()=>{

            console.log("create map options");
            let mapOptions = {
                center: undefined, //new google.maps.LatLng(0, 0),
                zoom: undefined,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            }

            this.geoloc.getCurrentPosition({timeout: 10000, enableHighAccuracy: true}).then((position)=>{
                console.log("congrats, you've been found bitch");
                mapOptions.center = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
                mapOptions.zoom = 10;
    
                console.log("assign map to the map HTML element");
                this.map = new google.maps.Map(this.mapContainer.nativeElement, mapOptions);
            }).catch((error)=>{
                console.log('problem getting users location, sorry', error);
                alert('code' + error.code + '\nmessage:' + error.message + '\nproblem getting youre location, sorry');
    
                mapOptions.center = new google.maps.LatLng(0,0);
                mapOptions.zoom = 4;
    
                console.log("assign map to the map HTML element");
                this.map = new google.maps.Map(this.mapContainer.nativeElement, mapOptions)
            });

        });
    }

    /*mapSetup(){
        
        console.log("create map options");
        let mapOptions = {
            center: undefined, //new google.maps.LatLng(0, 0),
            zoom: undefined,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        }
      
        this.geoloc.getCurrentPosition({timeout: 10000, enableHighAccuracy: true}).then((position)=>{
            console.log("congrats, you've been found bitch");

            mapOptions.center = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
            mapOptions.zoom = 10;

            console.log("assign map to the map HTML element");
            this.map = new google.maps.Map(this.mapContainer.nativeElement, mapOptions);
        }).catch((error)=>{
            console.log('problem getting users location, sorry', error);

            alert('code' + error.code + '\nmessage:' + error.message + '\nproblem getting youre location, sorry');

            mapOptions.center = new google.maps.LatLng(0,0);
            mapOptions.zoom = 4;

            console.log("assign map to the map HTML element");
            this.map = new google.maps.Map(this.mapContainer.nativeElement, mapOptions)
        });
        
        
    }*/

    changeMode(mode: string){
        if(mode === 'mapMode' && this.ViewMode !== 'mapMode'){
            this.ViewMode = 'mapMode';
            this.initialMapSetup();
        }else if(mode === 'albumMode' && this.ViewMode !== 'albumMode'){
            this.ViewMode = 'albumMode';
        }else{
            console.log("do nothing");
        }
    }
}