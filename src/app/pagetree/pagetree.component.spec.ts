import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagetreeComponent } from './pagetree.component';

describe('PagetreeComponent', () => {
  let component: PagetreeComponent;
  let fixture: ComponentFixture<PagetreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagetreeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PagetreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
