import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SottotestComponent } from './sottotest.component';

describe('SottotestComponent', () => {
  let component: SottotestComponent;
  let fixture: ComponentFixture<SottotestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SottotestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SottotestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
