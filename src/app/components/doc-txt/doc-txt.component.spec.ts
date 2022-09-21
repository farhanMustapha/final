import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocTxtComponent } from './doc-txt.component';

describe('DocTxtComponent', () => {
  let component: DocTxtComponent;
  let fixture: ComponentFixture<DocTxtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocTxtComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocTxtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
