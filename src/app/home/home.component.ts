import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { HeroComponent } from "../hero/hero.component";
import { TrsutByComponent } from "../trsut-by/trsut-by.component";
import { PriceComponent } from "../price/price.component";
import { TabComponent } from "../tab/tab.component";
import { FearureComponent } from "../fearure/fearure.component";
import { CustomerComponent } from "../customer/customer.component";
import { TeamComponent } from "../team/team.component";
import { FaqComponent } from "../faq/faq.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
    imports: [HeaderComponent, HeroComponent, TrsutByComponent, PriceComponent, TabComponent, FearureComponent, CustomerComponent, TeamComponent, FaqComponent]
})
export class HomeComponent {

}
