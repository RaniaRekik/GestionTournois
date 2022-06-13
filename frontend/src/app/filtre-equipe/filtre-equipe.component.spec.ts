import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltreEquipeComponent } from './filtre-equipe.component';

describe('FiltreEquipeComponent', () => {
  let component: FiltreEquipeComponent;
  let fixture: ComponentFixture<FiltreEquipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FiltreEquipeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FiltreEquipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
