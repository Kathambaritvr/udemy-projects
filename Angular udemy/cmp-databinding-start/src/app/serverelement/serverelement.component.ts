import { Component, OnInit, Input, ViewEncapsulation,
OnChanges, 
SimpleChanges, 
DoCheck,
 AfterContentInit, 
 AfterContentChecked, 
 AfterViewInit, 
 AfterViewChecked, 
 ViewChild, 
 ElementRef, 
 ContentChild} from '@angular/core';


@Component({
  selector: 'app-serverelement',
  templateUrl: './serverelement.component.html',
  styleUrls: ['./serverelement.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ServerelementComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked,AfterViewInit, AfterViewChecked{
@Input('srvElement') element: {type: string, name: string, content: string};
@Input() name: string;
@ViewChild ('heading') heading: ElementRef;
@ContentChild ('contentParagraph') paragraph: ElementRef;
  constructor() {
    console.log('constrcutor called');
   }

   ngOnChanges(changes: SimpleChanges) {
     console.log('ngOnChanges called');
     console.log(changes);
   }

  ngOnInit() {
    console.log('ngOnInit called');
    console.log('TextContent' + this.heading.nativeElement.textContent);
   console.log('TextContent of Paragraph' + this.paragraph.nativeElement.textContent);
}

  ngDoCheck() {
    console.log('ngOnDoCheck called');
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit called!');
    console.log('TextContent of Paragraph' + this.paragraph.nativeElement.textContent);
  }

  ngAfterContentChecked() {
    console.log('ngAfterContentChecked called!');
  }

  ngAfterViewInit() {
    console.log('ngViewContentInit called');
    console.log('TextContent' + this.heading.nativeElement.textContent);
  }

  ngAfterViewChecked() {
    console.log('ngViewContentChecked called');
  }
}


