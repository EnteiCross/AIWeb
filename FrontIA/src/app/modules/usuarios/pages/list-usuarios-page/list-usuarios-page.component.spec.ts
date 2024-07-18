import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListUsuariosPageComponent } from './list-usuarios-page.component';

describe('ListUsuariosPageComponent', () => {
  let component: ListUsuariosPageComponent;
  let fixture: ComponentFixture<ListUsuariosPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListUsuariosPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListUsuariosPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
