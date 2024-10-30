import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicAccountListComponent } from './basic-account-list.component';

describe('BasicAccountsComponent', () => {
  let component: BasicAccountListComponent;
  let fixture: ComponentFixture<BasicAccountListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BasicAccountListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BasicAccountListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
