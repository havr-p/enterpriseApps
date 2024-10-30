import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicAccountsDetailComponent } from './basic-accounts-detail.component';

describe('BasicAccountsDetailComponent', () => {
  let component: BasicAccountsDetailComponent;
  let fixture: ComponentFixture<BasicAccountsDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BasicAccountsDetailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BasicAccountsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
