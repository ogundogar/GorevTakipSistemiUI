import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Giris } from './giris';

describe('Giris', () => {
  let component: Giris;
  let fixture: ComponentFixture<Giris>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Giris]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Giris);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
