import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialMediaBoxComponent } from './social-media-box.component';

describe('SocialMediaBoxComponent', () => {
  let component: SocialMediaBoxComponent;
  let fixture: ComponentFixture<SocialMediaBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SocialMediaBoxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SocialMediaBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
