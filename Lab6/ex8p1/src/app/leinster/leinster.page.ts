import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-leinster',
  templateUrl: './leinster.page.html',
  styleUrls: ['./leinster.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule]   // 👈 THIS LINE FIXES IT
})
export class LeinsterPage {

  constructor(private router: Router) {}

  onClick() {
    this.router.navigate(['/leinster-counties']);
  }
}