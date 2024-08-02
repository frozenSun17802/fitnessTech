import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListChampionshipComponent } from './list-championship.component';

describe('ListChampionshipComponent', () => {
  let component: ListChampionshipComponent;
  let fixture: ComponentFixture<ListChampionshipComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListChampionshipComponent]
    });
    fixture = TestBed.createComponent(ListChampionshipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
