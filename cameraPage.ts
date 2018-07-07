import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MapPage } from '../mapPage/mapPage';
import { AlbumPage } from '../albumPage/albumPage';
import firebase from 'firebase';

@Component({
    selector: 'page-camera',
    templateUrl: 'cameraPage.html'
})

export class TakePhoto{
    goToMap = MapPage;
    goToAlbum = AlbumPage;

    constructor(public navCtrl: NavController){

    }

    writeToFire(){
        console.log("put write to file function here kinda");
    }
}