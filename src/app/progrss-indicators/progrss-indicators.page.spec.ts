import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProgrssIndicatorsPage } from './progrss-indicators.page';

describe('ProgrssIndicatorsPage', () => {
  let component: ProgrssIndicatorsPage;
  let fixture: ComponentFixture<ProgrssIndicatorsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgrssIndicatorsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
