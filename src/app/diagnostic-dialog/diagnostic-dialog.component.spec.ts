import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiagnosticDialogComponent } from './diagnostic-dialog.component';

describe('DiagnosticDialogComponent', () => {
  let component: DiagnosticDialogComponent;
  let fixture: ComponentFixture<DiagnosticDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiagnosticDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiagnosticDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
