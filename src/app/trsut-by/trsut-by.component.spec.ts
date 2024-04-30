import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrsutByComponent } from './trsut-by.component';

describe('TrsutByComponent', () => {
  let component: TrsutByComponent;
  let fixture: ComponentFixture<TrsutByComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrsutByComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TrsutByComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
