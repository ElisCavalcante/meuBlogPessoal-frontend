import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuEntrarComponent } from './menu-entrar.component';

describe('MenuEntrarComponent', () => {
  let component: MenuEntrarComponent;
  let fixture: ComponentFixture<MenuEntrarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuEntrarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuEntrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
