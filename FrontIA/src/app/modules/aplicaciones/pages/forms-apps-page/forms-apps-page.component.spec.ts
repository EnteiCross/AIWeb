import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsAppsPageComponent } from './forms-apps-page.component';

describe('FormsAppsPageComponent', () => {
  let component: FormsAppsPageComponent;
  let fixture: ComponentFixture<FormsAppsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsAppsPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormsAppsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
