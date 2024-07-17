import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeAppsPageComponent } from './home-apps-page.component';

describe('HomeAppsPageComponent', () => {
  let component: HomeAppsPageComponent;
  let fixture: ComponentFixture<HomeAppsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeAppsPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeAppsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
