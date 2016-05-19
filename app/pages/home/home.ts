import {Page} from 'ionic-angular';
import {Http} from 'angular2/http';
import 'rxjs/add/operator/map';


@Page({
    templateUrl: 'build/pages/home/home.html'
})
export class HomePage {
    http;
    platform;
    rooms;
    genderTab;
    constructor(http: Http) {
        this.genderTab = 'a';
        this.http = http;
        this.http.get('http://localhost:8000/cbaff.json').map(res => res.json()).subscribe(data => {
            this.rooms = data.slice(0, 90);
        });
    }
}
