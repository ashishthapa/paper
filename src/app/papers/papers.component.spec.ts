import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PapersComponent } from './papers.component';

describe('PapersComponent', () => {
  let component: PapersComponent;
  let fixture: ComponentFixture<PapersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PapersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PapersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
  /**
   * test each of the action type from paperReducer..
   * */
  it("SHOUlD DISPLAY ALL THE ITEMS", ()=>{

  })
});