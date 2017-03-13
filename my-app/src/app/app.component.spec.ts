import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { Customer } from './customer';

describe('AppComponent', () => {
    beforeEach(async(() => {
    TestBed.configureTestingModule({
        imports: [
            FormsModule
        ],
        declarations: [
        AppComponent
        ],
    }).compileComponents();
}));

  it('should create the app', async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it('should have a newCustomer customer', async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app.newCustomer instanceof Customer).toBeTruthy();
  }));

  it('should display "Customers" in h1 tag', async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Customers');
  }));
});
