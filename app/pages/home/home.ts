import {Page, Platform} from 'ionic-angular';
import {Http} from 'angular2/http';
import 'rxjs/add/operator/map';


@Page({
    templateUrl: 'build/pages/home/home.html'
})
export class HomePage {
    http;
    rooms;
    genderTab;
    constructor(http: Http, platform: Platform) {
        this.genderTab = 'a';
        this.http = http;
        var url = 'https://chaturbate.com/affiliates/api/onlinerooms/?format=json&wm=qBlp5';
        if (platform.url() === 'http://localhost:8100/'){
            url = 'http://localhost:8000/cbaff.json';
        }
        this.http.get(url).map(res => res.json()).subscribe(data => {
            this.rooms = data.slice(0, 90);
        });
    }
}
