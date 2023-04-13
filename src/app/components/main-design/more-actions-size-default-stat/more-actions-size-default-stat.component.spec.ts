import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoreActionsSizeDefaultStatComponent } from './more-actions-size-default-stat.component';

describe('MoreActionsSizeDefaultStatComponent', () => {
  let component: MoreActionsSizeDefaultStatComponent;
  let fixture: ComponentFixture<MoreActionsSizeDefaultStatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoreActionsSizeDefaultStatComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoreActionsSizeDefaultStatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
