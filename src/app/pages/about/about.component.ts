import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  public isLoggedIn:boolean = true
 socialLinks = [
    { icon: 'bi-geo-alt-fill', text: 'Solapur, Inida', link: null },
    { icon: 'bi-envelope-fill', text: 'saquib@gmail.com', link: 'mailto:saquibkudle08@gmail.com' },
    { icon: 'bi-telephone-fill', text: '+918080727590', link: 'tel:+918080727590' },
    { icon: 'bi-linkedin', text: 'LinkedIn', link: 'www.linkedin.com/in/mohammad-saquib-kudle-191351227' },
    { icon: 'bi-github', text: 'GitHub', link: 'https://github.com/Mohammadsaquib07' },
  ];
}