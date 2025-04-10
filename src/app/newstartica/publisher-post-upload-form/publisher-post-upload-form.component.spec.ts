import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublisherPostUploadFormComponent } from './publisher-post-upload-form.component';

describe('PublisherPostUploadFormComponent', () => {
  let component: PublisherPostUploadFormComponent;
  let fixture: ComponentFixture<PublisherPostUploadFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublisherPostUploadFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PublisherPostUploadFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
