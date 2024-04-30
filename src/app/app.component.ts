import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { HeaderComponent } from "./header/header.component";
import { initFlowbite } from 'flowbite';
import { FooterComponent } from "./footer/footer.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, HomeComponent, HeaderComponent, FooterComponent]
})
export class AppComponent {
  title = 'kaban-ui';
  ngOnInit(): void {
    initFlowbite();
  }
}
