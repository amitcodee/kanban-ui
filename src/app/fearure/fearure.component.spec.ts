import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FearureComponent } from './fearure.component';

describe('FearureComponent', () => {
  let component: FearureComponent;
  let fixture: ComponentFixture<FearureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FearureComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FearureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
