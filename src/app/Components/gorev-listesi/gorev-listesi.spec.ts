import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GorevListesi } from './gorev-listesi';

describe('GorevListesi', () => {
  let component: GorevListesi;
  let fixture: ComponentFixture<GorevListesi>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GorevListesi]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GorevListesi);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
