import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarTitleTypeTitleComponent } from './sidebar-title-type-title.component';

describe('SidebarTitleTypeTitleComponent', () => {
  let component: SidebarTitleTypeTitleComponent;
  let fixture: ComponentFixture<SidebarTitleTypeTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidebarTitleTypeTitleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidebarTitleTypeTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
