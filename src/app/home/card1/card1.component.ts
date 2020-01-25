import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-card1',
  templateUrl: './card1.component.html',
  styleUrls: ['./card1.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Card1Component implements OnInit {
  data =   {
    "income": [
      100,
      300,
      200,
      400,
      600,
      700,
      500
    ],
    "outcome": [
      50,
      100,
      100,
      300,
      100,
      200,
      300
    ],
    "profit": [
      50,
      200,
      400,
      200,
      500,
      500,
      200
    ]
  };

  constructor() { }

  ngOnInit() {
  }

}
