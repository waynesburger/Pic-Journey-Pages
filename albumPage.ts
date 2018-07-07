import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TakePhoto } from '../cameraPage/cameraPage';
import { MapPage } from '../mapPage/mapPage';
import firebase from 'firebase';

@Component({
    selector: 'page-album',
    templateUrl: 'albumPage.html'
})

export class AlbumPage{
    goToCamera = TakePhoto;
    goToMap = MapPage;

    constructor(public navCtrl: NavController){

    }
    
}