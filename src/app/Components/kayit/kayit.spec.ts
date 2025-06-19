import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Kayit } from './kayit';

describe('Kayit', () => {
  let component: Kayit;
  let fixture: ComponentFixture<Kayit>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Kayit]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Kayit);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
