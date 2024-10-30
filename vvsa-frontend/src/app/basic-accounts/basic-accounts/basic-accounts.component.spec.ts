import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicAccountsComponent } from './basic-accounts.component';

describe('BasicAccountsComponent', () => {
  let component: BasicAccountsComponent;
  let fixture: ComponentFixture<BasicAccountsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BasicAccountsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BasicAccountsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
