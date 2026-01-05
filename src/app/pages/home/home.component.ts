import { Component } from "@angular/core";
import { CommonModule } from '@angular/common';
import { NgxParticlesModule } from "@tsparticles/angular";
import { Engine, ISourceOptions } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";
import { RouterModule } from "@angular/router";
import { NavbarComponent } from "../navbar/navbar.component";
@Component({
  selector: "app-home",
  standalone: true,
  imports: [NgxParticlesModule,CommonModule],
  templateUrl: "./home.component.html",
  styleUrl: "./home.component.css",
})
export class HomeComponent {
//   id = 'tsparticles-background';
//   async particlesInit(engine: Engine): Promise<void> {
//     await loadSlim(engine);
//   }
// particlesOptions: ISourceOptions = {
//   background: {
//     color: { value: "#07154dff" } 
//   },
//   fpsLimit: 120,
//   interactivity: {
//    events: {
//     onHover: {
//       enable: true,
//       mode: 'grab', 
//     },
//   },
//    modes: {
//     grab: {
//       distance: 140, 
//       links: {
//         opacity: 0.8,
//         color: '#ffffff',
//       },
//     },
//       repulse: {
//         distance: 120,
//         duration: 0.4
//       }
//     }
//   },

//   particles: {
//     number: {
//       value: 90,
//       density: { enable: true }
//     },
//     color: {
//       value: "#00eaff" 
//     },
//     opacity: {
//       value: 0.4,
//       animation: {
//         enable: true,
//         speed: 0.4,
//       }
//     },
//     size: {
//       value: { min: 1, max: 4 }
//     },
//     links: {
//       enable: true,
//       color: "#00eaff",
//       distance: 160,
//       opacity: 0.25,
//       width: 1
//     },
//     move: {
//       enable: true,
//       speed: 0.8,
//       direction: "none",
//       random: false,
//       straight: false,
//       outModes: { default: "bounce" }
//     },
//     shape: {
//       type: "circle"
//     }
//   },
//   detectRetina: true
// };
}