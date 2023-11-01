import { ComponentFixture } from "@angular/core/testing";
import { TestBed } from "@angular/core/testing";
import { MainComponent } from "./main.component";
import { MatCommonModule } from "@angular/material/core";
import { MatDividerModule } from "@angular/material/divider";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatProgressBarModule } from "@angular/material/progress-bar";
import { MatRippleModule } from "@angular/material/core";



describe(<string>"MainComponent", () => {

  let component: MainComponent;
  let fixture: ComponentFixture<MainComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        MainComponent
      ],
      imports: [
        MatCommonModule,
        MatDividerModule,
        MatGridListModule,
        MatProgressBarModule,
        MatRippleModule
      ]
    });
    fixture = TestBed.createComponent(MainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it(<string>"should create", () => {
    expect(component).toBeTruthy();
  });
});
