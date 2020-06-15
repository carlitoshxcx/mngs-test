import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbbreviationComponent } from './abbreviation.component';

describe('AbbreviationComponent', () => {
  let component: AbbreviationComponent;
  let fixture: ComponentFixture<AbbreviationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbbreviationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbbreviationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
