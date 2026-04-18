import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-leinster-counties',
  templateUrl: './leinster-counties.page.html',
  styleUrls: ['./leinster-counties.page.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule]
})
export class LeinsterCountiesPage {
  counties: string[] = [
    "Carlow", "Dublin", "Kildare", "Kilkenny",
    "Laois", "Longford", "Louth", "Meath",
    "Offaly", "Westmeath", "Wexford", "Wicklow"
  ];
}