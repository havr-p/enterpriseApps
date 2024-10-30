import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicDetailComponent } from './basic-detail.component';

describe('BasicDetailComponent', () => {
  let component: BasicDetailComponent;
  let fixture: ComponentFixture<BasicDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BasicDetailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BasicDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
