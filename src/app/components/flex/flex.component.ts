import {
  Component,
  OnInit,
  Input,
  ElementRef,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  Renderer2,
} from '@angular/core';

@Component({
  selector: 'gs-flex',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './flex.component.html',
  styleUrls: ['./flex.component.less'],
  host: {
    '[class.gs-flex]': `true`,
  },
})
export class FlexComponent implements OnInit {
  // 此处有两种用法(templateOulet/插槽)
  // @Input() leftOutlet: TemplateRef<void>;
  // @Input() rightOutlet: TemplateRef<void>;
  // @Input() contentOutlet: ViewContainerRef;
  @Input() direction: string = 'row';
  @Input() justify: string = 'space-between';
  @Input() align: string = 'center';
  @Input() left: boolean = false;
  @Input() right: boolean = false;
  constructor(public elementRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    this.setInitStyles();
  }

  ngAfterViewInit(): void {}

  setInitStyles() {
    Object.keys(this.styles).map((ele) => {
      this.renderer.setStyle(
        this.elementRef.nativeElement,
        ele,
        this.styles[ele]
      );
    });
  }

  get styles() {
    return {
      'flex-direction': this.direction,
      'justify-content': this.justify,
      'align-items': this.align,
    };
  }
}
