import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GorevEkle } from './gorev-ekle';

describe('GorevEkle', () => {
  let component: GorevEkle;
  let fixture: ComponentFixture<GorevEkle>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GorevEkle]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GorevEkle);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
