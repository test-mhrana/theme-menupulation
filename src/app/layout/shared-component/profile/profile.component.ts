import {Component, OnInit} from '@angular/core';
import {ButtonModule} from 'primeng/button';
import {OverlayPanelModule} from 'primeng/overlaypanel';
import {ListboxModule} from "primeng/listbox";
import {PaginatorModule} from "primeng/paginator";

@Component({
    selector: 'app-profile',
    standalone: true,
    imports: [
        OverlayPanelModule,
        ListboxModule,
        ButtonModule,
        PaginatorModule
    ],
    templateUrl: './profile.component.html',
    styleUrl: './profile.component.scss'
})
export class ProfileComponent implements OnInit {
    countries!: any[];
    selectedCountry!: any;

    ngOnInit() {
        this.countries = [
            {name: 'Australia', code: 'AU'},
            {name: 'Brazil', code: 'BR'},
            {name: 'China', code: 'CN'},
            {name: 'Egypt', code: 'EG'},
            {name: 'France', code: 'FR'},
            {name: 'Germany', code: 'DE'},
            {name: 'India', code: 'IN'},
            {name: 'Japan', code: 'JP'},
            {name: 'Spain', code: 'ES'},
            {name: 'United States', code: 'US'}
        ];
    }

    clickOption(event) {
        console.warn(event.option.code);
        this.selectedCountry = null;
    }
}
