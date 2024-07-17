import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAppsPageComponent } from './list-apps-page.component';

describe('ListAppsPageComponent', () => {
  let component: ListAppsPageComponent;
  let fixture: ComponentFixture<ListAppsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListAppsPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListAppsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
