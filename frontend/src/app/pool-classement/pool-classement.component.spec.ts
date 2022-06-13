import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoolClassementComponent } from './pool-classement.component';

describe('PoolClassementComponent', () => {
  let component: PoolClassementComponent;
  let fixture: ComponentFixture<PoolClassementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PoolClassementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PoolClassementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
