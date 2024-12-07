import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoActividadesComponent } from './listado-actividades.component';

describe('ListadoActividadesComponent', () => {
  let component: ListadoActividadesComponent;
  let fixture: ComponentFixture<ListadoActividadesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListadoActividadesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListadoActividadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
