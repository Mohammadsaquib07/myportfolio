import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  socialLinks = [
    { icon: 'bi bi-geo-alt-fill', text: 'Solapur, India', link: null },
    { icon: 'bi-envelope-fill', text: 'saquib@gmail.com', link: 'mailto:saquib@gmail.com' },
    { icon: 'bi-telephone-fill', text: '+918080727590', link: 'tel:+918080727590' },
    { icon: 'bi-linkedin', text: 'LinkedIn', link: 'https://www.linkedin.com/in/mohammad-saquib-kudle-191351227' },
    { icon: 'bi-github', text: 'GitHub', link: 'https://github.com/Mohammadsaquib07' }
  ];
}
