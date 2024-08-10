import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoBackgroundComponent } from './video-background.component';

describe('VideoBackgroundComponent', () => {
  let component: VideoBackgroundComponent;
  let fixture: ComponentFixture<VideoBackgroundComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VideoBackgroundComponent]
    });
    fixture = TestBed.createComponent(VideoBackgroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
