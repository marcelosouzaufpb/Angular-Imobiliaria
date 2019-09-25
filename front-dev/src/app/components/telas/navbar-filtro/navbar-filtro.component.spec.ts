import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarFiltroComponent } from './navbar-filtro.component';

describe('NavbarFiltroComponent', () => {
  let component: NavbarFiltroComponent;
  let fixture: ComponentFixture<NavbarFiltroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbarFiltroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarFiltroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
