import { TestBed } from "@angular/core/testing";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { MainComponent } from "./main/main.component";
import { FooterComponent } from "./footer/footer.component";
import { MatCommonModule } from "@angular/material/core";
import { MatDividerModule } from "@angular/material/divider";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatProgressBarModule } from "@angular/material/progress-bar";
import { MatRippleModule } from "@angular/material/core";



describe(<string>"AppComponent", () => {
  beforeEach(() => TestBed.configureTestingModule({
    declarations: [
      AppComponent,
      HeaderComponent,
      MainComponent,
      FooterComponent
    ],
    imports: [
      MatCommonModule,
      MatDividerModule,
      MatGridListModule,
      MatProgressBarModule,
      MatRippleModule
    ]
  }));

  it(<string>"should create the app", () => {

    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;

    expect(app).toBeTruthy();
  });

  it(<string>"should have as title 'eventus-aleatorius'", () => {

    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;

    expect(app.title).toEqual(<string>"eventus-aleatorius");
  });

  it(<string>"should render title", () => {

    const fixture = TestBed.createComponent(AppComponent);

    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;

    expect(compiled.querySelector(<string>".content span")?.textContent)
      .toContain(<string>"eventus-aleatorius app is running!");
  });
});
