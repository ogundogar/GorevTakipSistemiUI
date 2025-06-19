import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GorevGuncelle } from './gorev-guncelle';

describe('GorevGuncelle', () => {
  let component: GorevGuncelle;
  let fixture: ComponentFixture<GorevGuncelle>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GorevGuncelle]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GorevGuncelle);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
